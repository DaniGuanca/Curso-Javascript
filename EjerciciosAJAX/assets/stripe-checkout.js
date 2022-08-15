//Cuando de un modulo exporto como default, a la importacion le puedo poner el nombre que quiera, en mi caso STRIPE_KEYS
import STRIPE_KEYS from "./stripe-keys.js";

const $productos = document.getElementById("productos");
//ACORDARSE QUE LOS QUE NOS INTERESA DEL TEMPLATE SIEMPRE ES EL CONTENIDO (.content)
const $template = document.getElementById("producto-template").content;
const $fragment = document.createDocumentFragment();


/* Estos son los endpoints a los productos de stripe, pero si intentas acceder asi nomas te tira un 401
que es error de sin autorizacion. Para poder acceder se tiene que usar las llaves publicas y secretas
que te da stripe y mandarlas en la cabecera de la peticion con authorization

POST https://api.stripe.com/v1/products
GET https://api.stripe.com/v1/products/:id
POST https://api.stripe.com/v1/products/:id
GET https://api.stripe.com/v1/products
DELETE https://api.stripe.com/v1/products/:id 

PARA PRICE SON LOS MISMO ENDPOINTS PERO EN VEZ DE /PRODUCTS VA /PRICES

La secret key en la cabecera va asi: 
-H "Authorization:
 Bearer sk_test_51Hrpi6IcbCbT4ZlLjtpR2wkndURPHHivnOigEt2LG7f9FJXavWicwKgaih8fruTWPJ2vLUylTkCFFjbbBDcYC0vy005GMyz0yC"

*/

const fetchOptions = {
    headers: {
        Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
};

let prices, products;

//Formateo el precio poniendo un punto para los dos decimales del ultimo y el simbolo $
//Recibo un numero en string como el unit_amount_decimal, como es string puedo partirlo
//Entonces con slice parto, 0 es porque quiero ver del principio, y -2 es para sacar los ultimos dos caracteres
//Y el ultimo slice lo que hace es traer los ultimos dos valores, cuando pasas un solo argumento te trae la cantidad
//de valores que mandas como numero, en positivo los primeros y en negativo los ultimos
const moneyFormat = num => `$${num.slice(0,-2)}.${num.slice(-2)}`;



//Como hago fetch a prices y products serian dos fetch seguido pero eso no es una buena practica de programacion
//Lo que se hace es usar el Promise.all que recibe muchas peticiones de fetch y una vez que todas estan listas
//ya hago la programacion normal, permite agilizar las cosas y no rehacer codigo

//Dentro del Promise.all mando los dos fetch que necesito y sus opciones de cabecera
//y recibimos varias respuestas dependiendo de la cantidad de fetchs
Promise.all([
    fetch("https://api.stripe.com/v1/products",fetchOptions),
    fetch("https://api.stripe.com/v1/prices", fetchOptions)
])
//Agarro las respuestas y con map lo que hago es para cada respuesta del Promise.all hago un arreglo res
//que paso a json
//map sirve para aplicar una funcion a cada elemento de un array y devolver un array con los resultados
.then(responses => Promise.all(responses.map(res => res.json())))
.then(json => {
    //Guardo los datos de las respuestas en las variables (Las respuestas vienen en el orden que mande los fetchs)
    products = json[0].data;
    prices = json[1].data;

    //con .filter puedo filtrar, en este caso selecciono los casos en que el id de producto sea igual al campo
    //producto de price
    //entonces voy sacando producto con su precio y los trabajo invidualmente
    prices.forEach(element => {
        let productData = products.filter((product) => product.id === element.product);
        console.log(productData);

        //Stripe pide que se mande el id del precio asi que lo agrego
        $template.querySelector('.producto').setAttribute("data-price", element.id);
        $template.querySelector("img").src = productData[0].images[0];
        $template.querySelector("img").alt = productData[0].name;

        $template.querySelector("figcaption").innerHTML = 
        `${productData[0].name}
        <br>
        ${moneyFormat(element.unit_amount_decimal)} ${element.currency}
        `;

        let $clone = document.importNode($template,true);
        $fragment.appendChild($clone);
    });

    $productos.appendChild($fragment);
})
.catch(err => {
    console.log(err);
    let message = err.statusText || "Ocurrio un error al conectarse con la api de stripe";
    $productos.innerHTML= `<p>Error ${err.status}: ${message}</p>`;
});


document.addEventListener("click", e =>{
    //Con el asterisco al lado de la clase digo el objeto y cualquier cosa que tenga adentro
    if(e.target.matches(".producto *")){
        //Si le da al figcaption o imagen son hijos del Figure .producto
        //El data attribute lo tengo en ese padre asi que accedo a el
        let price = e.target.parentElement.getAttribute("data-price");
        
        //Para hacer el checkout llamo al objeto Stripe que pide como argumento mi llave publica
        //Y el metodo redirectToCheckout que es una promesa y los parametros que reciben los veo en la documentacion
        Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
            //LineItems es un arreglo de objeto de precios a pagar por el usuario, como pago de uno en uno entonces mando un solo objeto
            //y al objeto hay que pasarle el ID del price y un quantity
            lineItems: [{price: price, quantity: 1}],
            //En mode se elije el modo, en este ejemplo estamos haciendo pagos mensuales entonces va mode: subscritpion
            mode: "subscription",
            //Pagina en caso de exito y pagina en caso de error
            successUrl: "http://127.0.0.1:5500/assets/stripe-success.html",
            cancelUrl: "http://127.0.0.1:5500/assets/stripe-cancel.html",
        })
        .then(res => {
            console.log(res);
            //Stripe en su documentacion sugiere que manejemos el error asi
            if(res.error){
                //Pongo el error al final de .productos osea el section
                $productos.insertAdjacentHTML("afterend", res.error.message);
            }
        });
    }
});
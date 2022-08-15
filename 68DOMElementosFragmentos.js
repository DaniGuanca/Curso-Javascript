//voy a crear una nueva tarjeta dinamicamente
//con createElement creo elementos

const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figCaption = document.createElement("figCaption");

//tambien puedo crear texto asi
const $figCaptionText = document.createTextNode("Animals");
const $cards = document.querySelector(".cards");

//los atributos de img
$img.setAttribute("src","https:/placeimg.com/200/200/animals");
$img.setAttribute("alt","animals");
//la clase estilo card
$figure.classList.add("card");

//ya cree las etiquetas ahora tengo que agregarlas
//appendChild hace eso
//agarro el elemento padre y le agrego un hijo

$figCaption.appendChild($figCaptionText);
$figure.appendChild($img);
$figure.appendChild($figCaption);

$cards.appendChild($figure);

//otra forma no tan correcta
const $figure2 = document.createElement("figure");

$figure2.innerHTML=`
    <img src="https:/placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//ahora voy crear varios elementos de una sola vez
const estaciones = ["verano","otoño","invierno","primavera"];
const $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(element => {
    const $li = document.createElement("li");
    $li.textContent = element;
    $ul.appendChild($li);
});

//otra forma no tan correcta porque no crea un nodo pero se ve igual
const continentes = ["Africa","America","Asia","Europa","Oceania"];
const $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML="";

continentes.forEach(element =>{
    $ul2.innerHTML += `<li>${element}</li>`
});

//TODO ESTO ERA PARA POCOS ELEMENTOS

//PARA MUCHOS ELEMENTOS SE USAN FRAGMENTOS ES MUCHO MEJOR
//En vez de darle al dom a cada rato solo le damos a un fragmento en memoria y al finalizar van al dom

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const $ul3 = document.createElement("ul");

//para crear framgentos se usa createDocumentFragment
const $fragment = document.createDocumentFragment();

meses.forEach(element => {
    const $li = document.createElement("li");
    $li.textContent = element;
    //le agrego al fragmento cada li
    $fragment.appendChild($li);
});


document.write("<h3>Meses del Año</h3>");
//y aca agrego el fragmento ya terminado
$ul3.appendChild($fragment);
//y aca lo pega al dom una sola vez
document.body.appendChild($ul3);

//SIEMPRE USAR FRAGMENTOS!!!!
//a traves de template puedo agregar objetos dinamicamente mas facil
//como el template ya tiene una estructura solo tengo que ponerle los elementos que van a ir en su estructura
//sin necesidad de estar creando cada elemento

//voy a ir agregando nuevasa tarjetas 
//agrego variables donde guardo las cosas
//pongo content para acceder al contenido del template

const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
//creo el fragmento donde voy a guardar todo antes de pegarle al DOM
const $fragment = document.createDocumentFragment();

cardContent = [
    {
        title: "Tecnología",
        img:"https://placeimg.com/200/200/tech"
    },
    {
        title: "Animales",
        img:"https://placeimg.com/200/200/animals"
    },
    {
        title: "Arquitectura",
        img:"https://placeimg.com/200/200/arch"
    },
    {
        title: "Gente",
        img:"https://placeimg.com/200/200/people"
    },
    {
        title: "Naturaleza",
        img:"https://placeimg.com/200/200/nature"
    }
]


cardContent.forEach(valor => {
    //entro al template y busco el elemento del template y le asigno el nuevo valor
    $template.querySelector("img").setAttribute("src",valor.img);
    $template.querySelector("img").setAttribute("alt",valor.title);
    $template.querySelector("figcaption").textContent = valor.title;

    //ahora clono el template para tener uno para cada valor sino estaria sobreescribiendo
    //para clonar se una el metodo importNode, el elemento a clonar y el booleano en true para que incluya el contenido
    //en false seria vacio
    let $clone = document.importNode($template,true);
    //ahora agrego el clon al fragmento
    $fragment.appendChild($clone);
});

//lo pego al DOM
$cards.appendChild($fragment);


//hay metodos para reemplzar nodos, borrar y agregar en el lado que quiera un nodo
/* 
    .replaceChild(elementoNuevo,elementoViejo),
    .removeChild(elemento a borrar);
    .insertBefore(elemento a insertar, elemento de referencia);

    puedo clonar con otro metodo tambien, el booleano hace lo mismo que el metodo anterior
    .cloneNode(booleano)
*/

//PERO HAY METODOS NUEVOS QUE HACEN LO ANTERIOR QUE SON
/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

//otros metodos
/*
    elemento.prepend(nuevo elemento);
    elemento.apendo(nuevo elemento);
    elemento.before(nuevo elemento);
    elemento.afterend(nuevo elemento);
*/
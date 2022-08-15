//las clases las cree en estilo.css 
//como la .rotate-45

const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);

//este sirve para manipular las clases del DOM
console.log($card.classList);

//tiene varios metodos para manipular
//como contain para saber si existe la clase css
//y add para agregar elementos a la clase
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

console.log($card.className);
console.log($card.classList);


//para quitar tenemos el remove
//hay un metodo toggle que funciona como interruptor apaga y prende
//borra o agrega la clase css dependiendo si esta o no

$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

//replace reemplaza una clase por otra
$card.classList.replace("rotate-45", "rotate-135");

//se puede agregar varias clases de una vez
$card.classList.add("opacity-80","sepia");

//remove y toggle tambien se pueden poner varias clases de una
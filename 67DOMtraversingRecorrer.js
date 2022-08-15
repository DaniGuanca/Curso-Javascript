//para recorrer elementos
const $cards = document.querySelector(".cards");
 
//accedo a los hijos con children
console.log($cards.children);
console.log($cards.children[2]);

//uso elements asi pasa de etquieta a etiqueta sino te tira el espacio en blanco de identacion
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);

//puedo ver elementos de afuera osea hermanos
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);

//busca la etiqueta mas cercana que le mandas
console.log($cards.closest("body"));
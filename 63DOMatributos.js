
//para traer atributo la forma apropiada es usando getAtribute
//porque trae mejor el elemnto
console.log(document.querySelector(".link-dom").getAttribute("href"));

//con setAttribute se cambia el valor
//es de buena practica poner el signo de dolar a todas las variabels que guarden elementos del DOM
const $linkDom = document.querySelector(".link-dom");

//en el primer argumento va la propiedad que quiero cambiar
//en el segundo argumento va el valor que quiero poner
$linkDom.setAttribute("target","_blank");

//siempre que se manda el blank para abrir enlace en otra pestaña esta bueno 
//sacar la dependecia para evitar hackeos eso se hace con rel = noopener
$linkDom.setAttribute("rel","noopener");
$linkDom.setAttribute("href","http://google.com");

//tambien hay elemento para remover y verificar si existe un elemento
//removeAttribute y hasAttribute
console.log($linkDom.hasAttribute("rel"));
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));

//Data Atributte
//en el html para hacer data atributos hay que poner
//data-  seguido de cualquier cosa
console.log($linkDom.getAttribute("data-description"));

//otra forma
console.log($linkDom.dataset.description);
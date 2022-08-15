console.log(document.getElementsByTagName("li"));
console.log(document.getElementById("menu"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementsByClassName("card"));

//TODOS ESTOS SE USABAN ANTES AHORA HAY UN NUEVO METODO QUE LOS REEMPLAZA A TODOS
//que es querySelector
//Tener en cuenta que el nombre de clases se pone un punto adelante .clase
//Y los ids se pone un numeral antes #Id

console.log(document.querySelector("#menu"));

//Aunque todavia se usa getElementById porque es mas rapido

//querySelector solo trae el primero que encuentra
//si queres traer todos se usa queryselectorAll

console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));

//tambien puedo decir que elemento quiero como un arreglo
//y elegir que elemento quiero dentro de varios
console.log(document.querySelectorAll(".cards"));
console.log(document.querySelectorAll(".cards")[2]);

console.log(document.querySelectorAll("#menu li"));
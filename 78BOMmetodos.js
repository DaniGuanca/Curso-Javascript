const $btnAbrir = document.getElementById("abrir-ventana");
const $btnCerrar = document.getElementById("cerrar-ventana");
const $btnImprimir = document.getElementById("imprimir-ventana");

//guardo el open en una variable para poder cerrar esa ventana despues con el close
$btnAbrir.addEventListener("click",e=>{
   ventana = window.open("http://google.com");
});
$btnCerrar.addEventListener("click",e=>{
    ventana.close();
});
$btnImprimir.addEventListener("click",e=>{
    window.print();
});

//Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador 
console.log("**********Objeto Location**************************");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.pathname);

console.log(history);
console.log(navigator);
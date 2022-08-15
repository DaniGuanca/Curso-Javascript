//el flujo de evento es la propagacion del evento en el arbol del dom 
//del elemento mas interno al elemento externo, se llama fase de burbuja
//lo contrario se llama fase de captura
const $divsEventos = document.querySelectorAll(".eventos-flujo div");

//function flujoEventos(e){
//    console.log("Hola te saluda", this.className, "el click lo origino",e.target.className);
//}

console.log($divsEventos);

//si no hay tercer argumento o es false esta en burbuja
//si el tercer argumento es true esta en captura
$divsEventos.forEach(div => {
    div.addEventListener('click',flujoEventos);
   // div.addEventListener("click",flujoEventos,true);
   //puedo poner el tercer argumento un objeto y tiene muchas opciones
   //por ejemplo caption es el que ya dije anteriormente true es captura y false burbuja
   //once en true hace que se ejecute una unica vez el evento
   //div.addEventListener("click",flujoEventos,{
   //    capture: false,
   //    once: true,
   //});
})

//clase 75 detener propagacion
//el metodo stopPropagation del evento hace que pare de propagarse
function flujoEventos(e){
    console.log("Hola te saluda", this.className, "el click lo origino",e.target.className);
    e.stopPropagation();
}

const $linkEvento = document.querySelector(".eventos-flujo a");

$linkEvento.addEventListener("click",e =>{
    alert("hola gil");
    //preventDefault previene la accion por defecto
    //en el caso del enlace la accion por defecto es abrirlo
    e.preventDefault();
    e.stopPropagation();
})


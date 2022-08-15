//Clase 76 Delegacion de eventos
//es para no estar haciendo varios addListener 
//creo solo un addListener padre y delego el comportamiento a los hijos
//esto es mas eficiente para ahorrar memoria
//es la forma mas optima de trabajar

const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e){
    console.log("Hola te saluda", this, "el click lo origino",e.target.className);
}
//el evento se lo doy al padre de todos, al documento
//como documento no tiene padre entonces no va a haber propagacion por lo que no hace falta el stopPropagation
document.addEventListener("click", e=>{
    console.log("CLick en", e.target);

    //aca valido si es el link de la clase evento flujo
    if(e.target.matches(".eventos-flujo a")){
        alert("hola gil");
        e.preventDefault();
    }

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }
});


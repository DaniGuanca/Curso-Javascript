export default function RelojAlarma(btnStartReloj,btnStopReloj,btnStartAlarm,btnStopAlarm) {
    const d = document;
    const $hora = d.createElement("h3"); 
    //la variable con el audio
    let sonidoAlarma = new Audio("../media/alarma_2.mp3")
    //variable para el setInterval
    let relojDigital; 
    //variable timeout porque mircha quiere que suene despues de dos segundos la alarma
    let timeoutAlarm;

    d.addEventListener("click", e=>{
        if(e.target.matches(btnStartReloj)){

            d.querySelector(btnStartReloj).setAttribute("disabled",true);   
            //dentro del setInterval hago una funcion que me muestre la hora
            //y el segundo argumento es para que actualize en cada segundo         
            relojDigital = setInterval(function(){
                var hora = new Date().toLocaleTimeString();
                $hora.innerHTML = hora;
            },1000);

            //pongo el reloj antes del boton
            d.querySelector(btnStartReloj).before($hora);
        }

        if(e.target.matches(btnStopReloj)){
            d.querySelector(btnStartReloj).disabled = false;
            $hora.innerHTML = null;
            clearInterval(relojDigital);
        }

        if(e.target.matches(btnStartAlarm)){
            d.querySelector(btnStartAlarm).setAttribute("disabled",true);
            timeoutAlarm = setTimeout(()=>{
                sonidoAlarma.play();
            },2000);            
        }

        if(e.target.matches(btnStopAlarm)){
            d.querySelector(btnStartAlarm).disabled = false;
            //como no hay funcion stop lo que hago es pausar el sonido y reiniciarlo a 0 para que el 
            //proximo play empiece del principio
            sonidoAlarma.pause();
            sonidoAlarma.currentTime = 0;
            //paro el timeout
            clearTimeout(timeoutAlarm);
        }

    });
}
const d = document;
export function countdown(reloj){

    const $reloj = d.querySelector(reloj);
    //este es el valor de un dia, lo uso para sacar la diferencia en dias de las fechas
    //basicamente es, como el gettime devuelve el resultado en milisegundos lo que se hace es
    //multiplicar por 1000 que es un milisegundo, despues por un segundo, despues por un minuto
    //despues por una hora, y despues un dia que son 24 horas
    const oneDay = 1000*60*60*24;
    const oneHour = 1000*60*60;
    const oneMinute = 1000*60;
    const oneSecond = 1000;

    const fechaDeseada = new Date(2021,2,11);    
    let fechaActual = new Date();

    const intervalo = setInterval(()=>{
        fechaActual = new Date();
        

        //para sacar diferencia de dias, hago la diferencia de gettime y divido por dia,hora,minuto,segundo
        //math floor para redondear hacia abajo
        let diferenciaFechas = fechaDeseada.getTime()-fechaActual.getTime();
        
        let diffDays = Math.floor(diferenciaFechas / oneDay);
        // % es para sacar el modulo
        //cuando pones un string y concatenas con mas, automaticamente todo se vuelve string
        //le agrego un 0 para que muestre 01 02 ... 09
        //cuando llegue a 10 para arriba va a mostrar 010
        //entonces uso el metodo slice para que corte a 2 caracteres asi solo tengo dos caracteres
        //asi del 10 para arriba muestra 10 11 ... 60
        let diffHours = ("0" + Math.floor(diferenciaFechas % oneDay / oneHour)).slice(-2);
        let diffMinutes = ("0" + Math.floor(diferenciaFechas % oneHour / oneMinute)).slice(-2);
        let diffSeconds = ("0" + Math.floor(diferenciaFechas % oneMinute / oneSecond)).slice(-2);

        $reloj.innerHTML = `${diffDays} dias  ${diffHours} horas  ${diffMinutes} minutos  ${diffSeconds} segundos`;

        if (diferenciaFechas < 0) {
            clearInterval(intervalo);
            $reloj.innerHTML = "FELICIDADES";
        }

    },1000);
    
}
export default function geolocalizacion(latitud,longitud,precision,link){
    const $latitud = document.getElementById(latitud);
    const $longitud = document.getElementById(longitud);
    const $precision = document.getElementById(precision);
    const $link = document.getElementById(link);

    //para hacer la geolocalizacion se usa el metodo navigator.geolocation.getCurrentPosition
    //que recibe como primer parametro la funcion que va a hacer en caso de exito
    //segundo parametro opcional la funcion que va a hacer en caso de que falle
    //y tercer parametro opcional un objeto con argumetnos como maximotiempo y alta precision enableHighAccuracy: true
    //maximumage es para que no guarde en historial

    if (navigator.geolocation){
        //en posicion se guardan las coordenadas
        navigator.geolocation.getCurrentPosition(posicion =>{
            $latitud.innerHTML = `Latitud: <b>${posicion.coords.latitude}</b>`;
            $longitud.innerHTML = `Longitud: <b>${posicion.coords.longitude}</b>`;
            $precision.innerHTML = `Precision: <b>${posicion.coords.accuracy} metros</b>`;
            
            //el valor con z del link de google es el zoom va de 1 a 20
            $link.href = `https://www.google.com.ar/maps/@${posicion.coords.latitude},${posicion.coords.longitude},18z`;
            $link.setAttribute("target", "_blank");
            $link.setAttribute("rel","noopener");
        }, error =>{
            //segundo argumento funcion de error
            $latitud.insertAdjacentHTML("beforebegin",`<p>Error: <mark>${error.message}</mark></p>`);
        },{
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    }
}
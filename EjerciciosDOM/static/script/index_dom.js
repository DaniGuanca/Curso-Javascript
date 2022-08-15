import hamburgerMenu from "./menu_hamburguesa.js";
import relojAlarma from "./Ejercicio1_relojAlarma.js";
import {shortcuts,moveball} from "./Ejercicio2_eventoTeclado.js";
import {countdown} from "./Ejercicio3_countDown.js";
import {clickBtnTop,appearBtn} from "./botonTop.js";
import btnTheme from "./botonTheme.js";
import responsiveMedia from "./Ejercicio4_responisveJavascript.js";
import nuevaVentanaResponsive from "./Ejercicio5_ResponsiveNuevaVentana.js";
import userDeviceInfo from "./Ejercicio6_DeteccionDispositivo.js";
import comprobarConexion from "./Ejercicio7_ComprobarConexion.js";
import camaraWeb from "./Ejercicio8_CamaraWeb.js";
import geolocalizacion from "./Ejercicio9_Geolocalizacion.js";
import filtro from "./Ejercicio10_FiltroBusqueda.js";
import sorteoDigital from "./Ejercicio11_SorteoDigital.js";
import slider from "./Ejercicio12_CarruselSliderResponsive.js";
import scrollSpy from "./menuCostadoScrollSpyMIRCHAbien.js";
import videoInteligente from "./Ejercicio13_VideoInteligente.js";
import validarFormulario from "./Ejercicio14_ValidacionFormulario.js";
import narradorVoz from "./Ejercicio15_Narrador.js";

//cargo en el momento que se cargue la pagina asi la tengo disponible
document.addEventListener("DOMContentLoaded", e=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    relojAlarma(".btn-iniReloj",".btn-detReloj",".btn-iniAlarma",".btn-detAlarma");
    shortcuts();
    countdown(".reloj");
    clickBtnTop(".top-btn");  
    btnTheme(".theme-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/embed/h4UqMyldS7Q" target="_blank"
        rel="noopener">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/h4UqMyldS7Q" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>`
    );

    responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/KeKmqLVpEt1XHwXf9" target="_blank"
    rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.0952728469574!2d-65.26460000496503!3d-24.235113485582442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b06366aeac493%3A0x2fa587e10844a660!2zMjTCsDE0JzA3LjYiUyA2NcKwMTUnNDguOCJX!5e0!3m2!1ses!2sar!4v1599246824630!5m2!1ses!2sar" 
    width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" 
    tabindex="0"></iframe>`
    );

    nuevaVentanaResponsive("responsive-tester");

    userDeviceInfo("user-device");

    camaraWeb("videoCam");

    geolocalizacion("latitud","longitud","precision","linkMaps");

    filtro("filtro",".card");

    sorteoDigital("obtenerGanador",".elemento-sorteo");

    slider();

    scrollSpy();

    videoInteligente();

    validarFormulario();
    
});

window.addEventListener("scroll",e=>{
    appearBtn(".top-btn");  
});

document.addEventListener("keydown", (e) => {
    moveball(e,".circulo",".fondoEventoTeclado");
});

//No puede haber funciones que llamen al evento DOMContentLoaded dentro del mismo evento DOMContentLoaded
//por eso esta afuera el narradorVoz
comprobarConexion();
narradorVoz();
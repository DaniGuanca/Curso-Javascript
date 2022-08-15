//Siempre con ./
import { App } from './App.js';
import api from './helpers/wp-api.js';


//Page ya vale uno en el wp-api asi que no hace falta poner a 1 cuando carga
document.addEventListener("DOMContentLoaded", App);


//Como manejo el enrutamiento con los hash, puedo verlo con location.hash
//Voy a hacer un evento que detecte cada vez que cambia la ruta
//Pongo a page a 1 para que siempre cambie de pagina vuelva a 1 para que empiece bien el scoll infinito
window.addEventListener("hashchange", () => {
    api.page = 1;
    App();
});

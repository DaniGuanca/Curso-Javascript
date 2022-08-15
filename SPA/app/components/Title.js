//Componente del titulo
import api from "../helpers/wp-api.js";

//Voy creando el titulo
export function Title() {
    //Creo un h1 y lo lleno con el nombre que importo y la url
    //rel noopener es para que no haya dependencias en la ventana que abro
    const $h1 = document.createElement('h1');
    $h1.innerHTML = `
        <a href="${api.DOMAIN}" target="_blank" rel="noopener">${api.NAME.toUpperCase()}</a>
    `;

    //esta funcion va a retornar el titulo osea el h1 que cree
    return $h1;
}
//Componente aplicacion principal

//Aca no exporte por defecto asi que respeto { nombreDeFuncion }
import { Loader } from './components/loader.js';
import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { Router } from './components/Router.js';
import { InfiniteScroll } from './helpers/infinte_scroll.js';


export function App() {
    const $root = document.getElementById('root');

    //Reseteo el root porque desde index estoy llamando a la funcion App por cada cambio de hash
    //entonces cada cambio de hash carga header y loader y se duplica, asi lo dejo en limpio asi carga en limpio 
    //y no se duplican
    $root.innerHTML = null;

    //Uso appendChild porque cree los elementos con createElement entonces son nodos
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());
     

    //El router no le pongo en appendChild porque es mas logica de programacion que un elemnto
    Router();   

    InfiniteScroll();
}



/*  ESTABA PROBANDO, EJEMPLOS
export function App() {
    document.getElementById("root").innerHTML = "<h1>Bienvenidos a mi primer SPA con vanilla JS</h1>";

    console.log(api);

    //Llamo a la funcion ajax
    ajax({
        url : api.POSTS,
        cbSuccess: (data) => {
            console.log(data);
        }
    });

    //Ejemplo si necesito las categorias simplemente llamo de nuevo a ajax y en vez de POSTS pido CATEGORIES
    ajax({
        url : api.CATEGORIES,
        cbSuccess: (data) => {
            console.log(data);
        }
    });

} */
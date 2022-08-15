//RENDERIZADO DINAMICO

//El router es el encargado de hacer las peticiones para mostrar el contenido y tambien generar la url dependiendo de la seccion
import { ajax } from "../helpers/ajax.js";
//Importo las variables del helper wp-api, sin {} y con cualquier nombre porque la exporte por defecto
import api from "../helpers/wp-api.js";
import { ContactForm } from "./ContactForm.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCard.js";

//Async porque las SPA son asincronas y por lo tanto el componente que se encarga el ruteo tambien tiene que ser asincrono
//aparte de tambien para usar el await en cada ajax
export async function Router(){
    const $main = document.getElementById("main");
    //deestructuracion para sacar hash para no estar poniendo window.location.hash a cada rato
    let {hash} = window.location;
    console.log(hash);

    //Para que no se repita el contenido
    $main.innerHTML = null;


    //Como ya vi que funciona bien cada vez que hay cambio de hash de ruta ahora hago las validaciones para que
    //cargue el contenido correspondiente

    //Hace if anidados porque van a haber hash que de los posts que no se como se llaman entonces esos van a
    //a entrar en el ultimo else, aparte de que las validaciones no son todas iguales para usar switch

    //Si no tiene el hash # puede ser que es la primera vez que cargue la aplicacion osea que esta en el home
    //Seccion Home
    if(!hash || hash === "#/"){
        //Pongo await para que espere a terminar la peticion ajax y que no se pase a la otra linea que oculta el loader
        //antes de tiempo
        //Tiene que esperar a que cargue despues lo oculta
        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                //console.log(posts);
                //Aca voy a meter el codigo html de cada post
                let html ="";
                //Por cada post
                posts.forEach(post => {
                   html += PostCard(post);
                });
                //Le meto los posts al nodo main, como postCard lo hice textual se lo meto con innerHTML
                $main.innerHTML = html;
            }
        });
  
        
    }else if(hash.includes("#/search")){
        //La url de search va a ser #/search?query=valorIngresado, entonces en vez de igual pongo que incluya #/search
        //La variable a buscar que ingresa el usuario la guarde en el localStorage asi que la saco de ahi para el ajax
        //Esto tiene SEARCH = `${API_WP}/search?_embed&search=`;
        let query = localStorage.getItem("wpSearch");

        //Si no hay nada que buscar devolve falso y oculto el loader
        if(!query) { 
            document.querySelector(".loader").style.display = "none";    
            return false
        };

        await ajax({
            url: `${api.SEARCH}${query}`,
            //Esta va a ser para mostrar los posts de resultado, es la misma forma que mostrar el home
            cbSuccess: (search) => {
                console.log(search);
                let html = "";
                //Controlo si no trae resultados el search
                if(search.length === 0){
                    html = `
                        <p class="error">
                            No existen resultados de busqueda para el termino 
                            <mark>${query}</mark>
                        </p>
                    `; 

                }else{
                    search.forEach(resultado => {
                        html += SearchCard(resultado);
                    });
                } 

                $main.innerHTML = html;
            }
        });


    }else if(hash === "#/contact"){
        $main.appendChild(ContactForm());

    }else{
        //Aca entra cualquier url diferetne. Por ejemplo contenido de posts
        //Para entrar a un post en particular con la API de wp se usa el endpoint con el id entonces es POST/id

        //Hago la peticion ajax para un post particular sacando el id que guarde en el local storage
        await ajax({
            url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post) => {
                //console.log(post);
                $main.innerHTML = Post(post);
            }
        });

    }

    //Oculto el loader
    document.querySelector(".loader").style.display = "none";
}
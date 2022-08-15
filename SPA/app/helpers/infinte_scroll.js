//El scroll infinito, ya esta explicado en los ejercicos de ajax 12 wordPress Api.html
//Como el infinite scroll es una funcion y no un componente visual lo meti en helpers
import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp-api.js"

export async function InfiniteScroll () {
    let query = localStorage.getItem("wpSearch");
    let apiURL;
    //HOC High Order Component, la variable con mayuscula porque va a ser un componente
    let Component;  

    //Este tiene que ser asincrono asi uso el await
    window.addEventListener("scroll", async e => {
        let {scrollTop, clientHeight, scrollHeight} = document.documentElement;
        let {hash} = window.location;

        if(scrollTop + clientHeight >= scrollHeight) {
            api.page ++;

            //Controlo si esta en home o en busqueda para poner el componente y a la url le agrego el numero de paginas
            if(!hash || hash === "#/"){
                apiURL = `${api.POSTS}&page=${api.page}`;
                //Guardo el componente correspondiente, HOC
                Component = PostCard;

            } else if(hash.includes("#/search")){
                apiURL = `${api.SEARCH}${query}&page=${api.page}`;
                Component = SearchCard;

                //Para cualquier otra pagina el else retorna falso
            }else {
                return false;
            }

            //Pongo el loader
            document.querySelector(".loader").style.display = "block";

            //El ajax tambien asincrono aca, el ajax es igual a los anteriores nada mas que ahora mando Component
            await ajax ({
                url: apiURL,
                cbSuccess: (posts) => {
                    let html = '';
                    posts.forEach(post => {
                        html += Component(post);
                    });
                    //Si uso main.innerHTML voy a reemplazar todo, lo que hay que hacer es agregarlo al final
                    //por eso uso insertAdjacentHTML en beforeEnd;
                    document.getElementById("main").insertAdjacentHTML("beforeEnd", html);
                    document.querySelector(".loader").style.display = "none";
                }
            });
        }
    });

}
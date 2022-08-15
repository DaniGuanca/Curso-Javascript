//Va a tener todas las variables que necesitamos para consultar un dominio de wordpress con la API de wordpress
//La explcicaion de las variables esta en el ejercicio wordpress de los ejericios ajax
//Las constanste se escriben en MAYUSCULAS

const NAME = "css-tricks";
const DOMAIN = `https://${NAME}.com`;
const SITE = `${DOMAIN}/wp-json`;
const API_WP = `${SITE}/wp/v2`;
//Per page y page son para el scroll infinito, ya esta explicado en los ejercicos de ajax 12 wordPress Api.html
const PER_PAGE = 6;
const POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`;
//Posts sin embed
const POST = `${API_WP}/posts`;
const CATEGORIES = `${API_WP}/categories`;
//Esta es no esta en el ejercicio, es para buscar un post en particular
const SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

let page = 1;

//Exporto en un objeto todas las variables
//Si el nombre del parametro de la propiedad es igual al nombre de la variable puedo escribir como lo hice
//Sino seria NAME: NAME
export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    PER_PAGE,
    POSTS,
    POST,
    CATEGORIES,
    SEARCH,
    page
}

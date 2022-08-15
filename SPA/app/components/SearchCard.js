//Las tarjetas que se van a mostrar en la busqueda, son parecidas a la PostCard y se podria haber usado esas
//pero Jon queria que quede diferente al main
export function SearchCard (props) {
    let { id, title, _embedded} = props;
    let slug = _embedded.self[0].slug;
    
    //Yo le pongo una imagen para que quede mas lindo, esto es mio
    let urlPoster = _embedded.self[0].jetpack_featured_media_url
        ? _embedded.self[0].jetpack_featured_media_url
        : "app/assets/favicon.svg";
    //************************************************************
    
    //************* LO PONGO DE NUEVO ACA AL EVENTO DE POSTCARD PORQUE NO ESTA FUNCIONANDO BIEN */
    document.addEventListener("click",e => {
        if (!e.target.matches(".post-card a")) return false;
        //Guardo en el local storage un valor llamado wpPostId con el valor que saco del data-id del link
        localStorage.setItem("wpPostId", e.target.dataset.id);
    });
    //******************************************************************************************* */

    return `
        <article class= "post-card">
            <img src="${urlPoster}" alt="${title}">
            <h2>${title}</h2>
            <p>
                <a href="#/${slug}" data-id="${id}">Ver Publicacion</a>
            </p>
        </article>
    `;
}
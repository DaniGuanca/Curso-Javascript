//Componente de las tarjetas de cada post
//No va a usar createElement porque va a ir dentro de Main y Main ya es un nodo
//entonces es mas facil hacer todo textual y mandarle a Post por innerHTML, en vez de estar haciend
//a cada rato createElement y appendChild
export function PostCard(props){
    //Deestructuro para despues no estar poniendo props.title.rendered y directamente pongo title.rendered
    let { date, id, slug, title, _embedded} = props;
    //El id lo pongo como data attribute en el link para despues cuando haga el evento en el enlace lo obtenga y 
    //lo guarde en el local storage
    let dateFormat = new Date(date).toLocaleString();
    //A veces viene sin imagen asi que tengo que validar que venga, si no viene muestro el favicon
    let urlPoster = _embedded["wp:featuredmedia"]
        ? _embedded["wp:featuredmedia"][0].source_url 
        : "app/assets/favicon.svg";


    //Como muchos elementos no existen apenas cargan las SPA siempre es mejor usar delegacion de eventos
    //Hago !e.target... para que guard en el local storage el id en caso de que sea un post, y en caso de que no
    //que retorne false

    document.addEventListener("click",e => {
        if (!e.target.matches(".post-card a")) return false;
        //Guardo en el local storage un valor llamado wpPostId con el valor que saco del data-id del link
        localStorage.setItem("wpPostId", e.target.dataset.id);
    });


    //En vez de links en el href mando el slug que es como la ultima parte del link, porque estoy haciend SPA
    //y el ruteo es automatico con href a #/slug 
    return `
        <article class= "post-card">
            <img src="${urlPoster}" alt = "${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}">Ver Publicacion</a>
            </p>
        </article>
    `;
}
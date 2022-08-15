export default function sorteoDigital(idBtn,elementos){
    const $btn = document.getElementById(idBtn);
    const $lista = document.querySelectorAll(elementos);

    const numeroTotal = $lista.length-1;
    
    document.addEventListener("click", e => {
        if(e.target === $btn){
            let indice = Math.round(Math.random() * numeroTotal);
            console.log(`El ganador es: ${$lista[indice].textContent}`);
            alert(`El ganador es: ${$lista[indice].textContent}`);
        }
    });


    //Mircha ademas enseña una metodo para hacer scrapping esta bueno para sorteos de face donde sacas
    //directamente de los comentarios los participantes
    //basicamente hace scrapping manual con el inspector de elemento anota el selector
    //y lo ejecuta en la consola del navegador
    const getWinnerScrapping = (elementos) =>{
        const $participantes = document.querySelectorAll(elementos);
        //con math floor me evito hacer length-1
        const random = Math.floor(Math.random()*$participantes.length);
        const winner = $participantes[random];

        return `El ganador es: ${winner.textContent}`;
    }


    //viendo manualmente con el inspector de elementos de navegador saco que la etiqueta 
    //que contiene comentarios de youtube es
    //ytd-comment-thread-renderer
    //dentro tiene un id author-text y dentro un span asi que quedaria asi
    //ytd-comment-thread-renderer #author-text span
    //esto lo ejecuto en la consola del navegador
   // getWinnerScrapping("ytd-comment-thread-renderer #author-text span");
}
$linkHome = document.getElementById("home");
$linkContacto = document.getElementById("contacto");
$linkServicio = document.getElementById("servicio");
$linkAcerca = document.getElementById("acerca");

$main = document.querySelector("main");

//por la cabecera del ajax estoy diciendo que voy a mandar documento html asi que no parseo y no hago db de json
const getHTML = (options) => {
    let {url,success,error} = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300) {
            //no parseo el json porque quiero el codigo html
            let html = xhr.responseText;
            success(html);
        }else {
            let message = xhr.statusText || "Ocurrio un error";
            error(`Error ${xhr.status}: ${message}`);
        }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "text/html; charset=utf-8");
    xhr.send();
}

document.addEventListener("DOMContentLoaded",e => {
    getHTML({
        url: "../assets/home.html",
        success: (html) => $main.innerHTML = html,
        error: (error) => $main.innerHTML = `<h1>${error.message}</h1>`
    });
});

document.addEventListener("click", e => {
    if (e.target.matches(".menu a")){
        e.preventDefault();
        //la direccion la tengo guardada dentro del href del enlace asi que la llamo desde ahi directamente

        getHTML({
            url: e.target.href,
            success: (html) => $main.innerHTML = html,
            error: (error) => $main.innerHTML = `<h1>${error.message}</h1>`
        });
    }
    
});
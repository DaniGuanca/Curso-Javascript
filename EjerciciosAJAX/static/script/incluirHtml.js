//En el ejercicio anterior usaba innerHTML para cambiar el contenido interior de una etiqueta
//Para este ejercicio voy a usar outerHTML que lo que hace es reemplazar la etiqueta entera

document.addEventListener("DOMContentLoaded",e => {
    const includeHTML = (el,url) => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", e=>{
            if(xhr.readyState !== 4) return;

            if(xhr.status >= 200 && xhr.status < 300) {
                el.outerHTML = xhr.responseText;
            }else{
                let message = xhr.statusText ||
                 "Error al cargar el archivo, verifica que estes haciendo la peticion por http o https";
                
                el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
            }
        });

        xhr.open("GET",url);
        xhr.setRequestHeader("Content-Type", "text/html; charset=utf-8");
        xhr.send();
    }

    //A todos los elementos con dataset include hago que haga la funcion includeHTML
    document
     .querySelectorAll("[data-include]")
     .forEach(el => includeHTML(el, el.getAttribute("data-include")));
});
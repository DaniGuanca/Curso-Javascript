//La funcion que encapsula todo el ajax
export async function ajax (props) {
    //Hago deestructuracion, como yo solo hago peticiones GET no hace falta pedir el metodo ni cabecera ni body
    //cuando sea necesario hacer POST UPDATE Y DELETE ahi si hay que poner metodo cabecera y body.
    //Solo pido la url, la callback o funcion en caso de exito.
    let {url, cbSuccess } = props;

    //Le pongo async y await para que espere que devuelva la peticion, sino se salta de linea en Router.js y oculta el loader antes
    //En el Router.js cuando llame a la funcion tambien tengo que ponerle async a la funcion Router y await cuando llame al metodo ajax
    //En caso de exito llama a la callback success y le manda el json, para el caso de error el tipico error
    await fetch(url)
        .then(response => response.ok ? response.json() : Promise.reject(response))
        .then(json => cbSuccess(json))
        .catch((err) => {
            let message = err.statusText || "Ocurrio un error al acceder a la api";

            document.getElementById("main").innerHTML = `
                <div class="error">
                    <p>Error ${err.status}: ${message}</p>
                </div>
            `;

            document.querySelector(".loader").style.display = "none";
            
            console.log(err);
        });
}
//ACA VAN A IR TODAS LAS CLASES DE AJAX
//Desplegar las funciones para verlas

//En realidad seria con modulos, pero uso las funciones anonimas autoejecutables para tener
//todo en el mismo archivo

//CLASE 106 Ajax con XMLHttpRequest
(() => {
    //PASO 1: Instanciar el elemento XMLHttpRequest
    const xhr = new XMLHttpRequest();


    //de la pagina de prueba voy a traer una lista de usuario y la voy a mostrar en mi html
    //creando elemntos li
    const $xhr = document.getElementById('xhr');
    //voy a usar fragmentos para no pegarle a cada rato al dom
    const $fragment = document.createDocumentFragment();
    

    //PASO 2: Llamar al evento
    //el evento mas usado en ajax es el readystatechange que es cuando hay cualquier cambio de estado
    xhr.addEventListener("readystatechange", e => {        
        //solo me interesa el estado completado
        if (xhr.readyState !== 4) return;

        //siempre validar que el estado sea sastifactorio
        if (xhr.status >= 200 && xhr.status < 300){
            //console.log("Exito");  
            //la peticion se devuelve en json pero formato texto asi que tengo que convertirlo a JSON
            let json = JSON.parse(xhr.responseText);
            
            //recorro cada elemento y saco los atributos que me interesan
            //creo etiqueta y la pego al fragment
            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `Nombre: ${element.name}/ -- Telefono: ${element.phone}/ -- Mail: ${element.email}`;
                $fragment.appendChild($li);
            });

            //le pego a la lista ordenada xhr el fragmento
            $xhr.appendChild($fragment);

        }else {
            //console.log("Error");
            let message = xhr.statusText || "Ocurrio un Error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
    });

    //PASO 3: Abrir la peticion
    //Open es para abrir una peticion, primer parametro es el metodo que queremos (POST O GET etc)
    //Segundo parametro es la direccion donde hacemos la peticion
    xhr.open("GET","https://jsonplaceholder.typicode.com/users");

    //con datos locales
    //xhr.open("GET","users.json");

    //PASO 4: Enviar la peticion
    //Send se usa para enviar una peticion
    xhr.send();


})();

//CLASES 107 AJAX con API Fetch
//API FETCH es una mejor forma de trabajar con ajax que usar xmlhtpprequest
(() => {
    const $fetch = document.getElementById('fetch');
    const $fragment = document.createDocumentFragment();

    //para usar fetch se llama a su metodo fetch
    //el primer argumento es de donde sacar los datos
    //el segundo argumento opciones es un elemento con opciones que hare despues en los ejercicios de CRUD
    //entre esas opciones esta el method, pero como por defecto es GET no lo escribo
    //como Fetch es una PROMESA, uso el then en caso de exito y el catch para los errores osea que no hace
    //falta los if para controlar errores que hice en el xmlhtpprequest
    //y el finally que no importa que pase se ejecuta igual
    // fetch("direccion").then().catch().finally();
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( respuesta => {
        //console.log(respuesta);
        //en respuesta esta lo que necesito pero en otro formato, fetch tiene un metodo json para pasar a json
        //uso el metodo json y lo mando con return a otro then (hay otros metodos para otros formatos ver documentacion)
        //hago operador ternario para ver si el ok es true, el ok dice si fue exitosa la operacion
        //si no es exitosa fuerzo a la promesa a irse al error
        return respuesta.ok ? respuesta.json() : Promise.reject(respuesta);
    }) //en el siguiente then manejo la respuesta convertida que mande con el return
    .then( json => {
        //console.log(json);
        //aca ya trabajo con el fragmento como en el metodo de XMLHttpRequest
        json.forEach(element => {
            const $li = document.createElement('li');
            $li.innerHTML = `${element.name} - ${element.email} - ${element.phone}`;
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment);
    })
    .catch( error => {
        //console.log("El error:",error);
        let message = error.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${error.status}: ${message}`;
    })
    .finally(() => {
        //console.log("Esto se ejecuta sin importar el resultado");
    });
})();

//CLASE 108 AJAX con API Fetch y Async Await
//es mejor usar API Fetch con Async Await que con promesas
(() => {
    const $fetchAsync = document.getElementById("fetch-async");
    const $fragment = document.createDocumentFragment();
    
    //creo la funcion asincrona
    async function getData(){
        //manejo parte positiva, error y finally
        try {
            let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
            //convierto la respuesta con el metodo propio de fetch que es .json()
            let json = await respuesta.json();

            //console.log(respuesta,json);

            //EL THROW es un return que manda el flujo al catch

            //si no es exitosa la respuesta fuerzo el error
            //pero el error solo acepta strings
            /* if(!respuesta.ok){
                throw new Error("Un error");
            } */

            //asi que lo hago asi
            //formo un objeto y lo mando
            if(!respuesta.ok) throw { status: respuesta.status, statusText: respuesta.statusText };

            //trabajo con el fragmento como en los anteriores
            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} - ${element.email} - ${element.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);
        } catch (error) {
            let message = error.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${error.status}: ${message}`;
        } finally {
            //console.log("Esto se ejecuta sin importar el resultado");
        }
    }

    //lamo a la funcion
    getData();
    
    
})();

//CLASE 109 AJAX con AXIOS
//Axios es una libreria de terceros basados en promesas
(() => {
    

    const $axios = document.getElementById("axios");
    const $fragment = document.createDocumentFragment();
    
    //get hace la peticion a la direccion que se pasa
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then( respuesta => {
        //console.log(respuesta);
        //axios en la respuesta.data ya te devuelve los resultados convertidos
        //asi que no hace falta pasarlos a json
        respuesta.data.forEach(element => {
            const $li = document.createElement("li");
            $li.innerHTML = `${element.name} - ${element.email} - ${element.phone}`;
            $fragment.appendChild($li);
        });

        $axios.appendChild($fragment);
    })
    .catch( error => {
        //console.log("estamos en error: ", error);
        //si quiero meterme a las propiedades status y statusText en axios hay que hacer error.response
        let message = error.response.statusText || "Ocurrio un error";
        $axios.innerHTML = `Error ${error.response.status}: ${message}`;
    })
    .finally(() => {
        //console.log("Se ejecuta siempre")
    });


})();

//CLASE 110 AJAX con AXIOS con ASYNC y AWAIT
//es hacer una funcion async meter try y catch y usar await en el get
(() => {
    const $axiosAsync = document.getElementById("axios-async");
    const $fragment = document.createDocumentFragment();

    async function getData(){
        try {
            //con datos locales
            //axios.get("users.json");

            let respuesta = await axios.get("https://jsonplaceholder.typicode.com/users");
            let json = await respuesta.data;

            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} - ${element.email} - ${element.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment);
        } catch (error) {

            //si quiero meterme a las propiedades status y statusText en axios hay que hacer error.response
            let message = error.response.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Error ${error.response.status}: ${message}`;
            
        } finally {

        };
    }

    getData();
})();


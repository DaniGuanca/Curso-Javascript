//Los proxies se usan para invocar instancias de objetos literales
//Es como cuando invocamos instancias de clases pero en ves de clases son de objetos literales
//osea que te hace una copia del objeto literal para que modifiques y trabajes
//lo hace a traves de un objeto llamado handler

//objeto literal
const persona = {
    nombre:"",
    apellido:"",
    edad:0
}

//el proxy usa el handler para hacer las validaciones
//todo eso se mete en un set que recibe el objeto las propiedades y el valor
//aca se hace todas las validaciones para no alterar el objeto original
//pongo que al objeto se le pueda asigunar valores
//si no pongo que lo asigne desde el handler no va a hacer nada
const manejador = {
    set(obj,prop,valor) {
        //hago una validacion para que no meta propiedades que no existan originalmnte
        //indexof() devuelve el indice donde esta la propiedad si es que existe
        //si no existe devuelve -1
        if(Object.keys(obj).indexOf(prop) === -1){
          return console.error(`La propiedad "${prop}" no existe en el objeto persona`);
        }

        //ahora voy a validar que lo que asigne sea un nombre o apellido osea que solo acepte letras y espacios en blanco
        //el if tiene esa forma rara porque es largo y asi es mas comodo escribir
        //la validacion la hago con expresiones regulares dentro del corchete va lo unico que se permite a la z es a-z y esas cosas [A-Za-zÑñáúéíóú]
        //\s es el caracter en blanco
        //el signo ^ antes del corchete indica que no puede haber nada antes de los caracteres que se permiten en el corchete
        //el signo + despues del corchete indica que el test lo hace caracter por caracter
        //el signo $ despues del corchete y el + indica que no puede haber nada despues de todos los caracteres testeados
        //la letra g es un comodin para global osea que aplique el metodo test a todos los caracteres
        //la funcion test se fija que exista en la cadena todo lo que puse en la expresion regular
        if(
            (prop === "nombre" || prop === "apellido")&&
            !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))
        )
        {
            return console.error(`Solo se aceptan nombres validos`);
        }
        obj[prop] = valor;
    }
}

//creo la instancia proxy para un objeto dani
//Proxy recibe como argumento el objeto y el handler
const dani = new Proxy(persona,manejador);

//si el handler no tiene nada esto no hace nada
dani.nombre ="dani";
dani.apellido = "guanca";
dani.edad = 27;

//voy a hacer saltar el error de la validacion
//dani.twitter = "@daniguanca";
console.log(dani);

console.log("******************************************")
console.log(persona);
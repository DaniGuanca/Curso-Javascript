//es para usar mas facilmente los iteradores
//el generador vuelve iterable una funcion
//para usar se pone un asterisco al lado de la funcion iterable
// *funcion
// a traves de la palabra reservada yield
//cada next que se hace fuera de la funcion va a pasar por cada yield se

function *iterable() {
    yield "hola";
    console.log("hola consola");
    yield "hola2";
    console.log("Mas intrucciones del codigo");
    yield "hola3";
    yield "hola4";
}

let iterador = iterable();
//como tiene el asterisco ya toma solo el next
/* console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); */

//lo puedo hacer por for tambien
for(let y of iterador){
    console.log(y);
}

//puedo guardar en arrglos con el spread operator
const arr = [...iterable()];
console.log(arr);
//IMPORTANTE!!!!!!!!
//NO PUEDE HABER UN EVENTO DENTRO DE OTRO IGUAL, TENER EN CUENTA CUANDO LLAMO FUNCIONES DE OTRO LADO
//LA FUNCION QUE LLAME NO PUEDE TENER EL MISMO EVENTO QUE DONDE LLAMO


function holaMundo(){
    alert("Hola mundo");
    console.log(event);
}

//la forma semantica es la fomra correcta de hacerlo
const $eventoSemantico = document.getElementById("evento-semantico");
//imprtante la funcion del evento va sin parentesis sino se ejecuta antes
$eventoSemantico.onclick = holaMundo;
//el problema de estas es que solo sirve para una funcion no se puede poner mas funciones porque la soobrescribe

//para solucionar eso usamos un listener que perimete meter multiples funciones
const $eventoMultiple = document.getElementById("evento-multiple");

//la funcion addEventListener recibe el evento y la, funcion a aplicar, entre otros parametros
//la funcion va sin parentesis tambien en este caso
$eventoMultiple.addEventListener("click",holaMundo);
//ahora le voy a meter otro listener y va a ejecutar tambien otra funcion sin sobrescribir
//por eso el listener permite multiples funciones
//hago un listener y le paso una arrow function, e y event son lo mismo
//type es el tipo de evento y target el que lo origino
$eventoMultiple.addEventListener("click", (e)=>{
    alert("hola mundo numero 2");
    console.log(e.target);
    console.log(e.type);
});

//CLASE 73
//Los eventos solo reciben como parametro el event o e.
//para poder pasar otro tipo de parametros hay que hacer el siguiente truquito

function saludar (nombre = "Desconocido"){
    console.log(`Hola ${nombre}`);
}

//si hago esto va a decir hola y el objeto evento porque es el unico parametro que pueder recibir un manejador
$eventoMultiple.addEventListener("click",saludar);
//el truco es en vez de llamar a la funcion, hago una funcion anonima o una arrow function
//y dentro de esa funcion recien llamar a la funcion que queria usar otro parametro
$eventoMultiple.addEventListener("click", ()=>{
    saludar();
    saludar("Dani");
});

//AHORA PARA REMOVER EVENTOS, SOLO SE PUEDE CON EVENTOS MULTIPLES
//se usa la funcion removeEventListener 
const $eventoRemover = document.getElementById("evento-remover");

//como el removeEventListener pide como parametro la funcion manejadora no se puede usar arrow funcion o funcion anomina
//asi que hago una funcion expresada

const removerDobleClick = (e)=>{
    alert(`Removiendo el evento ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
};

$eventoRemover.addEventListener("dblclick",removerDobleClick);
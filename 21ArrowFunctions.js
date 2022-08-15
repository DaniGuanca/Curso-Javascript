//Funcion declarada como ya se hacerlas esas en javascript no importa cuando la invocas se la puede usar igual
function functionDeclarada() {
    console.log("Una funcion declarada");
}

functionDeclarada();

//En cambio las FUNCIONES EXPRESADAS se las puede invocar solamente despues de declararlas como en los otros lenguajes
//ESTAS SE ESTAN USANDO MAS ULTIMAMENTE
//para hacerla se hace una constante y se le asigna una funcion
const funcionExpresada = function () {
    console.log("Una funcion expresada");    
}

funcionExpresada();


//tambien se las llama funciones anonimas porque no tienen el nombre
const saludar = function() {
    console.log("Hola");
}

saludar();

//ES MEJOR USAR ARROW FUNCTIONS
//Para hacerlas solamente se borra la palabra function y se pone una flecha (=>)
//Cuando la funcion tiene una sola linea de codigo se pueden omitir las llaves ( {} )
const arrowFunction = () => console.log("Una arrow function");

arrowFunction();

//ejemplo con parametros
//NO HACE FALTA PONER LOS PARENTESIS CUANDO YA HAY UN PARAMETRO
const funcion2 = nombre=> console.log("Hola",nombre);
funcion2("Dani");

//cuando hay mas de un parametro si se usa parentesis
//LAS ARROW FUNCTION TIENEN EL RETURN IMPLICITO OSEA QUE NO HACE FALTA PONERLO

//ESTO
/* const sumar = function (a,b){
    return a+b;
}
*/

//ES LO MISMO QUE ESTO EN ARROW FUNCTION (sin return porque ya lo tiene implicito)
const sumar = (a,b)=> a+b;

console.log(sumar(9,9));

//PERO LAS ARROW FUNCTION NO RESPETAN LOS CONTEXTOS
//OSEA HAY QUE USARLAS CON CUIDADO O NO USARLAS
//CUANDO ESTAN DENTRO DE OBJETOS PORQUE SE SALTAN EL CONTEXTO
//OSEA QUE EL this. NO VA A SERVIR BIEN

// los metodos dentro de objetos se deberian hacer como siempre, como funcion expresada o declarada


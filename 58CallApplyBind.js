//Call appy y bind se usan para hacer referencia a elementos de otros bloques

//this ahora esta apuntando al bloque global porque no lo estoy llamando dentro de un objeto o clase
console.log(this);
this.lugar = "Contexto Global";

function saludar(saludo,aQuien) {
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("ki asi","gato");


//aca estoy dentro del bloque objeto entonces el this hace referencia al objeto
//el metodo saludar del objeto me daria como resultado "contexto objeto"
//const objeto = {
//    lugar: "Contexto objeto",
//    saludar
//}
//objeto.saludar();


//Ahora si aplicara call no haria faltar tener el metodo adentro del objeto
const objeto = {
    lugar: "Contexto objeto"
}

//llamamos a la funcion definida anteriomrente y para usar el call se pone .call y los argumentos que pide (objeto,argumentos de la funcion)
//call reemplaza un objeto por el que le estamos mandando como argumento
saludar.call(objeto, "Hola", "Dani");

//call y apply funcionan igual solo difieren en la forma de pasar argumentos
//con apply los argumentos de la funcion se pasan en forma de arreglo
saludar.apply(objeto,["Todo bien?","Milo"]);

console.log("****************************************************************")
//*****************************************************************************************************************************************************
//BIND
//Bind sirve para enlazar contextos con otros

//Hago un objeto persona
const persona = {
    nombre: "Dani",
    saludar: function (){
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();

//Creo otra persona osea otro contexto y lo enlazo al contexto persona por medio de bind, Bind recibe el contexto a enlazar
const otraPersona = {
    saludar: persona.saludar.bind(persona)
}

otraPersona.saludar();
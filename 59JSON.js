//JSON: JavaScript Object Notation
//Es un formato ligero de intercambio de datos
//Es un traductor para enviar informacion a otras interfaces con otros lenguajes por ejemplo
//Cuando manda informacion al banco para pago de cosas
//Viene a reemplazar a xml
//********************************************************************************* */


//voy a crear un objeto que despues va a ser traducido con JSON en el archivo datos.json
const objetoJson = {
    cadena: "dani",
    numero: 27,
    booleano: true,
    arreglo: ["gimnasio","basquet","programar"],
    objeto: {
        twitter:"@daniguanca",
        email: "dany12rp13@gmail.com"
    },
    nulo: null
}

console.log(objetoJson);

//El objeto JSON tiene 2 metodos IMPORTANTES
//Parse y Stringify
//PARSE agarra una cadena de text y lo convierte en un objeto para javascript
console.log(JSON);
console.log(JSON.parse("true"));

//Stringify hace lo contrario
//Agarra un objeto de javascript y lo convierte en cadena de texto
console.log(JSON.stringify(true));
//si le mando el objetoJson voy a tener lo mismo que puse en el arhivo JSON
console.log(JSON.stringify(objetoJson));



//ESTO VA EN datos.json PORQUE JSON NO ADMITE COMENTARIOS
//Todo archivo JSON empieza y termina con llaves
//LAS PROPIEDADES DE LOS OBJETOS VAN ENTRE DOBLE COMILLA
//************************************************************

//Voy a copiar mi objeto de 59JSON.js
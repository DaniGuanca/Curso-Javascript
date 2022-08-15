//voy a asignar dinamicamente propiedades al objeto usuario
//para hacer las asignaciones dinamicas es por medio de corchetes

const objUsuario = {

    //asi se hace las comunes que ya se solo es un ejemplo
    propiedad : "valor",
    //ESTO HICE DESPUES
    //tambien puedo asignar dinamicamente propiedad desde acá pero ya tengo que tener el valor de antemano
    [`Id_${Math.round(Math.random() * 100+5)}`] : "Valor aleatorio"
};
console.log(objUsuario);

usuarios = ["dani","lebron","milo","wade"];

//ESTO HICE PRIMERO
//dentro del corchete que indica la propiedad del objeto puedo asignar un nombre dinamicamente
usuarios.forEach((usuario,index) => objUsuario[`Id_${index}`] = usuario);

console.log(objUsuario);
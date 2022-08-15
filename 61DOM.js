console.log("*****************Elementos del Documento***************");
console.log(document.head);
console.log(document.body);
//el html entero
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
//trae todos los links de la pagina, no tengo ninguno devuelve array vacio
console.log(document.links);
//lo mismo de arriba pero trae imagenes
console.log(document.images);
console.log(document.scripts);
//devuelve objetos seleccionados pongo el temporizador asi me da tiempo a seleccionar
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);

//para escribir en el documento
document.write("<h2> Hola mundo desde el DOM </h2>");
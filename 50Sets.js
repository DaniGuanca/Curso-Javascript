//Los sets son como listas pero que no repite elementos
//esta bueno para filtrar elementos repetidos entonces en los sets salen una sola vez
//se crea usando new Set();
//NO AGREGA ELEMENTOS REPETIDOS NO LO TIENE EN CUENTA

const set = new Set([1,2,3,3,4,5,true,false,false,{},{},"hola","HOLA"]);
console.log(set);
console.log(set.size);

//para agregar elementos es como las listas con add
const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);

console.log("Recorriendo el set");
for (item of set){
    console.log(item);
}

console.log("Recorriendo el set2");
set2.forEach(elemento => console.log(elemento));
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

//Para ver un dato en una determinada posicion, set no tiene una funcion
//asi que hay que pasarlo a arreglo como hago abajo
let elArreglo = Array.from(set);

//ahora puedo mostrar elementos de determinada posicion
console.log("El primer elemento es:",elArreglo[0]);

//Si se puede borrar un elemento de los set
//como son datos unicos simplemente le mandas lo que queres borrar
set.delete("hola");

//has busca si tiene el elemento
console.log(set.has("hola"));

//para borrar todos los elementos de una se usa clear
set2.clear();
console.log(set2);
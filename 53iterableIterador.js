// el objeto symbol tiene un iterador muy buenos
// para usarlo se pone entre corchete despues de la variable [Symbol.iterator]()
//sirve para cualquier variable iterable incluso strings
const variableIterable = [1,2,3,4,5];

//accedo al iterador
const iterador = variableIterable[Symbol.iterator]();
console.log(iterador);

//usando next puedo ir pasando de elemento a elmento
//console.log(iterador.next());
//lo guardo en una variable para usarlo de forma mas comoda
let next = iterador.next();

//podria recorrer un arreglo asi
//next.done es el final del arreglo ya no hay siguiente elemento
while(!next.done){
    console.log(next.value);
    next = iterador.next();
}
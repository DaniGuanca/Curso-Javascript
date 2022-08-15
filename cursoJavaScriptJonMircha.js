//PARAMETROS REST Y SPREAD
//REST sirve para agregar varias variables y no se cuantas seran
//Para usarla se usan tres puntos suspensivos y la variable (...variable)

function sumar(a,b, ...c){
    let resultado = a + b;

    //aca le digo que sume las posibles variables restantes
    c.forEach(function (n){
        resultado += n
    });

    return resultado;
}


console.log(sumar(1,2,3,10,20));

//OPERADOR SPREAD

const arr1 = [1,2,3,4,5];
    arr2 = [6,7,8,9,0];

console.log(arr1);
console.log(arr2);


const arr3 = [arr1,arr2];

//esto me da un arreglo con dos arreglos adentro
console.log(arr3);

//si quiero un solo arreglo formado por los elementos de los arreglos anteriores se usa el operador SPREAD
//Tambien se usa puntos suspensivos y el objeto

const arr4 = [...arr1, ...arr2];
console.log(arr4);

console.log(arr4.length);
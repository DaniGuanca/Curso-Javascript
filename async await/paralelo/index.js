//IMPORTO LAS DOS FUNCIONES DE task.js
const { taskOne, taskTwo } = require('./tasks');

async function main(){
    try{
        //console.time dice cuanto tarda en ejecutarse un codigo hasta console.timeEnd
        console.time("Midiendo tiempo");

        //aca con este metodo hace que todo dentro del arreglo se ejecute en forma paralela, y guardo sus resultados en la constante resultados
        const resultados = await Promise.all([taskOne(), taskTwo()]);

        console.timeEnd("Midiendo tiempo");

        console.log("El valor de la tarea 1 es:", resultados[0]);
        console.log("El valor de la tarea 2 es:", resultados[1]);
    }
    catch(e){
        console.log(e);
    }
}

main();

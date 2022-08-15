//las promesas y funciones async esperan el resultado 
//se usa para cosas que no dan el resultado inmediatamente entoces lo espera


//IMPORTO LAS DOS FUNCIONES DE task.js
const { taskOne, taskTwo } = require('./tasks');

async function main(){
    try{
            //console.time dice cuanto tarda en ejecutarse un codigo hasta console.timeEnd
        console.time("Midiendo tiempo");
        const valor1 = await taskOne();
        const valor2 = await taskTwo();
        console.timeEnd("Midiendo tiempo");

        console.log("El valor de la tarea 1 es:", valor1);
        console.log("El valor de la tarea 2 es:", valor2);

    }
    catch(e){
        console.log(e);
    }
}

main();

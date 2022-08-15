//ASI SE IMPORTA EN JAVASCRIPT
const util = require('util');

//CONVIERTO SETTIMEOUT PARA PODER USARLA CON ASYNC Y AWAIT
const sleep = util.promisify(setTimeout);

//para exportar
module.exports = {
    async taskOne()
    {
        try{
            throw new Error("algun problema");
            await sleep(4000);
            return "primer tarea";

        }catch(e){
            console.log(e);
        }

    },

    async taskTwo()
    {
        try{
            await sleep(2000);
            return "segunda tarea";
            
        }catch(e){
            console.log(e);
        }
    }
};


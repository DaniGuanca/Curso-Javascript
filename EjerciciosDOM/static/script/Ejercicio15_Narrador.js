export default function narradorVoz () {
    const $selector = document.querySelector(".select-narrador");
    const $texto = document.getElementById("texto-narrador");
    const $btnLeer = document.getElementById("btn-leer-texto");
    const expresion = new SpeechSynthesisUtterance();
    let voces = [];

    //con la API SpeechSynthesis puedo hacer leer textos al navegador
    //tiene varios metodos como
    //SpeechSynthesis.cancel() para cancelar la lectura
    //SpeechSynthesis.getVoices() para traer todas las voces disponibles en el dispositivo
    //SpeechSynthesis.pause() para pausar la lectura
    //SpeechSynthesis.resume() para reaunadar la lectura
    //SpeechSynthesis.speak() para que inicie la lectura
    //EL OBJETO texto = new SpeechSynthesisUtterance("texto") es para pasarle texto a leer


    document.addEventListener("DOMContentLoaded", e =>{
        //getVoices se usa dentro del evento voiceschanged
        //para que traiga correctamente las voces uso el evento voiceschanged
        window.speechSynthesis.addEventListener("voiceschanged", e => {
            voces = window.speechSynthesis.getVoices();

            //creo una etiqueta option por cada voz y se la agrego a la etiqueta select como hijo
            voces.forEach( voz => {
                const $option = document.createElement('option');
                $option.value = voz.name;
                //nombre de voz y el idioma
                $option.textContent = `${voz.name} - ${voz.lang}`;
                $selector.appendChild($option);    
            });
        });
    });

    document.addEventListener("click", e => {
        if (e.target === $btnLeer){            
            //estaba probando
            //console.log(voces[1].name);
            //el selectedOptions en indice 0 es la opcion elegida, el value saca su nombre
            //console.log($selector.Options[0].value);

            //me fijo que haya elegido una opcion
            if($selector.selectedOptions[0].value != 0){
                expresion.text = $texto.value;

                /* ASI HICE YO
                //busco y guardo el indice de las voces que corresponde a la opcion seleccionada
                let indice = voces.findIndex( voz =>{
                    return voz.name === $selector.selectedOptions[0].value
                });

                //le asigno la voz elegida pasandole el indice donde esta
                expresion.voice = voces[indice];
                */

                //MIRCHA LO HIZO EN UNA UNICA LINEA CON LA FUNCION find()
                expresion.voice = voces.find(voz => voz.name === $selector.selectedOptions[0].value);

                window.speechSynthesis.speak(expresion);
            }else {
                alert("Elegi una voz");
            }            
        }
    });

    

}
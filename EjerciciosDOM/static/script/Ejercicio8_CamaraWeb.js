export default function camaraWeb(video) {
    const $video = document.getElementById(video);

    //probando lo que hace
    //console.log(navigator.mediaDevices.getUserMedia);

    //Antes se hacia la validacion de que si existia getUserMedia en el navegador para usar
    //ahora todos vienen con esa funcion pero igual por las dudas hago el if de validacion
    if(navigator.mediaDevices.getUserMedia){
        //getUserMedia tiene varios parametros como audio y video
        //la informacion de la camara la tira en una variable stream
        //la funcion es una promise, asi que tiro por then lo que hace, y catch el error
        navigator.mediaDevices.getUserMedia({video:true,audio:false})
        .then(stream =>{ 
            console.log(stream);
            //ahora le tengo que mandar el stream al source de la etiqueta video
            //el source es cadena de texto y stream es objeto
            //pero $video tiene un source para objetos y es srcObject
            $video.srcObject = stream;
            //ahi solo queda una imagen estatica
            //para que se vea todo como un video hay usar el metodo play
            $video.play();
        })
        .catch(error => {
            $video.insertAdjacentHTML("beforebegin",`<p><mark>Error: ${error}</mark></p>`);
            console.log(error)
        });
    }


    //************************* CON ASYNC AWAIT ***************************/
    //Mircha lo hizo con promesa, ahora abajo voy a poner como seria con async await
    /* if(navigator.mediaDevices.getUserMedia){
        async function iniciarCamara(){
            try {
                const stream = await navigator.mediaDevices.getUserMedia({video: true,audio: false});
                $video.srcObject = stream;
                $video.play();
            }catch(e){
                $video.insertAdjacentHTML("beforebegin",`<p><mark>Error: ${error}</mark></p>`);
                console.log(error)
            }
        }

        iniciarCamara();
    } */
}
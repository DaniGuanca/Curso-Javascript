//Lo hago para multiples videos con el data atritue data-video-inteligente
export default function videoInteligente(){
    const $videos = document.querySelectorAll("video[data-video-inteligente]");

    //cuando el video no esta en foco y cambio de ventana y vuelvo a la misma el video se reproduce
    //igual aunque no este en foco, para solucionar eso voy a usar el data atribute data-playState
    //que le cree en la etiqueta, para que tambien verifique si se esta reproduciendo o no

    const opciones = {
        threshold: 0.5
    }

    const callbackObserver = entries => {
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                entry.target.play();
                entry.target.setAttribute("data-playState", true);
            }else{
                entry.target.pause();
                entry.target.setAttribute("data-playState", false);
            }

            window.addEventListener("visibilitychange",e =>{
                if(document.visibilityState !== "visible" || 
                entry.target.getAttribute("data-playState") == "false" ){
                    entry.target.pause();
                }else{
                    entry.target.play();
                }
            });
        });        
    }

    const observer = new IntersectionObserver(callbackObserver,opciones);
    $videos.forEach(video => observer.observe(video));


    //Para esto voy a usar la API Page Visibility
    //la API da metodos al documento como:
    //document.hidden (devuelve true o false si la ventana esta activa o no)
    //document.visibilityState (devuelve hidden o visible segun como esta la ventana)
    //visibilityChange un evento que se dispara cuando cambia la visibilidad de la ventana

    //ASI HABIA HECHO YO PARA UN VIDEO
    /* document.addEventListener("visibilitychange", e =>{
        if (document.hidden || playState == false ){
            video.pause();
        }else{
            video.play();
        }
    });*/

    //MIRCHA METE EL EVENTO VisibilityChange DENTRO DEL MISMO INTERSECTION OBSERVER ESTA MEJOR

}
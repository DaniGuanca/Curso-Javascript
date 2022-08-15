export default function scrollSpy(claseSecciones, linksNavegacion){
    //para llamar al data atribute personalizado simplemente lo nombro
    //pero como tengo dos objetos diferentes con el data atribute
    //y yo quiero trabajarlos por separado entonces se pone
    //nombreEtiqueta[dataAtribute]
    const $secciones = document.querySelectorAll("section[data-scroll-spy]");
 

    //la API intersectionObserver sirve para saber si el foco esta puesto en algun elemento
    //o parte del elemento dependiendo del valor threshold
    //con eso se puede hacer el scrollSpy o tambien contar la cantidad de tiempo que esta viendo el articulo
    //tambien con eso hacen lo de habilitar el boton cuando ponen terminos y condiciones
    //que hay que scrollear todo

    //las opciones del intersectionObserver
    const opciones = {
        //root :   (root es el elemento base sobre el que mide las intersecciones, por defecto es
        // el document que generalmente es asi asi que lo dejamos asi)
        //rootMargin: (el rootmargin es para definir los margenes a los lados, puedo poner uno por uno
        //o un unico valor para los cuatro lados, siempre en pixeles
        //margen positivo es alrededor el elemento
        //margen negativo es dentro del elemente QUE ES EL QUE USAMOS PARA EL SCROLLSPY
        //ASI DETECTA UN ELEMENTO)
        // rootMargin: "-250px",
        //SIN EMBARGO LA MEJOR OPCION ES USAR EL threshold OSEA EL LIMITE
        //0 es apenas se vea
        //0.5 es cuando el 50% del elemento sea visible
        //tambien se puede poner entre minimo y maximo con corchetes
        //[minimo, maximo]
        threshold : [0.5, 0.75]
    }

    //la funcion que se dispara cuando entra en foco el target del intersectionObserver
    //la funcion ya tiene un entries y un observer
    const funcionScrollspy = (entries,observer) =>{
        //isIntersecting te dice si esta visible o no 
        //mircha usa el id de las seccion y el href de los enlaces en vez del indice
        //porque tienen el mismo valor
        
        entries.forEach (entry => {
            const id = entry.target.getAttribute("id");

            if(entry.isIntersecting){
                //me traigo el primer selector con el data atribute y el href que le paso
                //y le agrego la clase active
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.add("active");

            }else{
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.remove("active")
            }
        })
    };

    //creo una variable que va a tener el IntersectionObserver
    //la API intersectionObserver recibe dos parametros, uno la funcion a ejecutar cuando se cumplan las opciones
    //y el otro son las opciones
    var observer = new IntersectionObserver(funcionScrollspy, opciones);

    //ahora llamo al observador y que observe como target cada una de las secciones
    $secciones.forEach (elemento => {
        observer.observe(elemento);
    })
}
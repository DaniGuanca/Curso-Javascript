//ESTA ES MI SOLUCION
//LA DE MIRCHA ES PARECIDA PERO EL CALLBACK LO HACE MUCHO MAS SENCILLO Y ESTA MEJOR
//ESTA EN EL ARCHIVO: menuCostadoScrollSpyMIRCHAbien.js

export default function scrollSpy(){
    //para llamar al data atribute personalizado simplemente lo nombro
    //pero como tengo dos objetos diferentes con el data atribute
    //y yo quiero trabajarlos por separado entonces se pone
    //nombreEtiqueta[dataAtribute]
    const $secciones = document.querySelectorAll("section[data-scroll-spy]");
    const $linksMenu = document.querySelectorAll("a[data-scroll-spy]");
    
    //convierto $secciones en arreglo para usar el metodo indexOf mas abajo
    const seccionesArreglo = Array.from($secciones);

    //esta funcion es para colorear el link y la voy a usar en la funcion del intersectionObserver
    const activarLinkPorIndice = indice =>{
        //pregunto si ya esta activo y me salgo si ya esta activo
        if ($linksMenu[indice].classList.contains("active")) return;

        //Desactivo el color a todos los otros links
        $linksMenu.forEach(elemento => {
            elemento.classList.remove("active");
        });

        //y activo el color del link del target que disparo la funcion
        $linksMenu[indice].classList.add("active");
    }


    //la API intersectionObserver sirve para saber si el foco esta puesto en algun elemento
    //o parte del elemento dependiendo del valor threshold
    //con eso se puede hacer el scrollSpy o tambien contar la cantidad de tiempo que esta viendo el articulo
    //tambien con eso hacen lo de habilitar el boton cuando ponen terminos y condiciones
    //que hay que scrollear todo

    //las opciones del intersectionObserver
    const opciones = {
        threshold : [0, 0.5, 1]
    }

    //la funcion que se dispara cuando entra en foco el target del intersectionObserver
    //la funcion ya tiene un entries y un observer
    const funcionScrollspy = (entries,observer) =>{
        //trabajo con entries 0 porque es el primero que dispara

        //si todavia no llego al elemento no hago nada
        if(entries[0].intersectionRatio <= 0) return;

        //si pasa el 75% del elemento recien pinto el link
        //con target veo cual es el elemento que disparo
        if(entries[0].intersectionRatio > 0.5) {
            //solo para probar como funciona
            console.log("pasaste el 75% de:",entries[0].target);
            console.log("el indice de la seccion es:",seccionesArreglo.indexOf(entries[0].target));
            //
            //llamo a la funcion que pinta el link y le paso el indice de la seccion
            //se corresponden los indices de los links con los de secciones por eso mando 
            //el indice de secciones directamente
            let indiceSeccion = seccionesArreglo.indexOf(entries[0].target);
            activarLinkPorIndice(indiceSeccion);
        }
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
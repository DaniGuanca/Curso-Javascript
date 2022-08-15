export default function btnTheme(boton){
   //[data-theme] es categoria
   //SOLUCION DE MIRCHA
   //usa un querySelectorAll para traer a todos los elementos que voy a cambiar el tema a oscuro o viceversa
   //en vez de asignarle la clase uno por uno, le asigna a todos de una vez
   //el "[data-theme]" del query hace referencia a cualquier elemento que tenga la palabra data-theme al lado
   //entonces en el html elijo a que elementos voy a poner en oscuro poniendole esa palabra 
   //por ejemplo al html le puse asi <html data-theme lang="es"> para que el query lo agarre
   //la palabra puede ser cualquiera no hace falta que sea si o si data-theme, mientras sea igual en el html y en el query
   const $boton = document.querySelector(boton);
   const $selectors = document.querySelectorAll("[data-theme]"); 
   
   
   //con la API localStorage puedo guardar configuraciones para que queden aunque cierre el navegador
   //el getItem trae el valor guardado
   //ESTO TIENE QUE ESTAR EN EL EVENTO DOMCONTENTLOAD
   //YO NO LO PUSE PORQUE YA ESTOY LLAMANDO DESDE ESE EVENTO LA FUNCION
    if(localStorage.getItem("tema") === "dark"){
        $selectors.forEach(elemento => elemento.classList.add("dark"));
        $boton.innerHTML = "☀️";
    }else{
        $selectors.forEach(elemento => elemento.classList.remove("dark"));  
        $boton.innerHTML = "🌙";
    };


    //el querySelectorAll tira una coleccion de nodos asi que lo trabajo con foreach
    
    $boton.addEventListener('click',e=>{
        if ($boton.textContent === "🌙"){
        
            $selectors.forEach(elemento => elemento.classList.add("dark"));
            $boton.innerHTML = "☀️";
        
            //el setItem de local storage recibe como parametro el par llave-valor a guardar
            localStorage.setItem("tema","dark");

        }else{

            $selectors.forEach(elemento => elemento.classList.remove("dark"));    
            $boton.innerHTML = "🌙";

            //el remove lo borra
            localStorage.removeItem("tema");
        }        
    });

}  
     
    //Esta es mi solucion, esta bien pero tendria que hacer el add classlist para cada elemento que quiera pasar
    //a cambio con la solucion de mircha hace todos de una sola vez 

    /* const $boton = document.querySelector(boton);
    const $html = document.documentElement;

    if (!$html.classList.contains('dark')){
        $boton.innerHTML = "🌙";
    }else{
        $boton.innerHTML = "☀️";
    }    

    $boton.addEventListener('click',e=>{
        if (!$html.classList.contains('dark')){
            $html.classList.add("dark");
            $boton.innerHTML = "☀️";
        }else{
            $html.classList.remove("dark");
            $boton.innerHTML = "🌙";
        }        
    }); */

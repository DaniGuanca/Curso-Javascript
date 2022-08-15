export default function validarFormulario(){
   const $form = document.querySelector(".formulario-contacto");
   //me traigo todos los elementos del formulario que sean required porque esos quiero validar los otros
   //no me importan
   // * significa todos, entre corchete required significa que tengan ese atributo
   const $inputs = document.querySelectorAll(".formulario-contacto *[required]");

   
   
   //voy a crear spans dinamicamente que van a decir un mensaje de error para cada input requerido
   $inputs.forEach (input => {
    //creo la etiqueta span
    const $span = document.createElement("span");
    //le asigno un id al span que sea igual al nombre de la etiqueta input
    $span.id = input.name;
    //el mensaje de error lo tengo guardado en el atributo title del input asi que lo pongo como texto
    //del span
    $span.innerText = input.title;
    //le pongo los estilos css que hice
    $span.classList.add("contact-form-error","none");
    //agrego el span al input como hijo inmediato
    input.insertAdjacentElement("afterend", $span);
   });


   //las validaciones las puedo hacer al evento submit o si lo quiero mas dinamico digamos al teclear
   //se usa el evento keyUp, es a gusto, ahoral o hago con keyUp
   document.addEventListener("keyup", e => {
    if(e.target.matches(".formulario-contacto [required]")){
        let $input = e.target;
        //en el atributo pattern de la etiqueta input del formulario puse la validacion asi que me la traigo
        //como el textArea no admitia pattern cree un data atribute data-pattern asi que tengo que considerarlo
        //uso operador cortoCircuito
        //para acceder a los data atibute de un elemento se usa dataset seguido del nombre
        let pattern = $input.pattern || $input.dataset.pattern;

        //veo si tienen atributo pattern o no, y si tiene algo escrito
        if (pattern && $input.value !== "") {
            //voy a guardar la expresion regular y voy usar el metodo exec sobre
            //el contenido del input para que vea si cumple o no la condicion de la expresion
            let regExp = new RegExp(pattern);
            return !regExp.exec($input.value)
            //el id del span es igual al name de la etiqueta asi que me lo traigo al span para
            //agregarle o quitarle la clase
                ? document.getElementById($input.name).classList.add("is-active") 
                : document.getElementById($input.name).classList.remove("is-active");
        }

        if(!pattern) {
            return $input.value === ""
                ? document.getElementById($input.name).classList.add("is-active") 
                : document.getElementById($input.name).classList.remove("is-active");
        }
    }
   });

   //VOY A SIMULAR EL ENVIO DEL FORMULARIO
   document.addEventListener("submit", e =>{
    //prevengo el comportamiento por defecto porque no tengo backend, estoy simulando un envio
    //e.preventDefault();
    //comente el preventDefault porque estoy usando esa pagina que envia mails sin programar
    
    alert("Enviando Formulario");

    const $loader = document.querySelector(".contact-form-loader");
    const $response = document.querySelector(".contact-form-response");

    //el loader.svg lo puedo abrir con xml y en la propiedad stroke esta su color asi lo cambio

    $loader.classList.remove("none");

    //voy a simular con timeout el retardo de la respuesta
    setTimeout(() => {
        $loader.classList.add("none");
        $response.classList.remove("none");
        //limpio el formulario
        $form.reset();

        //borro el mensaje despues de 3 segundos
        setTimeout(() => {
            $response.classList.remove("none");
        }, 3000);

    },3000)

   });

}
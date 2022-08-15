    export function ContactForm () {
        //Toda la teoria del formulario de contacto esta en los ejercicios anteriores ajax
        const $form = document.createElement('form');
        //Para el styled component o estilos dinamicos
        const $styles = document.getElementById("dynamic-styles");

        $form.classList.add("formulario-contacto");

        //Pego los estilos dinamicamente 
        $styles.innerHTML = `
          .formulario-contacto {
            --form-ok-color: #4caf50;
            --form-error-color: #f44336;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
          }
      
          /* > * significa todos los hijos directos */
          .formulario-contacto > * {
            padding: 0.5rem;
            margin: 1rem auto;
            /* estan en linea inline asi hago display block para poner uno abajo de otro*/
            display: block;
            width: 100%;
          }
      
          /*para que no puedan cambiar el tamaño del textarea*/
          .formulario-contacto textarea {
            resize: none;
          }
      
          /*estilo para el titulo y para la etiqueta de respuesta*/
          .formulario-contacto legend,
          .contact-form-response {
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
          }
      
          /*estilo para todas las letras*/
          .formulario-contacto input,
          .formulario-contacto textarea {
            font-size: 1rem;
            font-family: sans-serif;
          }
      
          /*estilo especifico para el boton que es un input con type submit*/
          .formulario-contacto input[type="submit"] {
            width: 50%;
            font-weight: bold;
            cursor: pointer;
          }
      
          /*estilo para todos los placeholder del formulario, * significa todos*/
          .formulario-contacto *::placeholder {
            color: black;
          }
      
          /*css tiene propiedades para la validacion de formularios
          estos son required: valid e invalid
          todo elemnto dentro de formulario-contacto que tenga el atributo required en valid*/
          .formulario-contacto [required]:valid {
            border: thin solid var(--form-ok-color);
          }
      
          .formulario-contacto [required]:invalid {
            border: thin solid var(--form-error-color);
          }
      
          /*para mostrar mensajes de error voy a usar SPAN dinamicamente con javascript
          los estilos que van a tener son estos
          margin-top a -1rem es para que este pegado al input*/
          .contact-form-error {
            margin-top: -1rem;
            font-size: 80%;
            background-color: var(--form-error-color);
            color: #fff;
            transition: all 800ms ease;
          }
      
          .contact-form-error.is-active {
            display: block;
      
            /* lo muestro a traves de una animacion, la animacion que va a usar es show-message que yo voy a crear, 
            va a durar 1 segundo, se va a ejecutar 1 vez de forma normal, 0s de retardo, efecto ease-out
            both significa que va a conservar los estilos con los que la animacion termine*/
            animation: show-message 1s 1 normal 0s ease-out both;
          }
      
          .contact-form-loader{
            text-align: center;
          }
      
          .none {
            display: none;
          }
      
          /*la animaciones se crean con @keyframes*/
          @keyframes show-message {
            /*desde el 0% de la animacion */
            0% {
              visibility: hidden;
              opacity: 0;
            }
        
            /*el 100% de la animacion*/
            100% {
              visibility: visible;
              opacity: 1;
            }
          }
        `;


        //Cuando uso `` visual studio toma las barras invertidas \ como caracter especial, entonces \s no funciona
        //para que funcione tengo que agregarle otra barra invertida \ asi le indico que lo lea normalmente \\s

        $form.innerHTML = `
            <!-- Legend sirve como titulos dentro de formulario-->
            <legend>Envianos tus comentarios</legend>

            <!-- Con el atributo title pongo el mensaje cuando no se cumple una validacion
            El atributo pattern permite usar EXPRESIONES REGULARES por lo tanto puedo
            VALIDAR LOS CAMPOS desde el html poniendo la expresion regular en el atributo pattern-->
            <input type="text" name="name" placeholder="Escribe tu nombre" 
            title="Nombre solo acepta letras y espacios en blanco" 
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>

            <input type="mail" name="email" placeholder="Escribe tu mail" 
            title="Email incorrecto" 
            pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" 
            required>

            <input type="text" name="_subject" placeholder="Asunto a tratar" 
            title="El asunto es requerido" required>

            <!-- textarea no admite el atributo pattern, asi que invento un data atribute
            data-pattern con lo que quiero validar y lo trabajo desde javascript-->
            <textarea name="comments" cols="50"  rows="5" placeholder="Escribe tus comentarios"
            title="Tu comentario no debe exceder los 255 caracteres"
            data-pattern="^.{1,255}$" 
            required></textarea>

            <input type="submit">

            <!-- esto es una imagen sale mientras manda el formulario
            la clase none es para ocultar-->                
            <div class="contact-form-loader none">
                <img src="app/assets/loader.svg" alt="Cargando">
            </div>
            <!-- la respuesta a la peticion como estoy simulando un envio lo pongo asi
            pero en realidad se hace ajax y se pone la respuesta del servidor-->
            <div class="contact-form-response none">
                <p>Los datos han sido enviados</p>
            </div>
        `;


        function validationsForm(){

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

            
            document.addEventListener("submit", async e =>{
            const $loader = document.querySelector(".contact-form-loader");
            const $response = document.querySelector(".contact-form-response");
            
            try {

                e.preventDefault();

                $loader.classList.remove("none");

                let options = {
                method: "POST",
                //Creo y le paso el formulario como FormData porque este hace automaticamente el parseo del input y su valor
                //osea no hace falta poner valor = form.name.value
                body: new FormData(e.target)
                }

                let response = await fetch("https://formsubmit.co/ajax/dany12rp13@gmail.com", options);
                let json = await response.json();

                if(!response.ok) throw {status:response.status, statusText:response.statusText};

                $loader.classList.add("none");
                $response.classList.remove("none");
                $response.innerHTML = `<p>${json.message}</p>`;
                //limpio el formulario
                $form.reset();
                
            } catch (error) {
                let message = error.statusText || "Ocurrio un error";
                $respone.innerHTML = `<p>Error ${error.status}: ${message}</p>`;

            } finally {
                setTimeout(() => {
                $response.classList.add("none");
                $response.innerHTML = '';
                }, 3000);
            }

            });
        }


        //Como el llamado a la funcion es mas rapido que el cargado del html, van a haber algunos errores de
        //que no existe el elemento, entonces para evitar eso pongo un setTimeout asi tarda un poquito en cargar
        //la funcion
        setTimeout(() => validationsForm(), 100);
        
        

        return $form;
    }
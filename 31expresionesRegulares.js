//Sirven para varias cosas una de esas es buscar letras o cadenas en textos
//por ejemplo en el siguiente texto busco con expresion regular

let texto = "Just waking up in the morning gotta thank God I don't know but today seems kinda odd No barking from the dogs, no smog And momma cooked a breakfast with no hog I got my grub on, but didn't pig out Finally got a call from a girl want to dig out Hooked it up on later as I hit the do' Thinking will i live another twenty fo'";

//Para usar expresiones regulares se usa la funcion RegExp("palabra a buscar","bandera[son para filtrar y cosas asi]")
// la bandera "i" es para que ignore mayusculas y minuscula
let expReg1 = new RegExp("just","i");

// otra forma de usarlas es escribiendo la palabra a buscar entre barras // seguido de la bandera
let expReg2 = /dog/i;

//el metodo test te dice si esta o no (true o false)
console.log(expReg2.test(texto));

//el metodo exec te manda un arreglo de todas las veces que encontro la cadena y la posicion en el texto
console.log(expReg2.exec(texto));


/*
EN VEZ DEL TEXTO A BUSCAR TAMBIEN SE PUEDEN PONER LAS SIGUIENTES EXPRESIONES:
\t — Representa un tabulador.
\r — Representa el "retorno de carro" o "regreso al inicio" o sea el lugar en que la línea vuelve a iniciar.
\n — Representa la "nueva línea" el carácter por medio del cual una línea da inicio. Es necesario recordar que en Windows es necesaria una combinación de \r\n para comenzar una nueva línea, mientras que en Unix solamente se usa \n y en Mac_OS clásico se usa solamente \r.
\a — Representa una "campana" o "beep" que se produce al imprimir este carácter.
\e — Representa la tecla "Esc" o "Escape"
\f — Representa un salto de página
\v — Representa un tabulador vertical
\x — Se utiliza para representar caracteres ASCII o ANSI si conoce su código. De esta forma, si se busca el símbolo de derechos de autor y la fuente en la que se busca utiliza el conjunto de caracteres latín-1 es posible encontrarlo utilizando \xA9".
\u — Se utiliza para representar caracteres Unicode si se conoce su código. "\u00A2" representa el símbolo de centavos. No todos los motores de Expresiones Regulares soportan Unicode. El .Net Framework lo hace, pero el EditPad Pro no, por ejemplo.
\d — Representa un dígito del 0 al 9.
\w — Representa cualquier carácter alfanumérico.
\s — Representa un espacio en blanco.
\D — Representa cualquier carácter que no sea un dígito del 0 al 9.
\W — Representa cualquier carácter no alfanumérico.
\S — Representa cualquier carácter que no sea un espacio en blanco.
\A — Representa el inicio de la cadena. No un carácter sino una posición.
\Z — Representa el final de la cadena. No un carácter sino una posición.
\b — Marca la posición de una palabra limitada por espacios en blanco, puntuación o el inicio/final de una cadena.
\B — Marca la posición entre dos caracteres alfanuméricos o dos no-alfanuméricos.
*/




        //ahora voy a validar que lo que asigne sea un nombre o apellido osea que solo acepte letras y espacios en blanco
        //el if tiene esa forma rara porque es largo y asi es mas comodo escribir
        //la validacion la hago con expresiones regulares dentro del corchete va lo unico que se permite a la z es a-z y esas cosas [A-Za-zÑñáúéíóú]
        //\s es el caracter en blanco
        //el signo ^ antes del corchete indica que no puede haber nada antes de los caracteres que se permiten en el corchete
        //el signo + despues del corchete indica que el test lo hace caracter por caracter
        //el signo $ despues del corchete y el + indica que no puede haber nada despues de todos los caracteres testeados
        //la letra g es un comodin para global osea que aplique el metodo test a todos los caracteres
        //la funcion test se fija que exista en la cadena todo lo que puse en la expresion regular
        if(
            (prop === "nombre" || prop === "apellido")&&
            !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))
        )
        {
            return console.error(`Solo se aceptan nombres validos`);
        }









/* ESTAS EXPRESIONES REGULARES SIRVEN PARA VALIDAR FORMULARIOS
Nombre solo acepta letras
Correo solo mail valido
Comentario acepta todo pero no mas de 255 caracteres

- Nombre: ^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$
- Correo: ^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$
- Comentarios: ^.{1,255}$ */

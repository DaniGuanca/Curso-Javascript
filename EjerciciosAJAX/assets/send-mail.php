<?php

/* ESTE CODIGO ESTA BIEN PERO NO FUNCIONA EN LOCALHOST PORQUE ENVIA MAIL ENTONCES HAY QUE INSTALAR 
UN SERVIDOR FTTP O SUBIR TODO A UN SERVIDOR WEB QUE PERMITA EL ENVIO DE ARCHIVOS
SI INSTALAS UN FTTP SOLO HAY QUE CAMBIAR LA URL DE LA PETICION FETCH AL NUEVO SERVIDOR Y EL PERMISON 
CORS DE ESTE CODIGO PARA QUE PERMITA ESE ORIGEN */

//cuando se manda datos a travez de post la variable $_POST se crea, isset es para ver si existe o no
//la variable $_POST tiene todos los datos que entran por Post a travez de un name del input del form
if(isset($_POST)){
    //error_reporting en 0 quiere decir que no va a mandar reportes de errores a front, 
    //esto sirve en produccion mas que nada donde no se tienen que ver
    //aparte los reportes de errores no lo manda como diccionario entonces no puede parsear a json
    error_reporting(0);

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["_subject"];
    $comments = $_POST["comments"];
    //hago una variable domain para mostrar en el mensaje desde donde se mando y quede lindo
    //la url del dominio se puede sacar de la variable $_SERVER en la propiedad HTTP_HOST
    $domain = $_SERVER["HTTP_HOST"];

    //CUERPO DEL MAIL
    $to = "dany12rp13@gmail.com";
    $subject_mail = "Contacto desde el formulario del sitio $domain: $subject";
    $message ="
    <p>
    Contacto desde el formulario del sitio <b>$domain</b>
    </p>
    <ul>
        <li>Nombre: <b>$name</b></li>
        <li>Email: <b>$email</b></li>
        <li>Asunto: $subject</li>
        <li>Comentarios: $comments</li>
    </ul>
    ";   
    //si no especifico el header lo manda como texto plano asi que lo especifico
    //el punto (.) en php sirve para concatenar, concateno tres cabeceras
    //MIME-Version: 1.0\r\n  es para especificar que las cabeceras van a ser de MIME y la version
    //y \r es enter y \n es salto de linea para que en las cabeceras del navegador vayan en lineas separadas
    //Le pongo cabecera tipo htm y el salto de linea
    //Cuando llegan mensajes sin remitentes generalmente se van a spam, entonces pongo un from para que no vaya a spam
    $headers = "MIME-Version: 1.0\r\n"."Content Type: text/html; charset=UTF-8\r\n".
    "From: Envio automatico no responder <no-reply@$domain>";
    
    //La funcion que envia un mail en php es mail(destino,asunto,mensaje,[adicionales como cabeceras])
    //devuelve verdadero si pudo enviarlo y falso sino
    $send_mail = mail($to, $subject_mail, $message, $headers);

    if($send_mail){
        //hago un arreglo
        $res = [
            "err"=>false,
            "message"=>"Tus datos han sido enviados"
        ];
    }else {
        $res = [
            "err"=>true,
            "message"=>"Error al enviar tus datos. Intenta nuevamente"
        ];
    }


    /* Ahora si sigue tirando errores CORS (como Access Control Allow Origin) despues de esto quiere decir 
    que la API a la que consultas no permite que sea accedida desde otro servidor osea no permite CORS.
    Si no sos el dueño de la API ya no podes hacer nada, pero si sos dueño de la API o queres hacer que 
    tu API servidor permita CORS se hace lo siguiente:

    Se agregan los headers que tenga Acces-Control-Allow-Origin y los dominios permitidos:
    Acces-Control-Allow-Origin: tuDominio */

    //Si se pone Acces-Control-Allow-Origin: * quiere decir que cualquier servidor puede acceder a tu API 
    //el asterisco significa todos.
    //header("Acces-Control-Allow-Origin:*");
    //Por ejemplo si pones Acces-Control-Allow-Origin: https://google.com 
    //quiere decir que externamente solo el dominio de google.com puede acceder a tu API
    header("Acces-Control-Allow-Origin:https://google.com");
    //siempre hay que especificar que la respuesta es en json
    header("Content-Type: application/json");
    //mando la respuesta en json
    echo json_encode($res);
    //con exit termino la peticion del correo
    exit;
}
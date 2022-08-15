<?php
//echo "Hola respuesta desde el servidor";
//var_dump es el console.log de js
//$_FILES son los archivos subidos por POST
//var_dump($_FILES);

//EN PHP LAS VARIABLES SE DECLARAN CON DOLAR, NO CON VAR CONST Y ESO

//isset dice si un objeto es null o no
//entre corchetes le pongo el nombre de la variable que subi desde frontend entonces compruebo si el archivo file es null o no
if(isset($_FILES["file"])){
    //con el segundo corchete accedo a la propiedad name del arreglo
    $name = $_FILES["file"]["name"];
    $file = $_FILES["file"]["tmp_name"];
    $error = $_FILES["file"]["error"];

    //move uploaded file mueve los archivos subidos, recibe el arhivo y el destino
    $destination = "../files/$name";
    //si se sube devuelve verdadero sino devuelve falso
    $upload = move_uploaded_file($file, $destination);

    if($upload){
        //http_response_code permite enviar el codigo que le ponemos en parentesis
        $res = array(
            "err" => false,
            "status" => http_response_code(200),
            "statusText" => "Archivo $name subido con exito",
            //esto es para mandar el arhivo de nuevo, es solo para mostrar como sirve, no tiene sentido sino
            "files" => $_FILES["file"]
        );
    } else {
        $res = array(
            "err" => true,
            "status" => http_response_code(400),
            "statusText" => "Error al subir el archivo $name",
            //esto es para mandar el arhivo de nuevo, es solo para mostrar como sirve, no tiene sentido sino
            "files" => $_FILES["file"]
        );
    }

    //transformo en json la salida y la mando
    echo json_encode($res);
}
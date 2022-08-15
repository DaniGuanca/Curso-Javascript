export default function nuevaVentanaResponsive(formulario){
    const $formulario = document.getElementById(formulario);
    let ventana;  
    let pagina;
    //en vez de click busco el evento submit que corresponde al boton que hace le submit
    //podria hacer el addEventListener al formulario, pero lo hago al documento con delegacion
    //para buena practica
    document.addEventListener("submit",e => {
        //no uso el target.matches porque este recibe id con # y clases con .
        //yo tengo el string sin eso, asi que directamente comparo el elemento con ===
        if (e.target === $formulario){
            //el submit del formulario tiene como comportamiento por defecto redireccionar
            //a la pagina que tiene en action y si no tiene nada en action se redirecciona
            //a la misma pagina, hago el preventDefault porque lo voy a manejar por javascript
            //asi que paro el comportamiento por defecto
            e.preventDefault();
            pagina = `http://${$formulario.direccion.value}`;
            ventana = window.open(pagina,"cualquierValor",`innerWidth=${$formulario.ancho.value},innerHeight=${$formulario.alto.value}`);
        }
    });
    
    document.addEventListener("click",e=>{
        if(e.target === $formulario.cerrar){
            ventana.close();
        }
    })
}
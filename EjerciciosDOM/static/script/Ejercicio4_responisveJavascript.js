export default function responsiveMedia(id,mq,mobileContent,desktopContent) {
    //para guardar la mediaQuery
    let breakpoint = window.matchMedia(mq);

    //matchmedia en vez de addEventListener tiene addListener que recibe una funcion
    const responsive = (e)=>{
        //si la mediaquery se cumple tira true
        if(e.matches){
            //cumple que anchura minima es 1024 entonces es escritorio
            document.getElementById(id).innerHTML = desktopContent;
        }else{
            document.getElementById(id).innerHTML = mobileContent;
        }
    }

    //para cada vez que se cambie el valor width
    breakpoint.addListener(responsive);
    //cuando abris la pagina o recargas no estas cambiando el width entonces llamo a la funcion asi
    //tambien toma los cambios cuando carga la pagina ES COMO EL DOMCONTENTLOAD
    responsive(breakpoint);
}
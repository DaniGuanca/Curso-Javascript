//Browser Object Model
//inner y outter width y heigth es el tamaño de la vantana y pantalla
window.addEventListener("resize",e=>{
    console.clear();
    console.log("******Evento Resize********");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
})

//scroll cuanto bajo o adelanto el scroll
window.addEventListener("scroll", e=>{
    console.log("******Evento Scroll********"); 
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
})

window.addEventListener("load",e=>{
    console.log("******Evento Load********");  
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})

document.addEventListener("DOMContentLoaded",e=>{
    console.clear();
    console.log("******Evento DOMContentLoaded********");  
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})

//ES MAS EFICIENTE DOMContentLoaded que load
//porque domContentLoad no espera a que se cargue los estilos y scripts

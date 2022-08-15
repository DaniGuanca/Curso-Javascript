export function clickBtnTop(boton){
    const $boton = document.querySelector(boton);

    $boton.addEventListener('click',e=>{
        document.documentElement.scrollTop = 0; 
    });    
}

export function appearBtn (boton){
    const $boton = document.querySelector(boton);

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        //le agrego o saco la clase de css hidden que hice para que aparezca o desaparezca
        $boton.classList.remove("hidden");
    }else{
        $boton.classList.add("hidden");
    }
}
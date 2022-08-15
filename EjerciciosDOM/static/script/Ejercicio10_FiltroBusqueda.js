export default function filtro(idInput,claseTarjeta){
    const $input = document.getElementById(idInput);
    const $tarjetas = document.querySelectorAll(claseTarjeta);

    //para que se dispare cuando suelte la tecla
    //siempre es buena practicca usar delegacion de eventos
    document.addEventListener("keyup", e=>{
        if(e.target === $input){
            $tarjetas.forEach(tarjeta => {
                //console.log($input.value.trim());
                //console.log(tarjeta.children[1].innerHTML);  
                //yo habia puesto tarjeta.children[1].innerHTML
                //mircha directamente puso textContent y funciona
                if( !(tarjeta.textContent.toLowerCase()).includes($input.value.trim().toLowerCase()) )  {
                    //la clase filter del css que esconde el elemento
                    tarjeta.classList.add("filter");
                }else{
                    tarjeta.classList.remove("filter");
                }
            });
        }
    })
    
}


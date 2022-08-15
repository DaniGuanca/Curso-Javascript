export default function hamburgerMenu(panelBtn, panel, link){
    const d = document;

    d.addEventListener("click",e=>{
        //pongo el or con el espacio asterisco porque significa cualquier hijo del panelbtn 
        //cualquier elemento dentro del boton
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");
            //ahora la animacion del boton que en la pagina dice como se pone
            //basicamente se pone is active
            d.querySelector(panelBtn).classList.toggle("is-active");
        }

        //aca uso remove porque solo quiero sacar, no prender y apagar
        if(e.target.matches(link)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
}
export default function comprobarConexion(){

    //navigator.onLine te dice si esta online o no    
    
    const isOnLine = () =>{
        const $div = document.createElement('div');

        if(navigator.onLine){
            $div.textContent = "Conexion Reestablecida";
            $div.classList.remove("offline");
            $div.classList.add("online");
        }else{
            $div.textContent = "Conexion Perdida";
            $div.classList.remove("online");
            $div.classList.add("offline");            
        }

        //la pego al body como primer hijo
        document.body.insertAdjacentElement("afterbegin",$div);

        //hago el timeout para que saque el mensaje
        setTimeout(() => document.body.removeChild($div),2000);
    };



    //pero el evento te detecta cuando pierde o establece conexion
    window.addEventListener("online", e=> isOnLine()); 
    window.addEventListener("offline", e=> isOnLine());

}
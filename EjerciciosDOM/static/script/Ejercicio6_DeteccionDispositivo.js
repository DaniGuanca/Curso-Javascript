export default function userDeviceInfo(id){
    const $id = document.getElementById(id);

    //el navigator.userAgent es el que muestra toda la informacion del sistema
    //console.log(navigator.userAgent);

    //para ver si es celular o pc y en que navegador esta
    const isMobile = {
        //uso expresion regular para ver si la cadena tira android, iphone etc
        //la bandera i ignora mayuscula y minuscula
        android: () => navigator.userAgent.match(/android/i),
        ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
        windows: () => navigator.userAgent.match(/windows phone/i),
        //aca no uso arrow function porque acordate que en arrow function la referencia del this
        //es la del padre no la del objeto
        any: function(){
            return this.android() || this.ios() || this.windows();
        }
    };
    const isDesktop = {
        linux: () => navigator.userAgent.match(/linux/i),
        mac: () => navigator.userAgent.match(/mac os/i),
        windows: () => navigator.userAgent.match(/windows nt/i),
        any: function(){
            return this.linux() || this.mac() || this.windows();
        }
    };
    const isBrowser = {
        chrome: () => navigator.userAgent.match(/chrome/i),
        edge: () => navigator.userAgent.match(/edg/i),
        safari: () => navigator.userAgent.match(/safari/i),
        firefox: () => navigator.userAgent.match(/firefox/i),
        opera: () => navigator.userAgent.match(/opera|opera mini/i),
        any: function(){
           return this.chrome() || this.edge() || this.firefox() || this.opera() || this.safari();
        }
    };

    //el if con ? (el primer argumento es por verdadero y el segundo a partir de : por false)
    //lo de atras de ? es la validacion (en mi caso me fijo si tira algo distinto de null)
    $id.innerHTML= `
    <ul>
        <li>User Agent:<b>${navigator.userAgent}</b></li>
        <li>Plataforma:<b>${isMobile.any()? isMobile.any():isDesktop.any()}</b></li>
        <li>Navegador:<b>${isBrowser.any()}</b></li>
    </ul>
    `;

    //contenido exclusivo
    if(isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en chrome</mark></p>`
    }
    if(isBrowser.firefox()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en firefox</mark></p>`
    }
    if(isDesktop.linux()){
        $id.innerHTML += `<p><mark>Software para Linux</mark></p>`
    }
    if(isDesktop.windows()){
        $id.innerHTML += `<p><mark>Software para Windows</mark></p>`
    }
    
    //Redirecciones
    if(isMobile.android()){
        window.location.href = "https://google.com";
    }
}
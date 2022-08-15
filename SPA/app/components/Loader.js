//Componente del loader
export function Loader() {
    const $loader = document.createElement("img");
    //Esto se ve desde el index entonces desde ahi va el source
    $loader.src = "app/assets/loader.svg";
    $loader.alt ="Cargando...";
    $loader.classList.add("loader");

    return $loader;
}
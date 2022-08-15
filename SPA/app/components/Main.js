//El main con los posts adentro
export function Main() {
    const $main = document.createElement("main");
    $main.id = "main";

    /* Mircha pone esto porque el no muestra imagenes, solo texto entonces prefiere que se vea un texto debajo del otro
    en vez de en grid, pero como yo hice con imagenes si quiero el grid, lo pongo comentado a modo de ejemplo
    if(!location.hash.includes("#/search")) {
        $main.classList.add("grid-fluid");
    } */

    $main.classList.add("grid-fluid");

    return $main;
}
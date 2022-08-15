export function SearchForm () {
    const $form = document.createElement("form");
    const $input = document.createElement("input");

    $form.classList.add("search-form");
    $input.name = "search";
    $input.type = "search";
    $input.placeholder = "Buscar...";
    //Saco autocompletado
    $input.autocomplete = "off";

    $form.appendChild($input);

    //Para poner la palabra que busco en el search, sino seguia diciendo search
    if (location.hash.includes("#/search")){
        $input.value = localStorage.getItem("wpSearch");
    }

    //Para cuando el usuario presiona en el tachecito del input de busqueda voy a hacer que el valor se borre
    //del localStorage
    //El evento que se activa cuando se presiona el tachecito es search, al hacer click en el tachecito se borra el value del input
    document.addEventListener("search", e => {
        if(!e.target.matches("input[type='search']")) return false;
        if(!e.target.value) localStorage.removeItem("wpSearch");
    });

    document.addEventListener("submit", e => {
        if(!e.target.matches(".search-form")) return false;

        //Importante prevenir el default
        e.preventDefault();

        //Guardo la busqueda en el localStorage porque despues la voy usar en ajax desde el Router
        localStorage.setItem("wpSearch", e.target.search.value);

        //Como preveni el default no cambia el hash automaticamente asi que lo cambio manualmente
        location.hash = `#/search?search=${e.target.search.value}`;
    });

    return $form;
}
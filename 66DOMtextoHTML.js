const $queEs = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

//textContent pone todo ese texto quue le pasas en string
//innerHTML respeta si el texto tiene elementos html

$queEs.innerHTML = text;

//outter html lo pone mas lindo en codigo
$queEs.outerHTML = text;
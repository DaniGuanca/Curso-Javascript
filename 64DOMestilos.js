const $linkDom = document.querySelector(".link-dom");


console.log($linkDom.getAttribute("style"));
//a los estilos es mejor entrar con .style
console.log($linkDom.style);
console.log($linkDom.style.backgroundColor);

//otra forma para ver desde el navegador
console.log(window.getComputedStyle($linkDom));

//para cambiar valores se usa set
$linkDom.style.setProperty("text-decoration","none");
$linkDom.style.setProperty("display","block");
//tambien se puede por puntos
$linkDom.style.width = "50%";
$linkDom.style.textAlign = "center";
$linkDom.style.marginLeft = "auto";
$linkDom.style.marginRight = "auto";
$linkDom.style.padding = "1rem";
$linkDom.style.borderRadius = ".5rem";


//VARIABLES CSS
//en la hoja estilos.css etiqueta root hice unas variables
//con doble guion empiezan todas las variables en css

//como se que estan en root osea en la eitqueta html uso esa
//documentElement; representa el html
const $html = document.documentElement;
const $body = document.body;

//con getComputedStyle accedo a las variables css
let varCssDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varCssDYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varCssDYellowColor,varCssDarkColor);

$body.style.color = varCssDYellowColor;
$body.style.backgroundColor = varCssDarkColor;

//para cambiar las VARIABLES css
$html.style.setProperty("--dark-color","#00");
varCssDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"); 

$body.style.backgroundColor = varCssDarkColor;
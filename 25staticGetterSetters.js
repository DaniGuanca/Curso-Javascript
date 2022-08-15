//LAS CLASES ESTAN CON MAS DETALLE EN EL ARCHIVO 24CLASES.JS
class Animal{
    constructor(nombre,genero)
    {
        this.genero = genero;
        this.nombre = nombre;
        //para usar getter y setter
        this.tipo = null;
    }

    sonar(){
        console.log("Estoy sonando");
    }

    saludar(){
        console.log("Estoy saludando");
    }
    //METODO ESTATICO
    //Los metodos estaticos se pueden ejecutar sin necesidad de instanciar la clase
    static queEres(){
        console.log("soy un animal")
    }


    //GETTERS Y SETTERS
    //los getters y setters son metodos especiales que nos permiten establecer y obtener
    //los valores de atributos de nuestra clase
    get getTipo(){
        return this.tipo;
    }

    set setTipo(tipo){
        this.tipo = tipo;
    }
}

//como tengo un metodo estatico no hace falta crear un objeto para usar ese metodo
//simplmente pongo nombreDeClase.metodoEstatico
Animal.queEres();

//--------------------------------------------------------------------------

const perro = new Animal("nombre","machito");

//aca uso el getter y setter
//javascript lo toma como propiedad no como metodo en todos los otros lenguajes
//asi que hay que usarlo como atributo
perro.setTipo = "TIPO NORMAL";

console.log(perro.getTipo);

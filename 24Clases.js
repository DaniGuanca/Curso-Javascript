//Meto todo en un archivo porque solo estoy repasando

class Animal{
    //no me deja hacer private o public como en c# javascript no usa eso
    //asi que empiezo con el constructor

    //los constructores usan la palabra reservada CONSTRUCTOR, no como en c# que puedo poner cualquier palabra
    constructor(nombre,genero)
    {
        this.genero = genero;
        this.nombre = nombre;
    }

    sonar(){
        console.log("Estoy sonando");
    }

    saludar(){
        console.log("Estoy saludando");
    }
}
//FIN DE CLASE

//Creo una clase que hereda de otra
class Perro extends Animal{
    constructor(nombre,genero,tamaño){
        //super manda a llamar al constructor de la clase padre
        super(nombre,genero);
        this.tamaño = tamaño;
    }

    sonar(){
        console.log("soy un perro y hago ladrido");
    }

    ladrar(){
        console.log("guau guau");
    }
}
//FIN CLASE



const minnie = new Animal("minnie","hembra");
    scooby = new Perro("Scooby","Macho","grande");


console.log(minnie);
console.log(scooby);
minnie.saludar();
minnie.sonar();
scooby.sonar();
scooby.ladrar();



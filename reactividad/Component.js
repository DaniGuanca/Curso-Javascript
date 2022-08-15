//Esta Libreria se va a encargar de hacer todo lo que hice hasta ahora del componente con su estado local incluido su template y renderizado para poder ser reutilizado
//Prototipo funcion constructora, funcion anonima autoejecutable
//En este prototipo no puedo usar arrow function porque necesito usar el this para referirme a la variable
const Component = (function (){
  //Creo el constructor del componente
  const Constructor = function (options){
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  //AGREGO LOS METODOS AL PROTOTIPO DEL CONSTRUCTOR DEL COMPONENTE

  /* PROTOTYPE
   Un objeto en JavaScript tiene otro objeto, llamado prototype (prototipo, en español). Cuando pedimos a un objeto una propiedad que no tiene, la busca en su prototipo. Así, un prototipo es otro objeto que se utiliza como una fuente de propiedades alternativa.
  */

  //Render UI
  Constructor.prototype.render = function (){
    //A la constante $el le asigno el elemento que busco con query selector con el valor que me pasaron en el constructor en el
    const $el = document.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);
  };

  //Actualizar el State de forma reactiva
  Constructor.prototype.setState = function (obj){
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }

    this.render();
  };

  //Obtener una copia inmutable del estado
  Constructor.prototype.getState = function (){
   return JSON.parse(JSON.stringify(this.data))
  };


  return Constructor;
})();
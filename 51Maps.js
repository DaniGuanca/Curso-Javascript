//los mapas son como objetos
let mapa = new Map();
mapa.set("nombre","Dani");
mapa.set("apellido","Guanca");
mapa.set("edad",27);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
mapa.delete("apellido");
console.log(mapa.get("apellido"));

//para recorrer se usa for of
for(let [key,value] of mapa){
    console.log(`Llave: ${key}, Valor: ${value}`);
}
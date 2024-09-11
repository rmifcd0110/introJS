//Asignar variables a un objeto
const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: true //el último no lleva coma
}

//destructing, sacar de una estructura
const {nombre} = producto;
const {precio} = producto;

/* const {nombre, precio} = producto; */

console.log(nombre);
console.log(precio);

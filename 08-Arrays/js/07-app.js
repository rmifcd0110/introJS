// añadir y eliminar elmentos de un array
const carrito = [];
console.log(carrito);

const producto1 = {
    nombre: "Monitor 24 pulgadas",
    precio: 600
}

const producto2 = {
    nombre: "Monitor 50 pulgadas",
    precio: 1600
}

const producto3 = {
    nombre: "Movil",
    precio: 800
}

const producto4 = {
    nombre: "Movil xl",
    precio: 1800
}

carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);

console.log(carrito);

//veamos como eliminar elementos del array

carrito.pop(); //elimina el último
carrito.shift(); //eliman el primero
console.log(carrito);
carrito.push(producto4);
console.log(carrito);
carrito.splice(1,1);
console.log(carrito);
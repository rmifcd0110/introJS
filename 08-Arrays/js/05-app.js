const carrito = [];
console.log(carrito);
// añadir un elemento al carrito

const producto1 = {
    nombre: "Monitor 24 pulgadas",
    precio: 600
}

const producto2 = {
    nombre: "Monitor 50 pulgadas",
    precio: 1600
}

carrito.push(producto1);
carrito.push(producto2);
console.log(carrito);

const producto3 = {
    nombre: "Movil",
    precio: 800
}

// lo agregamos al inicio del carrito
carrito.unshift(producto3);

console.log(carrito);


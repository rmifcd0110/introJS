const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 300},
    {nombre: "Television 50 pulgadas", precio: 800},
    {nombre: "Tablet", precio: 300},
    {nombre: "Movil", precio: 400},
    {nombre: "Movil XL", precio: 800}
]

console.log(carrito);

// Muy similar a foreach está un array method llamado map, la diferencia es que crea un nuevo array

const nuevoArray = carrito.map(function(producto) {
    return `Articulo: ${producto.nombre} Precio: ${producto.precio}`;
});

console.log('Array con metodo map->', nuevoArray);


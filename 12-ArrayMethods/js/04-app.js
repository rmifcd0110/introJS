//Filter, crea un array basado en un parámetro que es avaluado

//Declaración del array carrito

const carrito = [
    {nombre:'Monitor de 27\"', precio:500},
    {nombre:'Televisión', precio:100},
    {nombre:'Tablet', precio:200},
    {nombre:'Audifonos', precio:400},
    {nombre:'Movil', precio:700},
]

let resultado = carrito.filter(producto => producto.precio > 300);

let resultado2 = carrito.filter(producto => producto.nombre == "Audifonos");

console.log(resultado);
console.log(resultado2);




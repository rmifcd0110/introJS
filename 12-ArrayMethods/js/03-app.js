//Declaración del array meses

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

//Declaración del array carrito

const carrito = [
    {nombre:'Monitor de 27\"', precio:500},
    {nombre:'Televisión', precio:100},
    {nombre:'Tablet', precio:200},
    {nombre:'Audifonos', precio:400},
    {nombre:'Movil', precio:700},
]

//Si queremos buscar el total del carrito

let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(`El total es: ${total}`);

//Método reduce
let resultado = carrito.reduce((total, producto) => total += producto.precio, 0);
console.log(`El 2do total: ${total}`);

//Ejercicio
//Realiza un programa en javascript que cuente el número de vocales que tiene un texto

//pista includes

const vocales = ["a","e","i","o","u","á","é","í","ó","ú"];

let palabra = prompt("Escribe una palabra");


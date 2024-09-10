// Variables
/* 3 formas de definir variables
 en las ultimas versiones se utilizan 2*/

var producto = "Monitor 23 pulgadas"; //Incializar variable
producto = "Monitor 19 pulgadas"; //Reasignar valor a variable
console.log(producto);

// JavaScript es de tipo dinámico
// no se le asigna tipo de dato
var precio = 200;
console.log(precio);

//También podemos declarar la variable sin asignarle valor
var disponible;
disponible = true;
console.log(disponible);

//Se pueden declarar varias a la vez
var categoria = "ordenadores",
    marca = "Samsung",
    calificacion = 5;
console.log(categoria);
console.log(marca);
console.log(calificacion);

// reglas con las variables
// pueden contener letras y números
// no pueden inicar por número

var cat = "";

//estilos para crear las variables
var nombreProducto = "monitor" // camelcase
var nombre_producto = "monitor" // snake case
var Nombre_Producto = "monitor" // pascal case
//var nombre-producto = "monitor" // kebab case

// JavaScript es case-sensitive
var producto = "monitor";
var Producto = "telefono";
console.log(producto);
console.log(Producto);
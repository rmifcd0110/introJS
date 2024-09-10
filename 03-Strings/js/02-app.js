// veamos algunos métodos 
const producto = "Monitor 20 pulgadas";
const precio = "30 euros";

console.log(producto.length);
console.log(precio.length);

// indexof 
console.log(producto.indexOf("pulgadas")); //devuelve la posición donde comienza la palabra en la variable
console.log(producto.indexOf("tablet")); // -1 significa que no lo encontró

console.log(producto.includes("Monitor")); // devuelve true lo encuentra
console.log(producto.includes("monitor")); // false no lo encentra
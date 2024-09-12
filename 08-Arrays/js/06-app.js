// añadir elementos al array con spread operator

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

const producto3 = {
    nombre: "Movil",
    precio: 800
}

const producto4 = {
    nombre: "Movil xl",
    precio: 1800
}

// En esta instrucción utilizamos el operador de propagación (...)

let resultado = [...carrito, producto1];
console.log(resultado);

resultado = [...resultado, producto2];
console.log("resultado 1", resultado );

resultado = [...resultado, producto3];
resultado = [producto4, ...resultado];

console.log("resultado fin", resultado );
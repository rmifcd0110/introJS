//Otra forma más moderna

const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponibilidad: true,
    imagen:''
}

const medida = {
    peso: '1Kg',
    medida: '1m'
}

// Spread operator , Rest operator
const resultado = {...producto, ...medida};
console.log(resultado);
console.log(producto);
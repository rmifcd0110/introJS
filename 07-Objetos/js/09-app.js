//Veamos como unir dos objetos, esto es muy común al trabjar con BBDD

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

//una forma es con el metodo (assign)

//const resultado = Object.assign(producto,medida);
//console.log(resultado);

console.log(producto);

const resultado2 = Object.assign({}, producto, medida);
console.log(producto);
console.log(resultado2);
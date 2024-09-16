//
const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'},
]

for (let item of carrito){
    console.log(item.producto);
}

let automovil = {
    modelo: 'Golf',
    motor: '2.0',
    year: '2022',
    marca: 'VolksWagen',
}

for (let coche in automovil){
    console.log(`${coche}: ${automovil[coche]}`);
}

//Realizar un script que imprima 14 resultados aleatorios de una quiniela de 1 x 2
let max = 10;
for (let i = 1; i <= 14; i++){
    let resultado = aleatorios(max);

    console.log(`Resultado ${i}: `, resultado.a, "-", resultado.b);
}


function aleatorios(max){
    const a = Math.floor(Math.random() * max);
    const b = Math.floor(Math.random() * max);

    return {a: a, b: b};
}







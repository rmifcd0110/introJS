//Veamos el uso de Break y Continue en estas iteraciones

for (let i = 0; i <= 10; i++){
    if ( i == 5){
        console.log('estamos en el 5 ...Fin');
        break;
        
    }
    console.log(`Número ${i}`);
}

for (let i = 0; i <= 10; i++){
    if ( i == 5){
        console.log('estamos en el 5 ...continuar');
        continue;
        
    }
    console.log(`Número ${i}`);
}


//En que caso podemos usar el continue

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 200},
    {nombre: 'TV 50 pulgadas', precio: 1200, descuento: true},
    {nombre: 'Pantalla 42 pulgadas', precio: 800},
    {nombre: 'Movil', precio: 600, descuento: true},
    {nombre: 'Movil XL', precio: 1200, descuento: true}
]

for ( let i = 0; i < carrito.length; i++){
    if (carrito[i].descuento == true){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
}
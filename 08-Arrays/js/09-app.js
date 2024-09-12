const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 300},
    {nombre: "Television 50 pulgadas", precio: 800},
    {nombre: "Tablet", precio: 300},
    {nombre: "Movil", precio: 400},
    {nombre: "Movil XL", precio: 800}
]

console.log(carrito);
// recorrer el array de la forma tradicional y mostrar el contenido

for(let i=0; i < carrito.length; i++){
    console.log(`Artículo: ${carrito[i].nombre} Precio: ${carrito[i].precio}`);
}

console.log('------------------');

carrito.forEach(item => {
    console.log(`Artículo: ${item.nombre} Precio: ${item.precio}`);
});


console.log('------------------');
carrito.forEach(item => {
    
    if(item.nombre === 'Tablet'){
        console.log(`Artículo: ${item.nombre} Precio: ${item.precio}`);
        
    }
    
});
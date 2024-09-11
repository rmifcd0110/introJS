//veamos como accedemos a las propiedades de un objeto
const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: true //el último no lleva coma
}

console.log(producto);
//supongamos que queremos acceder al nombre o al precio, usamos la sintaxis del punto
console.log(producto.nombre);
console.log(producto.precio);

//otra forma de acceder a la info []
console.log(producto['precio']);
console.log(producto['nombre']);
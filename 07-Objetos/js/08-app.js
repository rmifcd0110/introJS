//Otra propiedad similar a Freeze, existe otro método de objeto llamado "seal"

const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponibilidad: true,
    
}

Object.seal(producto);

producto.nombre = 'Tablet';
console.log(producto.nombre);

console.log(Object.isSealed(producto));
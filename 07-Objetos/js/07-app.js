//Los objetos pueden modificar sus valores, veamos como evitarlo

const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponibilidad: true,
    imagen:''
}

//Veamos com prevennir una modificación
Object.freeze(producto);

producto.disponibilidad = 'false';
console.log(producto);

producto.imagen = 'imagen.jpg';
//tampoco podriamos borrar propiedades
delete producto.imagen;

//Para revisar si el objeto está congelado (freeze)

console.log("Está Freeze? ", Object.isFrozen(producto));
console.log(producto);

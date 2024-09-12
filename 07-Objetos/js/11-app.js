const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponibilidad: true,
    mostrarInfo: function(){
        return `El producto: ${this.nombre} tiene un precio de ${this.precio}`;
    }
}

console.log(producto.mostrarInfo());
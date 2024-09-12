//Vamos a ver el Object.Keys - Object.values y entries, estos son más conocidos como iteradores de objetos

const producto = {
    nombre: 'Monitor',
    precio: 200,
    disponibilidad: true,
    
}

console.log(Object.keys(producto)); // devuelve un array que contine las porpiedades enumerables de un objeto llamado producto. Cada elemento del array corresponderá a una clave (propiedad) del objeto producto.

console.log(Object.values(producto)); // devuelve un array que contiene los valores de las propiedades enumerables de un objeto llamado producto.Cada elemento del array corresponderá al valor de una propiedad de objeto producto.

console.log(Object.entries(producto)); //devuelve una matriz de matrices que representan cada par clave-valor del objeto producto. Cada sub-matriz tiene dos elementos: el primero es la clave (nombre de la propiedad) y el segundo es el valor correspondiente.
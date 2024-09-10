// métodos de string
const producto = "              Monitor de 30 pulgadas   ";

console.log(producto);
console.log(producto.length);

//eliminar el espacio del inicio
console.log(producto.trimStart());//Elimina los espacios del principio
console.log(producto.trimEnd());//Eliman los espacios del final

//Los metodos en javascript se pueden encadenar (concatenar) en el mismo console.log
console.log(producto.trimStart().trimEnd());

console.log(producto.trim().length);
//3 metodos más!
//Replace
const producto = "Monitor de 30 pulgadas";
console.log(producto.replace("30","48"));
console.log(producto.replace("pulgadas", '"'));

//Slice te permite extraer una parte de una cadena
console.log(producto.slice(0,10)); //Va a extraer desde el inicio hasta la casilla 10
console.log(producto.slice(8)); //extraer desde las 8 primeras casillas
console.log(producto.slice(2,10));

console.log(producto.slice(2,1));

//Existe uno similar al slice que se llama substring
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); //El substring alterna los numeros y se hace el corte al revés
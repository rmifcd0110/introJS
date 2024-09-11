//Más operaciones con números
const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);

//Convertir de string a numeros flotantes o enteros
console.log(Number.parseInt(numero1)); //convertir de string a número
console.log(Number.parseFloat(numero2)); //convertir de string a float
console.log(Number.parseInt(numero3)); // convertir string a entero **NaN

//Revisar si un número es entero
console.log(Number.isInteger(numero4)); // comprobar si es entero
console.log(Number.isInteger(numero3)); // comprobar si es entero

//Convertir string a número
console.log(numero4.toString()); //convertir a string

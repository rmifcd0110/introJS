//En la consola los número sse muestran en un color diferente

const numero1 = 20;
const numero2 = "20";

//crear números
const numero3 = 30;
const numero4 = 20.20;
const numero5 = .2013;
const numero6 = -6;

//Otra forma de crear números
const numero7 = new Number(100);


console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(numero4);
console.log(numero5);
console.log(numero6);
console.log(numero7);
console.log(numero7.valueOf());

// Operaciones
let resultado;

//Suma
resultado = numero1 + numero2;
console.log(resultado);

//Resta
resultado = numero1 - numero2;
console.log(resultado);

//Multiplicación
resultado = numero1 * numero2;
console.log(resultado);

//División
resultado = numero1 / numero2;
console.log(resultado);

//Modulo
resultado = numero1 % numero2;
console.log(resultado);
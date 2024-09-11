// Math - Objeto incorporado en JavaScript
// Podemos hacer una serie de operaciones 

let resultado1;
let resultado2;
let resultado3;
let resultado4;
let resultado5;
let resultado6;
let resultado7;
let resultado8;
let resultado9;
let resultado10;
let resultado11;

//PI
resultado1 = Math.PI;
console.log("Este es el número PI: " , resultado1);

//Redondeo
resultado2 = Math.round(20.49);
console.log("Este es el redondeo: " , resultado2);

//Redondeo hacia arriba 
resultado3 = Math.ceil(2.1);
console.log("Este es el redondeo hacia arriba: " , resultado3);

//Redondeo hacia abajo
resultado4 = Math.floor(2.99);
console.log("Este es el redondeo hacia abajo: " , resultado4);

//Raiz cuadrada 
resultado5 = Math.sqrt(144);
console.log("Esta es la raiz cuadrada: " , resultado5);

//Valor absoluto de un número
resultado6 = Math.abs(-500);
console.log("Este es valor absoluto: " , resultado6);

//Calcular potencias 
resultado7 = Math.pow(8,3);
console.log("Esta es la potencia: " , resultado7);

//Mínimo
resultado8 = Math.min(3,5,1,2,9,4,2,-3);
console.log("El valor mínimo es: " , resultado8);

//Máximo
resultado9 = Math.max(3,5,1,2,9,4,2,-3);
console.log("El valor máximo es: " , resultado9);

//Aleatorio (Random)
resultado10 = Math.random() * 100;
console.log("El valor aleatorio es: " , resultado10);

//Aleatorio en un rango
resultado11 = Math.floor(Math.random()*100);
console.log("El valor aleatorio es: " , resultado11);


// declaración variables
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si dos valores son iguales o diferentes
console.log("n1 = n3", numero1 == numero3);
console.log("n1 = n2", numero1 == numero2);

console.log("n1 === n2 -> estricto", numero1 === numero2);

//Revisar el tipo de dato
console.log(typeof(numero1));
console.log(typeof(numero2));

//Revisar si son diferentes
console.log("n1 no igual n2", numero1 != numero2);
console.log("n1 no igual n3", numero1 != numero3);
console.log("n1 no igual n2", numero1 !== numero2);
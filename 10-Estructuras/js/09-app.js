// Operador ternario
const autenticado = true;
const puedePagar = false;

console.log(autenticado ? 'Si está autenticado':'No está autenticado');

//El operador && y || se pueden utilizar ternario de la siguiente forma
console.log(autenticado && puedePagar ? 'autenticado puede pagar' :'autenticado no puede pagar');


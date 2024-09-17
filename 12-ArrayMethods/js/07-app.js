// Vamos a unir 2 array, para ello usamos el método concat
const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const meses = meses1.concat(meses2);
console.log(meses);

// Otra forma de concatenar con spread operator
const mesesd = [...meses1,...meses2];
console.log(mesesd);
// Buenas practicas con el if

const autenticado = true;
//mala práctica es
if (autenticado == true){
    console.log('El usuario está autenticado --> mala práctica en el uso del if');
}

//buena práctica
if (autenticado){
    console.log('El usuario está autenticado -->buena práctica en el uso del if');
}

//
const puntaje = 500;

if (puntaje > 300){
    console.log('Buen puntaje ... felicidades');
}else if(puntaje > 400){
    console.log('Excelente esfuerzo!!!');
}else{
    console.log('No sbría que decirte...');
}
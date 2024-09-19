/**Vamos a seleccionar elementos por su clase */
const cabecera = document.getElementsByClassName('header');

console.log(cabecera);

const hero = document.getElementsByClassName('contenido-hero');

console.log(hero);

//clase que no existe
const noExiste = document.getElementsByClassName('no-existe');

console.log(noExiste);
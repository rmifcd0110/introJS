//Eliminar el primer enlace 
/* const primerEnlace = document.querySelector('a');
primerEnlace.remove(); */ 

//Podemos eliminar por el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[3]);

/**Veamos como modificar el texto de la parte superior */
/**Lo primero es seleccionarlo */
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

/**Existen 3 formas de acceder  */
/**Aunque esté oculto lo muestra */

console.log("innerHTML-->", encabezado.innerHTML);
console.log("textContent-->", encabezado.textContent);
console.log("innerText-->", encabezado.innerText);

const textoEncabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(textoEncabezado);

//Ahora asignamos un nuevo texto a una variable
let texto;
texto = document.querySelector('.contenido-hero h1').textContent = 'Nuevo texto';

console.log(texto);

//Otra forma sería 
const nuevoTexto = 'Nuevo Texto incluido';
document.querySelector('.contenido-hero h1').textContent = nuevoTexto;

//Podemos cambiar la imagen
const imagen = document.querySelector('.card img');
console.log(imagen.src);

//Cambiar imagen
/* imagen.src = './img/hacer2.jpg'; */



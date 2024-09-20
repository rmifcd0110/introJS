//Creación de HTML desde JS
const enlace = document.createElement('a');
enlace.textContent = 'Nuevo Enlace';

enlace.href = '/nuevo-enlace';
console.log(enlace);

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

//Seleccionamos la tarjetas
let contenedorCards = document.querySelector('.contenedor-cards');

//Creamos una nueva tarjeta
let nuevaCard = document.createElement('div');
nuevaCard.classList.add('card');

//Creamos y configuramos el elemento <img>
let nuevaImg = document.createElement('img');
nuevaImg.src = 'img/hacer3.jpg';
nuevaImg.alt = 'Concierto';

//Creamos el contenedor para la información para la tarjeta
let nuevaInfo = document.createElement('div');
nuevaInfo.classList.add('info');

let nuevaCategoria = document.createElement('p');
nuevaCategoria.classList.add('categoria', 'concierto');
nuevaCategoria.textContent ='concierto';

let nuevoTitulo = document.createElement('p');
nuevoTitulo.classList.add('titulo');
nuevoTitulo.textContent = 'Rcok en vivo 2024';

let nuevoPrecio = document.createElement('p');
nuevoPrecio.classList.add('precio');
nuevoPrecio.textContent = '€1.900 por persona';

//Añade los elementos de información al contenedor 
nuevaInfo.appendChild(nuevaCategoria);
nuevaInfo.appendChild(nuevoTitulo);
nuevaInfo.appendChild(nuevoPrecio);

//añadimos la imagen u¡y el contenedor
nuevaCard.appendChild(nuevaImg);
nuevaCard.appendChild(nuevaInfo);

//Añadimos la nueva tarjeta al contenedor
contenedorCards.appendChild(nuevaCard);
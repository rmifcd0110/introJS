/**Vamos a ver el querySelectorAll */

const card = document.querySelectorAll('.card');
console.log(card);

const formulario = document.querySelectorAll('#formulario');
console.log(formulario);

card.forEach(element => {
    console.log(element);
});

const cardArray = Array.from(card);
console.log(cardArray);

card.forEach(cardElement =>{
    cardElement.style.backgroundColor = 'lightblue';
})
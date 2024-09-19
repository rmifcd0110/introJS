/*Selecionamos el primer elemento <h1> */

const heading = document.querySelector('h1');

console.log(heading.style);

heading.style.backgroundColor = 'red';
heading.style.textTransform = 'uppercase';
heading.style.visibility = 'visible';

const card = document.querySelector('.card');

console.log(card);

console.log(card.classList);

card.classList.add('nueva-clase');
console.log(card.classList);

card.classList.remove('card');
/**Traversing */

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

console.log(navegacion.childNodes);

console.log(navegacion.children);


console.log(navegacion.children[0].nodeType);
console.log(navegacion.children[0].nodeName);

const card = document.querySelector('.card');
console.log(card.nodeType);
console.log(card.nodeName);

console.log(card.children);
console.log(card.children[1]);
console.log(card.children[1].children[1]);
console.log(card.children[1].children[1].textContent);

/* card.children[1].children[1].textContent = `Soft Rock 80\'s`; */


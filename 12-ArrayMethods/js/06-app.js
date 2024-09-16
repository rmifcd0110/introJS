//Every
//Declaración del array carrito

const carrito = [
    {nombre:'Monitor de 27\"', precio:500},
    {nombre:'Televisión', precio:100},
    {nombre:'Tablet', precio:200},
    {nombre:'Audifonos', precio:400},
    {nombre:'Movil', precio:700},
]

let resultado = carrito.every(item => item.precio < 700);
console.log(resultado);

//forEach
let cumple = true;
carrito.forEach(producto =>{
    if(producto.precio < 900){
        console.log(producto.nombre," ",producto.precio);
        cumple = false;
        return
    }
});
console.log(cumple);


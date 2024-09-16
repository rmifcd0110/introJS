//Declaración del array meses

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

//Declaración del array carrito

const carrito = [
    {nombre:'Monitor de 27\"', precio:500},
    {nombre:'Televisión', precio:100},
    {nombre:'Tablet', precio:200},
    {nombre:'Audifonos', precio:400},
    {nombre:'Movil', precio:700},
]

//El uso del método foreach

meses.forEach(element =>{
    if(element === 'Febrero'){
        console.log('Febrero si existe...');
    }
});

//Uso del método includes
const resultado = meses.includes('Enero');
console.log(resultado);


//Uso del método some en el array carrito.
const existe = carrito.some(producto => producto.nombre ==='Movil');
console.log("El móvil existe?", existe);

//Uso del método some en el array meses.
const existe2 = meses.some(mes => mes === 'Febrero');
console.log("¿Febrero existe?", existe2);
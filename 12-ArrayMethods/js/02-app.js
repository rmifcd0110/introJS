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

meses.forEach((mes, index) =>{
    if(mes === 'Abril'){
        console.log(`Encontrado en el indice ${index}`);
    }
});

//findIndex te dirá el indice, o sea la ubicación del elemento del array
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

//si cambiamos a Diciembre tendermos como resultado -1, porque no existe
const indice1 = meses.findIndex(mes => mes === 'Diciembre');
console.log(indice1);
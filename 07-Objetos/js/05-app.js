//Como hacer el destructing de un objeto que este dentro de otro
const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: true,
    informacion:{
        peso:'2Kg',
        medida:'1mts',
    }
}

const {nombre, precio, disponible, informacion:{peso,medida}} = producto;

console.log('mostrar el nombre', nombre);
console.log('mostrar el precio', precio);
console.log('mostrar el disponible', disponible);
console.log('mostrar el peso', peso);
console.log('mostrar el medida', medida);
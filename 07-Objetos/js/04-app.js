//Un objeto puede contener cualquier tipo de dato
//incluso otro objeto a esto se le conoce como objetos anidados
const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: true,
    informacion:{
        peso:'2Kg',
        medida:'1mts',
    }
}

console.log("Este es el objeto ", producto); //Se puede ver un objeto dentro de otro
console.log(producto.informacion.medida);

console.log(" Este es el objeto dentro del otro ", producto.informacion);
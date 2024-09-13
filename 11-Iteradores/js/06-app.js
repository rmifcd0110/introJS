// Otros iteradores foreach y map

/* let pendientes = ['tarea', 'comer', 'caminar'];

//Recorer con un foreach
pendientes.forEach((pendientes, index) => {
    console.log(`${index} : ${pendientes}`);
}); */

// Usando map
let pendientes = ['tarea', 'comer', 'caminar'];

let pendientesConIndice = pendientes.map((pendiente, index) =>{
    return `${index} : ${pendiente}`;
})

//Ahora se imprimen los resultados
pendientesConIndice.forEach(item =>{
    console.log(item);
})
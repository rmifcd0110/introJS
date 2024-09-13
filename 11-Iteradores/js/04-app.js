// Operador While

let i = 0;

while ( i < 10 ) {
    console.log(`Número ${i}`);
    i++;
}

//Crear una función que genere 100 números aleatorios entre 1 y 1000, que no se repitan y luego mostralos por pantalla.

/* function generarNumerosAleatorios(){
    //Creamos un array para almacenar los números
    let numeros = [];
    const cantidad = 100;

    //Generamos números aleatorios hasta tener 100
    while (numeros.length < cantidad){
        //Genera el númeor aleatorio entre 1 y 1000
        let numeroAleatorio = Math.floor(Math.random()*1000)+1;

        //Agregamos el número a
        if (!numeros.includes(numeroAleatorio)){
            numeros.push(numeroAleatorio);
        }
    }

    
    //Mostramos los números en la consola
    console.log(numeros);

}
 */

// Otra forma de crear los números aleatorios 
function generarNumerosAleatorios(){
    //Creamos un array para almacenar los números
    let numeros = new Set();

    //Generamos números aleatorios hasta tener 100
    while (numeros.size < 100){
        //Genera el númeor aleatorio entre 1 y 1000
        let numeroAleatorio = Math.floor(Math.random()*1000)+1;

        //Agregamos el número a
        numeros.add(numeroAleatorio);
    }

    let arrayNumeros = Array.from(numeros);

    //Mostramos los números en la consola
    console.log(arrayNumeros);

}

generarNumerosAleatorios();




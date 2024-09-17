function prueba() {
    //Declaración del array meses
    const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
    const meses2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    //Declaración del array carrito

    const carrito = [
        { nombre: 'Monitor de 27\"', precio: 500 },
        { nombre: 'Televisión', precio: 100 },
        { nombre: 'Tablet', precio: 200 },
        { nombre: 'Audifonos', precio: 400 },
        { nombre: 'Movil', precio: 700 },
    ]
    // Añadir al final del array
    const meses3 = [...meses1, 'Julio'];
    console.log(meses3);

    // Añadir al principio del array
    const meses4 = ['Julio', ...meses1];
    console.log(meses4);

    // Añadir al final del array un objeto
    const producto = { producto: "TV 32 pulgadas", precio: 200 };
    const meses5 = [...meses1, producto];
    console.log(meses5);

}
/** Ejercicios
 * 1. Realizar un script que pida un texto e indique es palíndromo
 * 
 * 2. Crear una función en Javascript que reciba de parámetro un número de DNI y devuelva la letra
 * 
 */

/* function esPalindromo(){
    //Obtener el valor dle input
    let texto = document.getElementById("texto").value;

    //Verificar si es palíndromo sin usar split, reverse o join
    let esPalindromo = true;
    let longitud = texto.length;

    //Comparamos los caracteres de los extremos hacia adentro
    for ( let i = 0; i < longitud/2; i++){
        if(texto[i] !== texto[longitud-1-i]){
            esPalindromo = false;
            break;
        }
    }

    //Mostrar el resultado
    if(esPalindromo){
        document.getElementById("respuesta").innerHTML="El texto es un palídromo";
    
    }else{
        document.getElementById("respuesta").innerHTML="El texto no es un palídromo";
    }


} */

/* function validateEmail(){
                
    // Get our input reference.
    var emailField = document.getElementById('user-email');
	
    // Define our regular expression.
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if( validEmail.test(emailField.value) ){
        alert('Email is valid, continue with form submission');
        return true;
    }else{
        alert('Email is invalid, skip form submission');
        return false;
    }
} */

function esPalindromo() {
    //Obtener el valor del input
    let texto = document.getElementById("texto").value;

    //Invertir el texto
    let textoInvertido = texto.split('').reverse().join('');

    if (texto === textoInvertido) {
        document.getElementById("respuesta").innerHTML = "El texto es un palídromo";
    } else {
        document.getElementById("respuesta").innerHTML = "El texto no es un palídromo";
    }
}


function calcularLetraDNI(numero) {
    let letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    let l = numero % 23;
    document.getElementById('respuesta-dni').innerHTML = `El DNI es : ${numero}-${letra[l]}`;
}


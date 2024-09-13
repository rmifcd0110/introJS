//Ejecutar código hasta que se cumpla una condición

for (let x = 0; x <= 10; x++){
    console.log(`Numero --> ${x}`);
}

console.log(`*** Números pares e impares ***`);
for (let x = 0; x <= 20; x++){

    if (x % 2 == 0){
        console.log(`Numero par = ${x}`);
    }else{
        console.log(`Numero impar = ${x}`);
    }
}

//Usando funciones
console.log(`*** Números pares e impares con una función ***`);
function determinarParidad(numero){
    return numero % 2 == 0 ? 'par':'impar';
}

for (let x =0; x <= 20; x++){
    const tipo = determinarParidad(x);
    console.log(`El número ${x} es ${tipo}`);
}

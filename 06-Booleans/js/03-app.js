//Existe otra forma de comparar si un valor es verdadero 

const boolean1 = true;
const boolean2 = false;

if(boolean1){
    console.log('si, es true');
}else{
    console.log('no, es false');
}

//el codigo anterior es facil pero se puede simplificar

console.log(boolean1 ? 'si, es true' : 'no, es false');
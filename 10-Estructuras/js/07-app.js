// El operador OR 

let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalCarrito = 700;

if (efectivo > totalCarrito || credito > totalCarrito){
    console.log('Puede pagar con efectivo o credito');
}else if(disponible >= totalCarrito){
    console.log('Puede pagar con ambos efectivo mas crédito');
}else{
    console.log('No tienes disponible');
}

//  true false  and  false
//  true false   or  true
//  true true   and  true
//  false false  and false

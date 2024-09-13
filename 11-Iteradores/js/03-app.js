for (let i = 1; i <=50; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(`FizzBuzz `);
    }else if(i % 3 == 0){
        console.log(`Fizz `);
    }else if(i% 5 == 0){
        console.log(`Buzz `);
    }else{
        console.log(` ${i}`);
    }
}

//version mejorada

console.log('*****versión mejorada*****');
for (let i = 1; i <= 50; i++){
    let output = '';

    if (i % 3 === 0){
        output += 'Fizz';
    }
    if (i % 5 === 0){
        output += 'Buzz';
    }

    if ( output === ''){
        output += ` ${i}`;
    }/* else{
        output += ` ${i}`;
    } */
    
    console.log(output);
}

console.log('*******************************Opción 3*******************************');

for (let i = 1; i < 50; ++i) console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '': 'Buzz') || i);

/* i % 3 --> 0 => false */


/* veamos la diferencia entre un método y una función */

const num1 = 20;
const num2 = "20";

console.log(parseInt(num2)); //esto es una función
console.log(num1.toString()); //esto es un método

function saludar(){
    console.log("Hola mundo!");
}

saludar();


const persona = {
    nombre:"Juan",
    saludo: function(){
        console.log("Hola, " + this.nombre);
    }
}

persona.saludo(); //Invocación del método
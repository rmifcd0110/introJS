/**Tabla de multiplicación
 * 1. El usuario debe ingresa las filas y las columnas de la tabla
 * 2. Cada celda debe contener el producto de los números que representan la fila y la columna en la que se encuentran. Ej si la celda está en la fila 2 y columna 3, el valor en la celda debe ser 2 x 3 = 6.
 * 3. El script debe generar la tabla de forma dinámica y mostrar el HTML
 * 
 */

function generarTablaMultiplicacion(){
    //Obtener los valores de filas y columnas
    let filas = parseInt(document.getElementById('filas').value);
    let columnas = parseInt(document.getElementById('columnas').value);


    //Creamos la tabla de forma dinámica
    let tabla = "<table border='1' cellpadding='10 cellspacing='0'>";

    //Empezamos a llenar la tabla
    for(let i= 1; i <= filas; i++){
        tabla += "<tr>"; //nueva fila
        for(let j = 1; j <= columnas; j++){
            let producto = i * j;
            tabla += `<td>${i} x ${j} = ${producto} </td>`;
            
        }
        tabla += "</tr>"; //Cerramos la fila
    }

    tabla += "</table>"; //Cerramos la tabla

    //Insertar tabla en el div con id "tabla"

    document.getElementById('tablaMultiplicacion').innerHTML = tabla;
}



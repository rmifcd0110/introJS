//Realizar un script que pida el número de filas y columnas, cree una tabla y dentro de cada una de las celdas escriba un número consecutivo en orden descendente.

function generarTabla(){
    //Obtener los valores de filas y columnas
    let filas = parseInt(document.getElementById('filas').value);
    let columnas = parseInt(document.getElementById('columnas').value);

    // Calculamos el total de celdas
    let totalCeldas = filas * columnas;

    //Creamos la tabla de forma dinámica
    let tabla = "<table border='1' cellpadding='10' cellspacing='0'>";

    //Empezamos a llenar la tabla
    for(let i= 0; i < filas; i++){
        tabla += "<tr>"; //nueva fila
        for(let j = 0; j < columnas; j++){
            tabla += "<td>" + totalCeldas + "</td>"
            totalCeldas--;
        }
        tabla += "</tr>"; //Cerramos la fila
    }

    tabla += "</table>"; //Cerramos la tabla

    //Insertar tabla en el div con id "tabla"

    document.getElementById('tabla').innerHTML = tabla;
}
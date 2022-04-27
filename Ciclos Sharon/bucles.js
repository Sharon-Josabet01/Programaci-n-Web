/* 
    Ciclos While sirve para ejecutar un código de forma ciclica mientras su condición se cumpla.
*/

/* 
    Definimos la variable i.
*/

/* 
    var i = 0;
    var numero = prompt("Elige un número")

    while(i <= numero) {
        // Aquí va el código que se ejecuta.
        document.write("Hola soy un ciclo <br>");
        // Sumamos una unidad a la variable i, para que la condición deje de cumpliese.
        //i = i + 1;
        i++;
} 
*/

/* 
El ciclo Do While ejecuta un código al menos 1 vez y si se cumple la condición volverá a intentarlo.
*/

var i = 0;
var numero = prompt("Elige un número")

do {
    //Aquí en código que se ejecita en el ciclo.
    document.write("Sharon <br>");
    i++;
}   while(i < numero);
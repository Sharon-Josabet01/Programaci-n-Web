var nombre = prompt ("¿Cuál es tu nombre?");
var edad = prompt("¿Cuál sería tu edad en este año");
var futuro = 2050;
var actual = 2022;

var año = futuro - actual;

var edadFuturo = parseInt (edad) + año;

console.log("Hola " + nombre + " ,actualmente tienes " + edad + " y tu edad en el año 2050 sería de " + edadFuturo);

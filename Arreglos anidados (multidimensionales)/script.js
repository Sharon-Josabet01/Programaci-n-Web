// Así definimos un arreglo
var miArreglo = [1, 2, 3]
var otroArreglo = ['Gato', 'Perro', 'Conejo'];

console.log (otroArreglo[1]); //Perro

//Así definimos un arreglo anidado
var arregloAnidado = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

/* 
    Arreglo      [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
    Indice             1          2           3        
    Subindice       0  1  2    0  1  2    0  1  2
*/

//Así llamamos a un dato de un Arreglo Multidimensional
console.log(arregloAnidado[1][2]);
console.log(arregloAnidado[0][2]);
console.log(arregloAnidado[1][1]);
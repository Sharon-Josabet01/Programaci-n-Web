/* 
var mi Array = ['Dato 1', 'Dato 3', 'Dato 3'];
var arrMulti = [
    ['Dato 1', 'Dato 3', 'Dato 3'],   // Indice 0
    ['Dato 1', 'Dato 3', 'Dato 3'],   // Indice 1
    ['Dato 1', 'Dato 3', 'Dato 3']    // Indice 2
    // Sub 0  // Sub 1  // Sub 2
]; 
*/
/* 
    Definimos nuestro array vacio
*/

var pokemones = [];

/* 
    Traemos los datos de los inputs
*/

var nombre = document.getElementById('nombre');
var tipo = document.getElementById('tipo');
var poder = document.getElementById('poder');

var agregar = document.getElementById('agregar');
agregar.addEventListener('click', agregarPokemon);

/* 
    Definir la función que va agregar pokemones al array
*/

function agregarPokemon(){
    /* Aquí va el código */
  //  Así agregamos datos a un array con .push
    pokemones.push( nombre.value, tipo.value, poder.value );
}
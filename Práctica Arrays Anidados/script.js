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
var mensaje = document.getElementById('mensaje');

var agregar = document.getElementById('agregar');
agregar.addEventListener('click', agregarPokemon);

var mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', mostrarPokemon);

/* 
    Definir la función que va agregar pokemones al array
*/

function agregarPokemon() {
    /* Aquí va el código */
    //  Así agregamos datos a un array con .push
    pokemones.push( [nombre.value, tipo.value, poder.value] );

    var i = pokemones.length - 1;

    //Imprimimos el mensaje en la etiqueta p is mensaje
    mensaje.innerHTML = 'Se Agregó ' + pokemones[i][0];
    }

/* 
    Definimos la función que va a mostrar todos los 
*/

function mostrarPokemon () {
        //Código a ejecutar
        
        document.write(
            '<ul>' +
            '<li><img src="' + pokemones[0][0] + '.png" alt="Imagen Pikachu"></li>' +
            '<li>Pokemon: ' + pokemones [0][0] + '</li>' +
            '<li>Tipo: ' + pokemones [0][1] + '</li>' +
            '<li>Poder: ' + pokemones [0][2] + '</li>' +
            '</ul>'
            );
    }
/* 
    Spread Operator (Operador de Expansión)

        Op Aritméticos -> + - / *
        Op Asignación  -> =
        Op Comparación -> > < >= <=
        Op Lógicos     -> 
        Op Expansión   -> ...

    El operador de expansión, trabaja con los datos de un Array.
*/

//let numbers = [1,2,3,4,5];

//console.log(...numbers);

/* 
    Enviar elementos de un Array a una función
*/

/* 
const addNumbers = (a,b,c) => {
    console.log(a + b + c);
}

let numbers = [1,2,3];

addNumbers(...numbers); 
*/

/* 
    Añadir un Array a otro Array
*/

/*
let pokemones = ['Pikachu','Charmander','Bulbasaur'];

let newPokemones = ['Ditto','Snorlax'];

pokemones.push(...newPokemones);

console.log(pokemones);
*/

/* 
    Copiar un Array
*/

/* 
let numbers = [1,2,3,4,5];
let copyNumbers = [...numbers];

console.log(copyNumbers) 
*/

/* 
    Concatenar Arrays
*/

/*
let numbers1 = [1,2,3,4,5];
let numbers2 = [5,7,8,9,10];

let concatNumbers = [...numbers1, ...numbers2];

console.log(concatNumbers);
*/

/* 
    Enviar un número indefinido de argumentos a una función (Parametros REST)
*/

/* 
const restParms = (...numbers) => {
    console.log(numbers);
}

restParms(1,2,3,4,5,10,40,60,100); 
*/

/* 
    Librería Math
*/

/* 
const numbers = [-14, 5, 4, 10, 40];

console.log( Math.max(...numbers));
console.log( Math.min(...numbers)); 
*/

/* 
    Eliminar elementos duplicados 
*/

const numbers = [-14, 5, 4, 10, 40, 5, 10];

console.log(...new Set(numbers) );

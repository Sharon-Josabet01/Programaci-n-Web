/* 
    Bucles For Of y For In

    Son dos ciclos nuevos determinados ES6, Simplifican el bucle 'for' tradicional.

    For tradicional:

        for ( i = 0 ; i < 3 ; i++ ){
            // Código a ejecutar
        }

    Estos nuevos ciclos permiten recorrer estructuras de datos como los Arrays y Objetos

    For Of: 

        for ( variable of estructura) {
            // Código a ejecutar
        }

    For In:

        for ( variable In estructura) {
            // Código a ejecutar
        }

    -La variable toma el siguiente valor de la estructura en cada interacción.
    -No es necesario especificar el número de iteraciones (vueltas).
    -El bucle se incrementa solo.
    -El bucle se detiene automaticamente.
*/

// Estructura de datos

let pokemones = ['Pikachu','Charmander','Snorlax'];

// Ciclo For Tradicional

/* 
for (i=0 ; i<3 ; i++) {
    console.log(pokemones[i])
}  
*/

// Ciclo For Of

for ( let nombre of pokemones) {
    console.log(nombre); // Valor de cada posición de la estructura.
}

// Ciclo For In

for ( let numero in pokemon) {
    console.log(numero); // El índice (index) 
}
// Declaramos un array

var pokemones = ["Pikachu", "Squirtle", "Charizard"];

// var i = 0;

// Ciclo While

/* 
while( i <= 2){
    // Código que se ejecuta
    console.log(pokemones[i]); 
    i++;
} 
*/

//Ciclo Do/While

/* 
do{
    // Código a ejecutar
    console.log(pokemones[i]);
    i++;
} while(i <= 2); 
*/

// Ciclo for

/* 
for(var i = 0; i <= 2; i++){
    // Código que se ejecuta
    console.log(pokemones[i]);
} 
*/  

for(var i = 0; i <= 2; i++) {
    // Aquí va el código que se ejecuta.
    document.write(pokemones[i] + " yo te elijo! <br>");
}
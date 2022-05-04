// Guardamos el número de pokemones que el usuario elige.
var numero = prompt ("¿Cuántos pokemones quieres?");

// Declaro l array vacío.
var pokemones = [];

// Declaramos nuestro ciclo.
for (var i = 0; i < numero; i++){

    // Traigo un dato del usuario.
    var pokemon = prompt("Escribe el nombre de un pokemon!");

    // Agrego el dato del usuario al Array.
    pokemones.push(pokemon);

    //Imprimimos ene el documento.
    document.write("<strong>" + pokemones[i] + "</strong> yo te elijo! <br>");
}

// Imprimimos la línea final en el documento.
document.write("<br> Haz elegido tus " + numero + " pokemones!")


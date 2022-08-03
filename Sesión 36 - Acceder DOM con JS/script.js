/* 
    ID

    document.getElementById('id') ->
    Accedemos a un elemento a través de su id.

    - Los id's se escriben como strings '' o "".
    - Se recomienda que el elemento  sea guardado en una constante.
*/

//const titulo = document.getElementById('title');
//console.log(titulo)
//console.log(titulo.textContent);

/* 
    .textContent -> Nos va a servir para mostrar el contenido de texto y/o modificarlo
*/

//titulo.textContent = 'Cambio de Información';
//console.log(titulo.textContent);

/* 
    SELECTOR CSS

    document.querySelector('selectorCSS') -> Vamos a acceder al primer elemento que coincida con el selector CSS.

    - Los selectores se escriben como strings entre '' o ""
    - Se guardan en una constante.
*/

// const title = document.querySelector('h1'); // Tag
// const title = document.querySelector('#title'); // ID
// const title = document.querySelector('.title'): // Class
// const.log(title)

/* 
    Acceso a través de clases, pseuda clases y pseudo elementos.
*/

// const parrafo = document.querySelector('.paragraph');
// console.log(parrafo.textContent);

// const parrafo = document.querySelector('.paragraph:nth-child(3)');
// console.log(parrafo.textContent);

// const parrafo = document.querySelector('.paragraph :: before'); // No funciona con pseudo elementos.
// console.log(parrafo.textContent);

/* 
    Tener acceso a través de la sucesión de id y selectores CSS.
*/

// const titulo = document.getElementById('title').querySelector('span');
// console.log(title.textContent);

/* 
    TODOS LOS SELECTORES CSS

    document.querySelectorAll('selectorCSS') -> Accedemos a todos los elementos que coincidan con el selector CSS.

    - Nos devuelve un nodeList (Lista de Nodos)
    - Los selectores se escriben como strings '' o ""
    - Hay que guardarlos en una constante.
*/

// const parrafo = document.querySelectorAll('p'); // Tags
const parrafo = document.querySelectorAll('.paragraph');
// console.log(parrafos);

/* Index */

console.log(parrafos[0].textContent);
console.log(parrafos[1].textContent);
console.log(parrafos[2].textContent);
/* 
    Objeto Evento

    Vive siempre y cuando exista un evento.

    Se recomienda utilizar la letra 'e' (ev o evento) y pasa como un parámetro dentro del callback o función.

    Lo usamos para analizar y navegar a través de los nodos.
*/

/* 
    Nos traemos los elementos con id.
*/

const input = document.getElementById('input');
const button = document.getElementById('button');

/* 
    Agregamos el escuchador de eventos y usaremos el Objeto Evento (e) para observar y acceder a sus propiedades.
*/

// input.addEventListener('keydown', (e) => console.log(e) );
// input.addEventListener('keydown', (e) => console.log(e.key) );
// input.addEventListener('keydown', (e) => console.log(e.shiftKey) );

// button.addEventListener('click', (e) => console.log(e) );
// button.addEventListener('click', (e) => console.log(e.type) ) ;
button.addEventListener('click', (e) => console.log(e.target.childNodes[0].textContent) );
/* 
    Target

    Los podemos usar par delegar eventos y que a trevés de un elemento padre, escuchar a sus elementos hijos.
*/

/* const one = document.getElementById('one');
const one = document.getElementById('two');
const one = document.getElementById('three');

one.addEventListener('click' , (e) => console.log(e.target.textContent));
two.addEventListener('click' , (e) => console.log(e.target.textContent));
three.addEventListener('click' , (e) => console.log(e.target.textContent)); */

const container = document.getElementById('container');

// container.addEventListener('click', (e) => console.log(e.target));
// container.addEventListener('click', (e) => console.log(e.target.textContent));
container.addEventListener('click', (e) => e.target.classList.add('color'));
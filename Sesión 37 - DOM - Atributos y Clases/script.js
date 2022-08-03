/* 
    Accedemos a los objetos a través constante, getElementById y ID.
*/

const titulo = document.getElementById('title');
console.log(titulo);

/* 
    Atrubutos

    element.getAttribute('attribute') -> Devolver el atributo que tenga declarado en la etiqueta html.

    element.setAttribute('attribute','value') -> Modifica el valor del atributo
*/

// console.log(titulo.getAttribute('class'));

// titulo.setAttribute('class','big-title');
// console.log(titulo);

/* 
    Class

    element.classList.add('class', 'class', ... ) -> Añadir una o más clases.

    element.classList.remove('class', 'class', ... ) -> Eliminamos una o más clases.

    element.classList.contains('class') -> Devolver true si tiene la clase o false si no la tiene.

    element.classList.replace('oldClass','newClass') -> Sustituye una clase por otra.
*/

// titulo.classList.add('big-title','red-title');
// titulo.classList.remove('main-title', 'red-title');

// console.log(titulo);

// console.log(titulo.classList.contains('main-title'));

/* if (titulo.classList.contains('red-title'));{
    console.log( 'Si lo tiene')
} else {
    console.log('Estas perdido')
} */

// titulo.classList.replace('big-title','small-title');
// console.log(titulo);

/* 
    Atributos "directos"
        id
        classname
        nodeName
        textContent
        InnerHTML
*/

console.log(titulo.id); // 'title'
console.log(titulo.classListName); // 'main-title'
console.log(titulo.nodeName); // 'H1'
console.log(titulo.nodeType); // 1
console.log(titulo.hidden); // false
console.log(titulo.textContent); // DOM - Atributos y clases desde Javascript
console.log(titulo.innerHTML); // DOM - Atributos y clases desde Javascript

/* 
    Atributos "Anidados"
*/

console.log(titulo.firstChild.nodeValue);
console.log(titulo.firstChild.nodeType);
console.log(titulo.firstChild.isConnected);

/* 
    Atributos nodeList
*/

console.log(titulo.childNodes[0])
console.log(titulo.childNodes[0].length)
console.log(titulo.childNodes[0].nodeName)

console.log(titulo.childNodes[1])
console.log(titulo.childNodes[1].textContent)
console.log(titulo.childNodes[1].hidden)
console.log(titulo.childNodes[1].nodeType)
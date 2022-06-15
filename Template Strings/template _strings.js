/* 
    Template Strings

    Cadenas de texto que permiten simplificar el código cuando queremos concatenar datos.

    Se delimitan con dos tildes invertidas o acentos graves: 

         `Template Strings`

    Pueden tener "expresiones", identificadas con el signo del dolar y envueltas en llaves.

        ${}   <- Marcador

    Una expresión es cualquier unidad de código válida que se resuelve en un valor.

         x = 'gato'        = Asignación
         3 + 4             = Arimética
         true == true      = Lógica

        ${Expresión}
*/

var nombre = 'Sharon';
var apellido = 'Pacheco';
var edad = '20';

// Así concatenamos cadenas de texto y variables.
console.log('Hola ' + nombre + '' + apellido + ' tienes ' + edad + ' años');

// Así utilizamos los Templates Strings
console.log(`Hola ${nombre} ${apellido} tienes ${edad} años.`);

document.write(`El siguiente año tendras ${edad+1} años.`)

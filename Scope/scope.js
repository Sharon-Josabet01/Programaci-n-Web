/* 
    Scope o Ámbito es la zona donde existe una variable o constante.

        Contexto de variables y constantes 

    Global: Podemos acceder a ellas desde cualquier parte del código.
    Local: Variables son creadas dentro de una función, sólo se puede acceder a ellas dentro de la función o función anidada.

    REPASO

    "Variables" son espacios que recervamos para recervar información qure podría cambiar a lo largo del uso del programa.
    
        - Se declaran      -> var nombre;
        - Se inicializan   -> var nombre = 'Sharon';
        - Se modifican     -> nombre = 'Sharoncita';

    Con ECMA Script 6 ( ESC5 última versión de js) se usa para declarar variables la palabra 'let', no se recomienda usar 'var', esto es por un concepto reciente llamado 'hoisting'.
*/

let nombre = 'Sharon'; // Inicializamops una Variable Global 

console.log(`Mi nombre es ${nombre}`);

function saludar() {
    console.log(`Hola ${nombre}`);
    let apellido = 'Pacheco'; // Var Ámbito Local
    console.log( `Tu nombre colpeto es ${nombre} ${apellido}`);

    //Función Anidada 
    function despedida() {
        // Código que ejecuta mi función anidada
        nombre = 'Sharoncita';
        console.log(nombre);
    }
    despedida();
}

saludar(); // Invocamos a la función
// despedida(); // Invocar a la función anidada -> Error
// console.log(apellido) //Error

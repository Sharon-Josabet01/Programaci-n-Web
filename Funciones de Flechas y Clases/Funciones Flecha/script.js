/* 
    Funciones

    Son fragmentos de código que escribimos para ejecutar una tarea y volver a escribir el mismo más de una vez.

        - Modularizamos el código.
        - Es más solventar errores.
        - Deben realizar una sola tarea.

    Esta es la sintaxis tradicional.

        function nombreFuncion () {
            // El código a ejecutar
        };

    Esta es la forma con Es6

        const nombreFuncion = () => {
            // Código a ejecutar
        };

    Funciones pueden recibir parámetros y van entre los paréntesis.

    ... (parametro1, parametro2) ...

    Estos parámetros se usaran dentro de la funcion.

    Las funciones pueden devolver y se usa la palabra reservada 'return'

    ... {
        return parametro1 + parametro2
    }

    3. Las funciones tienen que ser invocadas y las tenemos que llamar por fuera de la funcion.

        nombreFuncion();
*/

function saludar() {
    console.log('¡Hola Mamá!');
}

saludar();

// Nueva Forma, Función de Flecha

const despedida = () => {
    console.log('¡Adiós Amigos!');
}

despedida();

// Funció de Tipo Flecha con parámetros

const mensajito = (día) => {
    console.log(`Hoy es ${día}`);
}

mensajito('viernes');
mensajito('lunes');
mensajito('martes');
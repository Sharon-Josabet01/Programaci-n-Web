/* 
    Instrucciones práctica objetos

    -Crear una clase Película con las propiedades: título, género, año.

        class nombreClase {
            contrscutor(propiedades) {
                this.propiedad = propiedad
            }
        }

    -Crear un método que nos regrese el título.

        nombreMétodo () {
            return código que devuelve
        }

    -Crear un método que nos regrese toda la información concatenada en un string.

        "Esta película se llama 'Título Pelicula' es de genero 'genero película' creada en el año 'año película' "

    -Solicitar al usuario tres películas y agregarlas a un array.

        prompt('Mensaje');

        let nombreArray = [[Dato-1. Dato-2], Dato-1, Dato-2];

    -Crear una función que muestre por consola el título de todas las películas.

        const nombreFuncion = () => {
            codigo a ejecutar
        }

        for (const nombre of array) {
            codigo a ejecutar
        }

        nombreFuncion();

    -Crear una función que muestre por consola toda la información de las películas.
*/

class Movie {
    constructor(title,gender,year){
        this.title = title
        this.gender = gender
        this.year = year
    }

    getTitle() {
        return this.title
    }

    getInfo() {
        return `Esta película se llama ${this.title} es de género ${this.gender} y se estrenó en el año ${this.year}.`
    }
}

let films = [];

while(films.length < 3) {
    let title = prompt('Agrega un título de Película');
    let gender = prompt('¿Cuál es su género?');
    let year = prompt('¿En qué año se estrenó?')

    films.push( new Movie(title,gender,year) );
}

//Funciones

const showNames = () => {
    for( const film of films ) {
        console.log( film.getTitle() );
    }
}

showNames();
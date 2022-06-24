/* 
    Clases
    
    Es una estructura de Es6, que funciona como una plantilla o molde para crear objetos.

    Definimos una clase usando la palabra reservada class seguid del nombre de la clase.

    Cuando creamos un objeto se le llama 'instancear'.

    Para crear una clase necesitamos una función constructora. Se llama OBLIGATORIAMENTE 'constructor' y se ejecuta cada vez que creamos un objeto.

        class Pokemon{
            constructor (nombre, tipo, poder) {
                this.nombre = nombre 
            }

                // Aquí van los métodos (funciones)
        }

    - Cuando definimos clases la primera letra de su nombre va en MAYÚSCULAS.
    - Los parámetros van entre los paréntesis y son las propiedades que van a tener los objetos.
    - Para asignar los parámetros al objeto utilizamos la palabra reservada  'this' -> Hace referencia al objeto.

        'Esta propiedad del objeto' 
        'Este parámetro'

    Simplemente estamos asociando las propiedades del objeto con los valores que enviamos por parámetros.

    -----

    Métodos

    Son funciones asociadas a los objetos.

    Los métodos se declaran dentro de la clase, pero fuera del constructor.

        pokedex() {
            return ` Este es ${this.nombre}`
        }

    No se usa la palabra reservsada 'function', ni flecha. esta es la sintaxis de un método dentro de la clase.

    -----

    Crear un Objeto

    Necesitamos usar la palabra reservada 'new' y el nombre de la clase.

        cons pikachu = new Pokemon 
        ('Pikachu','Eléctrico',1000);

    Una vez instanciado el objeto podemos acceder a sus propiedades y métodos utilizando la nomenclatura de punto '.'

        pokachu.nombre;
        pokachu.poder;
        pikachu.tipo;
        pikachu.pokedex();
*/

class Pokemon {
    constructor (nombre, tipo, poder){
        this.nombre = nombre
        this.tipo = tipo
        this.poder = poder
    }

    pokedex(){
        return `Este es ${this.nombre} es un pokemon de tipo ${this.tipo} y su poder es de ${this.poder}`
    }
}

const pikachu = new Pokemon ('Pikachu','Eléctrico',1000);

const charmander = new Pokemon ('Charmander','Fuego',900);

console.log(pikachu);
console.log(charmander);

console.log(pikachu.nombre);
console.log(charmander.tipo);

console.log(pikachu.pokedex());
console.log(charmander.pokedex());
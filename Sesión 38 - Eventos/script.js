/* 
    Eventos

    Cualquier cosa que sucede en el documento.

    * El contenido se ha leído.
    * El contenido se ha cargado.
    * El usuario mueve el ratón.
    * El usuario pulsa una tecla.
    * El usuario cierra la ventana.
    * Una lista muy larga de eventos -> https://developer.mozilla.org/es/docs/Web/Events
    
    sintaxis
    element.addEvenListener('event', callback) 
    
    Escuchador de eventos -> Qué evento queremos escuchar y que va a ejecutar: callback -> Función que se "dispara" al ocurrir el evento.
*/

/* 
    Localizamos los elementos con id
*/

const buttom = document.getElementById('buttom');
const box = document.getElementById('box');
const input = document.getElementById('input');

/* 
    Eventos del ratón

    click -> Pulsar el botón izquierdo.
    dblclick -> Pulsar dos veces seguidas el botón izquierdo.

    mouseenter -> Entramos en la zona que tiene el evento.
    mouseleave -> Salimos de la zona que tiene el evento.
    mousedown -> Pulsamos el botón izquierdo en la zona del evento.
    mouseup -> Soltamos el botón izquierdo en la zona del evento.
    mousemove -> Movemos el ratón en la zona del evento.
*/

// buttom.addEventListener('click' , () => console.log("Pulsaste un click") );
// buttom.addEventListener('dblclick' , () => console.log("Diste doble click") );

// box.addEventListener('mouseenter', () => console.log('Entraste') );
// box.addEventListener('mouseleave', () => console.log('Saliste') );

// box.addEventListener('mousedown', () => console.log('Puchaste Dentro') );
// box.addEventListener('mouseup', () => console.log('Despegaste') );

// box.addEventListener('mousemove', () => console.log('Te mueves') );

/* 
    Eventos del teclado

    keydown -> Pulsamos una tecla
    keyup -> Soltamos una tecla
    keypress -> Pulsamos una tecla y no la soltamos
*/

// input.addEventListener('keydown' => console.log('Pulsate una tecla') );
input.addEventListener('keyup' => console.log('Soltaste una tecla') );
input.addEventListener('keypress' => console.log('Mantienes presionado') );


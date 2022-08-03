/* 
    Modelo de Objeto del Documento - DOM (Document Object Model) 

    - Es toda la estructura HTML del documento.
    - El 99% de las veces que usamos Javascript, interactuamos con el DOM.
    - El DOM no es Javascript.
    - El DOM viene integrado en el navegador y podemos usarla con Javascript.

    Nodos

    Cada parte del documento es un nodo, aunque tecnicamente los elementos son objetos, para Javascript cada parte del árbol es un nodo.
    
    Hay varios tipos de nodos (12), los más usados son:

    - Element node -> Cualquier etiqueta del HTML -> 1
    - Text node -> Contenido de la etiqueta -> 1
    - Comment node -> Cualquier comentario en HTML -> 8

    NOTA: Cualquier consulta para saber el tipo de nodo, nos devuelve uno de estos números.

    Acceder al DOM desde Navegador

    1. Para acceder  a un elementode HTML desde el navegador utilizamos las DevTools.
    2. Tenemos que seleccionar la etiqueta que queremos consultar.
    3. En la consola usamos el comando -> $0 -> Despliega las propiedades del nodo.

    NOTA: Este comando $0 sólo funciona en el navegador, no en el archivo Javascript.

    Consultando al H1

    >> $0 // Nodo del H1
    >> $0.id // "title"
    >> $0.textContent // "DOM - Document Object Model"
    >> $0.nodeType // 1

    Consultando Contenido H1 

    >> $0.childNodes // NodeList
    >> $0.childNodes[0] // #text "DOM - Document Object Model"
    >> $0.childNodes[0].length // 27
    >> $0.childNodes[0].data // "DOM - Document Object Model"
    >> $0.childNodes[0].nodeType // 3

    Consultando al comentario

    >> $0 // <!-- <p>¡Soy un cometario!</p> -->
    >> $0.textContent // " <p>¡Soy un cometario!</p> "
    >> $0.length // 28
    >> $0.nodeType // 8
*/
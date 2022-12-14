// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:
let toDoItems = [];

// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:
var span = document.querySelector('#createdBy');  // obtengo el elemento (declaramos un variable y le asignamos el metodo pra buscar mi id)
span.innerHTML = span.innerHTML+ ' Marisa' ;      // con el metodo innerText obtengo ek texto de mi elemento y decimeo que va hacer lo qe ya teniamos + mi nombre


// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

function ToDo (description) {                             // En este caso nos dan una funcion constructors y hay que agregarle
  // Tu código acá:                                       // solo el parametro
  
  this.description = description,                         
  this.complete = false;


}


// Agregar un método denominado 'completeToDo' al prototipo de la clase ToDo
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

// Tu código acá:
ToDo.prototype.completeToDo = function(){                // Creo un metodo que es una funcion que haga algo
  this.complete = true                                   // accedemos al atributo y le asignamos true
};


// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell

//--------la funcion arma un div que adentro tiene un span ------------------------------------------------------

function buildToDo(todo, index) {
  // Tu código acá: contruye el tag
  var toDoShell = document.createElement('div') // para crear un nuevo elemento utilizamos el metodo document.createElement() y colocamos el elmento entre parentesis
   toDoShell.className= "toDoShell"  ;            // vamos a la variabley className (obtiene y establece el valor del atributo class del elemento especificado) y le seatmo el valor
  var toDoText = document.createElement('span')    // primero se crea la variable pra almacenar el nuevo elemento
  toDoText.innerHTML= todo.description             //
  toDoText.id = index;
  
  if(todo.complete ){                             // si el atributo completed es verdadero 
    toDoText.className = 'completeText'             // asignarle la clase 
  }

  toDoShell.appendChild(toDoText)                // agregar como hijo - appendchild: Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.

  toDoText.addEventListener('click', completeToDo)  // agregamos al final del ejerciocio

  return toDoShell
}

// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array

function buildToDos(toDos) {
  // Tu código acá:
  var array = toDos.map(buildToDo)                    // con el metodo map invocamos ala funcion del ejercicio anterior para recorrer todos sus elemento

  return array
}


// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {
  // Tu código acá:
  var toDoContainer = document.getElementById("toDoContainer")  // busca el toDoContainer
  toDoContainer.innerText = "";
  var resultado= buildToDos(toDoItems)                         // agregar todos los datos trabajados y fguardarlo en un avariable 
  for(let i=0; i < resultado.length;i++){                       // iteramos sobre el resultado
    toDoContainer.appendChild(resultado[i])                      // agregamos los elementos a la variable
  }

}


// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla

function addToDo() {
  // Tu código acá:
  var input = document.querySelector('#toDoInput')                         // obtenemos el valor
  var newNodo = new ToDo(input.value)                                    // creamos una nueva clase pasand como argument el valor de la input
  toDoItems.push(newNodo)                                               // agrego el objeto al array
  input.value = "";                                                    // para que lo ques esta escrito se borre
  displayToDos();                                                       // hace un refresh lo vuelve a actualizar y lo cola en la pantalla

  


}

// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

// Tu código acá:
var bts = document.getElementById('addButton')             // obtenemos el elemento
bts.addEventListener('click',addToDo)                    // creamos un event listener con el tipo de opciones y listener que es lo q voy a hacer cuando ocurra ese elemento

// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) {                   
  // DESCOMENTAR LA SIGUIENTE LINEA
   const index = event.target.id;                              // event = click ;target= span;  id= index
  // Tu código acá:
  toDoItems[index].completeToDo();                             // agarramos nuestro array y accedemos al elemento index y le aplico el complet lo que rebibe en false lo cambia a true
  displayToDos();                                              // para que se muestre en la pantalla

}

// Una vez que llegaste a este punto verificá que todos los tests pasen


// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// Checkpoint :<input type="checkbox"> es un elemento de entrada que te permite insertar un vector o array de valores.
// El atributo value es usado para definr el valor enviado por el checkbox. 
function buildToDo(todo,index) {
  var check = document.createElement('input')


  
}
// ********************************************** ----------- ********************************************** //


// Acá debes insertar la llamada a 'displayToDos'

displayToDos();


// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}

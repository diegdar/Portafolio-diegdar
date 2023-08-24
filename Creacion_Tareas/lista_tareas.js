var padre = document.getElementById('padre');
var tareasCreadas = padre.getElementsByTagName("li");

// Función para crear una nueva tarea
function crearNuevaTarea(textoCajaValue) {
  // crea el nodo elemento con la etiqueta <li>
  var nuevaTarea = document.createElement("li");
  // crea el nodo texto
  var texto = document.createTextNode(textoCajaValue);
  // crea el nodo elemento con la etiqueta <button>
  var botonBorrar = document.createElement("button");
  // crea el nodo elemento con la etiqueta <input>
  var checkbox = document.createElement("input");
  checkbox.type = 'checkbox';
  // Asocia los elementos creados al elemento <li>(nuevaTarea)
  nuevaTarea.appendChild(texto);
  nuevaTarea.appendChild(checkbox);
  nuevaTarea.appendChild(botonBorrar);
  // Agrega la clase del boton
  botonBorrar.classList.add('estiloBoton');
  // crea el evento que tachara o quitara el tachado a una tarea al darle click
  checkbox.addEventListener('click', function() {
    if (checkbox.checked) {
        this.closest('li').classList.add('tachado');//*closest:nota1
    } else {
        this.closest('li').classList.remove("tachado");

    }
  });
  return nuevaTarea;
}
// Función para agregar una tarea
function agregarTarea() {
  // Apunta a la caja de texto donde recogera las tareas creadas por el usuario
  var textoCaja = document.getElementById("cajaTexto");
  // recoge el valor introducido por el usuario en la caja de texto
  var textoCajaValue = textoCaja.value.trim();//*trim():nota2
  // si el valor en la caja tiene un valor diferente de vacio creara la nueva tarea 
  if (textoCajaValue != "") {
    var nuevaTarea = crearNuevaTarea(textoCajaValue);
    // Crea el nuevo elemento en el DOM como hija de <u>
        padre.appendChild(nuevaTarea);
    // Esto asegura que el campo esté limpio y listo para que el usuario pueda ingresar una nueva tarea sin tener que borrar manualmente el texto anterior.
    textoCaja.value = "";
    }
}
// hace que llame a la funcion 'agregarTarea()' tambien al darle intro/enter(que representa el nº 13) a demas de poder hacerlo al darle click al boton 'Agregar'. ⚠️Es importante poner la variable 'textoCaja' antes del 'addEventListener' para que solo actue el envento del intro en la caja del input que queremos.
var textoCaja = document.getElementById("cajaTexto");
textoCaja.addEventListener("keyup", function(event) {//*keyup:nota3
  if (event.keyCode == 13) {
    agregarTarea();
  }
});
// Selecciona todos los checkboxes
var selectDes = 0;
function seleccionarTodo() {
  var long = tareasCreadas.length;
  if(selectDes==0){
    for (var i = 0; i < long; i++) {
      var checkbox = tareasCreadas[i].querySelector('input[type="checkbox"]');
      checkbox.checked = true;
      selectDes = 1;
    }
  }else if(selectDes==1){
    for (var i = 0; i < long; i++) {
      var checkbox = tareasCreadas[i].querySelector('input[type="checkbox"]');
      checkbox.checked = false;
      selectDes = 0;
    }
  }
}
// Elimina todas las tareas seleccionadas
function borrarSeleccionados() {  
  var long = tareasCreadas.length-1;
  for (i = long; i >= 0; i--) {//*i-- :nota4
    if (tareasCreadas[i].querySelector('input[type="checkbox"]').checked) {
      tareasCreadas[i].remove();
    }
  }
}
/* 
*nota1: closest : Encuenta el elemento padre mas cercano siendo mas eficiente que 'parentNode' y si cambia la estructura HTML evitara errores.
*nota2: TRIM():  sirve para eliminar los espacios en blanco al inicio y al final del valor que hemos introducido en el campo de entrada de la nueva tarea. Esto asegura de que el valor que hemos introducido no contenga espacios adicionales, al inicio y al final. !!El incoveniente es que si luego tenemos que utilizar este valor para otra cosa el valor almacenado si habra guardado los espacios en blanco aunque visualmente en el navegador no lo veamos.
*nota3: keyup: El evento "keyup" se dispara después de que se haya soltado una tecla, lo que garantiza que el valor del campo de texto esté actualizado correctamente.
*nota4: i-- : Cuando eliminamos un elemento de la lista utilizando el método 'remove()', la lista de 'tareasCreadas' se actualiza automáticamente y se acorta en longitud. Sin embargo, al iterar sobre la lista con un bucle 'for' y eliminar elementos en el medio de la lista, esto puede causar problemas y algunos elementos pueden quedar sin eliminar.Una solución para evitar este problema es recorrer la lista de tareas creadas en orden inverso, de la última a la primera. De esta manera, los elementos se eliminarán correctamente sin afectar la iteración. 
 */

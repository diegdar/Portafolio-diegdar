// Array que se utilizara para guardar las tareas creadas
var tareas = [];

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
            this.closest('li').classList.add('tachado');//*closest->nota1
        } else {
            this.closest('li').classList.remove("tachado");

        }
      });
      // crea el evento que eliminara una tarea (etiqueta li) y el valor en el array 'tareas' al darle click
      botonBorrar.addEventListener('click', function() {
        var tareaEliminada = this.parentNode.firstChild.textContent;
        var index = tareas.indexOf(tareaEliminada);
        if (index !== -1) {
          tareas.splice(index, 1);
        }
        this.parentNode.remove();
      });
      return nuevaTarea;
    }
    // Función para agregar una tarea
    function agregarTarea() {
      // Apunta a la caja de texto donde recogera las tareas creadas por el usuario
      var textoCaja = document.getElementById("cajaTexto");
      // recoge el valor introducido por el usuario en la caja de texto
      var textoCajaValue = textoCaja.value.trim();//*trim()->nota2
      // si el valor en la caja tiene un valor diferente de vacio creara la nueva tarea y la agregara al array 'tareas'
      if (textoCajaValue != "") {
        var nuevaTarea = crearNuevaTarea(textoCajaValue);
        tareas.push(textoCajaValue);
        // Crea el nuevo elemento en el DOM como hija de <u>
            var padre = document.getElementById('contenedor');
            padre.appendChild(nuevaTarea);
        // Esto asegura que el campo esté limpio y listo para que el usuario pueda ingresar una nueva tarea sin tener que borrar manualmente el texto anterior.
        textoCaja.value = "";
        }
    document.getElementById("valorArray").innerHTML = tareas;
    }
    // hace que llame a la funcion 'agregarTarea()' tambien al darle intro/enter(que representa el nº 13) a demas de poder hacerlo al darle click al boton 'Agregar'. ⚠️Es importante poner la variable 'textoCaja' antes del 'addEventListener' para que solo actue el envento del intro en la caja del input que queremos.
    var textoCaja = document.getElementById("cajaTexto");
    textoCaja.addEventListener("keyup", function(event) {//*keyup->nota3
      if (event.keyCode == 13) {
        agregarTarea();
      }
    });
/* 
*nota1: closest : Encuenta el elemento padre mas cercano siendo mas eficiente que 'parentNode' y si cambia la estructura HTML evitara errores.
*nota2: TRIM():  sirve para eliminar los espacios en blanco al inicio y al final del valor que hemos introducido en el campo de entrada de la nueva tarea. Esto asegura de que el valor que hemos introducido no contenga espacios adicionales, al inicio y al final. !!El incoveniente es que si luego tenemos que utilizar este valor para otra cosa el valor almacenado si habra guardado los espacios en blanco aunque visualmente en el navegador no lo veamos.
*nota3: keyup: El evento "keyup" se dispara después de que se haya soltado una tecla, lo que garantiza que el valor del campo de texto esté actualizado correctamente.
 */

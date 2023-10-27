function agregarTarea() {

    // RECOGIDA DE DATOS EN FORMULARIO Y VALIDACIÓN.
    
    // Obtiene el valor del campo de entrada por su id y verifica que no es nulo.

    var inputTask = document.getElementById("tarea");
    var textTask = inputTask.value;

    if (textTask == "") {

      alert("Por favor, ingrese una tarea válida.");
      return;

    }

    // CREACIÓN DE ELEMENTOS.

    // Crea un nuevo elemento li y lo asigna a la clase "tarea".

    var newTask = document.createElement("li");
    newTask.className = "tarea";

    // Crea un elemento input de tipo "checkbox" y lo asigna a la clase "checkbox".

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    // Crea un botón "Eliminar", le asigna el texto "Eliminar" y lo asocia a una función que se encarga de borrar la tarea.

    var newDeleteButton = document.createElement("button");
    newDeleteButton.textContent = "Eliminar";
    newDeleteButton.onclick = function() { newTask.remove(); };

    // Agrega todos los elementos de la tarea (checkbox, texto de la tarea y botón "Eliminar") al elemento li.

    newTask.appendChild(checkbox);
    newTask.appendChild(document.createTextNode(textTask));
    newTask.appendChild(newDeleteButton);

    // EVENTO DE ESCUCHA.

    // Agregar un evento de escucha para los checkboxes. Mover tarea completada a la sección correspondiente según el valor del checkbox.

    checkbox.addEventListener("change", function() {

      if (checkbox.checked) {

        var completedTasksList = document.getElementById("lista-completadas");
        completedTasksList.appendChild(newTask);
        newTask.style.textDecoration = "line-through";

      } else {

        var pendingTasksList = document.getElementById("lista-pendientes");
        pendingTasksList.appendChild(newTask);
        newTask.style.textDecoration = "none";

      }
    });

    // AGREGAR LA TAREA A LA LISTA Y LIMPIAR EL CAMPO DE ENTRADA DEL FORMULARIO.

    // Agrega la tarea a la lista de tareas pendientes.

    var pendingTasksList = document.getElementById("lista-pendientes");
    pendingTasksList.appendChild(newTask);

    // Limpiar el campo de entrada de texto.

    inputTask.value = "";
}

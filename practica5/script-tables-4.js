function addRow() {

    // Obtener los valores de entrada

    var nameInput = document.getElementById("nombre").value;
    var surnameInput = document.getElementById("apellido").value;
    var birthdateInput = document.getElementById("fechaNacimiento").value;

    // Verificar si los campos de entrada no están vacíos

    if (nameInput !== "" && surnameInput !== "" && birthdateInput !== "") {

        // Calcular la edad en función de la fecha de nacimiento

        var birthdateDate = new Date(birthdateInput);
        var today = new Date();
        var age = today.getFullYear() - birthdateDate.getFullYear();

        // Ajustar la edad si el cumpleaños aún no ha llegado este año

        if ( today.getMonth() < birthdateDate.getMonth() || (today.getMonth() === birthdateDate.getMonth() && today.getDate() < birthdateDate.getDate()) ) { age--; }

        // Crear elementos HTML para la nueva fila

        var newRow = document.createElement("tr");
        var columnName = document.createElement("td");
        var columnSurname = document.createElement("td");
        var columnBirthdate = document.createElement("td");
        var columnAge = document.createElement("td");
        var columnButton = document.createElement("td");

        // Asignar valores a los elementos de la nueva fila

        columnName.textContent = nameInput;
        columnSurname.textContent = surnameInput;
        columnBirthdate.textContent = birthdateInput;
        columnAge.textContent = age;

        // Crear un botón para eliminar la fila

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";

        // Asignar una función para el botón de eliminar

        deleteButton.onclick = function() { deleteRow(newRow); }

        // Agregar los elementos a la nueva fila

        newRow.appendChild(columnName);
        newRow.appendChild(columnSurname);
        newRow.appendChild(columnBirthdate);
        newRow.appendChild(columnAge);
        columnButton.appendChild(deleteButton);
        newRow.appendChild(columnButton);

        // Agregar la nueva fila a la tabla

        var table = document.getElementById("miTabla");
        table.querySelector("tbody").appendChild(newRow);

        // Limpiar los campos de entrada

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("fechaNacimiento").value = "";

    }

}

// Eliminar la fila de la tabla

function deleteRow(row) {
    
    var table = document.getElementById("miTabla");
    table.querySelector("tbody").removeChild(row);

}

// Eliminar filas que se repiten en su totalidad

function markAndRemoveIdenticalRows() {

    // Obtener todas las filas de la tabla

    var rows = document.querySelectorAll('tr');

    // Crear un objeto para almacenar las veces que se repite cada fila

    var rowCount = {};

    // Recorrer las filas a partir de la segunda (ignorando la cabecera)

    for (var row = 1; row < rows.length; row++) {

        var cells = rows[row].querySelectorAll('td');

        var rowContent = "";

        // Obtener el valor de cada celda y agregarlo a la cadena que representa la fila

        for (var cell = 0; cell < cells.length - 1; cell++) {

            var cellValue = cells[cell].textContent;
            rowContent += cellValue + ",";

        }

        // Contar cuántas veces se repite esta fila
        
        if (rowCount[rowContent] === undefined) {

            rowCount[rowContent] = 1;

        } else { rowCount[rowContent]++; }

    }

    // Eliminar las filas que se repiten

    for (var row = 1; row < rows.length; row++) {

        var cells = rows[row].querySelectorAll('td');

        var rowContent = "";

        // Obtener el valor de cada celda y agregarlo a la cadena que representa la fila

        for (var cell = 0; cell < cells.length - 1; cell++) {

            var cellValue = cells[cell].textContent;
            rowContent += cellValue + ",";

        }

        // Si esta fila se repite más de una vez, eliminarla

        if (rowCount[rowContent] > 1) { deleteRow(rows[row]); }

    }

}
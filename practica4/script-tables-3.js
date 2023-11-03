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

function markSameNames() {

    // Obtener todas las filas de la tabla

    var rows = document.querySelectorAll('tr');

    // Crear un objeto para contar cuantas veces se repite cada nombre

    var nameCount = {};

    // Recorrer las filas a partir de la segunda (var i = 1 para ignorar la cabecera)

    for (var i = 1; i < rows.length; i++) {

        var cells = rows[i].querySelectorAll('td');

        var name = cells[0].textContent; 

        // Contar la cantidad de veces que se repite el nombre

        if (nameCount[name] === undefined) {

            nameCount[name] = 1;

        } else { nameCount[name]++; }

    }

    // Marcar en verde la columna de nombres que se repiten

    for (var i = 1; i < rows.length; i++) {

        var name = rows[i].querySelectorAll('td')[0].textContent;

        if (nameCount[name] > 1) {

            cells = rows[i].querySelectorAll('td');
            cells[0].style.backgroundColor = 'palegreen';

        }

    }

}

function markSameAges() {

    // Obtener todas las filas de la tabla

    var rows = document.querySelectorAll('tr');

    // Crear un objeto para almacenar edades y la cantidad de veces que se repiten

    var ageCount = {};

    // Recorrer las filas a partir de la segunda (ignorando la cabecera)

    for (var i = 1; i < rows.length; i++) {

        var cells = rows[i].querySelectorAll('td');
        var age = cells[3].textContent; // Edad en la cuarta columna

        // Contar la cantidad de veces que se repite la edad

        if (ageCount[age] === undefined) {

            ageCount[age] = 1;

        } else { ageCount[age]++; }

    }

    // Marcar en azul la columna de las edades que se repiten

    for (var i = 1; i < rows.length; i++) {

        var age = rows[i].querySelectorAll('td')[3].textContent;

        if (ageCount[age] > 1) {

            cells = rows[i].querySelectorAll('td');
            cells[3].style.backgroundColor = 'skyblue';

        }

    }

}
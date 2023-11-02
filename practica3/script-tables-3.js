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

    // Crear un objeto para almacenar nombres y sus respectivas filas

    var namesList = {};

    // Recorrer las filas a partir de la segunda (ignorando la cabecera)

    for (var i = 1; i < rows.length; i++) {

        var cells = rows[i].querySelectorAll('td');
        var name = cells[0].textContent; // Nombre en la primera columna

        // Comprobar si el nombre ya existe en el objeto. Si existe, marca la fila actual y la fila previamente registrada. Si no existe, registra la fila actual en el objeto.

        if (namesList[name] !== undefined) {
            
            rows[i].style.backgroundColor = 'palegreen';
            //rows[namesList[name]].style.backgroundColor = 'palegreen';

        } else {
            
            namesList[name] = i;
            rows[i].style.backgroundColor = '';

        }

    }

}

function markSameAges() {

    // Obtener todas las filas de la tabla

    var rows = document.querySelectorAll('tr');

    // Crear un objeto para almacenar edades y sus respectivas filas

    var agesList = {};

    // Recorrer las filas a partir de la segunda (ignorando la cabecera)

    for (var i = 1; i < rows.length; i++) {

        var cells = rows[i].querySelectorAll('td');
        var age = cells[3].textContent; // Edad en la cuarta columna

        // Comprobar si la edad ya existe en el objeto. Si existe, marca la fila actual y la fila previamente registrada. Si no existe, registra la fila actual en el objeto.
 
        if (agesList[age] !== undefined) {

            rows[i].style.backgroundColor = 'skyblue';
            rows[agesList[age]].style.backgroundColor = 'skyblue';

        } else {

            agesList[age] = i;
            rows[i].style.backgroundColor = '';

        }

    }

}
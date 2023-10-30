function addRow() {

    // Recoge los datos del formulario

    var name = document.getElementById("nombre").value;
    var surname = document.getElementById("apellido").value;
    var birthdate = document.getElementById("fechaNacimiento").value;

    // Si los campos no están vacíos...

    if (name.trim() !== "" && surname.trim() !== "" && birthdate.trim() !== "") {

        var birthdateDate = new Date(birthdate);
        var today = new Date();
        var age = today.getFullYear() - birthdateDate.getFullYear();
        
        // Comprueba si el cumpleaños ya ocurrió este año

        if (today.getMonth() < birthdateDate.getMonth() || (today.getMonth() === birthdateDate.getMonth() && today.getDate() < birthdateDate.getDate())) { age--; }
        
        // Crea una fila nueva y 5 columnas para nombre, apellido, fecha de nacimiento, edad y un botón para eliminar la fila

        var newRow = document.createElement("tr");
        var columnName = document.createElement("td");
        var columnSurname = document.createElement("td");
        var columnBirthdate = document.createElement("td");
        var columnAge = document.createElement("td");
        var columnButton = document.createElement("td");

        // Añade el contenido a las columnas
        
        columnName.textContent = name;
        columnSurname.textContent = surname;
        columnBirthdate.textContent = birthdate;
        columnAge.textContent = age;
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";

        // Funcion para eliminar la fila que creamos
        
        deleteButton.onclick = function() { deleteRow(newRow); }

        // Añade el botón de eliminar a su columna y las columnas a la fila
        
        newRow.appendChild(columnName);
        newRow.appendChild(columnSurname);
        newRow.appendChild(columnBirthdate);
        newRow.appendChild(columnAge);
        columnButton.appendChild(deleteButton);
        newRow.appendChild(columnButton);

        // Selecciona la tabla, el elemento donde se añade la nueva fila y la añade. 
        
        var table = document.getElementById("miTabla");
        table.querySelector("tbody").appendChild(newRow);

        // Limpia los campos de entrada
        
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("fechaNacimiento").value = "";

    }

}

function deleteRow(row) {

    var table = document.getElementById("miTabla");
    table.querySelector("tbody").removeChild(row);

}
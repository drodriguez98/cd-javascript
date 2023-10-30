function addRow(){

    // Recoge los datos del formulario

    var name = document.getElementById("nombre").value;
    var surname = document.getElementById("apellido").value;
    var age = document.getElementById("edad").value;

    // Si los campos no están vacíos...
    
    if( name.trim() !== "" && surname.trim() !== "" && age.trim() !== "" ) {

        // Crea una fila nueva y 4 columnas para nombre, apellido, edad y un botón para eliminar la fila

        var newRow = document.createElement("tr");
        var columnName = document.createElement("td");
        var columnSurname = document.createElement("td");
        var columnAge = document.createElement("td");
        var columnButton = document.createElement("td");

        // Añade el contenido a las columnas

        columnName.textContent = name;
        columnSurname.textContent = surname;
        columnAge.textContent = age;
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";

        // Funcion para eliminar la fila que creamos

        deleteButton.onclick = function() { deleteRow(newRow); }

        // Añade el botón de eliminar a su columna y las columnas a la fila

        newRow.appendChild(columnName);
        newRow.appendChild(columnSurname);
        newRow.appendChild(columnAge);
        columnButton.appendChild(deleteButton);
        newRow.appendChild(columnButton);

        // Selecciona la tabla, el elemento donde se añade la nueva fila y la añade. 

        var table = document.getElementById("miTabla");
        table.querySelector("tbody").appendChild(newRow);

        // Limpia los campos de entrada

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("edad").value = "";
        
        
    }

}

// Seleccionamos la tabla y mandamos eliminar

function deleteRow(row){
    
    var table = document.getElementById("miTabla");
    table.querySelector("tbody").removeChild(row);

}
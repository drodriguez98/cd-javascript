// Array para almacenar los objetos Persona.

var people = [];


function addRow() {

    // Obtener los valores de entrada

    var nameInput = document.getElementById("nombre").value;
    var surnameInput = document.getElementById("apellido").value;
    var birthdateInput = document.getElementById("fechaNacimiento").value;

    // Verificar si los campos de entrada no están vacíos

    if (nameInput !== "" && surnameInput !== "" && birthdateInput !== "") {

        // Calcular la edad teniendo en cuenta si ya ha cumplido este año

        var birthdateDate = new Date(birthdateInput);
        var today = new Date();
        var age = today.getFullYear() - birthdateDate.getFullYear();

        if ( today.getMonth() < birthdateDate.getMonth() || (today.getMonth() === birthdateDate.getMonth() && today.getDate() < birthdateDate.getDate()) ) { age--; }

        // Crear un objeto para representar a la persona y añadirlo al array de personas

        var person = { name: nameInput, surname: surnameInput, birthdate: birthdateInput, age: age };

        people.push(person);

        // Seleccionar la tabla, añadir una fila nueva y añadir valores de los objetos a las celdas 

        var table = document.getElementById("miTabla").getElementsByTagName('tbody')[0];

        var index = table.rows.length;

        var newRow = table.insertRow(index);
        
        var nameCell = newRow.insertCell(0);
        var surnameCell = newRow.insertCell(1);
        var birthdateCell = newRow.insertCell(2);
        var ageCell = newRow.insertCell(3);
        var deleteRowCell = newRow.insertCell(4);

        nameCell.innerHTML = person.name;
        surnameCell.innerHTML = person.surname;
        birthdateCell.innerHTML = person.birthdate;
        ageCell.innerHTML = person.age;

        // Crear botón de eliminar
        
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Eliminar";

        deleteButton.onclick = function() { deleteRow(newRow, person); };

        deleteRowCell.appendChild(deleteButton);

        // Limpiar los campos de entrada

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("fechaNacimiento").value = "";

    }

}


function deleteRow(row, person) {

    // Obtener la tabla y el índice de la fila a eliminar

    var table = document.getElementById("miTabla").getElementsByTagName('tbody')[0];
    var index = row.rowIndex - 1;

    // Eliminar la fila de la tabla pasándole el index y el objeto del array. Si el objeto no se encuentra en el array devuelve -1.

    table.deleteRow(index);
    people.splice(people.indexOf(person), 1);

}


function searchOldestPerson() {

    // Inicializar la persona de mayor edad como la primera en el array

    var oldestPerson = people[0];

    // Encontrar la persona de mayor edad, o la primera en orden alfabético si tienen la misma edad

    for (var i = 1; i < people.length; i++) { if (people[i].age > oldestPerson.age || (people[i].age === oldestPerson.age && people[i].name < oldestPerson.name)) { oldestPerson = people[i]; } }

    // Crear un párrafo con un mensaje para mostrar en la página

    var messageElement = document.createElement("p");

    var message = "La persona de mayor edad es: " + oldestPerson.name + " con " + oldestPerson.age + " años."; 

    messageElement.textContent = message;

    document.getElementById("formulario").appendChild(messageElement);

}
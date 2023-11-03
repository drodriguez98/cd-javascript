var people = [];

function addRow() {

    // Obtener los valores de entrada

    var nameInput = document.getElementById("nombre").value;
    var surnameInput = document.getElementById("apellido").value;
    var birthdateInput = document.getElementById("fechaNacimiento").value;

    // Verificar si los campos de entrada no están vacíos

    if (nameInput !== "" && surnameInput !== "" && birthdateInput !== "") {

        var birthdateDate = new Date(birthdateInput);
        var today = new Date();
        var age = today.getFullYear() - birthdateDate.getFullYear();
        
        // Ajustar la edad si el cumpleaños aún no ha llegado este año

        if ( today.getMonth() < birthdateDate.getMonth() || (today.getMonth() === birthdateDate.getMonth() && today.getDate() < birthdateDate.getDate()) ) { age--; }

        // Crear un objeto para representar a la persona y añadirlo al array de personas

        var person = {

            name: nameInput,
            surname: surnameInput,
            birthdate: birthdateInput,
            age: age

        };

        people.push(person);

        // Agregar la nueva fila a la tabla

        addRowToTable(person);

        // Limpiar los campos de entrada

        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("fechaNacimiento").value = "";
    }
}

function addRowToTable(person) {

    var table = document.getElementById("miTabla").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.rows.length);
    
    var nameCell = newRow.insertCell(0);
    var surnameCell = newRow.insertCell(1);
    var birthdateCell = newRow.insertCell(2);
    var ageCell = newRow.insertCell(3);
    var actionsCell = newRow.insertCell(4);

    nameCell.innerHTML = person.name;
    surnameCell.innerHTML = person.surname;
    birthdateCell.innerHTML = person.birthdate;
    ageCell.innerHTML = person.age;

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Eliminar";

    deleteButton.onclick = function() { deleteRow(newRow, person); };

    actionsCell.appendChild(deleteButton);
    
}

function deleteRow(row, person) {

    var table = document.getElementById("miTabla").getElementsByTagName('tbody')[0];

    var index = row.rowIndex - 1;

    table.deleteRow(index);

    people.splice(people.indexOf(person), 1);

}

function searchOldestPerson() {

    if (people.length === 0) {  return; }

    var oldestPerson = people[0];

    for (var i = 1; i < people.length; i++) {

        if (people[i].age > oldestPerson.age || (people[i].age === oldestPerson.age && people[i].name < oldestPerson.name)) { oldestPerson = people[i]; }
    }

    var messageElement = document.createElement("p");

    var message = "La persona de mayor edad es: " + oldestPerson.name + " con " + oldestPerson.age + " años."; 

    messageElement.textContent = message;

    document.getElementById("formulario").appendChild(messageElement);

}
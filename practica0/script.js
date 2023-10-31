/* EJERCICIO 1 */

/* Pedir dos números y mostrar el resultado */

function ejercicio1() {

    var num1 = parseFloat(prompt('Escribe el primer número'));
    var num2 = parseFloat(prompt('Escribe el segundo número'));

    alert('La suma de los dos números introducidos es ' + (num1+num2));

}


/* EJERCICIO 2 */

/* Leer un número y mostrar su cuadrado. Repetir el proceso hasta que se introduzca un número negativo. */

function ejercicio2() {

    while ((num = parseInt(prompt('Introduce un número:'))) >= 0) { 

        var cuadrado = num * num;
        
        alert(`Cuadrado del número introducido: ${cuadrado}`); }
    
    if (num < 0) { alert('Has ingresado un número negativo.'); } 

}
  

/* EJERCICIO 3 */
  
/* Pedir números hasta que se teclee uno negativo y mostrar cuántos números se han introducido */

function ejercicio3() {

    var cont = 0;

    while ((num = parseInt(prompt('Introduce un número:'))) >= 0) { cont++; }
  
    if (num < 0) { alert(`Has ingresado un número negativo. ¡Proceso finalizado! Número total de entradas: ${cont}`); }

}


/* EJERCICIO 4 */

/* Pedir números hasta que se introduzca uno negativo y calcular la media */

function ejercicio4() {

    var nums = 0;
    var div = 0;
    var num;
    var media;
  
    while ((num = parseInt(prompt('Introduce un número:'))) >= 0) {

        nums = nums + num;
        div++;
        media = nums / div;

    }

    if (num < 0) { alert(`Has ingresado un número negativo. ¡Proceso finalizado! Media de los números introducidos: ${media}`); }

}

/* EJERCICIO 5 */

/* Escribir todos los números del 100 al 0 de 7 en 7 */

function ejercicio5() {

    var num = 100;

    while (num >= 0) {

        console.log(num);
        num = num - 7;

    }

}

/* EJERCICIO 6 */

/* Diseñar un programa que muestre el producto de los 10 primeros números impares */

function ejercicio6() {

    var product = 1;
    var actual_num = 1; 
    var total_nums = 0;

    while (total_nums < 10) { 

        product *= actual_num;
        total_nums++;
        actual_num += 2;  

    }

    console.log(product);
    
}

/* EJERCICIO 7 */

/* Pedir un número y calcular su factorial */

function ejercicio7() {

    var factorial = 1;

    var num_input = parseInt(prompt('Introduce un número: '));

    if(isNaN(num_input)) { alert("Debes ingresar un número válido"); }

    var actual_num = num_input; 

    while (actual_num >= 1) { 

        factorial *= actual_num;
        actual_num--; 

    }

    console.log(factorial);

}

/* EJERCICIO 8 */

/* Pedir 10 números. Mostrar la media de los números positivos, la media de los números negativos y la cantidad de ceros */

function ejercicio8() {

    var num_imputs = 0;
    var num_positivos = 0;
    var sum_positvos = 0;
    var media_positivos = 0;
    var media_negativos = 0;
    var num_negativos = 0;
    var sum_negativos = 0;
    var num_ceros = 0;
    
    while (num_imputs < 10) {

        var actual_num = parseInt(prompt('Introduce un número:'));

        if (actual_num >= 0) {

            num_positivos++;
            sum_positvos = sum_positvos + actual_num;
            media_positivos = sum_positvos / num_positivos;

        } 
        
        if (actual_num == 0) {

            num_ceros++;

        } else {

            num_negativos++;
            sum_negativos = sum_negativos + actual_num;
            media_negativos = sum_negativos / num_negativos;

        }

        num_imputs++;

    }

    console.log(`Media pares: ${media_positivos}`);
    console.log(`Media impares: ${media_negativos}`);
    console.log(`Número de ceros: ${num_ceros}`);

}

/* EJERCICIO 9 */

/* Pedir 10 sueldos. Mostrar su suma y cuantos hay mayores de 1000€ */

function ejercicio9() {

    var num_imputs = 0;
    var num_superiores = 0;
    var sum = 0;

    while (num_imputs < 10) {

        var actual_num = parseInt(prompt('Introduce un número:'));

        if (actual_num > 1000) { num_superiores++; }

        sum = sum + actual_num;
        num_imputs++;

    }

    console.log(`Suma total: ${sum}`);
    console.log(`Mayores que 1000: ${num_superiores}`);

}

/*  EJERCICIO 10 */

/* Dadas las edades y alturas de 5 alumnos, mostrar la edad y la estatura media, la cantidad de alumnos mayores de 18 años, y la cantidad de alumnos que miden más de 1.75... */ 

function ejercicio10() {

    var num_imputs = 0;
    var sum_edades = 0;
    var media_edades = 0;
    var sum_alturas = 0;
    var media_alturas = 0;
    var num_mayores_18 = 0;
    var num_alturas_mayores_175 = 0;

    while (num_imputs < 5) {

        var edad = parseInt(prompt('Introduce la edad de un alumno:'));

        var altura = parseInt(prompt('Introduce la altura de un alumno:'));

        if (edad >= 18) { num_mayores_18++; }

        if (altura >= 175) { num_alturas_mayores_175++; }

        sum_edades = sum_edades + edad;
        sum_alturas = sum_alturas + altura;

        media_edades = sum_edades / num_imputs;
        media_alturas = sum_alturas / num_imputs;

        num_imputs++;

    }

    console.log(`Mayores a 18: ${num_mayores_18}`);
    console.log(`Más altos que 175 cm: ${num_alturas_mayores_175}`);
    console.log(`Media de edades: ${media_edades}`);
    console.log(`Media de alturas: ${media_alturas}`);

}

/*  EJERCICIO 11 */

/* Pedir un número y mostrar si es primo o no. */

function ejercicio11() {

    var num = parseInt(prompt('Introduce un número:'));

    if(isNaN(num)) { alert("Debes ingresar un número válido"); }

    if (esPrimo(num)) {

        console.log(`${num} es un número primo`);

    } else {

        console.log(`${num} no es un número primo`);

    }

}

function esPrimo(num) {

    if (num <= 1) { return false; }

    for (var i = 2; i < num; i++) { if (num % i === 0) { return false; } }
    
    return true; 
    
}

/*  EJERCICIO 12 */

/* Pedir un número y mostrar todos los números pares desde 1 hasta ese número. */

function ejercicio12() {

    var num = parseInt(prompt('Introduce un número:'));

    if(isNaN(num)) { alert("Debes ingresar un número válido"); }

    var contador = 1;

    while (contador <= num) {

        if ((contador % 2) == 0) {

            console.log(`${contador} es par y menor que ${num}`)

        }

        contador++;

    }

}

/* EJERCICIO 13 */

/* Pedir un número y mostrar su tabla de multiplicar del 1 al 10. */

function ejercicio13() {

    var multplicador = 0;

    var num = parseInt(prompt('Introduce un número:'));

    if(isNaN(num)) { alert("Debes ingresar un número válido"); }

    var resultado;

    while (multplicador <= 10) {

        resultado = num * multplicador;
        console.log(`${num} * ${multplicador} = ${resultado}`)

        multplicador++;

    }

}

/* EJERCICIO 14 */

/* Calcular la suma de los dígitos de un número entero */ 

function ejercicio14() {

    var num_int = parseInt(prompt('Introduce un número entero con más de un dígito:'));

    if(isNaN(num_int)) { alert("Debes ingresar un número válido"); }

    // Convierte número introducido a cadena de texto, separa cada digito de la cadena y los mete en un array

    var digits = num_int.toString().split('');

    var sum = 0;

    // Recorre el array y suma cada dígito a la suma total 

    for (var i = 0; i < digits.length; i++) { sum += parseInt(digits[i]); }

    console.log("La suma de los dígitos de " + num_int + " es " + sum);

}

/* EJERCICIO 15 */

/* Calcular la letra del DNI. Los 8 números deben introducirse de uno en uno */

function ejercicio15() {

    // Crea los arrays.

    var dni_number = [];
    var dni_letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
  
    // Recoge 8 números introducidos por el usuario y los añade al array.
    
    for (var i = 1; i <= 8; i++) {

      var num_input = parseInt(prompt('Introduce el dígito ' + i + ' del DNI:'));
  
      if (isNaN(num_input)) { alert('Por favor, ingresa un dígito válido (0-9).'); }
  
      dni_number.push(num_input);

    }

    // Combina los números del array (sin espacios) para calcular el resto dividiéndolo entre 23
    
    var num_int = parseInt(dni_number.join(''));

    var rest = num_int % 23;

    // Recoge la letra en la posición del resto y la une al array del dni para mostrar el DNI completo

    var letter = dni_letters[rest];
  
    console.log('El DNI completo es ' + dni_number.join('') + letter);

}

/* EJERCICIO 16 */

/*  Solicitar al usuario el total de la cuenta y el porcentaje de propina deseado, despues mostrar por pantalla la propina en euros y el total (propina incluida) */

function ejercicio16() {

    var account = parseInt(prompt('Introduce el total de la cuenta:'));
    var percentage = parseInt(prompt('Introduce el porcentaje de propina a aplicar:'));

    var tip = ((percentage / 100) * account);
    var total_account = account + tip;

    document.write('Aplicando un porcentaje del ' + percentage + ', la cantidad de propina a sumar es ' + tip + '. Por lo tanto, la cantidad total a pagar (propina incluida) es ' + total_account + '.');

}

/* EJERCICIO 17 */

/* Hacer un juego de adivinanza. Generar un numero entre 0 y 100 y pedir al usuario que intente adivinarlo. Si lo acierta mostrar un mensaje de felicidades y sino indicar si el numero es mayor o menor comparándolo con el introducido por el usuario */

function ejercicio17() {

    var num_random = Math.floor(Math.random() * 101); 
    
    console.log('Intenta adivinar el número oculto entre 0 y 100');
    
    while (true) {

        var num_input = parseInt(prompt('Introduce un número: '));
        
        if (num_input == num_random) {

            console.log('¡Felicidades! Has ganado');
            break;

        } else if (num_input < num_random) {

            console.log('El número que buscas es mayor');

        } else {

            console.log('El número que buscas es menor');

        }

    }

}

/* EJERCICIO 18 */

/*

Eliminar una palabra:

    ◦ Pedir al usuario que ingrese una frase y una palabra a eliminar
    ◦ Eliminar todas las apariciones de la palabra en la frase utilizando el método split, join y indexOf
    ◦ Mostrar la frase resultante sin la palabra eliminada

*/

function ejercicio18() {

    var phrase_str = prompt('Introduce una frase: ');
    var word_str = prompt('Introduce la palabra que deseas eliminar: ');

    console.log('Has introducido: ' + phrase_str);
    console.log('Deseas borrar la palabra: ' + word_str);

    // Divide la frase en un arrary de palabras

    var phrase_arr = phrase_str.split(' ');

    // Devuelve el index de las palabras a borrar si hay  palabras que coincidan y -1 si no las hay

    var index_to_delete = phrase_arr.indexOf(word_str);

    // El bucle se ejecuta mientras alguna palabra coincida con la introducida y las elimina

    while (index_to_delete !== -1) {

        phrase_arr.splice(index_to_delete, 1);
        index_to_delete = phrase_arr.indexOf(word_str);

    }

    // Une las palabras que no se han borrado en un nuevo array / frase

    var new_phrase = phrase_arr.join(' ');

    console.log('Frase resultante: ' + new_phrase);

}

/* EJERCICIO 19 */

/* Pedir al usuario que ingrese una lista de elementos separados por comas. Devolver una lista sin elementos duplicados */

function ejercicio19() {

    var phrase_str = prompt('Introduce varias palabras separadas por comas: ');

    var phrase_arr = phrase_str.split(',');

    // Array que contendrá las palabras que no se repitan

    var unique_words = [];

    // Recorre el array de palabras comprobando si la palabra no está en el array de palabras únicas

    for (var i = 0; i < phrase_arr.length; i++) {

        var word = phrase_arr[i];

        if (unique_words.indexOf(word) === -1) { unique_words.push(word); }

    }

    console.log('Palabras sin elementos duplicados: ' + unique_words.join(', '));

}

/*

function ejercicio19() {

    var phrase_str = prompt('Introduce varias palabras separadas por comas: ');

    var phrase_arr = phrase_str.split(',');

    var repeated_elements = phrase_arr.filter ( function (value, index) { return phrase_arr.indexOf(value) === index; } )

    document.write(repeated_elements);

}

*/

/* EJERCICIO 20 */

/* Extraer los primeros 3 números del array 'numeros' */

function ejercicio20() {

    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var first_nums = [];

    for (var i = 0; i < 3; i++) { first_nums.push(nums[i]); }

    console.log('Los primeros 3 números son: ' + first_nums.join(', '));

}

/* EJERCICIO 21 */

/* Extraer las palabras en las posiciones 2 y 3 del array 'palabras' */

function ejercicio21() {

    var words = ['Hola', 'Mundo', 'JavaScript', 'Introducción', 'Programación'];

    console.log(words[2] + ' e ' + words[3] + ' están en las posiciones 2 y 3 del array');

}

/* EJERCICIO 22 */

/* Extraer una parte de la frase desde el índice 5 hasta el 15 */

function ejercicio22() {

    var phrase = 'Este es un ejemplo de una frase larga.';
    
    var final_phrase = phrase.substring(5, 15);
    
    console.log('Parte de la frase: ' + final_phrase);

}

/* EJERCICIO 23 */

/* Extraer los dos últimos elementos del array 'estudiantes' */

function ejercicio23() {

    var students = ['Ana', 'Juan', 'María', 'Pedro', 'Luis'];  

    // Utiliza slice() con un índice negativo para obtener los últimos dos elementos

    var last_students = students.slice(-2);

    console.log('Los dos últimos estudiantes son: ' + last_students.join(', '));
}

/* EJERCICIO 24 */

/* Extraer una porción del array 'numeros' desde el índice 3 hasta el final */

function ejercicio24() {
    
    var all_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Utiliza slice() para obtener una porción del array desde el índice 3 hasta el final

    var final_nums = all_nums.slice(3);

    console.log('Porción de números desde el índice 3 hasta el final: ' + final_nums.join(', '));

}

/* EJERCICIO 25 */

/* Pedirle una frase al usuario y devolver mitad en minuscula y mitad en mayuscula */

function ejercicio25() {

    var phrase = prompt('Introduce una frase: ');

    // Calcular la longitud de la frase

    var length = phrase.length;

    // Divide la frase en dos partes, mitad en minúsculas y mitad en mayúsculas

    var half = Math.floor(length / 2);

    var lower_half = phrase.substring(0, half).toLowerCase();
    var upper_half = phrase.substring(half, length).toUpperCase();

    // Combina las dos mitades y muestra el resultado

    var final_phrase = lower_half + upper_half;

    console.log('Frase resultante: ' + final_phrase);

}

/* EJERCICIO 26 */

/*  Escribe un programa en JavaScript que solicite al usuario ingresar una oración. A partir de la oración ingresada, el programa deberá realizar los siguientes pasos:

    1. Contar la cantidad de palabras en la oración.

    2. Solicitar al usuario ingresar una palabra específica para buscar en la oración.

    3. Contar la cantidad de ocurrencias de la palabra ingresada en la oración.

    4. Solicitar al usuario ingresar una nueva palabra para reemplazar todas las ocurrencias de la palabra ingresada en la oración.

    5. Reemplazar todas las ocurrencias de la palabra ingresada por la nueva palabra.

    6. Mostrar la oración resultante después de realizar el reemplazo.

*/

function ejercicio26() {

    var phrase_str = prompt('Introduce una frase: ');

    // Mostrar el número de palabras introducidas

    var phrase_arr = phrase_str.split(' ');

    var length = phrase_arr.length;

    console.log('Has introducido ' + length + ' palabras');

    // Mostrar el número de ocurrencias de una palabra en la frase

    var word_ocurrences = 0;

    var word_input_1 = prompt('Introduce una palabra que quieras buscar en la frase: ');

    // Recorre todas las palabras en la frase y contar las ocurrencias de la palabra ingresada

    for (var i = 0; i < phrase_arr.length; i++) {

        var actual_word = phrase_arr[i];

        if (word_input_1.toLowerCase() == actual_word.toLowerCase()) { word_ocurrences++; }

    }

    console.log('La palabra que has introducido aparece ' + word_ocurrences + ' vez/veces en la frase');

    // Reemplazar la palabra a buscar por una nueva en la frase

    var word_input_2 = prompt('Introduce otra palabra para reemplazarla por la anterior en la frase: ');

    var new_phrase = phrase_str.replaceAll(word_input_1, word_input_2);

    console.log('El resultado al reemplazar la segunda palabra por la primera es el siguiente: ' + new_phrase);

}   


/* EJERCICIO 27 */

/* Dado el siguiente array de números: [10, 20, 30, 40, 50], elimina los elementos en las posiciones 1 y 3 */

function ejercicio27() {

    var nums = [10, 20, 30, 40, 50];

    nums.splice(1, 1); 
    nums.splice(2, 1); 

    console.log(nums); 

}

/* EJERCICIO 28 */

/* Dado el siguiente array de letras: ['a', 'b', 'c', 'd', 'e'], reemplaza los elementos en las posiciones 0 y 4 por los valores 'x' y 'y' respectivamente */

function ejercicio28() {

    var letters = ['a', 'b', 'c', 'd', 'e'];

    letters.splice(0, 1, 'x');
    letters.splice(4, 1, 'y');

    console.log(letters); 

}

/* EJERCICIO 29 */

/* Dado el siguiente array de palabras: ['hello', 'world', 'JavaScript'], inserta los elementos 'goodbye' y 'code' en la posición 2 sin eliminar ningún elemento existente */

function ejercicio29() {

    var words = ['hello', 'world', 'JavaScript'];

    words.splice(2, 0, 'goodbye', 'code');

    console.log(words);


}

/* EJERCICIO 30 */

/* Dado el siguiente array de números: [5, 10, 15, 20, 25], extrae los elementos desde la posición 2 hasta la posición 4 y muestra tanto el array resultante como los elementos extraídos */

function ejercicio30() {

    var nums = [5, 10, 15, 20, 25];

    var extractedNums = nums.slice(2, 4);

    console.log(extractedNums); 

}

/* EJERCICIO 31 */

/* Dado el siguiente array de frutas: ['manzana', 'banana', 'pera', 'uva', 'kiwi'], divide el array en dos partes en la posición 3 y muestra tanto la primera parte como la segunda parte resultantes */

function ejercicio31() {

    var fruits = ['manzana', 'banana', 'pera', 'uva', 'kiwi'];

    var firstHalf = fruits.slice(0, 3);
    var secondHalf = fruits.slice(3);

    console.log(firstHalf); 
    console.log(secondHalf); 

}

/* EJERCICIO 32 */

/* Filtrar los números pares del array numeros y mostrarlos en el documento */

function ejercicio32() {

    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var evenNums = nums.filter(function(number) {return number % 2 === 0});

    for (var i = 0; i < evenNums.length; i++) { document.write("Num " + i + ": " + evenNums[i] + "<br>"); }

}

/* EJERCICIO 33 */

/* Filtrar las palabras del array palabras que empiezan con la letra "b" y mostrarlas en el documento */

function ejercicio33() {

    var words = ["manzana", "pera", "kiwi", "sandía", "banana"];

    var startsWithB = words.filter(function (word) { return word[0] === 'b'; } );

    for (var i = 0; i < startsWithB.length; i++) { document.write("Word " + i + ": " + startsWithB[i] + "<br>"); }

}

/* EJERCICIO 34 */

/* Filtrar los números del array numeros que son mayores que 50 y mostrarlos en el documento */ 

function ejercicio34() {

    var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    var over50Nums = nums.filter(function (num) { return num > 50; } );

    for (var i = 0; i < over50Nums.length; i++) { document.write("Num " + i + ": " + over50Nums[i] + "<br>"); }

}

/* EJERCICIO 35 */

/* Filtrar las personas en el array de objetos personas cuya edad sea mayor o igual a 30 y mostrarlas en el documento */

function ejercicio35() {

    var persons = [ 
        
        { nombre: "Juan", edad: 25 }, 
        { nombre: "María", edad: 30 }, 
        { nombre: "Pedro", edad: 35 }, 
        { nombre: "Ana", edad: 40 } 
    
    ];

    var over30Persons = persons.filter(function (person) { return person.edad >= 30; });

    for (var i = 0; i < over30Persons.length; i++) { document.write("Person " + i + " --> Nombre: " + over30Persons[i].nombre + ", Edad: " + over30Persons[i].edad + "<br>"); }

}
 
/* EJERCICIO 36 */

/* Filtrar las palabras del array palabras que contienen la subcadena "an" y mostrarlas en el documento */

function ejercicio36() {

    var words = ["manzana", "banana", "pera", "kiwi", "sandía"];

    var wordsWithAnSubstr = words.filter(function (word) { return word.includes("an"); });

    for (var i = 0; i < wordsWithAnSubstr.length; i++) { document.write("Word " + i + ": " + wordsWithAnSubstr[i] + "<br>"); }

}

/* EJERCICIO 37 */

/* Dado un array de objetos personas, debes filtrar y obtener los objetos cuya propiedad nombre coincida. exactamente con un valor específico. Almacena los objetos filtrados en la variable personasFiltradas. */

function ejercicio37() {

    var persons = [ 
        
        { nombre: "Juan", edad: 25 }, 
        { nombre: "María", edad: 30 }, 
        { nombre: "Pedro", edad: 35 }, 
        { nombre: "Ana", edad: 40 } 
    
    ];

    var nameToFind = "María";

    var matches =  persons.filter(function (person) { return person.nombre === nameToFind});

    for (var i = 0; i < matches.length; i++) { document.write("Person " + i + " --> Nombre: " + matches[i].nombre + ", Edad: " + matches[i].edad + "<br>"); }

}

/* EJERCICIO 38 */

/* Dado un array de objetos productos, debes filtrar y obtener los objetos cuya propiedad precio sea menor o igual a un valor máximo dado. Almacena los objetos filtrados en la variable productosFiltrados. */

function ejercicio38() {

    var products = [ 
        
        { nombre: "Camisa", precio: 20 }, 
        { nombre: "Pantalón", precio: 30 }, 
        { nombre: "Zapatos", precio: 50 }, 
        { nombre: "Sombrero", precio: 15 } 
    
    ];

    var maxPrice = 40;

    var overInputPrice = products.filter(function (product) { return product.precio >= maxPrice; });

    for (var i = 0; i < overInputPrice.length; i++) { document.write("Product " + i + " --> Nombre: " + overInputPrice[i].nombre + ", Precio: " + overInputPrice[i].precio + "<br>"); }

}

/* EJERCICIO 39 */

/* Dado un array de objetos tareas, debes filtrar y obtener los objetos cuya propiedad completada sea true. Almacena los objetos filtrados en la variable tareasCompletadas. */

function ejercicio39() {

    var tasks = [ 
        
        { nombre: "Comprar leche", completada: true }, 
        { nombre: "Pagar facturas", completada: false }, 
        { nombre: "Hacer ejercicio", completada: true }, 
        { nombre: "Llamar al médico", completada: false } 
    
    ];

    var completedTasks = tasks.filter(function (task) { return task.completada >= true; });

    for (var i = 0; i < completedTasks.length; i++) { document.write("Task " + i + " --> Nombre: " + completedTasks[i].nombre + ", Completada : " + completedTasks[i].completada + "<br>"); }

}

/* EJERCICIO 40 */

/* Dado un array de objetos empleados, debes filtrar y obtener los objetos que cumplan con dos condiciones: que la propiedad departamento sea igual a un valor específico y que la propiedad edad sea mayor o igual a un valor mínimo dado. Almacena los objetos filtrados en la variable empleadosFiltrados. */

function ejercicio40() {

    var employees = [ 
        
        { nombre: "Juan", edad: 25, departamento: "Ventas" }, 
        { nombre: "María", edad: 30, departamento: "Marketing" }, 
        { nombre: "Pedro", edad: 35, departamento: "Ventas" }, 
        { nombre: "Ana", edad: 40, departamento: "Recursos Humanos" } 
    
    ];

    var departmentToFind = "Ventas";
    var minAge = 30;

    var filteredEmployees = employees.filter(function(employee) { return employee.departamento = departmentToFind && employee.edad >= minAge } );

    for (var i = 0; i < filteredEmployees.length; i++) { document.write("Employee " + i + " --> Nombre: " + filteredEmployees[i].nombre + ", Edad : " + filteredEmployees[i].edad + "<br>"); }

}

/* EJERCICIO 41 */

/* Dado un array de objetos libros, debes filtrar y obtener los objetos cuya propiedad titulo contenga una subcadena específica, sin importar mayúsculas o minúsculas. Almacena los objetos filtrados en la variable librosFiltrados. */

function ejercicio41() {

    var books = [

        { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald" },
        { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
        { titulo: "1984", autor: "George Orwell" },
        { titulo: "Orgullo y prejuicio", autor: "Jane Austen" }
        
    ];

    var substringToFind = "soledad";

    // Utiliza toLowerCase() para hacer que las comparaciones sean insensibles a mayúsculas/minúsculas

    var filteredBooks = books.filter(function(book) { return book.titulo.toLowerCase().includes(substringToFind.toLowerCase()); });

    for (var i = 0; i < filteredBooks.length; i++) { document.write("Book " + i + " --> Titulo: " + filteredBooks[i].titulo + "<br>"); }

}

/* EJERCICIO 42 */

/* Recorre el array words = ['hello', 'world', 'javascript'] de strings e imprime cada palabra en mayúsculas. */

function ejercicio42() {

    words = ['hello', 'world', 'javascript'];

    for (var i = 0; i < words.length; i++) { document.write("Word " + i + ": " + words[i].toUpperCase() + "<br>"); }

}

/* EJERCICIO 43 */

/* Dado el array numbers = [2, 4, 6, 8, 10] de números, crea un nuevo array que contenga el cuadrado de cada número. */

function ejercicio43() {

    nums = [2, 4, 6, 8, 10];

    // Utiliza map para aplicar una función a cada elemento del array nums y almacenarlo en un nuevo array.

    var squareds = nums.map(function (num) { return num * num; });

    document.write(squareds);

}

/* EJERCICIO 44 */

/* Verifica si todos los elementos del array names = ['John', 'Jane', 'Mark', 'Emily'] de strings tienen una longitud mayor a 3 caracteres. CORREGIR CON EVERY */

function ejercicio44() {

    var names = ['John', 'Jane', 'Mark', 'Emily'];

    var arrayNamesLength = names.length;

    for (var i = 0; i < arrayNamesLength; i++) { 

        var nameLength = names[i].length;
        
        if (names[i].length > 3) {

            document.write(names[i] + " tiene " + nameLength + " letras. Cumple la condición." + "<br>" )

        } else { document.write(names[i] + " tiene " + nameLength + " letras. No cumple la condición." + "<br>") }
          
    }

}

/* EJERCICIO 45 */

/* Verifica si al menos un elemento del array numbers = [8, 12, 7, 25, 16] de números es divisible por 5. */

function ejercicio45() {

    nums = [8, 12, 7, 25, 16];

    var filteredNums = nums.some(function(num) { return num % 5 == 0 } ); 

    if (filteredNums) {

        console.log('Al menos un elemento es divisible entre 5.');

    } else { console.log('Ningún elemento es divisible entre 5.'); }

}

/* EJERCICIO 46 */

/* Recorre el array names = ['Alice', 'Bob', 'Charlie', 'David', 'Eleanor'] de nombres e imprime solo aquellos que contengan la letra 'a'. */

function ejercicio46() {

    var names = ['Alice', 'Bob', 'Charlie', 'David', 'Eleanor'];

    var namesWithASubstr = names.filter(function (name) { return name.toLowerCase().includes("a"); });

    for (var i = 0; i < namesWithASubstr.length; i++) { document.write("Name " + i + ": " + namesWithASubstr[i] + "<br>"); }

}

/* EJERCICIO 47 */

/* Dado el array celsiusTemperatures = [25, 30, 15, 20, 10] de temperaturas en grados Celsius, conviértelo a grados Fahrenheit. */

function ejercicio47() {

    var celsiusTemperatures = [25, 30, 15, 20, 10];

    var farenheitTemperatures = celsiusTemperatures.map(function(temperature) { return (temperature * 9/5) + 32; });

    document.write(farenheitTemperatures);

}

/* EJERCICIO 48 */

/* Verifica si todos los elementos del array numbers = [2, -4, 6, -8, 10] de números son positivos. */

function ejercicio48() {

    var nums = [2, -4, 6, -8, 10];

    var arrayNumsLength = nums.length;

    for (var i = 0; i < arrayNumsLength; i++) { 
        
        if (nums[i] >= 0) {
    
            document.write(nums[i] + " es positivo." + "<br>" )
    
        } else {
    
            document.write(nums[i] + " es negativo." + "<br>" )
    
        }

    }

}

/* EJERCICIO 49 */

/* Verifica si al menos un elemento del array phrases = ['I love JavaScript', 'JavaScript is fun', 'Coding with JavaScript'] de strings contiene la palabra "JavaScript". */ 

function ejercicio49() {

    var phrases = ['I love JavaScript', 'JavaScript is fun', 'Coding with JavaScript'];

    var phrasesContainsSubstr = phrases.some(function(phrase) { return phrase.includes('JavaScript'); });

    if (phrasesContainsSubstr) {

        console.log('Al menos un elemento contiene la palabra "JavaScript".');

    } else { console.log('Ningún elemento contiene la palabra "JavaScript".'); }

}

/* EJERCICIO 50 */ 

/* Ordena alfabéticamente por el nombre el array users = [{ name: 'John', age: 30 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 35 }, { name: 'David', age: 28 }] de objetos. */ 

function ejercicio50() {

    var users = [

        { name: 'John', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
        { name: 'David', age: 28 }

    ];

    users.sort((a, b) => a.name.localeCompare(b.name));
    document.write(JSON.stringify(users)); 

}

/* EJERCICIO 51 */

/* 

Crea un juego de piedra, papel o tijera donde el jugador pueda competir contra el ordenador. El juego debe tener las siguientes características:

    • El jugador podrá ingresar su jugada (piedra, papel o tijera) utilizando el método prompt.
    • El ordenador elegirá su jugada de forma aleatoria.
    • Se compararán las jugadas del jugador y el ordenador para determinar el resultado:

        ◦ Si ambos jugadores eligen la misma opción, se mostrará un mensaje de empate.
        ◦ Si el jugador elige piedra y el ordenador elige papel, se mostrará un mensaje indicando que el ordenador gana y se incrementará el contador de partidas perdidas.
        ◦ Si el jugador elige piedra y el ordenador elige tijera, se mostrará un mensaje indicando que el jugador gana y se incrementará el contador de partidas ganadas.
        ◦ Si el jugador elige papel y el ordenador elige piedra, se mostrará un mensaje indicando que el jugador gana y se incrementará el contador de partidas ganadas.
        ◦ Si el jugador elige papel y el ordenador elige tijera, se mostrará un mensaje indicando que el ordenador gana y se incrementará el contador de partidas perdidas.
        ◦ Si el jugador elige tijera y el ordenador elige piedra, se mostrará un mensaje indicando que el ordenador gana y se incrementará el contador de partidas perdidas.
        ◦ Si el jugador elige tijera y el ordenador elige papel, se mostrará un mensaje indicando que el jugador gana y se incrementará el contador de partidas ganadas.
    
    • Después de cada partida, se mostrará un mensaje preguntando al jugador si desea jugar de nuevo. Si el jugador responde afirmativamente, se repetirá el proceso. De lo contrario, se mostrará un resumen de las partidas jugadas, partidas ganadas, partidas perdidas y partidas empatadas utilizando el método document.write.

    ¡Disfruta del juego de piedra, papel o tijera contra el ordenador!

*/

function ejercicio51() {

    var rock = 1;
    var paper = 2;
    var scissors = 3

    var lostRounds = 0;
    var wonRounds = 0;

    do {

        var userPlay = prompt('Introduce la jugada (1 piedra, 2 papel, 3 tijeras): ');
        var computerPlay = Math.floor(Math.random() * 3) + 1;

        if (userPlay == computerPlay) { console.log('Empate! Vuelve a jugar')}

        else if (userPlay == rock && computerPlay == paper) {

            console.log('Gana la máquina');
            lostRounds++;

        }

        else if (userPlay == rock && computerPlay == scissors) {

            console.log('Gana el jugador');
            wonRounds++;

        }

        else if (userPlay == paper && computerPlay == scissors) {

            console.log('Gana el jugador');
            wonRounds++;

        } 

        else if (userPlay == paper && computerPlay == rock) {

            console.log('Gana el jugador');
            wonRounds++;

        }

        else if (userPlay == scissors && computerPlay == rock) {

            console.log('Gana la máquina');
            lostRounds++;

        }

        else if (userPlay == scissors && computerPlay == paper) {

            console.log('Gana el jugador');
            wonRounds++;

        }

        console.log('Partidas ganadas: ' + wonRounds);
        console.log('Partidas perdidas: ' + lostRounds);

        playAgain = confirm('Deseas volver a jugar?')

    } while (playAgain == true)

}

/* 26/16/2023 */

/* EJERCICICO 52 */

/* Calcular la edad de una persona:

    Solicitar al usuario su fecha de nacimiento.
    Calcular la diferencia en años entre la fecha actual y la fecha de nacimiento y mostrar la edad resultante.

*/

function ejercicio52() {

    var birthdateStr = prompt("Por favor, ingrese su fecha de nacimiento (en formato AAAA-MM-DD):");

    // Obtiene la fecha actual

    var actualDate = new Date();

    // Convierte la fecha de nacimiento ingresada por el usuario en un objeto Date

    var birthdateDate = new Date(birthdateStr);

    // Calcula la diferencia en años y muestra el resultado.

    var timeDifference = actualDate - birthdateDate;

    var age = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));

    alert("Su edad es " + age + " años");

}

/* EJERCICICO 53 */

/* Calcular el tiempo transcurrido desde una fecha específica:

    Solicitar al usuario una fecha en el pasado.
    Calcular la diferencia en días, horas, minutos y segundos entre la fecha actual y la fecha ingresada.

*/

function ejercicio53() {

    var pastDateStr = prompt("Por favor, ingrese la primera fecha (en formato AAAA-MM-DD):");

    var pastDate = new Date(pastDateStr);

    var actualDate = new Date();

    // Calcula la diferencia en milisegundos entre la fecha actual y la fecha en el pasado

    var millisecondsDifference = actualDate - pastDate;

    // Calcula la diferencia en días, horas, minutos y segundos

    var secondsDifference = Math.floor(millisecondsDifference / 1000);

    var minutesDifference = Math.floor(secondsDifference /  60);

    var hoursDifference = Math.floor(minutesDifference / 60);  

    var daysDifference = Math.floor(hoursDifference / 24);

    secondsDifference %= 60;
    minutesDifference %= 60;
    hoursDifference %= 24;

    alert("Han pasado " + daysDifference + " días, " + hoursDifference + " horas, " + minutesDifference + " minutos y " + secondsDifference + " segundos desde la fecha ingresada en el pasado.");

}

/* EJERCICICIO 54 */

/* Obtener el día de la semana de una fecha específica:

    Solicitar al usuario una fecha.
    Obtener el día de la semana correspondiente a esa fecha.
    Mostrar el día de la semana.

*/

function ejercicio54() {

    var dateStr = prompt("Por favor, ingrese una fecha (en formato AAAA-MM-DD):");

    var date = new Date(dateStr);

    // El método getDay() devuelve un número de 0 a 6 que se usa como índice en el array para obtener el nombre del día.

    var weekDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    var weekDay = weekDays[date.getDay()];

    alert("El día de la semana correspondiente a la fecha ingresada es " + weekDay);

}

/* EJERCICICIO 55 */

/* Calcular la fecha de vencimiento de un plazo:

    Solicitar al usuario una fecha de inicio y una duración en días.
    Calcular la fecha de vencimiento sumando la duración a la fecha de inicio.
    Mostrar la fecha de vencimiento.

*/

function ejercicio55() {

    var inputDateStr = prompt("Por favor, ingrese la fecha de inicio (en formato AAAA-MM-DD):");
    
    var inputDate = new Date(inputDateStr);

    var durationInDays = parseInt(prompt("Ingrese la duración en días:"));

    // Calcula la fecha de vencimiento creando una copia de la fecha inicial y sumándole la duración

    inputDate.setDate(inputDate.getDate() + durationInDays);

    var year = inputDate.getFullYear();
    var month = inputDate.getMonth() + 1; 
    var day = inputDate.getDate();

    var formattedEndDate = year + "-";

    // Agrega un 0 al mes antes de añadirlo a la fecha si es menor que 10

    if (month < 10) { formattedEndDate += "0"; }

    formattedEndDate += month + "-";

    // Agrega un 0 al día antes de añadirlo si es menor que 10

    if (day < 10) { formattedEndDate += "0"; }

    formattedEndDate += day;

    alert("La fecha de vencimiento es " + formattedEndDate);

}

/* EJERCICIO 56 */

/* Verificar si una fecha es un día festivo:

    Solicitar al usuario una fecha.
    Comprobar si esa fecha corresponde a un día festivo predefinido.
    Mostrar si la fecha es un día festivo o no.

*/

function ejercicio56() {

    var inputDateStr = prompt("Por favor, ingrese una fecha (en formato AAAA-MM-DD):");

    var inputDate = new Date(inputDateStr);

    var festives = [new Date(2023, 0, 1), new Date(2023, 0, 3)];

    // Verifica si la fecha es un día festivo

    var isFestive = false;

    // Comprueba si la fecha ingresada coincide con alguno de los días festivos

    for (var i = 0; i < festives.length; i++) {

        if ( festives[i].getFullYear() == inputDate.getFullYear() && festives[i].getMonth() == inputDate.getMonth() && festives[i].getDate() == inputDate.getDate() ) { isFestive = true; }

    }

    if (isFestive) {

        alert("La fecha ingresada es un día festivo");

    } else {

        alert("La fecha ingresada no es un día festivo");

    }

}

/* EJERCICIO 57 */

/* Calcular la diferencia de días entre dos fechas

    Solicitar al usuario dos fechas.
    Calcular la diferencia en días entre las dos fechas.
    Mostrar la diferencia de días.

*/

function ejercicio57() {

    var dateStr1 = prompt("Por favor, ingrese la primera fecha (en formato AAAA-MM-DD):");
    var dateStr2 = prompt("Por favor, ingrese la segunda fecha (en formato AAAA-MM-DD):");

    // Conviertelas fechas ingresadas en objetos Date

    var date1 = new Date(dateStr1);
    var date2 = new Date(dateStr2);

    // Calcula la diferencia en milisegundos entre las dos fechas

    var millisecondsDifference = date2 - date1;

    // Convierte la diferencia en milisegundos a días

    var daysDifference = Math.floor(millisecondsDifference/ (1000 * 60 * 60 * 24));

    alert("La diferencia en días entre las dos fechas es de " + daysDifference + " días");

}

/* EJERCICIO 57 - SOLUCIÓN */

/*

    <!DOCTYPE html>
    <html>

    <head>
    <meta charset="utf-8">
    <title>Verificar Día Festivo</title>
    </head>

    <body>
    <!-- Etiquetas y campos de entrada -->
    <label for="fecha">Fecha:</label>
    <input type="date" id="fecha">

    <!-- Botón para verificar si es un día festivo -->
    <button onclick="verificarDiaFestivo()">Verificar</button>

    <!-- Párrafo para mostrar el resultado -->
    <p id="resultado"></p>

    <script>
        function verificarDiaFestivo() {
        // Obtiene la fecha ingresada en el campo de entrada
        var fecha = new Date(document.getElementById("fecha").value);

        // Arreglo de fechas festivas
        var festivos = [
            new Date(2023, 0, 1),  // Año Nuevo
            new Date(2023, 3, 14), // Viernes Santo
            new Date(2023, 4, 1),  // Día del Trabajador
            new Date(2023, 6, 25), // Santiago Apóstol
            new Date(2023, 9, 12), // Fiesta Nacional de España
            new Date(2023, 10, 1), // Día de Todos los Santos
            new Date(2023, 11, 6), // Día de la Constitución Española
            new Date(2023, 11, 25), // Navidad
        ];

        // Verifica si la fecha ingresada coincide con alguna fecha festiva
        var esFestivo = festivos.some(function (festivo) {
            return festivo.getDate() === fecha.getDate() && festivo.getMonth() === fecha.getMonth() && festivo.getFullYear() === fecha.getFullYear();
        });

        // Muestra el resultado de si es un día festivo o no en el párrafo indicado
        if (esFestivo) {
            document.getElementById("resultado").textContent = "La fecha es un día festivo";
        } else {
            document.getElementById("resultado").textContent = "La fecha no es un día festivo";
        }
        }
    </script>
    </body>

    </html>

*/

/* EJERCICIO 58 */

/* Obtener la fecha de inicio y fin de una semana específica:

    Solicitar al usuario un número de semana y un año.
    Calcular la fecha de inicio y fin de esa semana.
    Mostrar la fecha de inicio y fin.
    
*/

function ejercicio58() {

    var week = parseInt(prompt("Por favor, ingrese un número de semana:"));
    var year = parseInt(prompt("Por favor, ingrese un año:"));

    // Crea una nueva fecha para el 1 de enero del año proporcionado

    var inputYear = new Date(year, 0, 1);

    // Calcula el primer día de la semana 1 (Lunes) del año proporcionado

    var firstDayInputYear = inputYear.getDay();
    var daysUntilFirstMonday = (7 - firstDayInputYear) % 7;

    inputYear.setDate(inputYear.getDate() + daysUntilFirstMonday);

    // Calcula la fecha de inicio de la semana especificada

    var fechaInicioSemana = new Date(fechaInicioAnio);
    fechaInicioSemana.setDate(fechaInicioAnio.getDate() + (numeroSemana - 1) * 7);
    
    // SIN ACABAR !!!!

}

/*

PEDIR CORRECIONES A ZAIRA

Calcular el número de días hábiles entre dos fechas:
Solicitar al usuario una fecha de inicio y una fecha de fin.
Calcular el número de días hábiles (excluyendo fines de semana) entre las dos fechas.
Mostrar el número de días hábiles.
Obtener la fecha actual en diferentes formatos:
Obtener la fecha actual.
Mostrar la fecha en formatos diferentes, como "DD/MM/AAAA", "AAAA-MM-DD", "Día de la semana, DD de Mes de AAAA", etc.
Generar una secuencia de fechas:
Solicitar al usuario una fecha de inicio y una fecha de fin.
Generar una secuencia de fechas diarias entre las dos fechas.
Mostrar todas las fechas generadas.

*/

/* EXPRESIONES REGULARES */

/* https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions */
 
/* EJERCICIO 59 */

/* Validación de Correo Electrónico:

    Solicitar al usuario su correo electrónico
    Validar correo electrónico
    Mostrar si el correo electrónico es válido o no

*/

function ejercicio59() {

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var email = "prueba@gmail.com";

    if (emailRegex.test(email)) {

        console.log("El correo electrónico es válido.");

    } else { console.log("El correo electrónico no es válido") };

    /*

        /^      inicio de la cadena
        [^\s@]  cualquier carácter que no sea un espacioen blanco ( \s ) ni un signo "@"
        +       el carácter anterior debe aparecer una o más veces
        @       carácter @ literal
        [^\s@]  cualquier carácter que no sea un espacioen blanco ( \s ) ni un signo "@"
        \.      carácter . literal
        [^\s@]  cualquier carácter que no sea un espacioen blanco ( \s ) ni un signo "@"
        $       final de la cadena

    */

}

/* EJERCICIO 60 */

/* Validar número de teléfono

    Solicitar al usuario su número de teléfono
    Validar número de teléfono
    Mostrar si el número de teléfono es válido o no
    
*/

function ejercicio60() {

    var phone = "+34677852955";

    var phoneRegex = /^(?:\+34|0034|34)?[-*]*(6|7)[-]*[0-9]{8}$/;

    if (phoneRegex.test(phone)) {

        console.log("El número de teléfono es válido.");

    } else { console.log("El número de teléfono no es válido") }

    /*

        ^                       inicio de cadena
        (?:\+34|0034|34)        el número debe empezar con alguno de los 3 formatos
        [-*]                    permite la presencia de guiones o asteriscos
        (6|7)                   el número debe empezar por 6 o 7
        [0-9] {8}               8 dígitos numéricos del 0 al 9
        $                       final de la cadena

    */

}

/* EJERCICIO 61 -> Expresiones regulares (Javascript). */

/* A partir del siguiente texto, debes encontrar con una función los números de teléfono y mostrarlos por pantalla.

    “Mi número de teléfono es 123-456-7890 y otro número es 555-555-5555.”
    
    Obtener los números de teléfono del texto
    Mostrar los números de teléfono por pantalla

*/

function ejercicio61() {

    var texto = "Mi número de teléfono es 123-456-7890 y otro número es 555-555-5555.";

    // Expresión regular para encontrar números de teléfono en el formato XXX-XXX-XXXX

    var regex = /\d{3}-\d{3}-\d{4}/g;
    
    // Usa match() para encontrar todas las coincidencias en el texto

    var numerosTelefono = texto.match(regex);
    
    if (numerosTelefono) {
      
        for (var i = 0; i < numerosTelefono.length; i++) { 
        
            console.log("Número de teléfono encontrado: " + numerosTelefono[i]); 
    
        }

    } else { console.log("No se encontraron números de teléfono en el texto."); }

    /* 

        /       inicio de la cadena
        \d{3}   cadena numérica de 3 dígitos
        -       carácter guión literal
        \d{4}   cadena numérica de 4 dígitos
        /g      búsqueda global

    */

}

/* EJERCICIO 62 */

/* A partir del siguiente texto debes reemplazar la palabra “gato”.

    Los niños tenían un gato en casa.
    El gato era un gato travieso.
    El gato solía subirse a los árboles.
    Los niños amaban al gato.
    El gato, el gato, el gato, siempre el gato.

    Crear una función que reemplace la palabra “gato” por la que se le mande por parámetro y mostrar el texto modificado

*/

function ejercicio62() {

    var text = "Los niños tenían un gato en casa. El gato era un gato travieso. El gato solía subirse a los árboles. Los niños amaban al gato. El gato, el gato, el gato, siempre el gato.";
    
    var newWord = "perro";

    var regex = /gato/g;

    var modifiedText = text.replaceAll(regex, newWord);

    console.log(modifiedText)

}
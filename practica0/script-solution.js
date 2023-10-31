/*Pedir dos números y mostrar el resultado*/

function ejercicio1(){

  var numero1 = parseFloat(prompt('Escribe el primer número'));
  var numero2 = parseFloat(prompt('Escribe el segundo número'));

  console.log(numero1+numero2);

}

/*Leer un número y mostrar su cuadrado, repetir el proceso hasta que se introduzca un número negativo.*/

function ejercicio2(){

  while ((numero = parseInt(prompt("Introduce un número:"))) > 0 ) {

      var cuadrado = numero * numero; // Se calcula el cuadrado del número ingresado y se guarda en la variable "cuadrado".

      document.write("El cuadrado de " + numero + " es " + cuadrado + "<br>"); // Se muestra en pantalla el mensaje con el número ingresado y su cuadrado.

    }

}

/*Pedir números hasta que se teclee uno negativo, y mostrar cuántos números se han introducido.*/

function ejercicio3(){

  var contador = 0; // Se inicializa la variable "contador" en cero para llevar la cuenta de los números ingresados.

  while ((numero = parseInt(prompt("Introduce un número:"))) > 0) { // Se inicia un bucle que se ejecuta continuamente hasta que se cumpla la condición de salida.

    contador++; // Se incrementa en uno el valor de "contador" para contar la cantidad de números ingresados.

  }

  document.write("Se han introducido " + contador + " números."); // Se muestra en pantalla el mensaje con la cantidad de números ingresados.

}

/*Pedir números hasta que se introduzca uno negativo, y calcular la media.*/

function ejercicio4(){

  var suma = 0; // Se inicializa la variable "suma" en cero para almacenar la suma de los números ingresados.

  var contador = 0; // Se inicializa la variable "contador" en cero para llevar la cuenta de los números ingresados.

  while ((numero = parseInt(prompt("Introduce un número:"))) > 0) { // Se inicia un bucle que se ejecuta continuamente hasta que se cumpla la condición de salida.

    suma += numero; // Se suma el número ingresado al valor actual de "suma".
    contador++; // Se incrementa en uno el valor de "contador" para contar la cantidad de números ingresados.

  }

  var media = suma / contador; // Se calcula la media dividiendo la suma de los números entre la cantidad de números ingresados.
  document.write("La media es: " + media); // Se muestra en pantalla el mensaje con el valor de la media calculada.

}

/*Pedir un número N, y mostrar todos los números del 1 al N. */

function ejercicio5(){

  var n = parseInt(prompt("Introduce un número:"));

  for (var i = 1; i <= n; i++) { document.write(i + "<br>"); }

}

//Escribir todos los números del 100 al 0 de 7 en 7.

function ejercicio6(){

  for (var i = 100; i >= 0; i -= 7) { document.write(i + "<br>"); }

}
//Diseñar un programa que muestre el producto de los 10 primeros números impares.

function ejercicio7forma1(){

  var producto = 1; // Variable para almacenar el producto de los números impares
  var contador = 0; // Variable para contar la cantidad de números impares encontrados
  var numero = 1; // Variable para iterar los números impares

  while (contador < 10) { // Se ejecuta el bucle while hasta que se encuentren 10 números impares

    producto *= numero; // Se multiplica el número actual al producto acumulado
    contador++; // Se incrementa el contador de números impares encontrados
    numero += 2; // Se incrementa el número en 2 para obtener el siguiente número impar

  }

  document.write("El producto de los 10 primeros números impares es: " + producto + "<br>"); // Muestra en pantalla el producto de los números impares
  
}

function ejercicio7forma2(){

  var multiplicacion = 1; // Variable para almacenar el producto de los números impares
  var num = 1; //Variable que controla los numeros impares empezando por el 1.

  for (var cont = 0; cont < 10; cont++) { // Se utiliza un bucle for para encontrar los 10 primeros números impares

    multiplicacion *= num; // Se multiplica el número actual al producto acumulado
    num += 2;// Se calcula el siguiente número impar.

  }

  document.write("El producto de los 10 primeros números impares es: " + multiplicacion); // Muestra en pantalla el producto de los números impares

}

//Pedir un número y calcular su factorial.

function ejercicio8forma1(){

  var numero = parseInt(prompt("Introduce un número:")); // Se solicita al usuario que ingrese un número
  var factorial = 1; // Variable para almacenar el factorial del número

  for (var i = 2; i <= numero; i++) {

    factorial *= i; // Se multiplica el número actual al factorial acumulado

  }

  document.write("El factorial de " + numero + " es: " + factorial); // Muestra en pantalla el factorial del número

}

function ejercicio8forma2(){

  var numero = parseInt(prompt("Introduce un número:")); // Se solicita al usuario que ingrese un número
  var factorial = 1; // Variable para almacenar el factorial del número
  var i = 2; // Variable de control para iterar

  // Bucle "while" que se ejecuta mientras i sea menor o igual al número ingresado por el usuario

  while (i <= numero) {

    factorial *= i; // Se multiplica el número actual al factorial acumulado
    i++; // Se incrementa el valor de i en 1 para pasar al siguiente número

  }

  document.write("El factorial de " + numero + " es: " + factorial); // Muestra en pantalla el factorial del número
}

//Pedir 10 números. Mostrar la media de los números positivos, la media de los números negativos y la cantidad de ceros.

function ejercicio9(){

    // Variables para almacenar la suma y el contador de números positivos, negativos y ceros

    var sumaPositivos = 0;
    var contadorPositivos = 0;
    var sumaNegativos = 0;
    var contadorNegativos = 0;
    var contadorCeros = 0;

    // Bucle que se ejecuta 10 veces

    for (var i = 1; i <= 10; i++) {

      // Se solicita al usuario que ingrese un número y se almacena en la variable numero

      var numero = parseInt(prompt("Introduce un número:"));

      // Si el número es mayor que 0, se suma a la suma de los positivos y se incrementa el contador de positivos

      if (numero > 0) {

        sumaPositivos += numero;
        contadorPositivos++;

      }

      // Si el número es menor que 0, se suma a la suma de los negativos y se incrementa el contador de negativos

      else if (numero < 0) {

        sumaNegativos += numero;
        contadorNegativos++;

      }

      // Si el número es igual a 0, se incrementa el contador de ceros

      else { contadorCeros++; }

    }

    // Cálculo de la media de los números positivos y negativos

    var mediaPositivos = sumaPositivos / contadorPositivos;
    var mediaNegativos = sumaNegativos / contadorNegativos;

    // Mostrar en pantalla los resultados

    document.write("Media de los números positivos: " + mediaPositivos + "<br>");
    document.write("Media de los números negativos: " + mediaNegativos + "<br>");
    document.write("Cantidad de ceros: " + contadorCeros);

}

//Pedir 10 sueldos. Mostrar su suma y cuantos hay mayores de 1000€.

function ejercicio10(){

    // Variables para almacenar la suma de los sueldos y el contador de sueldos mayores a 1000€

    var sumaSueldos = 0;
    var contadorMayores1000 = 0;

    // Bucle que se ejecuta 10 veces

    for (var i = 1; i <= 10; i++) {

      // Se solicita al usuario que ingrese un sueldo y se almacena en la variable sueldo

      var sueldo = parseInt(prompt("Introduce un sueldo:"));

      // Se suma el sueldo a la suma total de sueldos

      sumaSueldos += sueldo;

      // Si el sueldo es mayor a 1000€, se incrementa el contador de sueldos mayores a 1000€

      if (sueldo > 1000) { contadorMayores1000++; }

    }

    // Mostrar en pantalla la suma de los sueldos y la cantidad de sueldos mayores a 1000€

    document.write("La suma de los sueldos es: " + sumaSueldos + "<br>");
    document.write("Cantidad de sueldos mayores a 1000€: " + contadorMayores1000);

}

//Dadas las edades y alturas de 5 alumnos, mostrar la edad y la estatura media, la cantidad de alumnos mayores de 18 años, y la cantidad de alumnos que miden más de 1.75.

function ejercicio11(){

    // Variables para almacenar la suma de las edades, la suma de las alturas, el contador de alumnos mayores de 18 años y el contador de alturas mayores a 1.75.
  
    var sumaEdades = 0;
  var sumaAlturas = 0;
  var contadorMayores18 = 0;
  var contadorAlturasMayores175 = 0;

  // Bucle que se ejecuta 5 veces para obtener los datos de 5 alumnos.

  for (var i = 1; i <= 5; i++) {

    // Se solicita al usuario que ingrese la edad y la altura del alumno i y se almacenan en las variables edad y altura.

    var edad = parseInt(prompt("Introduce la edad del alumno " + i + ":"));
    var altura = parseFloat(prompt("Introduce la altura del alumno " + i + ":"));

    // Se suman la edad y la altura a las sumas totales.

    sumaEdades += edad;
    sumaAlturas += altura;

    // Si la edad del alumno es mayor a 18, se incrementa el contador de alumnos mayores de 18 años.

    if (edad > 18) { contadorMayores18++; }

    // Si la altura del alumno es mayor a 1.75, se incrementa el contador de alturas mayores a 1.75.

    if (altura > 1.75) { contadorAlturasMayores175++; }

  }

  // Se calcula la media de las edades y de las alturas dividiendo las sumas totales por 5.

  var mediaEdades = sumaEdades / 5;
  var mediaAlturas = sumaAlturas / 5;

  // Se muestra en pantalla la edad media, la altura media, la cantidad de alumnos mayores de 18 años y la cantidad de alumnos con altura mayor a 1.75.

  document.write("Edad media: " + mediaEdades + "<br>");
  document.write("Altura media: " + mediaAlturas + "<br>");
  document.write("Cantidad de alumnos mayores de 18 años: " + contadorMayores18 + "<br>");
  document.write("Cantidad de alumnos con altura mayor a 1.75: " + contadorAlturasMayores175);
}

//Pedir un número y mostrar si es primo o no.

function ejercicio12(){

  const numero = parseInt(prompt("Introduce un número:"));
  var primo = true

  if (numero <= 1) { primo = false }

  for (let i = 2; i < numero; i++) {

    if (numero % i === 0) { primo = false }

  }

  if (primo){

      document.write(numero + ' Es primo')

  } else{

      document.write(numero + ' No es primo')

  }

}

//Pedir un número y mostrar todos los números pares desde 1 hasta ese número.

function ejercicio13(){

  var numero = parseInt(prompt("Introduce un número:"));

  for (var i = 1; i <= numero; i++) {

    if (i % 2 === 0) { document.write(i + "<br>"); }

  }

}

// Ejercicio 1: Eliminar elementos de un array

var numeros = [10, 20, 30, 40, 50];

numeros.splice(1, 1); // Elimina el elemento en el índice 1
numeros.splice(2, 1); // Elimina el elemento en el índice 2

document.write("Ejercicio 1 - Números: " + numeros + "<br>");

// Ejercicio 2: Reemplazar elementos en un array

var letras = ['a', 'b', 'c', 'd', 'e'];

letras.splice(0, 1, 'x'); // Reemplaza el elemento en el índice 0 por 'x'
letras.splice(4, 1, 'y'); // Reemplaza el elemento en el índice 4 por 'y'

document.write("Ejercicio 2 - Letras: " + letras + "<br>");

// Ejercicio 3: Insertar elementos en un array

var palabras = ['hello', 'world', 'JavaScript'];
palabras.splice(2, 0, 'goodbye', 'code'); // Inserta 'goodbye' y 'code' en el índice 2

document.write("Ejercicio 3 - Palabras: " + palabras + "<br>");

// Ejercicio 4: Extraer una porción de elementos de un array

var numerosExtract = [5, 10, 15, 20, 25];
var elementosExtraidos = numerosExtract.splice(2, 3); // Extrae 3 elementos a partir del índice 2

document.write("Ejercicio 4 - Números Extraídos: " + elementosExtraidos + "<br>");
document.write("Ejercicio 4 - Números Restantes: " + numerosExtract + "<br>");

// Ejercicio 5: Dividir un array en dos partes

var frutas = ['manzana', 'banana', 'pera', 'uva', 'kiwi'];
var primeraParte = frutas.splice(0, 3); // Extrae los primeros 3 elementos
var segundaParte = frutas; // La segunda parte es el resto del array original

document.write("Ejercicio 5 - Primera Parte: " + primeraParte + "<br>");
document.write("Ejercicio 5 - Segunda Parte: " + segundaParte + "<br>");

  // ARRAYS

      /*
    <!DOCTYPE html>

    <html>

    <head> <title>Ejercicios con Arrays</title> </head>

      <body>

        <script>

          // Ejercicio 1: Imprimir cada palabra en mayúsculas

          var words = ['hello', 'world', 'javascript'];

          // Utilizando un bucle for

          for (var i = 0; i < words.length; i++) {

            var uppercaseWord = words[i].toUpperCase(); // Convierte la palabra actual a mayúsculas
            document.write(uppercaseWord + "<br>"); // Imprime la palabra en mayúsculas seguida de una etiqueta <br> para un salto de línea

          }

          // Utilizando forEach

          words.forEach(function (word) {

            var uppercaseWord = word.toUpperCase(); // Convierte la palabra actual a mayúsculas
            document.write(uppercaseWord + "<br>"); // Imprime la palabra en mayúsculas seguida de una etiqueta <br> para un salto de línea

          });

          // Utilizando map
          
          var uppercaseWords = words.map(function (word) {

            return word.toUpperCase(); // Convierte cada palabra a mayúsculas y las devuelve en un nuevo array

          });

          uppercaseWords.forEach(function (word) {

            document.write(word + "<br>"); // Imprime cada palabra en mayúsculas seguida de una etiqueta <br> para un salto de línea

          });

          // Utilizando for...of

          for (var word of words) {

            var uppercaseWord = word.toUpperCase(); // Convierte la palabra actual a mayúsculas
            document.write(uppercaseWord + "<br>"); // Imprime la palabra en mayúsculas seguida de una etiqueta <br> para un salto de línea

          }

          // Ejercicio 2: Crear un nuevo array con el cuadrado de cada número

          var numbers = [2, 4, 6, 8, 10];

          // Utilizando un bucle for

          var squaredNumbersFor = [];

          for (var i = 0; i < numbers.length; i++) {

            squaredNumbersFor.push(numbers[i] ** 2); // Agrega el cuadrado del número actual al nuevo array

          }
          document.write(squaredNumbersFor + "<br>"); // Imprime el nuevo array con los números al cuadrado

          // Utilizando map

          var squaredNumbersMap = numbers.map(function (number) {

            return number ** 2; // Retorna el cuadrado de cada número y los devuelve en un nuevo array

          });

          document.write(squaredNumbersMap + "<br>"); // Imprime el nuevo array con los números al cuadrado

          // Utilizando for...of

          var squaredNumbersForOf = [];

          for (var number of numbers) {

            squaredNumbersForOf.push(number ** 2); // Agrega el cuadrado del número actual al nuevo array

          }

          document.write(squaredNumbersForOf + "<br>"); // Imprime el nuevo array con los números al cuadrado

          // Ejercicio 3: Verificar si todos los elementos de un array tienen una longitud mayor a 3 caracteres

          var names = ['John', 'Jane', 'Mark', 'Emily'];

          // Utilizando un bucle for

          var allNamesLongerThan3For = true;

          for (var i = 0; i < names.length; i++) {

            if (names[i].length <= 3) {

              allNamesLongerThan3For = false; // Si encuentra un nombre con longitud menor o igual a 3, establece la variable en false
              break; // Sale del bucle

            }
            
          }

          document.write(allNamesLongerThan3For + "<br>"); // Imprime true si todos los nombres tienen una longitud mayor a 3, de lo contrario imprime false

          // Utilizando every

          var allNamesLongerThan3Every = names.every(function (name) {

            return name.length > 3; // Retorna true si todos los nombres tienen una longitud mayor a 3, de lo contrario retorna false

          });

          document.write(allNamesLongerThan3Every + "<br>"); // Imprime true si todos los nombres tienen una longitud mayor a 3, de lo contrario imprime false

          // Utilizando for...of

          var allNamesLongerThan3ForOf = true;

          for (var name of names) {

            if (name.length <= 3) {

              allNamesLongerThan3ForOf = false; // Si encuentra un nombre con longitud menor o igual a 3, establece la variable en false
              break; // Sale del bucle

            }

          }

          document.write(allNamesLongerThan3ForOf + "<br>"); // Imprime true si todos los nombres tienen una longitud mayor a 3, de lo contrario imprime false

          // Ejercicio 4: Verificar si al menos un elemento de un array es divisible por 5

          var numbers = [8, 12, 7, 25, 16];

          // Utilizando un bucle for

          var someNumberDivisibleBy5For = false;

          for (var i = 0; i < numbers.length; i++) {

            if (numbers[i] % 5 === 0) {

              someNumberDivisibleBy5For = true; // Si encuentra un número divisible por 5, establece la variable en true
              break; // Sale del bucle

            }

          }

          document.write(someNumberDivisibleBy5For + "<br>"); // Imprime true si al menos un número es divisible por 5, de lo contrario imprime false

          // Utilizando some

          var someNumberDivisibleBy5Some = numbers.some(function (number) {

            return number % 5 === 0; // Retorna true si al menos un número es divisible por 5, de lo contrario retorna false

          });

          document.write(someNumberDivisibleBy5Some + "<br>"); // Imprime true si al menos un número es divisible por 5, de lo contrario imprime false

          // Utilizando for...of

          var someNumberDivisibleBy5ForOf = false;

          for (var number of numbers) {
            
            if (number % 5 === 0) {

              someNumberDivisibleBy5ForOf = true; // Si encuentra un número divisible por 5, establece la variable en true
              break; // Sale del bucle

            }

          }

          document.write(someNumberDivisibleBy5ForOf + "<br>"); // Imprime true si al menos un número es divisible por 5, de lo contrario imprime false

          // Ejercicio 5: Ordenar un array de números de forma ascendente

          var numbers = [5, 1, 3, 2, 4];

          // Utilizando sort

          var sortedNumbersSort = numbers.sort(function (a, b) {

            return a - b; // Compara los números y los ordena de forma ascendente

          });

          document.write(sortedNumbersSort + "<br>"); // Imprime el array de números ordenados de forma ascendente

          // Ejercicio 6: Imprimir solo los nombres que contienen la letra 'a'

          var names = ['Alice', 'Bob', 'Charlie', 'David', 'Eleanor'];

          // Utilizando un bucle for

          for (var i = 0; i < names.length; i++) {

            if (names[i].toLowerCase().includes('a')) { // Convierte el nombre a minúsculas y verifica si contiene la letra 'a'

              document.write(names[i] + "<br>"); // Imprime el nombre si contiene la letra 'a'

            }

          }

          // Utilizando forEach

          names.forEach(function (name) {

            if (name.toLowerCase().includes('a')) { // Convierte el nombre a minúsculas y verifica si contiene la letra 'a'

              document.write(name + "<br>"); // Imprime el nombre si contiene la letra 'a'

            }

          });

          // Utilizando filter y forEach

          names.filter(function (name) {

            return name.toLowerCase().includes('a'); // Filtra los nombres que contienen la letra 'a'

          }).forEach(function (name) {

            document.write(name + "<br>"); // Imprime los nombres que contienen la letra 'a'

          });

          // Utilizando for...of

          for (var name of names) {

            if (name.toLowerCase().includes('a')) { // Convierte el nombre a minúsculas y verifica si contiene la letra 'a'

              document.write(name + "<br>"); // Imprime el nombre si contiene la letra 'a'

            }

          }

          // Ejercicio 7: Convertir temperaturas de Celsius a Fahrenheit

          var celsiusTemperatures = [25, 30, 15, 20, 10];

          // Utilizando un bucle for

          var fahrenheitTemperaturesFor = [];

          for (var i = 0; i < celsiusTemperatures.length; i++) {

            var fahrenheit = (celsiusTemperatures[i] * 9 / 5) + 32; // Convierte la temperatura de Celsius a Fahrenheit
            fahrenheitTemperaturesFor.push(fahrenheit); // Agrega la temperatura convertida al nuevo array

          }

          document.write(fahrenheitTemperaturesFor + "<br>"); // Imprime el nuevo array con las temperaturas convertidas

          // Utilizando map

          var fahrenheitTemperaturesMap = celsiusTemperatures.map(function (celsius) {

            return (celsius * 9 / 5) + 32; // Convierte la temperatura de Celsius a Fahrenheit y retorna el resultado

          });

          document.write(fahrenheitTemperaturesMap + "<br>"); // Imprime el nuevo array con las temperaturas convertidas

          // Utilizando for...of

          var fahrenheitTemperaturesForOf = [];

          for (var celsius of celsiusTemperatures) {

            var fahrenheit = (celsius * 9 / 5) + 32; // Convierte la temperatura de Celsius a Fahrenheit
            fahrenheitTemperaturesForOf.push(fahrenheit); // Agrega la temperatura convertida al nuevo array

          }

          document.write(fahrenheitTemperaturesForOf + "<br>"); // Imprime el nuevo array con las temperaturas convertidas

          // Ejercicio 8: Verificar si todos los números de un array son positivos

          var numbers = [2, -4, 6, -8, 10];

          // Utilizando un bucle for

          var allNumbersPositiveFor = true;

          for (var i = 0; i < numbers.length; i++) {

            if (numbers[i] <= 0) { // Verifica si el número actual es menor o igual a 0

              allNumbersPositiveFor = false; // Si se encuentra un número no positivo, se establece la bandera en false
              break; // Se detiene el bucle

            }

          }

          document.write(allNumbersPositiveFor + "<br>"); // Imprime el resultado de la verificación

          // Utilizando every

          var allNumbersPositiveEvery = numbers.every(function (number) {

            return number > 0; // Verifica si todos los números son mayores a 0 utilizando el método every

          });

          document.write(allNumbersPositiveEvery + "<br>"); // Imprime el resultado de la verificación

          // Utilizando for...of

          var allNumbersPositiveForOf = true;

          for (var number of numbers) {

            if (number <= 0) { // Verifica si el número actual es menor o igual a 0

              allNumbersPositiveForOf = false; // Si se encuentra un número no positivo, se establece la bandera en false
              break; // Se detiene el bucle

            }

          }

          document.write(allNumbersPositiveForOf + "<br>"); // Imprime el resultado de la verificación

          // Ejercicio 9: Verificar si al menos un elemento de un array contiene la palabra "JavaScript"

          var phrases = ['I love JavaScript', 'JavaScript is fun', 'Coding with JavaScript'];

          // Utilizando un bucle for

          var somePhraseContainsJavaScriptFor = false;

          for (var i = 0; i < phrases.length; i++) {

            if (phrases[i].includes('JavaScript')) { // Verifica si la frase actual contiene la palabra "JavaScript"

              somePhraseContainsJavaScriptFor = true; // Si se encuentra una frase que contiene "JavaScript", se establece la bandera en true
              break; // Se detiene el bucle

            }

          }

          document.write(somePhraseContainsJavaScriptFor + "<br>"); // Imprime el resultado de la verificación

          // Utilizando some

          var somePhraseContainsJavaScriptSome = phrases.some(function (phrase) {

            return phrase.includes('JavaScript'); // Verifica si al menos una frase contiene la palabra "JavaScript" utilizando el método some

          });

          document.write(somePhraseContainsJavaScriptSome + "<br>"); // Imprime el resultado de la verificación

          // Utilizando for...of

          var somePhraseContainsJavaScriptForOf = false;

          for (var phrase of phrases) {

            if (phrase.includes('JavaScript')) { // Verifica si la frase actual contiene la palabra "JavaScript"

              somePhraseContainsJavaScriptForOf = true; // Si se encuentra una frase que contiene "JavaScript", se establece la bandera en true
              break; // Se detiene el bucle

            }

          }

          document.write(somePhraseContainsJavaScriptForOf + "<br>"); // Imprime el resultado de la verificación

          // Ejercicio 10: Ordenar un array de objetos alfabéticamente por el nombre

          var users = [

            { name: 'John', age: 30 },
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 35 },
            { name: 'David', age: 28 },

          ];

          // Utilizando sort

          var sortedUsersSort = users.sort(function (a, b) {

            return a.name.localeCompare(b.name); // Ordena los objetos alfabéticamente por el nombre utilizando el método sort y la función de comparación

          });

          document.write(JSON.stringify(sortedUsersSort) + "<br>"); // Imprime el resultado de la ordenación en formato JSON

        </script>
        
      </body>

    </html>

*/

  // FILTERS 1

  // Ejercicio 1: Filtrar números pares

  var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Filtrar los números pares utilizando el método filter y una función de callback

  var numerosPares = numeros.filter(function (numero) {

    return numero % 2 === 0; // Devuelve true si el número es par, false en caso contrario

  });

  // Mostrar los números pares en el documento

  document.write("Números pares: " + numerosPares + "<br>");

  // Ejercicio 2: Filtrar palabras que empiecen con una letra específica

  var palabras = ["manzana", "banana", "pera", "kiwi", "sandía"];
  var letraInicial = "b";

  // Filtrar las palabras que empiezan con la letra inicial utilizando el método filter y una función de callback

  var palabrasFiltradas = palabras.filter(function (palabra) {

    return palabra.charAt(0).toLowerCase() === letraInicial.toLowerCase(); // Compara la primera letra de cada palabra con la letra inicial

  });

  // Mostrar las palabras filtradas en el documento

  document.write("Palabras filtradas: " + palabrasFiltradas + "<br>");

  // Ejercicio 3: Filtrar números mayores que un valor dado

  var numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  var valorMinimo = 50;

  // Filtrar los números mayores que el valor mínimo utilizando el método filter y una función de callback

  var numerosFiltrados = numeros.filter(function (numero) {

    return numero > valorMinimo; // Devuelve true si el número es mayor que el valor mínimo, false en caso contrario

  });

  // Mostrar los números filtrados en el documento

  document.write("Números filtrados: " + numerosFiltrados + "<br>");

  // Ejercicio 4: Filtrar elementos de un array de objetos basado en una propiedad

  var personas = [

    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 35 },
    { nombre: "Ana", edad: 40 },

  ];
  var edadMinima = 30;

  // Filtrar las personas cuya edad sea mayor o igual a la edad mínima utilizando el método filter y una función de callback

  var personasFiltradas = personas.filter(function (persona) {

    return persona.edad >= edadMinima; // Devuelve true si la edad de la persona es mayor o igual a la edad mínima, false en caso contrario

  });

  // Mostrar las personas filtradas en el documento

  document.write("Personas filtradas: " + JSON.stringify(personasFiltradas) + "<br>");

  // Ejercicio 5: Filtrar strings que contengan una subcadena específica

  var palabras = ["manzana", "banana", "pera", "kiwi", "sandía"];
  var subcadena = "an";

  // Filtrar las palabras que contengan la subcadena utilizando el método filter y una función de callback

  var palabrasFiltradas = palabras.filter(function (palabra) {

    return palabra.includes(subcadena); // Devuelve true si la palabra contiene la subcadena, false en caso contrario

  });

  // Mostrar las palabras filtradas en el documento

  document.write("Palabras filtradas: " + palabrasFiltradas + "<br>");

  // FILTERS 2

  var personas = [

    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 35 },
    { nombre: "Ana", edad: 40 },

  ];
  var nombreBuscado = "María";

  // Filtrar las personas cuyo nombre coincide con el nombre buscado utilizando el método filter y una función de callback

  var personasFiltradas = personas.filter(function (persona) {

    return persona.nombre == nombreBuscado; // Devuelve true si el nombre coincide, false en caso contrario

  });

  // Mostrar las personas filtradas en el documento

  document.write("Personas filtradas: " + JSON.stringify(personasFiltradas) + "<br>");

  var productos = [

    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Sombrero", precio: 15 },

  ];

  var precioMaximo = 40;

  // Filtrar los productos cuyo precio es menor o igual al precio máximo utilizando el método filter y una función de callback

  var productosFiltrados = productos.filter(function (producto) {

    return producto.precio <= precioMaximo; // Devuelve true si el precio es menor o igual, false en caso contrario

  });

  // Mostrar los productos filtrados en el documento

  document.write("Productos filtrados: " + JSON.stringify(productosFiltrados) + "<br>");

  var tareas = [

    { nombre: "Comprar leche", completada: true },
    { nombre: "Pagar facturas", completada: false },
    { nombre: "Hacer ejercicio", completada: true },
    { nombre: "Llamar al médico", completada: false },
    
  ];

  // Filtrar las tareas completadas utilizando el método filter y una función de callback

  var tareasCompletas = tareas.filter(function (tarea) {

    return tarea.completada; // Devuelve true si la tarea está completada, false en caso contrario

  });

  // Mostrar las tareas completadas en el documento

  document.write("Tareas completadas: " + JSON.stringify(tareasCompletas) + "<br>");

  var empleados = [

    { nombre: "Juan", edad: 25, departamento: "Ventas" },
    { nombre: "María", edad: 30, departamento: "Marketing" },
    { nombre: "Pedro", edad: 35, departamento: "Ventas" },
    { nombre: "Ana", edad: 40, departamento: "Recursos Humanos" },

  ];

  var departamentoBuscado = "Ventas";
  var edadMinima = 30;

  // Filtrar los empleados cuyo departamento coincide con el departamento buscado y tienen una edad mayor o igual a la edad mínima utilizando el método filter y una función de callback
  
  var empleadosFiltrados = empleados.filter(function (empleado) {
    
    return empleado.departamento == departamentoBuscado && empleado.edad >= edadMinima; // Devuelve true si el empleado cumple ambas condiciones, false en caso contrario
  
  });

  // Mostrar los empleados filtrados en el documento

  document.write("Empleados filtrados: " + JSON.stringify(empleadosFiltrados) + "<br>");

  var libros = [

    { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen" },

  ];

  var subcadenaBuscada = "soledad";

  // Filtrar los libros cuyo título contiene la subcadena buscada (sin tener en cuenta mayúsculas o minúsculas) utilizando el método filter y una función de callback

  var librosFiltrados = libros.filter(function (libro) {

    return libro.titulo.toLowerCase().includes(subcadenaBuscada.toLowerCase()); // Devuelve true si el título contiene la subcadena, false en caso contrario

  });

  // Mostrar los libros filtrados en el documento
  
  document.write("Libros filtrados: " + JSON.stringify(librosFiltrados));
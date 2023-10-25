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

    for (var i = 1; i <= n; i++) {
      document.write(i + "<br>");
    }
}

//Escribir todos los números del 100 al 0 de 7 en 7.
function ejercicio6(){
    for (var i = 100; i >= 0; i -= 7) {
        document.write(i + "<br>"); // Muestra en pantalla el valor actual de la variable 'i' seguido de un salto de línea
      }
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
       else {
         contadorCeros++;
       }
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
       if (sueldo > 1000) {
         contadorMayores1000++;
       }
     }
 
     // Mostrar en pantalla la suma de los sueldos y la cantidad de sueldos mayores a 1000€
     document.write("La suma de los sueldos es: " + sumaSueldos + "<br>");
     document.write("Cantidad de sueldos mayores a 1000€: " + contadorMayores1000);
}
//Dadas las edades y alturas de 5 alumnos, mostrar la edad y la estatura media, la cantidad de alumnos mayores de 18 años, y la cantidad de alumnos que miden más de 1.75.
function ejercicio11(){
     // Variables para almacenar la suma de las edades, la suma de las alturas,
    // el contador de alumnos mayores de 18 años y el contador de alturas mayores a 1.75.
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
      if (edad > 18) {
        contadorMayores18++;
      }

      // Si la altura del alumno es mayor a 1.75, se incrementa el contador de alturas mayores a 1.75.
      if (altura > 1.75) {
        contadorAlturasMayores175++;
      }
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
    if (numero <= 1) {
        primo = false
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false
        }
    }

    if(primo){
        document.write(numero + ' Es primo')
    }else{
        document.write(numero + ' No es primo')
    }
}

//Pedir un número y mostrar todos los números pares desde 1 hasta ese número.
function ejercicio13(){
    var numero = parseInt(prompt("Introduce un número:"));

    for (var i = 1; i <= numero; i++) {
      if (i % 2 === 0) {
        document.write(i + "<br>");
      }
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



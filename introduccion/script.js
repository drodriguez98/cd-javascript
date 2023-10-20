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
    var num_pares = 0;
    var sum_pares = 0;
    var media_pares = 0;
    var media_impares = 0;
    var num_impares = 0;
    var sum_impares = 0;
    var num_ceros = 0;
    
    while (num_imputs < 10) {

        var actual_num = parseInt(prompt('Introduce un número:'));

        if (actual_num % 2 == 0) {

            num_pares++;
            sum_pares = sum_pares + actual_num;
            media_pares = sum_pares / num_pares;

        } 
        
        if (actual_num == 0) {

            num_ceros++;

        } else {

            num_impares++;
            sum_impares = sum_impares + actual_num;
            media_impares = sum_impares / num_impares;

        }

        num_imputs++;

    }

    console.log(`Media pares: ${media_pares}`);
    console.log(`Media impares: ${media_impares}`);
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
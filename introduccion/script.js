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

    

}
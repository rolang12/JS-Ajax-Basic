'use strict';

function Function() {
    console.log('estoy dentro');
}

function Function2() {
    return ('Soy la segunda funcion');
}

// Function();
// console.log(Function2);

var n1 = prompt('Dime una palabra', 'no puso nada');
var n2 = prompt('Dime otra palabra', 'no puso nada');

function unir(n1, n2) {
    var palabras = (n1 + " y " + n2);
    return palabras;
}

var resul = unir(n1, n2);

console.log(resul);
alert(resul);
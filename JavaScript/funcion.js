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


// *********************************

// Para pasar el resto de parametros, solo debo colocar ... y
// trae el resto de parametros como array

// EN caso de que le quiera pasar un array, y los elementos que contiene sean los parametros
// por serparado, solo le coloco los 3 puntos

// function ejemplo(uno, dos) {
//     console.log(uno, dos);
// }

// var eje = ['manzana', 'pera'];

// ejemplo(...eje);

// *********************************

console.log(resul);
alert(resul);
'use strict';

var numero = 20;
let numero2 = 40;

if (true) {
    // Lo que hace let es modificar el valor de una variable
    // pero solo dentro del bloque, y luego vuelve a su valor inicial.
    let numero = 30;
    console.log(numero);
}

console.log(numero);
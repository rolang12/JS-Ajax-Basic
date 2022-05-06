'use strict';

// funciones anonimas

function sumar(n1, n2, multiplicar) {
    var suma = n1 + n2;
    multiplicar(suma);
    return suma
}

// multiplica lo que retorna la primera función
// d => TIPO FLECHA 
sumar(5, 7, function (d) {
    console.log('la suma es' + d);
    console.log('la multiplicacion es' + d * 2);

})
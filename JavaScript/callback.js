'use strict';

function sumar(num1, num2, sumaYmuestra, sumaPorDos) {

    var sumar = num1 + num2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumar(7, 7, (dato) => {
    console.log("la suma es:", dato);
}, function (dato) {
    console.log("la suma por dos es:", (dato * 2));

});
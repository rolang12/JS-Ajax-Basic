'use strict';

var n1 = prompt('Dime una palabra', 'no puso nada');
var n2 = prompt('Dime otra palabra', 'no puso nada');

function unir(n1, n2, n3 = false) {

    if (n3 == false) {
        console.log(n1 + " y " + n2);
    } else {
        document.write(n1 + " y " + n2);
    }

}

var resul = unir(n1, n2, true);

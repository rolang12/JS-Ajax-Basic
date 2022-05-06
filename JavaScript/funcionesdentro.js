'use strict';

var n1 = prompt('Dime una palabra', 'no puso nada');
var n2 = prompt('Dime otra palabra', 'no puso nada');

function MostrarConsola(n1, n2) {
    console.log(n1 + "  " + n2);
}

function EnDocumento() {
    document.write(n1 + " y " + n2);
}

function Mostrar(n1, n2, n3 = false) {

    if (n3 == false) {
        MostrarConsola(n1, n2);
    } else {
        EnDocumento();
    }

}

Mostrar(n1, n2, true);
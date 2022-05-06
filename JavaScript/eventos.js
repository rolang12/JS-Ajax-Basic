'use strict';

var boton = document.getElementById('boton');

var div = document.getElementById('div');

// boton.addEventListener('click', function () {
//     console.log('Has pulsado el boton');
//      div.innerHTML = 'DISTE CLICK CTM';
// })

function Pulsar() {
    var res = confirm('si XDD');

    if (res) {
        div.innerHTML = 'DISTE ACEPTAR';
        div.style.color = 'green';
    } else {
        div.innerHTML = 'DISTE cancelar';
        div.style.color = 'red';
    }
}
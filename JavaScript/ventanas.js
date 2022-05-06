'use strict';

// Alertas dentro del navegador
alert('Mensaje de alerta');

// Ventanas de confirmación
var result = confirm('cuidao XD');
alert(result);
if (result) {
    alert('has dicho que yes');
}

// Ventana de ingreso de datos
var res = prompt('Enserio quieres liarla', 'claro que si');
alert('has dicho que' + res);
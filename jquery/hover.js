'use strict';
// Al ponerle hover, mostrar un texto
$(document).ready(function () {
    $('#btnmostrar').html('se muestra');

    $('#btnmostrar').hover(function () {
        $('#btnmostrar').html('sacalo xd');
        $('#texto').show(500);

    }, function () {
        $('#btn').html('saca el raton x2');
        $('#texto').hide(500);

    });
})
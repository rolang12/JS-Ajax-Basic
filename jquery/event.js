'use strict';

$(document).ready(function () {
    $('#btnmostrar').click(function () {
        // Mostrar texto
        // $('#texto')
        $('#texto').html('lo has pulsao').show(1000);
    });
    
    // Ocultar texto
    $('#btnocultar').click(function () {
        $('#texto').hide(1000);
    });


});
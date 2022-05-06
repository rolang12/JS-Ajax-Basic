'use strict';

$(document).ready(function () {
    // Selector de etiqueta
    var span = $('span');

    // Agregar clases a un objeto
    span.css('border', '2px solid blue');

    // Obtener el texo de una etiqueta
    console.log(span.text())

    // Selector de atributos
    var atributo = $('[title="google"]');
    atributo.css('font-size', '20px');
    console.log(atributo.text());

})
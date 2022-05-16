'use strict';

$(document).ready(function () {
    $("button").click(function () {
        var usuario = $("#nombre").val();
        $.get("getajax.php", { nombre: usuario }, function (respuesta) {
            $("#div").text(respuesta);
        });
    });
});
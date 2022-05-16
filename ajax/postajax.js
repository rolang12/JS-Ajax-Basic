'use strict';

$(document).ready(function () {
    $("input[type=submit]").click(function (event) {
        event.preventDefault();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();

        $.post("postajax.php", {
            nombre: nombre,
            apellido: apellido
        }, function (dato) {
            $("#div").text(dato);
        }).done(function () {
            $("#mensaje").text("Ejecución Exitosa");
        }).fail(function () {
            $("#mensaje").text("Ejecución Fallida");
        }).always(function () {
            console.log("Ejecución Finalizada");
        });

    });
});
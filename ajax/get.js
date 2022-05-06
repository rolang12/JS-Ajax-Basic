'use strict';

$(document).ready(function () {
    $("#button").click(function () {
        $.get("get.txt", function (dato, status, xhr) {
            $('#text').html(dato + " " + "Estado: " + status + " " + xhr);
            console.log(dato + " " + "Estado: " + status + " " + xhr);
        });
    });
});
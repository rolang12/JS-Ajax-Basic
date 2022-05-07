'use strict';

$(document).ready(function () {
    $("button").click(function () {
        $.getJSON("json_jsonarray.json", function (data) {
            console.log(data);
            $.each(data.empleados, function (index, obj) {
                $("ul").append("<li>" + obj.nombre + ":" + obj.salario + "</li>");
            });
        });
    });
});
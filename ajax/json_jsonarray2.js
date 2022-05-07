'use strict';

$(document).ready(function () {
    $("button").click(function () {
        $.getJSON("json_jsonarray2.json", function (data) {
            console.log(data);
            var personas = [];
            var edadMenor;
            $.each(data, function (index, obj) {
                personas.push(obj.edad);
                edadMenor = personas[0];
                $.each(personas, function (index, edad) {
                    if (edad < edadMenor) {
                        edadMenor = edad;
                    }
                });
            });

            $("#info").text("La edad menor es: " + edadMenor);

        });
    });
});
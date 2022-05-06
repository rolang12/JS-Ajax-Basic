$(document).ready(function () {
    $('button').click(function () {
        $.get('json.json', function (dato) {
            console.log(dato);
            $("#div").text(dato.nombre);
        });
    });
});
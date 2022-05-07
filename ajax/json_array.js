$(document).ready(function () {
    $('button').click(function () {
        //Siempre recibe dos parametros, el primero
        // Es el archivo desde donde viene y el segundo
        // Es la función declarando la variable datos
        $.get("json_array.json", function (datos) {

            // Para poder iterar el array se utiliza each
            // Recibe dos parametros, el primero el objeto el cual está siendo iterado, y el segundo la funcion
            if ($("#div").is(":empty")) {  //Validacion para mirar si el div está vacio
                $.each(datos, function (index, obj) {
                    console.log(datos);
                    $("div").append(obj.nombre + "<br> ");
                });
            }

        });
    });
});
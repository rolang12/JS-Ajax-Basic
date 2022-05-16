$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: "json_jsonarray2.json",
            type: "GET",
            dataType: "json",
            success: function (data) {
                // console.log(data);
                if ($("#div").is(":empty")) {


                    $.each(data, function (index, obj) {
                        $("#div").append(obj.nombre);
                    });
                }
            },


            error: function (xhr, status, error) {
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        });
    });
});
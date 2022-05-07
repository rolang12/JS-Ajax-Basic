$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: "json_jsonarray2.json",
            type: "GET",
            dataType: "json",
            success: function (data) {
                console.log(data);
                $.each(data, function (index, obj) {
                    $("#div").append(obj.nombre);
                });
            }
        });
    });
});
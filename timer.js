'use strict';

var time = document.getElementById('div');
var fe = document.getElementById('div2');

window.addEventListener('load', function () {
    var tiempo = setInterval(function () {

        var fecha = new Date();
        var h = fecha.getHours().toString();
        var m = fecha.getMinutes().toString();
        var s = fecha.getSeconds().toString();

        var tiempo = new Date();
        var a = tiempo.getFullYear().toString();
        var me = tiempo.getMonth().toString();
        var d = tiempo.getDate().toString();


        time.innerHTML = (h + ':' + m + ':' + s);
        fe.innerHTML = (a + '-' + me + '-' + d);
        // console.log('mensaje cada 2');
    }, 1000);
})

//Reloj
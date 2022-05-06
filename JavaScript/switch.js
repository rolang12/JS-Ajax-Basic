'use strict';

var edad = 20;
var text = '';

switch (edad) {
    case 17:
        text = 'No tieene 18 años';
        break;

    case 18:
        text = 'Mayor de edad';
        break;


    default:
        text = 'parece que no hay edad';
        break;
}

console.log(text);
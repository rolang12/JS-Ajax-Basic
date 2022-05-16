'use strict';

let aviso = "   aviso para reemplazar esto";
var numero = 5151;

var reemplazo = aviso.replace("para", "de");

// me toma los elementos dentro del index dado
var reemplazo2 = aviso.slice(10, 22);

// Separa las palabras y las convierte en array
var reemplazo3 = aviso.split(" ");

// Para quitar espacios finales o iniciales
var reemplazo4 = aviso.trim(" ");
console.log(reemplazo4);

'use strict';

var texto = "Bienvenidos a este curso de vainas";

// Me trae el indice donde está esa palabra, desde donde empieza
var busqueda = texto.indexOf("este");
var busqueda2 = texto.lastIndexOf("este");
var busqueda3 = texto.search("este");
var busqueda4 = texto.match("este");
var busqueda5 = texto.substr(14, 5);
// Me saca la letra apartir del index que le di
var busqueda6 = texto.charAt(14);
// Me devuelve true si está como primera palabra
var busqueda7 = texto.startsWith("este");
// Termina en, true or false
var busqueda8 = texto.endsWith("este");
// True or false si está en cualquier parte del texto, (sensible a mayúsculas)
var busqueda9 = texto.includes("este");
// Busqueda global
var busqueda10 = texto.match(/este/gi);
console.log(busqueda8);
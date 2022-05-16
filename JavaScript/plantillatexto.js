'use strict';

var nombre = prompt("Nombre");
var apellido = prompt("Apellido");

// alt 96 para las comillas invertidas
var texto = `

    <h1>Hola que tal</h1>
    <h3>Mi nombre es ${nombre}</h3>
    <h3>Mis apellido son ${apellido}</h3>

`

document.write(texto);
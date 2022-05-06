'use strict';

function Persona(Edad, Peso, Nombre) {
    this.Edad = Edad;
    this.Peso = Peso;
    this.Nombre = Nombre;

    this.caminar = () => {
        console.log('Estoy caminando');
    }

    this.sentar = () => {
        console.log('Estoy sentado');
    }

}

var Rolan = new Persona(17, 48, 'dario')
console.log(Rolan);
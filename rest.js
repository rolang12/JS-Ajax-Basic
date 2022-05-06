'use strict';

// Parametros REST
// El tercer parámetro lo convierte en un array
function Listado(p1, p2, ...p) {
    console.log(p1);
    console.log(p2);
    console.log(p);
}

Listado('Espala', 'mexic', 'colombo', 'suiza');
/**
 * bases de NODEJS
 */

const fs = require('fs');

let base = 3;
let resultado = '';

for (let i = 1; i <= 10; i++) {
    resultado += `${base} * ${i} = ${base*i}\n`
}


fs.writeFile(`archivos/tabla-${base}.txt`, resultado, (err) => {
    if (err) throw err;
    console.log('el archivo se creo con exito');
});

console.log(resultado);
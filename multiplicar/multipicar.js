/**
 * importar archivos requier
 */


const fs = require('fs');

let crearArchivo = (base, promesa = true, limite = 10) => {


    return new Promise((resolve, rejet) => {

        if (!Number(base)) {
            rejet(`El valor ${base} no es un numero`);
            return;
        }
        let resultado = '';
        for (let i = 1; i <= limite; i++) {

            resultado += `${base} * ${i} = ${base*i}\n`
        }

        if (promesa) {
            fs.writeFile(`archivos/tabla-${base}.txt`, resultado, (err) => {
                if (err) rejet(err);
                else
                    resolve(`tabla-${base}.txt`)
            });
        } else {
            resolve(resultado);
        }
    })

}

let listarTabla = (base, limite) => {

    crearArchivo(base, false, limite)
        .then(resp => {

            console.log(resp);
        })

}

/**
 * agregamos el metodo al modulo export que es un objeto 
 * global que permanece a lo largo de toda la aplicacion
 */

module.exports = {
    crearArchivo,
    listarTabla
}
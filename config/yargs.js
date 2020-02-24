/**
 * creamos la variable opciones porque las opciones en los comamdos para este caso 
 * son iguales
 */

opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Lista las tablas de Multiplicar por consola', opciones)
    .command('crear', 'Crea las tablas de Multiplicar', opciones)
    .help()
    .argv;

/**
 * exportamos el metodo para usarlo desde fuera
 */

module.exports = {
    argv
}
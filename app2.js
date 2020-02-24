/**
 * importar archivos por medio de require
 * se usa destructuracion para evitar llamar el la libreria.nombreMetodo
 */

const { crearArchivo, listarTabla } = require('./multiplicar/multipicar');
const { argv } = require('./config/yargs');

/**
 * process es una variable de entorno que esta presente durante toda
 * la ejecucion del programa y argv se refiere a los agumentos
 */
//console.log(process.argv)


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.b, argv.l);
        break;

    case 'crear':

        //let base = entrada.split('=')[1];
        let base = argv.base;
        crearArchivo(base, true, argv.limite)
            .then(nombre_tabla => console.log(`Se creo el archivo ${nombre_tabla}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('El comando no esta contemplado');
}

//let argv2 = process.argv;

// console.log('base', argv.b);
// console.log('limite', argv.l);
// let entrada = argv[2];
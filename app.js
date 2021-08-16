const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivoTabla( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo, ' creado' ) )
    .catch( err => console.log( err ) );
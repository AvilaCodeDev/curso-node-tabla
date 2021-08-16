const fs = require('fs');

const crearArchivoTabla = async( base = 5, listar, hasta ) => {

    console.log('====================');
    console.log('    Tabla del ', base);
    console.log('====================')
    
    let salida = '';

    for( let i = 1 ; i <= hasta; i++){
        salida += `${ base } x ${ i } = ${ base * ( i ) }\n`;
    }

    if( listar ) console.log( salida );

    const nombreArchivo = `tabla-${ base }.txt`;
    fs.writeFileSync( `./salida/${ nombreArchivo }`, salida );    
    
    return nombreArchivo;
    
}

module.exports = {
    crearArchivoTabla
}
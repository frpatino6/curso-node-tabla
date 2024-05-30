
const fs = require('fs');
const colors = require('colors');

const crearAarchivo = async (base = 5, listar = true, hasta ) => {
    try {
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida = salida + `${base} x ${i} = ${base * i}\n`;
        }
        if (listar) {
            console.log("====================================".green);
            console.log("Tabla de multiplicar del".green ,colors.blue(base));
            console.log("====================================".green);
            console.log(salida);
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

const crearArchivoAsync = async (base = 5, listar, hasta ) => {
    console.log('Creando archivo...')
    return new Promise((resolve, reject) => {
        try {
            let salida = '';
            let consola = '';

            for (let i = 1; i <= hasta; i++) {
                salida = salida + `${base} ${'x'} ${i} ${'='} ${base * i}\n`;
                consola = consola + `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            }

            if (listar) {
                console.log("====================================".green);
                console.log(`Tabla de multiplicar del ${colors.blue(base)}`);
                console.log("====================================".green);
                console.log(salida);
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            resolve(`tabla-${base}.txt`);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    crearAarchivo,
    crearArchivoAsync
}



const fs = require('fs');
const colors = require('colors/safe');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject)  => {

        if( !Number(base)){
            reject(`El valor introducido ${ base } no es un numero`.red);
            return;
        }else if(!Number(limite)){
            reject(`El valor introducido ${ limite } no es un numero`.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i } \n`;
        }

        fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {
        if (err) reject(err)
        else
            resolve(`El archivo tabla-${ base } ha sido creado`);
        });
    })    
};

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if( !Number(base)){
            reject(`El valor introducido ${ base } no es un numero`.red);
            return;
        }else if(!Number(limite)){
            reject(`El valor introducido ${ limite } no es un numero`.red);
            return;
        }
        let data = '';

        for(let i =1; i <= limite; i++){
            console.log(`${ base } * ${ i } = ${ base*i }`.blue);
        }
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}

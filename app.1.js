const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
     base:{
          demand:true, //es como obligatorio la base,
          alias: 'b'
     },
     limite:{
          alias: 'l',
          default: 10
     }
})
.help()
.argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

// const fs = require('express');//paquetes que no son nativos de node
// const fs = require('./fs');son los archivos que nosotros escribimos

// let base ='algo';

// console.log(process.argv)

// let argv2 = process.argv
// let parametro = argv[2];
// let base = parametro.split('=')[1]
console.log(argv);
console.log(argv2);

// crearArchivo(base)
//                .then(archivo => console.log(`Archuvo creado ${archivo}`))
//                .catch(err => {
//                     console.log(err);
//                })
const opts ={
     base:{
          demand:true, //es como obligatorio la base,
          alias: 'b'
     },
     limite:{
          alias: 'l',
          default: 10
     }
}
const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', opts)
          .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
.help()
.argv;

module.exports = {
     argv
}
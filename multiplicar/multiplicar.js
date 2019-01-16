//Requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {


console.log('========================'.red);
console.log(`========Tabla de ${base}============`.green);
console.log('========================'.red);

     return new Promise((resolve,reject) => {
          if(!Number(base) && !Number(limite)){

               reject('No son numeros');
               return;
          }
          let data ='';
          for(let i=1 ; i<=limite; i++){
               data += `${base} * ${i} = ${base * i}\n`;
          }
          if(data == '') {
               reject('No se completo');
          }else{
               resolve(data);
          }
     })
}

let crearArchivo = function(base, limite = 10){
     return new Promise((resolve, reject) => {

          if(!Number(base)){
               reject('No es un numero');
               return;
          }
          let data ='';
          for(let i=1 ; i<=limite; i++){
               data += `${base} * ${i} = ${base * i}\n`;
          }

          fs.writeFile('tablas/tabla-'+base+'.txt', data, (err) => {
          if (err) reject(err);
               resolve(`tabla-${base}.txt`)
          });
     });
}

module.exports = {
     crearArchivo,
     listarTabla
}

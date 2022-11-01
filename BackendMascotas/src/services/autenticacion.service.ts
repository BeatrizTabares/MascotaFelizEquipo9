import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const generador = require('password-generator'); // npm install password-generator --save
const cryptoJS = require('crypto-js'); // npm install crypto-js --save
@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */


  GenerarClave(){
    let clave = generador(8, false); // 8 caracteres, sin números
    return clave; // Devuelve la clave generada
  }

  CifrarClave(clave:string){
    let claveCifrada = cryptoJS.MD5(clave);
    return claveCifrada;
  }
}

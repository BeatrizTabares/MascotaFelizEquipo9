import { /* inject, */ BindingScope, injectable} from '@loopback/core';
const cryptoJS = require('crypto-js');
const generador = require('password-generator');


@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) { }

  /*
   * Add service methods here
   */

  //Generación automática de contraseñas
  generarContrasena() {
   let Contrasena = generador(8, false); //8 caracteres cin símbolos
    return Contrasena; //Devuelve la clave generada
  }

  //Cifrado de contraseñas
  cifrarContrasena(Contrasena: string) {
    let contrasenaCifrada = cryptoJS.MD5(Contrasena);
    return contrasenaCifrada;
  }
}

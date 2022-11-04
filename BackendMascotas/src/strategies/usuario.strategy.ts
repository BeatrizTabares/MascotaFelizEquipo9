import { AuthenticationStrategy } from "@loopback/authentication";
import { UserProfile } from "@loopback/security";
import { Request } from "express";
import { AutenticacionService } from "../services";
import {service} from "@loopback/core";
import {HttpErrors} from "@loopback/rest";
import parseBearerToken from 'parse-bearer-token';



//Clase para el usuario
export class EstrategiaUsuario implements AuthenticationStrategy {
  name: string = 'admin';

  constructor(
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService
  ){}

  async authenticate(request:Request): Promise<UserProfile | undefined> {
    let token = parseBearerToken(request);
    if (token){
        let datos = this.servicioAutenticacion.ValidarTokenJWT(token) 
        if(datos){
            let perfil: UserProfile = Object.assign({
                nombre: datos.data.nombre,
                id: datos.data.id,
                correo: datos.data.correo,
                rol: datos.data.rol
            });
            return perfil;
        }else{
            throw new HttpErrors.Unauthorized('Token no válido');
        }
    }
    else{
        throw new HttpErrors[401]("No se ha enviado un token");
    }
  }  
    
}

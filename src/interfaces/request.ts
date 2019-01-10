import * as Hapi from 'hapi';
import { IPostSugerenciaRequest } from '../sugerencia/sugerencia-interface';

 

export interface ICredentials extends Hapi.AuthCredentials {
  id: string;
}

export interface IRequestAuth extends Hapi.RequestAuth {
  credentials: ICredentials;
}

export interface IRequest extends Hapi.Request {
  auth: IRequestAuth;
}

export interface IPostSugerenciaRequest extends IRequest{
  payload: {
    idsugerencia: number;
    descripcion: string;
};
}

export interface IGetSugerenciaRequest extends IRequest{
query: {
  descripcion: string;
}
}



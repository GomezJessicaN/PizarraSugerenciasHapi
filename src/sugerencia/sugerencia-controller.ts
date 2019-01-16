import * as Hapi from 'hapi';
import * as Boom from 'boom';
import * as Jwt from 'jsonwebtoken';
import { IDatabase } from '../database';
import {IServerConfigurations} from '../configurations';
import { IRequest } from '../interfaces/request';
import { IPostSugerenciaRequest, IGetSugerenciaRequest } from './sugerencia-interface';
import {fromJSON} from "tough-cookie";
import { sugerencia } from '../interfaces/osm';


export default class SugerenciaController {
    private database: IDatabase;
    private configs: IServerConfigurations;

    constructor(configs: IServerConfigurations, database: IDatabase) {
        this.database = database;
        this.configs = configs;
    }

    public async PostSugerencia(request: IPostSugerenciaRequest, h: Hapi.ResponseToolkit) {
      var sugerencia: any = { descripcion: request.payload.descripcion, idsugerencia: request.payload.idsugerencia};
      if (this.EsSugerenciaSinCompletar(sugerencia)) {
      } else {
      var value = await this.database.pgp.tx(async t => {
      var nuevaSugerencia : {idsugerencia: sugerencia["descripcion"]} = await t.one
      ('insert into public.sugerencias (descripcion) values ($1) returning idsugerencia', [sugerencia.descripcion]);
      return nuevaSugerencia;
    });
    return value;
  }
}
  public async GetSugerencia(request: IGetSugerenciaRequest, h: Hapi.ResponseToolkit){
    const out: any =await this.database.pgp.manyOrNone("select descripcion from sugerencias", []);
    if(!out){
      return Boom.notFound();
    }
return out;
  }
  public async EsSugerenciaSinCompletar(sugerencia) {
    return sugerencia.descripcion == "";
  }
}
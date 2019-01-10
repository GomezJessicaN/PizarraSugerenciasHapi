import * as Hapi from 'hapi';
import * as Boom from 'boom';
import * as Jwt from 'jsonwebtoken';
import { IDatabase } from '../database';
import {IServerConfigurations} from '../configurations';
import { IRequest} from '../interfaces/request';
import { IGetHolaMundoRequest, IPostHolaMundoRequest, IDeleteHolaMundoRequest, IPutHolaMundoRequest } from './holamundo-interface';

import * as admin from 'firebase-admin';
import {fromJSON} from "tough-cookie";

export default class HolaMundoController {
    private database: IDatabase;
    private configs: IServerConfigurations;

    constructor(configs: IServerConfigurations, database: IDatabase) {
        this.database = database;
        this.configs = configs;
    }

    public async PostHolaMundo(request: IPostHolaMundoRequest, h: Hapi.ResponseToolkit) {
      return h.response({ status:"ok" }).code(200);
    }
   public async DeleteHolaMundo(request: IDeleteHolaMundoRequest, h: Hapi.ResponseToolkit) {
       return h.response({ status:"ok"}).code(200);
   }
   public async GetHolaMundo(request: IGetHolaMundoRequest, h: Hapi.ResponseToolkit) {
    var idholamundo = request.query.idholamundo;
    const out: any = await this.database.pgp.oneOrNone("select ($1) as holamundo", [idholamundo]);
    if (!out) {
      return Boom.notFound();
    }
    return out;
  }
  public async PutHolaMundo(request: IPutHolaMundoRequest, h: Hapi.ResponseToolkit) {
    return h.response({ status:"ok"}).code(200);
  }
  }
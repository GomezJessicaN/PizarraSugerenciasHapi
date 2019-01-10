import { IRequest } from "../interfaces/request";

export interface IPostSugerenciaRequest extends IRequest {
    params: {};
    payload: {
        idsugerencia: number;
        descripcion: string;
    };
}

export interface IGetSugerenciaRequest extends IRequest {
    query:{
        descripcion: string;
    };
    payload: {};
}
import { IRequest } from "../interfaces/request";

export interface IPostHolaMundoRequest extends IRequest {
    params: {};
    payload: {
        idholamundo: string;
    };
}
export interface IDeleteHolaMundoRequest extends IRequest {
    params: {};
    payload: {
        idholamundo: string;
    };
}
export interface IGetHolaMundoRequest extends IRequest {
    query: {
        idholamundo: string;
    };
    payload: {};
}
export interface IPutHolaMundoRequest extends IRequest {
    params: {};
    payload:{
        idholamundo: string;
    };
}
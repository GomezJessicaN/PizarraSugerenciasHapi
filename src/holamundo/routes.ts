import * as Hapi from "hapi";
import * as Joi from "joi";
import StreamingController from "./holamundo-controller";
import { IDatabase } from "../database";
import { IServerConfigurations } from "../configurations";
import * as Validator from "./holamundo-validator"

export default function (server: Hapi.Server, serverConfigs: IServerConfigurations, database: IDatabase) {

    const controller = new StreamingController(serverConfigs, database);
    server.bind(controller);
    server.route([{
        method: 'POST',
        path: '/holamundo',
        config: {
          handler: controller.PostHolaMundo,
          auth: false,
          tags: ['api', 'holaMundo'],
          description: 'post de HolaMundo',
          validate: {
            payload: Validator.PostHolaMundo
          },
          plugins: {
            'hapi-swagger': {
              responses: {
                '200': {
                  'description': 'Se agrega un nuevo hola al mundo'
                }
              }
            }
          }
        }
      },{
        method: 'DELETE',
        path: '/holamundo',
        config: {
          handler: controller.DeleteHolaMundo,
          auth: false,
          tags: ['api', 'holamundo'],
          description: 'Eliminacion del hola al mundo',
          validate: {
            payload: Validator.DeleteHolaMundo
          },
          plugins: {
            'hapi-swagger': {
              responses: {
                '200': {
                  'description': 'El hola mundo se elimino exitosamente'
                }
              }
            }
          }
        }
      },{
        method: 'GET',
        path: '/holamundo',
        config: {
          handler: controller.GetHolaMundo,
          auth: false,
          tags: ['api', 'holamundo'],
          description: 'get de holamundo',
          validate: {
            query: Validator.GetHolaMundo
          },
          plugins: {
            'hapi-swagger': {
              responses: {
                '200': {
                  'description': 'Get de hola mundo'
                }
              }
            }
          }
        }
      },{
        method: 'PUT',
        path: '/holamundo',
        config: {
          handler: controller.PutHolaMundo,
          auth: false,
          tags: ['api', 'holamundo'],
          description: 'put de holamundo',
          validate: {
            query: Validator.PutHolaMundo
          },
          plugins: {
            'hapi-swagger': {
              responses: {
                '200': {
                  'description': 'Put de hola mundo'
                }
              }
            }
          }
        }
      }]);
}
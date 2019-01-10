import * as Hapi from "hapi";
import * as Joi from "joi";
import SugerenciaController from "./sugerencia-controller";
import { IDatabase } from "../database";
import { IServerConfigurations } from "../configurations";
import * as Validator from "./sugerencia-validator";

export default function(
  server: Hapi.Server,
  serverConfigs: IServerConfigurations,
  database: IDatabase
) {
  const controller = new SugerenciaController(serverConfigs, database);
  server.bind(controller);
  server.route([
    {
      method: "POST",
      path: "/sugerencia",
      config: {
        handler: controller.PostSugerencia,
        auth: false,
        tags: ["api", "sugerencia"],
        description: "post de nueva sugerencia",
        validate: {
          payload: Validator.PostSugerencia
        },
        plugins: {
          "hapi-swagger": {
            responses: {
              "200": {
                description: "Nueva sugerencia a la pizarra"
              }
            }
          }
        }
      }
    },
    {
      method: "GET",
      path: "/sugerencia",
      config: {
        handler: controller.GetSugerencia,
        auth: false,
        tags: ["api", "sugerencia"],
        description: "Obtener las sugerencias ingresadas.",
        validate: {
          query: Validator.GetSugerencia
        },
        plugins: {
          "hapi-swagger": {
            responses: {
              "200": {
                description: "Obtiene las sugerencias ya ingresadas"
              }
            }
          }
        }
      }
    }
  ]);
}

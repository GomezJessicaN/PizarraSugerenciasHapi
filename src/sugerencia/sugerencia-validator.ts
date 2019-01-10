import * as Joi from "joi";


export const PostSugerencia = {

    descripcion:Joi.string().required().description("sugerencia")
};

export const GetSugerencia = {
}

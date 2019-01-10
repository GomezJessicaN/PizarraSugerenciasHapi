import * as Joi from "joi";

export const PostHolaMundo = {
    idholamundo:Joi.string().required().description("idholamundo"),
};

export const DeleteHolaMundo = {
    idholamundo:Joi.string().required().description("idholamundo"),
};

export const GetHolaMundo = {
    idholamundo:Joi.string().required().description("idholamundo"),
};

export const PutHolaMundo = {
    idholamundo:Joi.string().required().description("idholamundo"),
};
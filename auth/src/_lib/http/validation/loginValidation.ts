import Joi from "joi";

export const loginValidation = Joi.object({
    username: Joi
        .string()
        .min(4)
        .required(),

    password: Joi
        .string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
})
import { Response } from "express";

export const handleHttpError = (res: Response, message = 'Ups something happened!', code = 403) =>{
    res.status(code).send({ error:message });

    //res.status(code).render('error',{ error : message})
}
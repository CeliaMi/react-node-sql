import { Response } from "express";

export const handleHttpError = (res: Response, message = 'Ups something happened!', code = 403) =>{
    res.status(code);
    res.send({ error:message })
}
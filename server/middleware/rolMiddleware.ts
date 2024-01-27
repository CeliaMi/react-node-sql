import { handleHttpError } from "../utils/handleError";
import { Request, Response, NextFunction } from "express";

export const checkRol = (reqRol:string[]) => (req: Request, res : Response, next: NextFunction) => {
    try{
        const { user } = req.body;
        // console.log({user})
        const rolesByUser = user.role;
        const checkValueRol = reqRol.some((rolSingle) => rolesByUser.includes(rolSingle))

        if(!checkValueRol){
            handleHttpError( res, "USER_NOT_PERMISSIONS")
        }

    }catch(error){
        handleHttpError(res, "ERROR_PERMISSIONS", 403)
    }
    next();

}
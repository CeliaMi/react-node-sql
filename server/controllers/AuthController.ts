import { encrypt, compare } from "../utils/handlePassword";
import userModel from "../models/UserModel";
import { handleHttpError } from "../utils/handleError";
import { Request, Response } from "express";
import { tokenSign, } from "../utils/handlejwt";
import {SesionData, newUser, UserAttributes, UserData} from  "../interfaces/userInterface"
import { Model } from "sequelize";



export const registerController =  async(req:Request, res:Response): Promise<Response | void> =>{
    try{
    const data = req.body
    const newPassword = data.password
    const passwordHash = await encrypt(newPassword)
    const newUser : newUser = {...data, password: passwordHash}
    console.log(newUser) 
    const user: Model<UserAttributes> = await userModel.create(newUser)
    
    const userData : UserData = {
        id: user?.get('id') as number,
        name: user?.get('name') as string,
        email: user?.get('email') as string,
        role:user?.get('role') as string,
     }

    ///💥ATENCION HE DEJADO AQUÍ UN MALDITO ANY PERO ESTO ME SUPERAAAA AAAAAHHHHH!!!!
    //TE ODIOOOOOOOOO
    //  dataUser.set('password', undefined, { strict:false})
        const sesiondata : SesionData = {
           token: await tokenSign(user),
           user:userData
        }

    res.status(201).send({sesiondata})
        
    } catch(error){
        console.log(error)
        handleHttpError(res, "ERROR_REGISTER_USER")
    }
} 

 export const loginController = async(req:Request, res:Response): Promise<Response | void> =>{
    try{
        //req = matchedData(req);
        const userEmail = req.body.email
        const loginPassword = req.body.password
        const user = await userModel.findOne ({where: {email: userEmail}});
        //💥OTRO ANY POR AQUÍII
        if(!user){
            handleHttpError(res, "USER_NOT_EXISTS", 404)
        }
         const userData : UserData = {
            id: user?.get('id') as number,
            name: user?.get('name') as string,
            email: user?.get('email') as string,
            role:user?.get('role') as string,
         }
        const hashPassword = user?.get('password') as string
        const check = await compare(loginPassword, hashPassword)

        if(!check){
            handleHttpError(res, "PASSWORD_INVALID", 401)
        }
        //user?.set('password', undefined, {strict:false})

        const sesiondata : SesionData = {
            token: await tokenSign(user),
            user:userData
         }
        res.send({sesiondata})

    }catch(error){
        handleHttpError(res, "ERROR_LOGIN_USER")
    }

}


import { Request, Response } from "express";
import userModel from "../models/UserModel";

const UserController = {
    
    async getUsers(_req : Request  , res : Response ){
        const users = await userModel.findAll();
        return res.json(users)
    },
    async getUser(req : Request, res : Response){
        const userId : any  = req.params.id
        //💥OTRO ANY POR AQUÍII
        console.log(userId)
        const user = await userModel.findByPk(userId);
        return res.json(user)
    },

    async updateUser(req : Request, res : Response){
        const userId = req.params.id
        const bodyData = req.body
        const result = await userModel.update(bodyData , {where:{id:userId}});
        return res.json(result)
    },
    
    async deleteUser(req : Request, res : Response){
        const userId = req.params.id
        const result = await userModel.destroy({where:{id:userId}});
        return res.json(result)
    },
}

export default UserController
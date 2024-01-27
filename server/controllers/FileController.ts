import FileModel from '../models/FileModel'
import { handleHttpError } from '../utils/handleError'
// import { matchedData } from 'express-validator'
// import path from 'path';
// import { fileURLToPath } from 'url';
import { Request, Response } from "express";
import { PUBLIC_URL } from '../utils/config';


// const __filename = 
// const __dirname = 


const MEDIA_PATH = `${__dirname}/../storage`

export const getItems = async(_req:Request, res:Response): Promise<Response | void>  =>{
    try{
    const data = await FileModel.findAll({})
    res.send({data})
    } catch(error){
    handleHttpError(res, "ERROR_LIST_ITEMS")
    }
}

export const getItem = async(req:Request, res:Response): Promise<Response | void>  =>{
    try{
    // const {id} = matchedData(req)
    const data :any = await FileModel.findOne({ where: { id: req.params.id } })
    //💥ANY POR AQUÍ
    res.send({data})
} catch(error){
    handleHttpError(res, "ERROR_DETAIL_ITEM")
}
}

export const createItem = async(req:Request, res:Response): Promise<Response | void>  =>{
    try{
    const { body, file } : any= req
    const id_user = body.user.id;
    //💥ANY POR AQUÍ
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`,
        id_user: id_user
    }
    console.log(fileData)
    const data = await FileModel.create(fileData)
    res.send({data})
    } catch(error){
        handleHttpError(res, "ERROR_CREATE_ITEMS")
        console.log(error)
    }
}


export const deleteItem = async(req:Request, res:Response): Promise<Response | void>  =>{
    
    try{
         const { id } : any = req.params
        const dataFile = await FileModel.findOne(id);
        const deleteResponse = FileModel.destroy({ where: { id: req.params.id } });
        const { filename } : any = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`

        const data : any = {
            filePath,
            deleted: deleteResponse,
          };

        res.send({data})
    }catch(error){
        handleHttpError(res,'ERROR_DELETE_ITEM')
        console.log(error)
    }
}
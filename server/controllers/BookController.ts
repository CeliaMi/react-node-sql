import BookModel from '../models/BookModel'
import { Request, Response } from "express";
import { handleHttpError } from '../utils/handleError';

//GET all User
export const getAllUserBooks = async(req : Request  , res : Response ) => {
	try {
        const id_user = req.body.user.id;
		const books = await BookModel.findAll({ where: { id_user: id_user } })
        if(books.length === 0){
            return res.status(200).json({ message: 'There are no book yet' });
          }
		res.status(200).send({ books,  id_user });
    }catch(error){
        console.log(error)
        handleHttpError(res,'ERROR_GET_BOOKS')
    }
}

//GET ones
export const getBook = async (req : Request  , res : Response ) => {
	try {
		const book = await BookModel.findOne({ where: { id: req.params.id } })
        if(!book ){
            res.status(404).json({ message: "Book not found" })
          }
		res.status(200).json(book)
    }catch(error){
        handleHttpError(res,'ERROR_GET_BOOK')
    }
}
//get ALL books of all users
export const getAllBooks = async(_req : Request  , res : Response ) => {
	try {
		const books = await BookModel.findAll()
        if(books.length === 0){
            return res.status(200).json({ message: 'There are no book yet' });
          }
		res.status(200).send(books);
    }catch(error){
        console.log(error)
        handleHttpError(res,'ERROR_GET_BOOKS')
    }
}

//CREATE 
export const createBook = async (req : Request  , res : Response ) => {
	try {
        const id_user = req.body.user.id;
        const data = {...req.body,  id_user: id_user}
        console.log(data)
		const createdBook = await BookModel.create(data)
		res.status(201).json({ message: "has been created successfully!", body: createdBook })
    }catch(error){
        handleHttpError(res,'ERROR_CREATED_BOOKS')
        console.log(error)
    }
}

//PUT
export const updateBook = async (req : Request  , res : Response ) => {
	try {
		await BookModel.update(req.body, { where: { id: req.params.id } })
		res.status(201).json({ message: "has been update successfully!" })
	}catch(error){
        handleHttpError(res,'ERROR_UPDATED_BOOK');
    }
}

//DELETE
export const deleteBook = async (req : Request  , res : Response ) => {
	try {
		await BookModel.destroy({ where: { id: req.params.id } })
		res.status(204).json({ message: "has been delete successfully!" })
    }catch(error){
        handleHttpError(res,'ERROR_DELETE_BOOK')
    }
}
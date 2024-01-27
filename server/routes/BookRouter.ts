import express  from "express";
import { createBook, getAllUserBooks, updateBook, getAllBooks, deleteBook, getBook } from "../controllers/BookController";
// import { validatorCreateItem, validatorGetItem } from "../validators/tracksValidator";
// import { customHeader } from "../middleware/customHeader.js"; 
import { authMiddleware } from "../middleware/authMiddleware";
import { checkRol } from "../middleware/rolMiddleware";

export const bookRouter = express.Router();

// es importante poner *checkRol()* después del authMiddleware porque primero necesita que llegen los datos para después chequearlos

bookRouter.get('/books', authMiddleware, checkRol(["user", "admin"]), getAllUserBooks)
bookRouter.get('/books/:id', authMiddleware, checkRol(["user","admin"]), getBook)
bookRouter.get('/Allbooks', authMiddleware, checkRol(["admin"]), getAllBooks)
bookRouter.post('/books', authMiddleware, checkRol(["user","admin"]), createBook)
bookRouter.put('/books/:id', authMiddleware, checkRol(["user","admin"]), updateBook)
bookRouter.delete('/books/:id', authMiddleware, checkRol(["user","admin"]), deleteBook)
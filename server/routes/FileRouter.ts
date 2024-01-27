import express from 'express'
import { uploadMiddleware } from '../utils/HandleFile';
import { getItems, createItem, getItem, deleteItem } from '../controllers/FileController';
// import { validatorGetItem } from '../validators/storageValidator.js'
import { authMiddleware } from "../middleware/authMiddleware";
import { checkRol } from "../middleware/rolMiddleware";

export const fileRouter = express.Router();

fileRouter.get('/', authMiddleware, checkRol(["user", "admin"]), getItems)
fileRouter.get('/:id', authMiddleware, checkRol(["user", "admin"]), getItem)
fileRouter.post("/", uploadMiddleware.single("File"),authMiddleware, checkRol(["user", "admin"]), createItem)
fileRouter.delete('/:id', authMiddleware, checkRol(["user", "admin"]),deleteItem);
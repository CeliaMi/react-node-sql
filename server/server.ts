import express from 'express';
import {PORT} from "./utils/config";
import db from "./database/db"
import userRouter from './routes/UserRouter';
import cors from 'cors'
import { bookRouter } from './routes/BookRouter';
import { fileRouter } from './routes/FileRouter';


const app = express();
    
app.use(cors())
app.use(express.json())
app.use('/api/',userRouter)
app.use('/api/',bookRouter)
app.use('/api/file',fileRouter)
app.use(express.static('storage'))


try{
	db.authenticate()
	console.log('💫💫💫conected to database💫💫💫')
	}catch(error){
	console.log(`error:' ${error}`)
	}


    export const server = app.listen(PORT,() =>{
	console.log(`🚀server up in http://localhost:${PORT}/`)
} )
import { updateBook, createBook } from "../services/BookService"



export const handlerUpdateBook = async ( { editedBook } ) =>{
    if(!editedBook){
        return;
    }
    const res = await updateBook(editedBook)
    return {res};
}

export const handlerCreateBook = async ( newBook ) =>{
    const res = await createBook(newBook)
    return res;
}


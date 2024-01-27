import {   getOneBook } from "../services/BookService"


export const loadOneBook = async ({ params }) => {
    const res = await getOneBook(params.id)
    const book = await res.data
    console.log(res)
    return { book };
}

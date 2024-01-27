import { useLoaderData, Link , useNavigate} from 'react-router-dom'
import { handlerUpdateBook } from '../middleware/bookHandlers'
import Alert from "../components/Alert";
import { useForm } from "react-hook-form";
import Modal from "../components/Modal";

export const EditBook = () => {

 const { book } = useLoaderData();
 console.log(book)

 const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm({defaultValues:  {
  title: book.title,
  writer: book.writer,
  book_description:book.book_description

}})

 const handleForm = (  editedBook ) => {
    editedBook.id = book.id
    console.log(editedBook)
    handlerUpdateBook( { editedBook })
 }

  return (
    <section className='lg:w-1/2 md:w-2/3 mx-auto'>
      <h3>¿Qué quieres actualizar?</h3>
      <form onSubmit={handleSubmit(handleForm)} className='flex flex-wrap -m-2' >
        <div className='p-2 w-full'>
        <div className='relative'>
              <label htmlFor="title" className='eading-7 text-sm text-gray-400'>Título:</label>
              <input type="text" name="title" id="title" { ...register("title", { minLength: 2,  required: true,
                })} className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5'/>

                {errors.title?.type === 'required' && <Alert text={"El campo título es requerido"}/>}
                {errors.title?.type === 'minLength' && <Alert text={"El campo título debe tener almenos 2 caracteres"}/>}

              <label htmlFor="writer" className='eading-7 text-sm text-gray-400'>Autora:</label>
              <input type="text" name="writer" id="writer" { ...register("writer", { minLength: 2
                })} className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-5'/>

                {errors.writer?.type === 'required' && <Alert text={"El campo autora es requerido"}/>}
                {errors.writer?.type === 'minLength' && <Alert text={"El campo autora debe tener almenos 2 caracteres"}/>}

              <label htmlFor="book_description" className='eading-7 text-sm text-gray-400 '>Descripcion:</label>
              <textarea type="text" name="book_description" id="book_description" { ...register("book_description", { minLength: 10, required: true }) } className='
              w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-ellipsis overflow-hidden' />

                {errors.book_description?.type === 'required' && <Alert text={"El campo descripción es requerido"}/>}
                {errors.book_description?.type === 'minLength' && <Alert text={"No seas así...cuentanos un poco más..."}/>}
                
              <button type="submit" className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5'> Actualizar✨</button>
              <button className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg mt-5'><Link to={"/home"}>Back</Link></button>
        </div>
        </div>
        { isSubmitSuccessful && <Modal message={"ACTUALIZACIÓN REALIZADA CON ÉXITO"}/> }
      </form>
      </section>
  )
}

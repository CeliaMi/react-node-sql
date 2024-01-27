import  BookCard  from "../components/BookCard"
import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"


 const Home = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <section className="flex flex-col text-center w-full container px-5 py-2 mx-auto justify-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-5 text-white" >Mi listado de Libros</h1>
      <div className="flex flex-col mb-20">
      {data.books ? (
        <>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Leer, Leer y Leeeeeeer🐑</p>
          <BookCard books = {data.books} />
        </>
        ):(
          <>
          <article className='bg-indigo-400 bg-opacity-30 p-8 rounded m-6 p-2 lg:w-1/2 md:w-2/3 mx-auto'>¡Ojo! ¡Atención! aviso a navegantes, cada vez que usted escriba un libro en esta lista se estará comprometiendo firmemente a leerlo...</article>
          <article className='bg-gray-800 bg-opacity-40 p-8 rounded p-2 lg:w-1/2 md:w-2/3 mx-auto'>
            <h5 className='text-xs text-purple-400 tracking-widest font-medium title-font mb-1'> ¡Animate y añade tu primer Libro!</h5>
            <button className=' inline-flex text-gray-400 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg'><Link className=" hover:text-white" to="/home/home/newBook">🔮Añadir mi primer libro🔮</Link></button> 
          </article>
        </>

          
          )}
      </div>   
    </section>
  )
}
export default Home
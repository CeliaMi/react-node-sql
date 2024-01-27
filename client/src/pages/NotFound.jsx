import React from 'react'
import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError()
  return (
    <article className='bg-indigo-400 bg-opacity-30 p-8 rounded m-6 p-2 lg:w-1/2 md:w-2/3 mx-auto text-center'>
            <h1 className='title-font font-medium sm:text-4xl text-3xl text-white'>404🙃</h1>
            <p>Ups!Pagina no encontrada</p>
            <p>{error.statusText || error.message}</p>
            <button className='ml-4 inline-flex text-indigo-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg--700 hover:text-white rounded text-lg mt-5'><Link to={"/"}>Back</Link></button>
    </article>
  )
}

export default NotFound
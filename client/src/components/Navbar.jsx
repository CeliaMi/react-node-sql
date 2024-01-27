import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'
import LogoutButton from './LogOutButton'

const Navbar = () => {
  const { isAuthenticated} = useUserContext();

  return (
    <nav className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-400 bg-gray-800" >
     <span className="ml-3 text-xl text-white"> <NavLink type="button" className="mr-5 hover:text-white " to="/">Promesas para Leer y viajar🐱‍🚀</NavLink></span>
     {isAuthenticated && (
      <>
        <div className="md:ml-auto flex flex-wrap items-center text-base justify-center mx-4 ">
           <NavLink type="button" className="mr-5 hover:text-white " to="/home">Todos mis Libros</NavLink> 
           <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'><NavLink className="hover:text-white" to="/home/home/newBook">Añadir nuevo libro🔮</NavLink></button> 
           <LogoutButton/>
        </div>
      </>
     )}
    </nav>
  )
}

export default Navbar
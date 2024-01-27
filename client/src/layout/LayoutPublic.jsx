import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutPublic = () =>{


    return (
      <div className="bg-gray-900 min-h-screen" >
        <Navbar/>
        <main className="text-gray-400 bg-gray-900 body-font relative container px-5 py-24 mx-auto">
          {navigation.state === "loading" && (
            <div className='bg-indigo-400 bg-opacity-30 p-8 rounded m-6 p-2 lg:w-1/2 md:w-2/3 mx-auto'>Loading...</div>
          )}   
            <Outlet/>
        </main>
        <footer className="text-gray-400 py-8 w-full border-t border-gray-800 bg-gray-900 text-center  bottom-0 w-full"> Esperamos que disfrutes de tus próximos viajes 🪐</footer>
      </div>
    )
}

export default LayoutPublic
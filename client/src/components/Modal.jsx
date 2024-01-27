import React from 'react'
import { Link } from 'react-router-dom'


const Modal = ( { message }) => {

    return (
            <div className="fixed inset-0 overflow-y-auto bg-gray-900 bg-opacity-70 ">
            <div className='h-screen flex items-center justify-center'>
              <div className="m-9 p-9 flex items-center justify-center bg-indigo-800 rounded mt-2 ">
                        <p className=" text-purple-400 tracking-widest font-medium title-font mb-1">
                        {message}</p>
                        <Link to={"/home"}><button className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg '>x</button></Link>
              </div>
              </div>
            </div>
          
    )
  }

export default Modal
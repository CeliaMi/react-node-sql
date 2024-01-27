import React from 'react'
import { useForm } from "react-hook-form";
import { createFile } from "../services/FileService"

const UploadFile = () => {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm()


    const handleForm = async( data ) =>{
      const formData = new FormData()
      formData.append("File", data.File[0])
      const response = await createFile(formData)
      return response.data.data.url
    }

  return (
    <>            <form onSubmit={handleSubmit(handleForm)}>
                    <input type='file' name="File" id="File" { ...register("File")} className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg mt-5' ></input>
                    <button  >Enviar imagen</button>
                  </form>
    </>
  )
}

export default UploadFile
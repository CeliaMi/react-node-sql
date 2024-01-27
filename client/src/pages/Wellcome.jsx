import Login from "../components/Login"


 const Wellcome = () => {
 
  return (
    <section className="flex flex-col w-full container px-5 py- mx-auto justify-center">
      <h1 className="sm:text-5xl text-2xl font-medium title-font mb-5 text-white text-center" > ¡Hola!</h1>
      <div className="flex flex-col mb-20">     
          <article className='bg-gray-800 bg-opacity-40 p-8 rounded p-2 lg:w-1/3 md:w-2/3 mx-auto'>
            <Login/>
          </article>
      </div>   
    </section>
  )
}
export default Wellcome
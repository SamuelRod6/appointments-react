function Form() {
    
  return (    
    <div className="md:w-1/2 lg:w-2/5"> 
      <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
      <p className="text-lg mt-5 text-center">
        Añadir {' '}
        <span className="text-indigo-400 font-bold">Pacientes:</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-8 px-5 mt-5" action="">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-600 font-bold" >
            Nombre:
          </label>
          <input
            id="name"
            type="text" 
            placeholder="Escribe tu nombre"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-lg"
          />
        </div>
      </form>
    </div>   
  )
}

export default Form
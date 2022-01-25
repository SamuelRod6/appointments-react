function Form() {
    
  return (    
    <div className="md:w-1/2 lg:w-2/5"> 
      <h2 
        className="font-black text-3xl text-center">
        Registro de Pacientes
      </h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Añadir {' '}
        <span className="text-indigo-400 font-bold">Pacientes:</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-8 px-5 m-3">
        <div className="mb-5">
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
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-gray-600 font-bold" >
            Número de contacto:
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+( ) 12345678"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-600 font-bold" >
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de contacto"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-600 font-bold" >
            Alta:
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-lg"
          />
        </div>
        <div>
          <label
            htmlFor="síntomas"
            className="block text-gray-600 font-bold" >
            Síntomas:
          </label>
          <textarea
            id="síntomas" 
            placeholder="Describa sus síntomas" 
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 
            rounded-lg resize-none"
          />
        </div>
        <input 
        type="submit" 
        name="" 
        id=""
        className="bg-indigo-400 hover:bg-indigo-700 
        text-white font-bold uppercase w-full py-2 px-4 rounded-lg 
        mt-5 cursor-pointer transition-colors"
        />
      </form>
    </div>   
  )
}

export default Form
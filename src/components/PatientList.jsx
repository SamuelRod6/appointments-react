import Patient from "./Patient"

function PatientList() {

  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen">
      <h2 
        className="font-black text-3xl text-center">
        Listado de Pacientes
      </h2>
      <p className="text-lg mt-5 mb-7 text-center">
        Revisa la lista de {' '}
        <span className="text-indigo-400 font-bold">Pacientes y Citas:</span>
      </p>

      <div className="md:h-screen overflow-y-auto">
      <Patient />
      <Patient />
      <Patient />
      <Patient />
      </div>
    </div>
  )
}

export default PatientList

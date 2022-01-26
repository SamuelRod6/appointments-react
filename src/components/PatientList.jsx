import Patient from "./Patient"

function PatientList({patients, setPatient}) {

  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen"> 
    
      {patients && patients.length ? (
        <>
        <h2 
          className="font-black text-3xl text-center">
          Listado de Pacientes
        </h2>
        <p className="text-lg mt-5 mb-7 text-center">
          Revisa la lista de {' '}
          <span className="text-indigo-400 font-bold">Pacientes y Citas: </span>
        </p>

        <div className="md:h-screen overflow-y-auto">
          
            {patients.map( (patient) => (
                <Patient
                  key={patient.id}
                  patient={patient}
                  setPatient={setPatient}
                />
            ))}
        </div>
        </>
      ) : (
        <>
          <h2 
            className="font-black text-3xl text-center">
            No hay Pacientes
          </h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Empieza a agregar {' '}
            <span className="text-indigo-400 font-bold">Pacientes y Citas:</span>
          </p>

          <div className="bg-white shadow-md px-5 py-8 rounded-xl m-3">
            <p className="font-bold m-3 text-gray-600 text-center text-2xl uppercase">
              No hay pacientes registrados
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default PatientList

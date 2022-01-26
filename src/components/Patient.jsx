
function Patient({patient, setPatient, removePatient}) {
  const {id, name, phone, email, date, symptoms} = patient;

  function handleRemove() {
    const confirmation = confirm("Desea eliminar este paciente?")
    if (confirmation) {
      removePatient(id)
    }
  }

  const formattedDate = new Date(date).toLocaleDateString("en-US")

  return (
    <div className="bg-white shadow-md px-5 py-8 rounded-xl m-3">
    <p className="font-bold mb-3 text-gray-600 ">
      Nombre:{' '}
      <span className="font-normal normal-case">{name}</span>
    </p>
    <p className="font-bold mb-3 text-gray-600 ">
      Número de contacto:{' '}
      <span className="font-normal normal-case">{phone}</span>
    </p>
    <p className="font-bold mb-3 text-gray-600 ">
      Email:{' '}
      <span className="font-normal normal-case">{email}</span>
    </p>
    <p className="font-bold mb-3 text-gray-600 ">
      Fecha del Alta:{' '}
      <span className="font-normal normal-case">{formattedDate}</span>
    </p>
    <p className="font-bold mb-3 text-gray-600 ">
      Síntomas:{' '}
      <span className="font-normal normal-case">{symptoms}</span>
    </p>
    
    <div className='flex justify-between mt-5'>
      <button
        type='button'
        onClick={() => setPatient(patient)}
        className='py-2 px-10 bg-purple-700 hover:bg-purple-800 
        text-white font-bold rounded-lg'>
        Editar
      </button>
      <button
        type='button'
        onClick={handleRemove}
        className='py-2 px-10 bg-red-600 hover:bg-red-700 
        text-white font-bold rounded-lg'>
        Eliminar
      </button>
    </div>
  </div>
  )
}

export default Patient;

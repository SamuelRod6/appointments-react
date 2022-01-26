import ErrorMsg from './ErrorMsg'
import {useState, useEffect} from 'react'


function Form({patients, setPatients, patient, setPatient}) {
  
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symptoms, setSymptoms] = useState('')
  
  const [error, setError] = useState(false)

  // Refill the form with the patient data when editing
  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name)
      setPhone(patient.phone)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptoms(patient.symptoms)
    }
  }, [patient])

  // Hash generator
  function IDGenerator() {
    const random = Math.random().toString(36).substr(2)
    const time = Date.now().toString(36)
    return random + time
  }

  // Handles the patient creation
  function handleSubmit(e) {
    e.preventDefault()
    
    if ([name, phone, email, date, symptoms].includes('')) {
      setError(true)
      return
    }
    setError(false)

    // Create a new patient
    const newPatient = {
      name,
      phone,
      email,
      date,
      symptoms
    }
    
    // If patient is being edited, replace the old patient with the new one
    if (patient.id) {
      // Update  patient in patients array
      newPatient.id = patient.id
      const updatedPatients = patients.map(currentPatient =>
        currentPatient.id === patient.id ? newPatient : currentPatient)
      setPatients(updatedPatients)
      setPatient({})
      
    } else {
      // Add new patient to patients array
      newPatient.id = IDGenerator()
      setPatients([...patients, newPatient])
    }

    // Clear form
    setName('')
    setPhone('')
    setEmail('')
    setDate('')
    setSymptoms('')
  }
  
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

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl py-8 px-5 m-3">
        
        {error && <ErrorMsg>
            <p>Todos los campos son obligatorios</p>
          </ErrorMsg>
        }
        
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-gray-600 font-bold" >
            Número de Contacto:
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+( ) 12345678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)} 
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 
            rounded-lg resize-none"
          />
        </div>
        <input 
        type="submit" 
        value={ patient.id ? "Editar Paciente" : "Añadir Paciente"}
        className="bg-indigo-400 hover:bg-indigo-700 
        text-white font-bold uppercase w-full py-2 px-4 rounded-lg 
        mt-5 cursor-pointer transition-colors"
        />
      </form>
    </div>   
  )
}

export default Form
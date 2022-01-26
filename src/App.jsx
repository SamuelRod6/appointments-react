import { useState, useEffect } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"


function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  // Load patients from local storage
  useEffect(() => {
    const  patientsLS = JSON.parse(localStorage.getItem('patients')) ?? []
    setPatients(patientsLS)
  }, [])

  // Saves patients to local storage
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  // Remove patient
  function removePatient(id) {
    const newPatients = patients.filter(p => p.id !== id)
    setPatients(newPatients)
  } 

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          removePatient={removePatient}
        />
      </div>
    </div>
  )
}

export default App

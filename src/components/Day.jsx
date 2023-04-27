import { useState } from "react"
import Appointment from "./Appointment"

export default function Day(props) {

  const [appointments, setAppoitments] = useState([])

  const addAppoitment = () => {
    const name = prompt("Informe o nome da nova agenda:")
    const newAppointment = {
      id: Math.floor(1000000 * (Math.random() + 1)),
      name,
      done: false
    }
    setAppoitments((currentState) => [...currentState, newAppointment])
  }

  const toggleDone = (appointmentId) => {
    setAppoitments((currentState) => (
      currentState.map(appointment => {
        if (appointment.id !== appointmentId)
          return appointment
        else
          return { ...appointment, done: !appointment.done }
      })
    ))
  }

  const removeAppointment = (appointmentId) => {
    setAppoitments(currentState => (
      currentState.filter(appointment => appointment.id !== appointmentId)
    ))
  }

  return (
    <div className="day">
      <h2>{props.day}</h2>
      <ul>
        {appointments.map(appointment => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            toggleDone={toggleDone}
            removeAppointment={removeAppointment}
          />
        ))}
      </ul>
      <button className="addButton" onClick={addAppoitment}>Adicionar</button>
    </div>
  )
}
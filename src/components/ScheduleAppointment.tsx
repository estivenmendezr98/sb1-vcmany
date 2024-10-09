import React, { useState } from 'react'
import { Calendar, Clock, User, PawPrint } from 'lucide-react'

// Mock data for veterinarians (replace with API call in a real application)
const veterinarians = [
  { id: 1, name: 'Dr. Smith' },
  { id: 2, name: 'Dr. Johnson' },
  { id: 3, name: 'Dr. Williams' },
]

function ScheduleAppointment() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    veterinarianId: '',
    animalName: '',
    ownerName: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend API
    console.log('Appointment scheduled:', formData)
    // Reset form after submission
    setFormData({
      date: '',
      time: '',
      veterinarianId: '',
      animalName: '',
      ownerName: '',
    })
    alert('Appointment scheduled successfully!')
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Schedule Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="date" className="block mb-1 font-medium">
            <Calendar className="inline-block mr-2" size={18} />
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="time" className="block mb-1 font-medium">
            <Clock className="inline-block mr-2" size={18} />
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="veterinarianId" className="block mb-1 font-medium">
            <User className="inline-block mr-2" size={18} />
            Veterinarian
          </label>
          <select
            id="veterinarianId"
            name="veterinarianId"
            value={formData.veterinarianId}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select a veterinarian</option>
            {veterinarians.map(vet => (
              <option key={vet.id} value={vet.id}>{vet.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="animalName" className="block mb-1 font-medium">
            <PawPrint className="inline-block mr-2" size={18} />
            Animal Name
          </label>
          <input
            type="text"
            id="animalName"
            name="animalName"
            value={formData.animalName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="ownerName" className="block mb-1 font-medium">
            <User className="inline-block mr-2" size={18} />
            Owner Name
          </label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Schedule Appointment
        </button>
      </form>
    </div>
  )
}

export default ScheduleAppointment
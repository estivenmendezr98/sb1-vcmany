import React from 'react'
import { Calendar, Home, Users, PawPrint } from 'lucide-react'

// Mock data (replace with actual API calls in a real application)
const appointments = [
  { id: 1, date: '2023-04-15', time: '10:00', animal: 'Max', owner: 'John Doe', room: 'Room 1' },
  { id: 2, date: '2023-04-15', time: '11:30', animal: 'Bella', owner: 'Jane Smith', room: 'Room 2' },
  { id: 3, date: '2023-04-15', time: '14:00', animal: 'Charlie', owner: 'Mike Johnson', room: 'Room 1' },
]

const rooms = [
  { id: 1, name: 'Room 1', assigned: true },
  { id: 2, name: 'Room 2', assigned: true },
  { id: 3, name: 'Room 3', assigned: false },
  { id: 4, name: 'Room 4', assigned: false },
]

const DashboardCard = ({ title, icon, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-semibold ml-2">{title}</h2>
    </div>
    {children}
  </div>
)

function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Veterinary Management Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard title="Today's Appointments" icon={<Calendar size={24} />}>
          <ul className="space-y-2">
            {appointments.map(apt => (
              <li key={apt.id} className="border-b pb-2">
                <div className="flex justify-between">
                  <span className="font-semibold">{apt.time}</span>
                  <span>{apt.room}</span>
                </div>
                <div>{apt.animal} - Owner: {apt.owner}</div>
              </li>
            ))}
          </ul>
        </DashboardCard>

        <DashboardCard title="Consultation Rooms" icon={<Home size={24} />}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Assigned</h3>
              <ul className="space-y-1">
                {rooms.filter(room => room.assigned).map(room => (
                  <li key={room.id} className="bg-green-100 p-2 rounded">{room.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Unassigned</h3>
              <ul className="space-y-1">
                {rooms.filter(room => !room.assigned).map(room => (
                  <li key={room.id} className="bg-gray-100 p-2 rounded">{room.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </DashboardCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Animals" icon={<PawPrint size={24} />}>
          <div className="text-3xl font-bold text-center">
            {appointments.length}
          </div>
        </DashboardCard>
        <DashboardCard title="Owners" icon={<Users size={24} />}>
          <div className="text-3xl font-bold text-center">
            {new Set(appointments.map(apt => apt.owner)).size}
          </div>
        </DashboardCard>
        <DashboardCard title="Total Appointments" icon={<Calendar size={24} />}>
          <div className="text-3xl font-bold text-center">
            {appointments.length}
          </div>
        </DashboardCard>
        <DashboardCard title="Available Rooms" icon={<Home size={24} />}>
          <div className="text-3xl font-bold text-center">
            {rooms.filter(room => !room.assigned).length}
          </div>
        </DashboardCard>
      </div>
    </div>
  )
}

export default Dashboard
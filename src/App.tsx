import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AnimalList from './components/AnimalList'
import AppointmentList from './components/AppointmentList'
import OwnerList from './components/OwnerList'
import VeterinarianList from './components/VeterinarianList'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <ul className="flex space-x-4">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/animals">Animals</Link></li>
            <li><Link to="/appointments">Appointments</Link></li>
            <li><Link to="/owners">Owners</Link></li>
            <li><Link to="/veterinarians">Veterinarians</Link></li>
          </ul>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/animals" element={<AnimalList />} />
            <Route path="/appointments" element={<AppointmentList />} />
            <Route path="/owners" element={<OwnerList />} />
            <Route path="/veterinarians" element={<VeterinarianList />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
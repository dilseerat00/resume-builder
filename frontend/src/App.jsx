import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage' // Importing the landing page component
import { User } from 'lucide-react'
import UserProvider from './context/userContext'
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </UserProvider>
  )
}

export default App;

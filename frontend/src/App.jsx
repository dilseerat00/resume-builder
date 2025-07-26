import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage' // Importing the landing page component
import { Edit, User } from 'lucide-react'
import UserProvider from './context/userContext'
import Dashboard from './pages/Dashboard'
import EditResume from './components/EditResume'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/resume/:resumeId" element={<EditResume/>}/>

      </Routes>
      
      <Toaster toastOptions={{
        className:"",
        style: {
          background: '#363636',
          color: '#fff',
          fontSize: '16px'
        }
      }
      }>

      </Toaster>


    </UserProvider>
  )
}

export default App;

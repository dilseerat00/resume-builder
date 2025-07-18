import React from 'react'
import { Route, Routes } from 'react-router-dom'
import landingPage from './pages/landingPage' // Importing the landing page component
import { User } from 'lucide-react'
import UserProvider from './context/userContext'
const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<landingPage/>}/>
      </Routes>
    </UserProvider>
  )
}

export default App;

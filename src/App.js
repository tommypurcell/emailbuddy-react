import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import EmailForm from './pages/EmailForm'

function App() {
  return (
    // Router
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmailForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

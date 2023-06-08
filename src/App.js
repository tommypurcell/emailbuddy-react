import './App.css'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    // Router
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

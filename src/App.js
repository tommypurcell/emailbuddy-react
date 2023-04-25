import logo from './logo.svg'
import './App.css'
import House from './pages/House'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Houses from './pages/Houses'
import SignUp from './pages/SignUp'
import HouseCreate from './pages/HouseCreate'
import HouseEdit from './pages/HouseEdit'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
function App() {
  return (
    // Router
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Houses />} />
        <Route path="/House" element={<House />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/HouseCreate" element={<HouseCreate />} />
        <Route path="/HouseEdit" element={<HouseEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

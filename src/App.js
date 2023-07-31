import logo from './logo.svg'
import './App.css'
import House from './pages/House'
import Login from './pages/Login'
import Profile from './pages/Profile'
import FoodLog from './pages/FoodLog'
import SignUp from './pages/SignUp'
import HouseCreate from './pages/HouseCreate'
import HouseEdit from './pages/HouseEdit'
import Stats from './pages/Stats'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import HouseThumbnail from './components/HouseThumbnail'
import MealPlanGenerator from './pages/MealPlanGenerator'
import CalorieCounter from './pages/CalorieCounter'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    // Router
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/house/:id" element={<House />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/house-create" element={<HouseCreate />} />
        <Route path="/house-edit" element={<HouseEdit />} />
        <Route path="/foodlog" element={<FoodLog />} />
        <Route path="/calorie-counter" element={<CalorieCounter />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/meal-plan-generator" element={<MealPlanGenerator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

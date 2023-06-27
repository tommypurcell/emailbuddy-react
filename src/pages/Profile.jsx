import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
axios.defaults.withCredentials = true

let render_url = 'https://calorie-counter-api-portalversion.onrender.com'
let local_url = 'http://localhost:4000'

export default function Profile() {
  // create state variable for user
  const [user, setUser] = useState({})
  const [profile, setProfile] = useState({})

  // define houses
  const [houses, setHouses] = useState([])

  // navigate
  const navigate = useNavigate()

  const getProfile = async () => {
    try {
      let profile = await axios.get(`${render_url}/profile`, {
        withCredentials: true,
      })
      console.log(profile.data)
      setProfile(profile.data)
    } catch (err) {
      console.error('Error fetching profile:', err.message)
    }
  }

  return (
    <>
      <button onClick={getProfile}>Get Profile</button>
      <ul>
        <li>id: {profile._id}</li>
        <li>name: {profile.name}</li>
        <li>email: {profile.email}</li>
        <li>avatar: {profile.avatar}</li>
      </ul>
    </>
  )
}

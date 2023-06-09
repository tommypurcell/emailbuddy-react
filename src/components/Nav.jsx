import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
axios.defaults.withCredentials = true

export default function Nav() {
  const navigate = useNavigate()

  const [loggedIn, setLoggedIn] = useState(false)

  // check if user is logged in
  const checkLogin = async () => {
    let user = await axios.get('http://localhost:4000/profile')
    console.log(user.data.isLoggedIn)
    setLoggedIn(user.data.isLoggedIn)
  }
  checkLogin()

  const requestLogout = async (e) => {
    e.preventDefault()
    let userToLogout = await axios.get('http://localhost:4000/logout')
    console.log(userToLogout.data)
    navigate('/login')
  }

  return (
    <>
      {/* nav bar */}
      <nav className="logo-bar container">
        <div className="nav-div">
          <Link to="/calorie-counter" className="m-2">
            Calorie Counter
          </Link>
          <Link to="/" className="m-2">
            Meal Plan Generator
          </Link>

          {/* <Link to="/profile">Profile</Link> */}
          {/* check if user is logged in and change button accordingly */}
          {/* {loggedIn ? (
            <a
              onClick={(e) => requestLogout(e)}
              type="submit"
              className="btn btn-outline-secondary"
              style={{ height: 44, marginLeft: 5 }}
            >
              Logout
            </a>
          ) : (
            <a
              href="/login"
              className="btn btn-outline-secondary"
              style={{ height: 44, marginLeft: 5 }}
            >
              Login
            </a>
          )} */}
        </div>
      </nav>
    </>
  )
}

import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
axios.defaults.withCredentials = true

export default function Nav() {
  const navigate = useNavigate()

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
        <div className="row align-items-center">
          <div className="col text-start p-3">
            <Link to="/">
              <img src="./images/logo-airbnb.png" alt="logo" className="w-25" />
            </Link>
          </div>
          <div className="col text-end">
            <Link to="/profile">
              <button
                type="button"
                className="btn btn-outline-secondary"
                style={{ alignItems: 'center' }}
              >
                <img
                  src="images/randomuser1.png"
                  alt="user"
                  className="rounded-circle w-25"
                  style={{ height: 30 }}
                />
                User Name
              </button>
            </Link>
            <a
              onClick={(e) => requestLogout(e)}
              type="submit"
              className="btn btn-outline-secondary"
              style={{ height: 44 }}
            >
              Logout
            </a>
            {/* <button type="button" class="btn btn-outline-secondary">Login</button> */}
          </div>
        </div>
      </nav>
    </>
  )
}

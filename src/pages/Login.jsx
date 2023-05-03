import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
axios.defaults.withCredentials = true

export default function Login() {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState('')

  // access api with login request
  const requestLogin = async (e) => {
    e.preventDefault()

    let loginAccount = await axios.post('http://localhost:4000/login', {
      email: e.target.email.value,
      password: e.target.password.value,
    })
    console.log(loginAccount.data)
    if (
      loginAccount.data !=
      'Cannot login: User does not exist. Please sign up instead.'
    ) {
      navigate('/')
    } else {
      setErrorMsg(loginAccount.data)
    }
  }

  return (
    <>
      <div className="card">
        <img src="images/thailand.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay container" style={{ width: 800 }}>
          <div className="card align-items-center position-absolute top-50 start-50 translate-middle w-50 h-auto p-3">
            <img
              src="images/logo-airbnb.png"
              alt="logo"
              className="w-25 py-5"
            />
            <form onSubmit={(e) => requestLogin(e)}>
              <div className="card-body container">
                <h4 className="text-danger">{errorMsg}</h4>
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  className="border rounded form-control"
                />
                <label>Password</label>
                <input
                  type="password"
                  className="border rounded form-control"
                  name="password"
                />
                <button type="submit" className="btn btn-success mt-3">
                  Login
                </button>
                <div>
                  <span>
                    New to Airbnb? <Link to="/signup">Signup</Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

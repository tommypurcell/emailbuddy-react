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

    let loginAccount = await axios.post(
      // 'https://calorie-counter-api-s2xq.onrender.com/login',
      'http://localhost:4000/login',
      {
        email: e.target.email.value,
        password: e.target.password.value,
      }
    )
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
      <div className="login-card card align-items-center position-absolute top-50 start-50 translate-middle w-50 h-auto p-5">
        <form onSubmit={(e) => requestLogin(e)}>
          <div className="card-body container">
            <h4 className="text-danger">{errorMsg}</h4>
            <label>Email</label>
            <input
              name="email"
              type="email"
              className="border rounded form-control"
              required={true}
            />
            <label>Password</label>
            <input
              type="password"
              className="border rounded form-control"
              required={true}
              name="password"
            />
            <button type="submit" className="login-button btn btn-success mt-3">
              Login
            </button>
          </div>
        </form>
        <div>
          <span>
            New to Airbnb?{' '}
            <Link to="/signup" className="signup-link">
              Signup
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}

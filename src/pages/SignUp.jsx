import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="card">
      <img src="images/thailand.jpg" className="card-img" alt="..." />
      <div className="card-img-overlay container">
        <div className="card align-items-center position-absolute top-50 start-50 translate-middle w-50 h-auto">
          <img
            src="images/logo-airbnb.png"
            alt="logo"
            className="d-block w-25 pt-5 pb-5"
          />
          <div className="card-body container border">
            <form>
              <div className="row text-start">Your Full Name</div>
              <div className="row">
                <input type="text" className="border rounded" />
              </div>
              <div className="row text-start">Profile Picture</div>
              <div className="row">
                <input type="url" className="border rounded" />
              </div>
              <div className="row text-start">Email</div>
              <div className="row">
                <input type="email" className="border rounded" />
              </div>
              <div className="row text-start">Password</div>
              <div className="row">
                <input type="password" className="border rounded" />
              </div>
              <button type="button" className="btn btn-success row mt-3">
                Sign Up
              </button>
              <div className="row">
                <span>
                  Already have an account? <Link to="/Login">Login</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      {/* nav bar */}
      <nav className="logo-bar container">
        <div className="row align-items-center">
          <div className="col text-start p-3">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
                alt="logo"
                className="w-25"
              />
            </Link>
          </div>
          <div className="col text-end">
            <Link to="/Profile">
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
              type="button"
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

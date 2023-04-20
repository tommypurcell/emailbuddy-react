export default function HouseCreate() {
  return (
    <>
      {/* nav bar */}
      <nav className="logo-bar container">
        <div className="row align-items-center">
          <div className="col text-start p-3">
            <img
              src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
              alt="logo"
              className="w-25"
            />
          </div>
          <div className="col text-end">
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
      <div className="container p-5">
        <h2>List a House</h2>
        <span>Short Title</span>
        <input type="text" className="form-control" />
        <span>Description</span>
        <div className="form-floating">
          <textarea
            className="form-control"
            style={{ height: 150 }}
            defaultValue={''}
          />
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <span>Number of Rooms</span>
        <input type="number" className="form-control" />
        <span>Location</span>
        <select className="form-select" aria-label="Default select example">
          <option selected="">Koh Samui</option>
          <option value={1}>Phuket</option>
          <option value={2}>Bangkok</option>
          <option value={3}>Pattaya</option>
        </select>
        <span>Price (per night)</span>
        <div className="input-group flex-nowrap">
          <span className="input-group-text">
            <i className="fa-solid fa-dollar-sign" />
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <span>Add Photos (up to 9)</span>
        <input type="text" className="form-control" placeholder="https://..." />
        <input type="text" className="form-control" placeholder="https://..." />
        <input type="text" className="form-control" placeholder="https://..." />
        <input type="text" className="form-control" placeholder="https://..." />
        <input type="text" className="form-control" placeholder="https://..." />
        <input type="text" className="form-control" placeholder="https://..." />
        <input type="text" className="form-control" placeholder="https://..." />
        <input type="text" className="form-control" placeholder="https://..." />
        <input type="text" className="form-control" placeholder="https://..." />
        <button type="button" className="btn btn-success mt-3">
          Submit
        </button>
      </div>
    </>
  )
}

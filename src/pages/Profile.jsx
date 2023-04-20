export default function Profile() {
  return (
    <>
      {/* nav bar */}
      <nav className="logo-bar container mb-3">
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
          </div>
        </div>
      </nav>
      {/* main container */}
      <div className="container">
        {/* single row for page */}
        <div className="row g-5">
          {/* column for profile setup */}
          <div className="col-4 me-5 pe-5">
            <h2 className="border-bottom pb-3">Profile</h2>
            <form>
              <div className="text-start">Name</div>
              <div className="">
                <input type="text" className="form-control" />
              </div>
              <div className="text-start">Email</div>
              <div className="">
                <input type="email" className="form-control" />
              </div>
              <div className="text-start py-2">Profile Picture</div>
              <div className="">
                <img
                  src="images/randomuser1.png"
                  alt=""
                  className="rounded-circle w-25"
                />
              </div>
              <div className="">
                <input
                  type="url"
                  placeholder="https://..."
                  className="my-3 form-control"
                />
              </div>
              <div className="">
                <button className="btn btn-success">Save Changes</button>
              </div>
            </form>
          </div>
          {/* column for listings */}
          <div className="col">
            <h2 className="border-bottom pb-3">My Listings</h2>
            <button className="btn btn-success my-3">List a House</button>
            <div className="card mb-3 p-0">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Luxury Villa in Chaweng</h5>
                    <span className="text-muted">4 rooms - $350/night</span>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <button className="btn btn-outline-secondary">Edit</button>
                    <button className="btn btn-outline-success">View</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 p-0">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Luxury Villa in Chaweng</h5>
                    <span className="text-muted">4 rooms - $350/night</span>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <button className="btn btn-outline-secondary">Edit</button>
                    <button className="btn btn-outline-success">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col">
    <div class="row"><h2>My Listings</h2></div>
    
    <div class="row"><input type="url" placeholder="You dont have houses listed"></div>
  </div> */}
        </div>
      </div>
    </>
  )
}

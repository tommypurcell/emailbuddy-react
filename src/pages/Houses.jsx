let houses = [
  {
    image:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2002/house_02_01.png',
    title: 'Luxury Villa in Chaweng',
    price: 350,
    location: 'Koh Samui',
    rooms: 3,
    reviews: 2,
    score: 8,
  },
  {
    image:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2003/house_03_01.png',
    title: 'Private Villa Lotus 1',
    price: 150,
    location: 'Koh Phangan',
    rooms: 2,
    reviews: 1,
    score: 8,
  },
  {
    image:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2004/house_04_01.png',
    title: 'Mountain Villa',
    price: 200,
    location: 'Koh Phangan',
    rooms: 4,
    reviews: 6,
    score: 7,
  },
  {
    image:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2005/house_05_01.png',
    title: 'Pool Villa',
    price: 100,
    location: 'Koh Phangan',
    rooms: 3,
    reviews: 0,
    score: 0,
  },
  {
    image:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2005/house_05_01.png',
    title: 'Pool Villa',
    price: 100,
    location: 'Koh Phangan',
    rooms: 3,
    reviews: 0,
    score: 0,
  },
]

export default function Houses() {
  return (
    <>
      {/* nav bar */}
      <nav className="logo-bar container ">
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
              style={{ alignItems: 'center', height: 44 }}
            >
              <img
                src="/images/randomuser1.png"
                alt="user"
                className="rounded-circle w-25 "
                style={{ height: 30 }}
              />{' '}
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
      {/* search bar */}
      {/* background light div */}
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-location-dot" />
                </span>
                <select className="form-select">
                  <option defaultValue="">Open this select menu</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-house" />
                </span>
                <select className="form-select">
                  <option defaultValue="">Open this select menu</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-dollar-sign" />
                </span>
                <select className="form-select">
                  <option defaultValue="">Open this select menu</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fa-solid fa-sort" />
                </span>
                <select className="form-select">
                  <option defaultValue="">Open this select menu</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="House name..."
                />
              </div>
            </div>
            <div className="col">
              <button type="button" className="btn btn-success">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="container my-4">
        <div className="row g-4">
          {/* first row of cards */}
          {houses.map((house, index) => (
            // {/* col-3 makes it so that it wraps after the 4th card */}
            // {/* #TODO add gap */}
            <div className="col-3" key={index}>
              {/* 1st card */}
              <div className="card">
                <img src={house.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text"></p>
                  <div className="container p-0">
                    <div className="col">
                      <p>
                        <i className="fa-solid fa-location-dot" />
                        <span>
                          {house.location} {house.rooms} Rooms
                        </span>
                      </p>
                      <h5>{house.title}</h5>
                      <p>
                        <i className="fa-solid fa-thumbs-up" />
                        <span>{house.reviews} Reviews</span>
                        <span>${house.price}/night</span>
                      </p>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

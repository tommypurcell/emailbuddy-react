import Nav from '../components/Nav'

export default function Houses() {
  // state
  // data
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

  // function

  function sendForm(e) {
    e.preventDefault()
    let obj = {}
    obj.location = e.target.location.value
    obj.rooms = e.target.rooms.value
    obj.price = e.target.price.value
    obj.sort = e.target.sort.value
    obj.name = e.target.name.value

    console.log(obj)
    // send form object to server
  }

  // return
  return (
    <>
      {/* nav bar */}
      <Nav />
      {/* search bar */}
      {/* background light div */}
      <div className="bg-light py-3">
        <form className="form-control" onSubmit={(e) => sendForm(e)}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-location-dot" />
                  </span>
                  <select className="form-select" name="location">
                    <option>Open this select menu</option>
                    <option>Koh Samui</option>
                    <option>Koh Phangan</option>
                    <option>Bangkok</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-house" />
                  </span>
                  <select className="form-select" name="rooms">
                    <option>Open this select menu</option>
                    <option>One Bedroom</option>
                    <option>Two Bedroom</option>
                    <option>Three Bedroom</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-dollar-sign" />
                  </span>
                  <select className="form-select" name="price">
                    <option>Open this select menu</option>
                    <option>$</option>
                    <option>$$</option>
                    <option>$$$</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-sort" />
                  </span>
                  <select className="form-select" name="sort">
                    <option>Open this select menu</option>
                    <option>Price (Low to High)</option>
                    <option>Location</option>
                    <option>Number of Rooms (Low to High)</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="input-group">
                  {/* when i add a form around the input and button it messes up the style */}
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="House name..."
                  />
                </div>
              </div>
              <div className="col">
                <button className="btn btn-success">Search</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* cards */}
      <div className="container my-4">
        <div className="row g-4">
          {/* first row of cards */}
          {houses.map((house, index) => (
            // {/* #TODO add gap */}
            <div className="col-3" key={index}>
              {/* col-3 makes it so that it wraps after the 4th card */}
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

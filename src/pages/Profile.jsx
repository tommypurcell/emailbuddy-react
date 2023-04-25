import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

export default function Profile() {
  // object user
  let user = {
    name: 'tommy',
    email: 'tommy@tommy.com',
    avatar: 'images/randomuser1.png',
  }
  // data

  // houses array
  let houses = [
    {
      image:
        'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2002/house_02_01.png',
      title: 'Luxury Villa in Chaweng',
      price: 350,
      description:
        'This is a stylish house that has everything you need on your vacation.',
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
      description:
        'This is a stylish house that has everything you need on your vacation.',
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
      description:
        'This is a stylish house that has everything you need on your vacation.',
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
      description:
        'This is a stylish house that has everything you need on your vacation.',
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
      description:
        'This is a stylish house that has everything you need on your vacation.',
      location: 'Koh Phangan',
      rooms: 3,
      reviews: 0,
      score: 0,
    },
  ]

  // function that runs when form is submitted updates object data
  function submitProfile(e) {
    e.preventDefault()
    user.name = e.target.name.value
    user.email = e.target.email.value
    user.avatar = e.target.avatar.value
    console.log(user)
  }

  return (
    <>
      {/* nav bar */}
      <Nav />
      {/* main container */}
      <div className="container">
        {/* single row for page */}
        <div className="row g-5">
          {/* column for profile setup */}
          <div className="col-4 me-5 pe-5">
            <h2 className="border-bottom pb-3">Profile</h2>
            <form onSubmit={(e) => submitProfile(e)}>
              <div className="text-start">Name</div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder={user.name}
                />
              </div>
              <div className="text-start">Email</div>
              <div className="">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder={user.email}
                />
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
                  name="avatar"
                  placeholder={user.avatar}
                  className="my-3 form-control"
                />
              </div>
              <div className="">
                <button type="submit" className="btn btn-success">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
          {/* column for listings */}
          <div className="col">
            <h2 className="border-bottom pb-3">My Listings</h2>
            <Link to="/house-create">
              <button className="btn btn-success my-3">List a House</button>
            </Link>
            <div className="row g-0">
              <div className="col md-8">
                {houses.map((house, index) => (
                  <div key={index} className="card mb-3 p-0">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <img
                            src={house.image}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col">
                          <div className="card-body">
                            <h5 className="card-title">{house.title}</h5>
                            <span className="text-muted">
                              {house.rooms} rooms - ${house.price}/night
                            </span>
                            <p className="card-text">{house.description}</p>
                            <Link to="/house-edit">
                              <button className="btn btn-outline-secondary">
                                Edit
                              </button>
                            </Link>
                            <Link to="/house">
                              <button className="btn btn-outline-success">
                                View
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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

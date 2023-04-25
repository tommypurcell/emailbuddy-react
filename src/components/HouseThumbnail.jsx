import { Link } from 'react-router-dom'

export default function HouseThumbnail({ house, index }) {
  {
    // return
    return (
      // {/* #TODO add gap */}
      <div key={index}>
        {/* col-3 makes it so that it wraps after the 4th card */}
        {/* 1st card */}
        <Link to="/house" className="text-decoration-none text-black">
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
        </Link>
      </div>
    )
  }
}

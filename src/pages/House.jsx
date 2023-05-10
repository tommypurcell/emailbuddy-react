// Packages
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

// Import Components
import Nav from '../components/Nav'
import Reviews from '../components/Reviews'
import ReviewCreate from '../components/ReviewCreate'

// Component
export default function House() {
  // States
  const { id } = useParams()
  const [selectedPhoto, setSelectedPhoto] = useState(
    'url("https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png")'
  )

  const [reviewMade, setReviewMade] = useState(false)
  const [bookingRequest, setbookingRequest] = useState(false)
  const [house, setHouse] = useState({
    host: {},
  })

  // need to add host and name because it will render jsx first before house gets set

  // Methods
  const getHouse = async () => {
    try {
      let result = await axios.get(`http://localhost:4000/houses/${id}`)
      console.log('result.data', result.data)
      setHouse(result.data)
      console.log(house.host.name)
    } catch (err) {
      console.log(err)
    }
  }

  const makeReview = async (e) => {
    e.preventDefault()
    console.log(e.target.description.value)
    let newReview = await axios.post('http://localhost:4000/reviews', {
      description: e.target.description.value,
      house: id,
    })
    setReviewMade(true)
  }

  // send Bookings
  const sendBooking = async (e) => {
    e.preventDefault()

    let newBooking = await axios.post('http://localhost:4000/bookings', {
      description: e.target.description.value,
      house: id,
    })

    // show thank you message when form is submitted
    setbookingRequest(true)
  }

  // get booking to decide if we should show the message or not
  const getBooking = async () => {
    let newBooking = await axios.get('http://localhost:4000/bookings', {
      params: {
        house: id,
      },
    })

    // check if house has already been booked by this user and add thank you message if it has
    if (newBooking.data.length != 0) {
      setbookingRequest(true)
    }
    console.log('new booking', newBooking.data)
  }

  // Hooks
  useEffect(() => {
    getHouse()
    getBooking()
  }, [])

  // JSX
  return (
    <>
      <Nav />
      <div className="border">
        <div className="row">
          <div
            style={{
              backgroundImage: selectedPhoto,
              backgroundSize: 'cover',
            }}
            className="col"
          >
            {/* <img src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png" class="img-thumbnail" alt="image"> */}
          </div>
          <div className="col">
            <div className="container">
              <div className="row">
                {/* need to fix these later to not be img-thumbnail because border */}
                <div className="col p-3 ">
                  <img
                    onClick={(e) => {
                      setSelectedPhoto('url(' + e.target.src + ')')
                    }}
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png"
                    className="img-thumbnail p-0"
                    alt="image"
                  />
                </div>
                <div className="col p-3 ">
                  <img
                    onClick={(e) => {
                      setSelectedPhoto('url(' + e.target.src + ')')
                    }}
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_02.png"
                    className="img-thumbnail p-0"
                    alt="image"
                  />
                </div>
                <div className="col p-3 ">
                  <img
                    onClick={(e) => {
                      setSelectedPhoto('url(' + e.target.src + ')')
                    }}
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_03.png"
                    className="img-thumbnail p-0"
                    alt="image"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col p-3 ">
                  <img
                    onClick={(e) => {
                      setSelectedPhoto('url(' + e.target.src + ')')
                    }}
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_04.png"
                    className="img-thumbnail p-0"
                    alt="image"
                  />
                </div>
                <div className="col p-3 ">
                  <img
                    onClick={(e) => {
                      setSelectedPhoto('url(' + e.target.src + ')')
                    }}
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png"
                    className="img-thumbnail p-0"
                    alt="image"
                  />
                </div>
                <div className="col p-3 ">
                  <img
                    onClick={(e) => {
                      setSelectedPhoto('url(' + e.target.src + ')')
                    }}
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_07.png"
                    className="img-thumbnail p-0"
                    alt="image"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col p-3 ">
                  <img
                    onClick={(e) => {
                      setSelectedPhoto('url(' + e.target.src + ')')
                    }}
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2003/house_03_01.png"
                    className="img-thumbnail p-0"
                    alt="image"
                  />
                </div>
                <div className="col p-3 ">
                  <img
                    onClick={(e) => {
                      setSelectedPhoto('url(' + e.target.src + ')')
                    }}
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_08.png"
                    className="img-thumbnail p-0"
                    alt="image"
                  />
                </div>
                <div className="col p-3 ">
                  <img
                    onClick={(e) => {
                      setSelectedPhoto('url(' + e.target.src + ')')
                    }}
                    src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_09.png"
                    className="img-thumbnail p-0"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h2>{house.title}</h2>
            <span>
              {' '}
              {house.location} - {house.rooms} rooms
            </span>
            <div className="container">
              <div className="row">
                <div className="col-2">
                  <img
                    src={house.host.avatar}
                    alt="randomuser"
                    className="rounded-circle w-50"
                  />
                </div>
                <div className="col">
                  <div>
                    <div className="text-muted">Hosted By</div>
                    <div>{house.host.name}</div>
                  </div>
                </div>
              </div>
            </div>
            <p>{house.description}</p>
            <h3>0 Reviews</h3>
            <div className="mb-3"></div>
            {!reviewMade ? (
              <ReviewCreate makeReview={makeReview} />
            ) : (
              <div>
                <div className="alert alert-success" role="alert">
                  <h4>Thank you for your Review!</h4>
                </div>
              </div>
            )}
            {/* review */}
            <Reviews id={id} />
          </div>
          <div className="col-4">
            <div className="border shadow rounded">
              <h2>$350/night</h2>
              {/*  */}
              <div>
                <i className="fa fa-thumbs-up p-2" />
                <span>2 Reviews</span>
                {bookingRequest == true ? (
                  <div className="alert alert-success" role="alert">
                    <p>Thank you for your inquiry.</p>
                    add date
                  </div>
                ) : (
                  <form onSubmit={(e) => sendBooking(e)}>
                    <textarea
                      name="description"
                      className="form-control"
                      placeholder="Send the host a message..."
                      id="floatingTextarea2"
                      style={{ height: 100 }}
                      defaultValue={''}
                    />
                    <label htmlFor="floatingTextarea2" />
                    <button type="submit" className="btn btn-success mt-2">
                      Request Booking
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

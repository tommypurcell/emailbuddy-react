import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Review from '../components/Review'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function House() {
  const { id } = useParams()

  // need to add host and name because it will render jsx first before house gets set
  //
  const [house, setHouse] = useState({
    host: {},
  })

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

  console.log(house)
  // data

  // let house = {
  //   _id: '645330cbf4201b0820e1a2bf',
  //   title: 'Luxury Villa in Chaweng',
  //   description:
  //     'Description: ho hoh ho Pargraph goes here dah adha aksjdlf asdklfja sdf skldfjsksdjfsldf jsdelivrsldfjslksdjfl sldkjfls skjlsdjf sdkfjsldflksdjflksjdlkfjsdlkfjlksdjflkdjs dslkjf lksdjf ksjfljlksdlfks sdfksjldkfjlskjflkdsj sjdkfjs lkdfjlskdjfkl sd slkjdflksj flkjsfksjldfjsljflksjlksdjf fkjs',
  //   price: 350,
  //   booking: false,
  //   location: 'Koh Samui',
  //   rooms: 4,
  //   rating: 1,
  //   photos: [
  //     'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png',
  //     'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png',
  //   ],
  //   host: { name: 'Tommy', avatar: '/images/randomuser1.png' },
  // }

  let reviewObj = {
    name: 'Tom',
    avatar: '/images/randomuser1.png',
    date: '4/24/2023',
  }

  // state
  const [selectedPhoto, setSelectedPhoto] = useState(
    'url("https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png")'
  )
  const [reviews, setReviews] = useState([])
  const [reviewMade, setReviewMade] = useState(false)
  const [bookingRequest, setbookingRequest] = useState(false)

  // functions

  // update reviewObj rating based on which thumbs up button is clicked
  function setRating(num) {
    reviewObj.rating = num
  }

  // update reviewObj description as it is typed in the text area
  function setDescription(str) {
    reviewObj.description = str
  }

  // on submitting the review form add review to list of reviews array
  function addReview(e) {
    e.preventDefault()

    let newReview = [...reviews]
    newReview.push(reviewObj)
    setReviews(newReview)
    setReviewMade(true)
    console.log(newReview)
    console.log(reviews)
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
  const getBooking = async (e) => {
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

  useEffect(() => {
    getHouse()
    getBooking()
  }, [])

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
              <form onSubmit={(e) => addReview(e)}>
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  name="description"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={''}
                  onKeyUp={(e) => setDescription(e.target.value)}
                />
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => setRating(1)}
                  >
                    <i className="fa fa-thumbs-up" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning border"
                    onClick={() => setRating(-1)}
                  >
                    <i className="fa fa-thumbs-down" />
                  </button>
                </div>
                <button type="submit" className="btn btn-success mt-2">
                  Leave a Review
                </button>
              </form>
            ) : (
              <div class="alert alert-success" role="alert">
                <h4>Thank you for your Review!</h4>
              </div>
            )}
            {/* review */}
            {reviews.map((review, index) => (
              <Review review={review} key={index} />
            ))}
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

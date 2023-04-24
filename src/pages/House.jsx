import { useState } from 'react'
import Nav from '../components/Nav'
import Review from '../components/Review'

let house = {
  title: 'Luxury Villa in Chaweng',
  description:
    'Description: ho hoh ho Pargraph goes here dah adha aksjdlf asdklfja sdf skldfjsksdjfsldf jsdelivrsldfjslksdjfl sldkjfls skjlsdjf sdkfjsldflksdjflksjdlkfjsdlkfjlksdjflkdjs dslkjf lksdjf ksjfljlksdlfks sdfksjldkfjlskjflkdsj sjdkfjs lkdfjlskdjfkl sd slkjdflksj flkjsfksjldfjsljflksjlksdjf fkjs',
  price: 350,
  booking: false,
  location: 'Koh Samui',
  rooms: 4,
  rating: 1,
  photos: [
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png',
    'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_06.png',
  ],
  host: { name: 'Tommy', avatar: 'images/randomuser1.png' },
}

export default function House() {
  // state
  const [selectedPhoto, setSelectedPhoto] = useState(
    'url("https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295019/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_05.png")'
  )

  return (
    <>
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
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={''}
                />
              </div>
              <div>
                <button type="button" className="btn btn-outline-success">
                  <i className="fa fa-thumbs-up" />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning border"
                >
                  <i className="fa fa-thumbs-down" />
                </button>
              </div>
              <button type="button" className="btn btn-success mt-2">
                Submit
              </button>
              {/* review */}
              <Review />
            </div>
            <div className="col-4">
              <div className="border shadow rounded">
                <h2>$350/night</h2>
                {/*  */}
                <div>
                  <i className="fa fa-thumbs-up p-2" />
                  <span>2 Reviews</span>
                  <div className="alert alert-success" role="alert">
                    <p>Thank you for your inquiry.</p>
                    add date
                  </div>
                  {/* <textarea class="form-control" placeholder="Send the host a message..." id="floatingTextarea2" style="height: 100px"></textarea>
                  <label for="floatingTextarea2"></label>
                  <button type="button" class="btn btn-success mt-2">Request Booking</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
axios.defaults.withCredentials = true

export default function HouseCreate() {
  // data
  let houseListings = []

  // function to save form into object
  const saveListing = async (e) => {
    e.preventDefault()

    let obj = {}
    let photoArr = []

    // check if photo url is added
    // if photo exists add to photoArr
    if (e.target.photo1.value) {
      photoArr.push(e.target.photo1.value)
    }
    if (e.target.photo2.value) {
      photoArr.push(e.target.photo2.value)
    }
    if (e.target.photo3.value) {
      photoArr.push(e.target.photo3.value)
    }
    if (e.target.photo4.value) {
      photoArr.push(e.target.photo4.value)
    }
    if (e.target.photo5.value) {
      photoArr.push(e.target.photo5.value)
    }
    if (e.target.photo6.value) {
      photoArr.push(e.target.photo6.value)
    }
    if (e.target.photo7.value) {
      photoArr.push(e.target.photo7.value)
    }
    if (e.target.photo8.value) {
      photoArr.push(e.target.photo8.value)
    }
    if (e.target.photo9.value) {
      photoArr.push(e.target.photo9.value)
    }

    let newListing = await axios.post('http://localhost:4000/houses', {
      // this host id will be changed later in the api but is just a placehodler now
      // #TODO  not the best way here because if the user with this id doesnt exist in the db it wont work

      description: e.target.description.value,
      title: e.target.title.value,
      rooms: e.target.numberOfRooms.value,
      location: e.target.location.value,
      price: e.target.price.value,
      photos: photoArr,
    })
    console.log(newListing.data)

    // // save data in obj
    // obj.title = e.target.title.value
    // obj.description = e.target.description.value
    // obj.numberOfRooms = e.target.numberOfRooms.value
    // obj.location = e.target.location.value
    // obj.price = e.target.price.value
    // obj.photos = photoArr

    // // lastly add obj to houseListings array of house listing objects
    // houseListings.push(obj)
  }

  // return
  return (
    <>
      <Nav /> {/* nav bar */}
      <form onSubmit={(e) => saveListing(e)}>
        <div className="container p-5">
          <h2>List a House</h2>
          <span>Short Title</span>
          <input type="text" className="form-control" name="title" />
          <span>Description</span>
          <div className="form-floating">
            <textarea
              className="form-control"
              style={{ height: 150 }}
              defaultValue={''}
              name="description"
            />
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
          <span>Number of Rooms</span>
          <input type="number" className="form-control" name="numberOfRooms" />
          <span>Location</span>
          <select
            className="form-select"
            aria-label="Default select example"
            name="location"
          >
            <option value="Bangkok">Bangkok</option>
            <option value="Koh Samui">Koh Samui</option>
            <option value="Phuket">Phuket</option>
            <option value="Pattaya">Pattaya</option>
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
              name="price"
            />
          </div>
          <span>Add Photos (up to 9)</span>
          <input
            type="text"
            className="form-control"
            placeholder="https://..."
            name="photo1"
          />
          <input
            type="text"
            className="form-control"
            placeholder="https://..."
            name="photo2"
          />
          <input
            type="text"
            className="form-control"
            placeholder="https://..."
            name="photo3"
          />
          <input
            type="text"
            className="form-control"
            placeholder="https://..."
            name="photo4"
          />
          <input
            type="text"
            className="form-control"
            placeholder="https://..."
            name="photo5"
          />
          <input
            type="text"
            className="form-control"
            placeholder="https://..."
            name="photo6"
          />
          <input
            type="text"
            className="form-control"
            placeholder="https://..."
            name="photo7"
          />
          <input
            type="text"
            className="form-control"
            placeholder="https://..."
            name="photo8"
          />
          <input
            type="text"
            className="form-control"
            placeholder="https://..."
            name="photo9"
          />
          <button type="submit" className="btn btn-success mt-3">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

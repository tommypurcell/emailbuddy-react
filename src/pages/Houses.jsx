import { useState } from 'react'
import HouseThumbnail from '../components/HouseThumbnail'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

export default function Houses() {
  // state
  const [results, setResults] = useState([])
  const [searchObj, setSearchObj] = useState({})
  const [houses, setHouses] = useState([])
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [sort, setSort] = useState('')
  const [rooms, setRooms] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    getHouses()
  }, [])

  const getHouses = async () => {
    try {
      let result = await axios.get(`http://localhost:4000/houses`)
      console.log(result.data)
      setHouses(result.data)
    } catch (err) {
      console.log(err)
    }
  }
  /**
   * @description Update search algorithm for location-based searches
   *
   * The current implementation of the search algorithm in the project performs a basic text-based search for house queries. The search criteria requires an exact match. However, this can result in inaccurate or incomplete results, especially when dealing with ambiguous or misspelled location names. To improve the search functionality, we can integrate a geocoding service (such as Google Maps Geocoding API) to convert user input into latitude and longitude coordinates. Then, we can calculate the distance between the property locations and the user's specified location using the Haversine formula. By incorporating this enhancement, we can provide more precise and relevant search results, enhancing the overall user experience.
   *
   * @issue  #1
   * @author Tommy Purcell
   */
  const searchHouses = async (e) => {
    e.preventDefault()
    try {
      let result = await axios.get(`http://localhost:4000/houses`, {
        params: {
          price: price,
          location: location,
          sort: sort,
          rooms: rooms,
          search: search,
        },
      })
      console.log('result.data:  ', result.data)
      setHouses(result.data)
    } catch (err) {
      console.log(err)
    }
  }

  // data
  // let houses = [
  //   {
  //     _id: '64537a475c51a524cbb2a079',
  //     image:
  //       'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2002/house_02_01.png',
  //     title: 'Luxury Villa in Chaweng',
  //     price: 350,
  //     location: 'Koh Samui',
  //     rooms: 3,
  //     reviews: 2,
  //     score: 8,
  //   },
  //   {
  //     _id: 'alksjdlkfjlskjflksjdklfjslkdf',
  //     image:
  //       'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2003/house_03_01.png',
  //     title: 'Private Villa Lotus 1',
  //     price: 150,
  //     location: 'Koh Phangan',
  //     rooms: 2,
  //     reviews: 1,
  //     score: 8,
  //   },
  //   {
  //     _id: 'alksjdlkfjlskjflksjdklfjslkdf',
  //     image:
  //       'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2004/house_04_01.png',
  //     title: 'Mountain Villa',
  //     price: 200,
  //     location: 'Koh Phangan',
  //     rooms: 4,
  //     reviews: 6,
  //     score: 7,
  //   },
  //   {
  //     _id: 'alksjdlkfjlskjflksjdklfjslkdf',
  //     image:
  //       'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2005/house_05_01.png',
  //     title: 'Pool Villa',
  //     price: 100,
  //     location: 'Koh Phangan',
  //     rooms: 3,
  //     reviews: 0,
  //     score: 0,
  //   },
  //   {
  //     _id: 'alksjdlkfjlskjflksjdklfjslkdf11111  ',
  //     image:
  //       'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295027/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2005/house_05_01.png',
  //     title: 'Pool Villa',
  //     price: 100,
  //     location: 'Koh Phangan',
  //     rooms: 3,
  //     reviews: 0,
  //     score: 0,
  //   },
  // ]
  // function

  // this function searches the api
  function sendForm(e) {
    e.preventDefault()
    searchHouses()
  }

  // return
  return (
    <>
      {/* nav bar */}
      <Nav />
      {/* search bar */}
      {/* background light div */}
      <div className="bg-light py-3">
        <form onSubmit={(e) => searchHouses(e)}>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6">
              <div className="col">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-location-dot" />
                  </span>
                  <select
                    className="form-select"
                    name="location"
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="">Open this select menu</option>
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
                  <select
                    className="form-select"
                    name="rooms"
                    onChange={(e) => setRooms(e.target.value)}
                  >
                    <option value="">Open this select menu</option>
                    <option value={1}>One Bedroom</option>
                    <option value={2}>Two Bedroom</option>
                    <option value={3}>Three Bedroom</option>
                    <option value={4}>Four Bedroom</option>
                    <option value={5}>Five Bedroom</option>
                    <option value={6}>Six Bedroom</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-dollar-sign" />
                  </span>
                  <input
                    name="price"
                    type="number"
                    className="form-control"
                    placeholder="Price..."
                    onKeyUp={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-sort" />
                  </span>
                  <select
                    className="form-select"
                    name="sort"
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="">Open this select menu</option>
                    <option value={1}>Price (Low to High)</option>
                    <option value={-1}>Price (High to Low)</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="input-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="House name..."
                    onKeyUp={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <button className="btn btn-success w-100" name="searchBar">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* cards */}
      <div className="container-flex container-xl my-4">
        <div className="row g-4 row-cols-md-3 row-cols-lg-4">
          {
            // return
            houses.map((house, index) => (
              // {/* #TODO add gap */}
              <HouseThumbnail house={house} key={index} />
            ))
          }
        </div>
      </div>
    </>
  )
}

import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  // Function to fetch food data
  const fetchFoodData = async () => {
    try {
      const response = await axios.get(
        'https://api.edamam.com/api/food-database/v2/parser',
        {
          params: {
            ingr: 'one cup of brown rice',
            app_id: '7b70e049',
            app_key: '8803e138817c6dd9b43f6f0dcc52b9f1',
          },
        }
      )

      // Access the total calories from the response data
      const totalCalories = response.data.parsed[0].food.nutrients.ENERC_KCAL

      console.log('Total Calories:', totalCalories)
    } catch (error) {
      console.error('Error fetching food data:', error)
    }
  }

  // Call the fetchFoodData function
  useEffect(() => {
    fetchFoodData()
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some food</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some food</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

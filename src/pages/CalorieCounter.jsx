import React from 'react'
import axios from 'axios'
import { Params } from 'react-router-dom'
import { useState } from 'react'
import Nav from '../components/Nav'
// trying this one using edamam instead of spoonacular
// https://developer.edamam.com/edamam-docs-nutrition-api

export default function CalorieCounter() {
  const applicationKey = '8803e138817c6dd9b43f6f0dcc52b9f1'
  const applicationID = '7b70e049'
  const [foodItem, setFoodItem] = useState('')
  const [foodLog, setFoodLog] = useState([])
  const [totalCalories, setTotalCalories] = useState(0)

  const getFoodData = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      'https://api.edamam.com/api/nutrition-data',
      {
        params: {
          app_id: applicationID,
          app_key: applicationKey,
          ingr: foodItem,
        },
      }
    )

    const newFoodItem = {
      name: foodItem,
      calories: response.data.calories,
    }
    setFoodLog([...foodLog, newFoodItem])
    setTotalCalories(totalCalories + response.data.calories)
  }

  const handleInputChange = (e) => {
    setFoodItem(e.target.value)
  }

  const removeFoodItem = (indexToRemove) => {
    // Filter out the item at the specified index
    const newFoodLog = foodLog.filter((item, index) => index !== indexToRemove)
    setFoodLog(newFoodLog)

    // Subtract the calories of the removed item from the total
    setTotalCalories(totalCalories - foodLog[indexToRemove].calories)
  }

  const addCalories = (indexToAdd) => {
    // add calories to total
    setTotalCalories(totalCalories + 10)
    foodLog[indexToAdd].calories = foodLog[indexToAdd].calories + 10
  }

  const subtractCalories = (indexToSubtract) => {
    // subtract calories from total
    setTotalCalories(totalCalories - 10)
    foodLog[indexToSubtract].calories = foodLog[indexToSubtract].calories - 10
  }

  return (
    <>
      <Nav />

      <main className="calorie-counter-container">
        <form onSubmit={getFoodData}>
          <span>Enter Food item</span>
          <div>
            <input type="text" value={foodItem} onChange={handleInputChange} />
            <button type="submit" className="submit-food">
              Submit
            </button>
          </div>
        </form>
        <div>
          <h2>Food Log</h2>
          {foodLog.map((item, index) => (
            <div key={index}>
              <article>
                <p>Name: {item.name}</p>
                <p>Calories: {item.calories} </p>
                <div className="plus-minus">
                  <a
                    class="action-button"
                    onClick={() => subtractCalories(index)}
                  >
                    - 10
                  </a>
                  <a
                    class="action-button shadow animate red"
                    onClick={() => addCalories(index)}
                  >
                    + 10
                  </a>
                </div>
                <button
                  className="removeFood"
                  onClick={() => removeFoodItem(index)}
                >
                  Remove
                </button>
              </article>
            </div>
          ))}

          <h2>Total Calories: {totalCalories}</h2>
        </div>
      </main>
    </>
  )
}

import React from 'react'
import axios from 'axios'
import { Params } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
// trying this one using edamam instead of spoonacular
// https://developer.edamam.com/edamam-docs-nutrition-api

export default function CalorieCounter() {
  const applicationKey = '8803e138817c6dd9b43f6f0dcc52b9f1'
  const applicationID = '7b70e049'
  const [foodItem, setFoodItem] = useState('')
  const [foodLog, setFoodLog] = useState([])
  const [totalCalories, setTotalCalories] = useState(0)

  // set up date object
  const date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

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

  // post food item to database
  const postFoodItems = async () => {
    for (let item of foodLog) {
      const response = await axios.post('http://localhost:4000/foods', {
        name: item.name,
        calories: item.calories,
      })
      console.log(response.data)
    }
    setFoodLog([])
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

  const addCalories = (indexToAdd, amount) => {
    // add calories to total
    setTotalCalories(totalCalories + amount)
    foodLog[indexToAdd].calories = foodLog[indexToAdd].calories + amount
  }

  const subtractCalories = (indexToSubtract, amount) => {
    // subtract calories from total
    setTotalCalories(totalCalories - amount)
    foodLog[indexToSubtract].calories =
      foodLog[indexToSubtract].calories - amount
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
        <h2>Foods eaten today {`${month}/${day}/${year}`}</h2>
        <div>
          {foodLog.map((item, index) => (
            <div key={index}>
              <article>
                <p>Name: {item.name}</p>
                <p>Calories: {item.calories} </p>
                <div className="plus-minus">
                  <a
                    className="action-button"
                    onClick={() => subtractCalories(index, 10)}
                  >
                    - 10
                  </a>
                  <a
                    className="action-button shadow animate red"
                    onClick={() => addCalories(index, 10)}
                  >
                    + 10
                  </a>
                </div>
                <div className="plus-minus">
                  <a
                    class="action-button"
                    onClick={() => subtractCalories(index, 100)}
                  >
                    - 100
                  </a>
                  <a
                    class="action-button shadow animate red"
                    onClick={() => addCalories(index, 100)}
                  >
                    + 100
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
          <button onClick={postFoodItems}>add to foodlog</button>
          <h2>Total Calories: {totalCalories}</h2>
        </div>
      </main>
    </>
  )
}

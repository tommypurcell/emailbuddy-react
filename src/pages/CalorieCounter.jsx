import React from 'react'
import axios from 'axios'
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
  const [selectedDate, setSelectedDate] = useState(``)
  const [dates, setDates] = useState([])

  // set up date object
  const date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  // set date format
  if (day < 10) {
    day = `0${day}`
  }
  if (month < 10) {
    month = `0${month}`
  }
  const today = `${year}-${month}-${day}`

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
    setFoodLog([newFoodItem, ...foodLog])
    setTotalCalories(totalCalories + response.data.calories)
  }

  // format selected date
  const formatDate = (date) => {
    let newDate = date.split('-')
    let year = newDate[0]
    let month = newDate[1]
    let day = newDate[2]
    return `${month}/${day}/${year}`
  }

  // get dates from database and set state
  const getDates = async () => {
    let datesArr = []
    const response = await axios.get('http://localhost:4000/foods')
    for (let item of response.data) {
      datesArr.push(item.date)
    }
    setDates(datesArr)
  }

  // post food item to database
  const postFoodItems = async () => {
    for (let item of foodLog) {
      const response = await axios.post('http://localhost:4000/foods', {
        name: item.name,
        calories: item.calories,
        date: selectedDate,
        timestamp: Date.now(),
      })
      console.log(response.data)
    }
    setFoodLog([])
    setTotalCalories(0)
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

  useEffect(() => {
    setSelectedDate(today)
    getDates()
  }, [])

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
        <h2>
          Log foods eaten on{' '}
          <select
            className='"form-select form-select-lg mb-3"'
            value={selectedDate}
            defaultValue={today}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            {dates.length === 0 ? (
              <option value={today}>{formatDate(today)}</option>
            ) : (
              dates.map((item, index) => (
                <option key={index} value={item}>
                  {formatDate(item)}
                </option>
              ))
            )}
          </select>
        </h2>
        <div className="foods-container">
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
          <h2>Total Calories: {totalCalories}</h2>
          <button className="send-to-foodlog" onClick={postFoodItems}>
            add to foodlog
          </button>
        </div>
      </main>
    </>
  )
}

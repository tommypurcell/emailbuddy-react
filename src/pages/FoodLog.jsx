import React from 'react'
import axios from 'axios'
import { Params } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from '../components/Nav'

export default function CalorieCounter() {
  const applicationKey = '8803e138817c6dd9b43f6f0dcc52b9f1'
  const applicationID = '7b70e049'
  const [foodItem, setFoodItem] = useState('')
  const [foodLog, setFoodLog] = useState([])
  const [totalCalories, setTotalCalories] = useState(0)
  const [date, setDate] = useState('')

  // format date
  const formatDate = (date) => {
    let newDate = date.split('T')[0].split('-')
    let year = newDate[0]
    let month = newDate[1]
    let day = newDate[2]
    setDate(`${month}/${day}/${year}`)
  }

  // get food data from database and set state
  const getFoods = async () => {
    const response = await axios.get('http://localhost:4000/foods')
    setFoodLog(response.data)
    formatDate(response.data[0].date)
    console.log(response.data)
  }

  // delete food item from database
  const deleteFoodItem = async (indexToDelete) => {
    console.log(indexToDelete)
    console.log(foodLog[indexToDelete]._id)
    await axios.delete(
      `http://localhost:4000/foods/${foodLog[indexToDelete]._id}`
    )
    getFoods()
  }

  const calculateCalories = () => {
    let total = 0
    foodLog.map((item) => {
      total += item.calories
    })
    setTotalCalories(total)
  }

  useEffect(() => {
    calculateCalories()
  }, [foodLog])

  return (
    <>
      <Nav />
      <main className="food-log-container">
        <h1>This is the food log</h1>
        <button onClick={(e) => getFoods(e)}>Get Foods</button>

        <div>
          <div className="day-of-food">
            <h3>Date: {date}</h3>
            {foodLog.map((item, index) => (
              <div key={index}>
                <article>
                  <p>Name: {item.name}</p>
                  <p>Calories: {item.calories} </p>
                  <button
                    className="removeFood"
                    onClick={() => deleteFoodItem(index)}
                  >
                    Remove
                  </button>
                </article>
              </div>
            ))}
            <h2>Total Calories: {totalCalories}</h2>
          </div>
        </div>
      </main>
    </>
  )
}

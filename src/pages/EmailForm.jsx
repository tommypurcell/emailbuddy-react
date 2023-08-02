import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'

import Papa from 'papaparse' // Import papaparse

import Nav from '../components/Nav'

axios.defaults.withCredentials = true

let render_url = 'https://calorie-counter-api-portalversion.onrender.com'
let local_url = 'http://localhost:4000'

let tiny_api_key = 'y766a0ts9oo4abd6z0ragycw1vj8z485wybl766h9e3xnpek'

export default function EmailForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [csvData, setCsvData] = useState(null)
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [subjects, setSubjects] = useState([])
  const [messages, setMessages] = useState([])

  // check if user is logged in
  const checkLogin = async () => {
    console.log('checking login...')
    try {
      let login = await axios.get(`${render_url}/profile`, {
        withCredentials: true,
        validateStatus: function (status) {
          return status >= 200 && status < 500 // default is to resolve only on 2xx, this allows 401
        },
      })
      if (login.data == 'User not logged in') {
        console.log('user not logged in')
        setIsLoggedIn(false)
      } else {
        setIsLoggedIn(true)
      }
    } catch (err) {
      console.error('Error fetching profile:', err.message)
    }
  }

  // set message based on csv data

  const populateMessage = (content) => {
    setMessage(content)
  }

  // set subject based on csv data
  const populateSubject = (e) => {
    e.preventDefault()
    setSubject(e.target.value)
  }

  const handleCsvFile = (e) => {
    const file = e.target.files[0]
    // Read the file content asynchronously
    const reader = new FileReader()
    reader.onload = () => {
      const csvContent = reader.result

      // Parse the CSV data
      Papa.parse(csvContent, {
        complete: function (results) {
          // Set the state variable with parsed CSV data
          setCsvData(results.data)
        },
      })
    }
    reader.readAsText(file)
  }

  useEffect(() => {
    console.log('csvData', typeof csvData)
    checkLogin()
  }, [])

  useEffect(() => {
    console.log(csvData)
  }, [csvData])

  useEffect(() => {
    if (csvData !== null) {
      const newMessages = csvData.map((row, index) => {
        if (index === 0) return null // Skip header row
        return message.replace('[Name]', row[1]) // Adjust according to the CSV structure
      })
      setMessages(newMessages.filter(Boolean))
      console.log('messages', messages)
    }
  }, [message])

  useEffect(() => {
    if (csvData !== null) {
      const newSubjects = csvData.map((row, index) => {
        if (index === 0) return null // Skip header row
        return subject.replace('[Name]', row[1]) // Adjust according to the CSV structure
      })
      setSubjects(newSubjects.filter(Boolean))
      console.log('subjects', subjects)
    }
  }, [subject])

  return (
    <>
      <main className="calorie-counter-container m-5">
        <span>Upload CSV File</span>
        <div>
          <input type="file" onChange={handleCsvFile} />{' '}
          {/* <-- Corrected line */}
        </div>
        {csvData === null ? (
          <h1>Please upload a csv file first.</h1>
        ) : (
          <>
            <form>
              <div className="form-group mb-5">
                <label for="exampleFormControlTextarea1">
                  Enter email subject line here
                </label>
                <textarea
                  className="form-control"
                  rows="1"
                  onChange={populateSubject}
                ></textarea>
              </div>
              <div className="form-group mb-5">
                <label for="exampleFormControlTextarea1">
                  Input message here
                </label>
                <Editor
                  onEditorChange={populateMessage}
                  apiKey={tiny_api_key} // Replace this with your TinyMCE API key
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                      'fontsize | undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help',
                  }}
                />
              </div>
            </form>
            <h1>CSV Data</h1>
            <table>
              <thead>
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, index) => {
                  // Skip the header row
                  if (index === 0) return null
                  return (
                    <tr key={index}>
                      <td className="p-3">{row[1]}</td>
                      <td className="p-3">{row[0]}</td>{' '}
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <h1 className="mt-5">Messages</h1>
            {/* for now we use dangerously set inner html. this needs to change when we go to production. */}
            {messages.map((msg, index) => (
              <div className="card mb-5" key={index}>
                <div className="card-body">
                  <h5 className="card-title">{subjects[index]}</h5>
                  <div
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: msg }}
                  ></div>
                </div>
              </div>
            ))}
          </>
        )}
      </main>
    </>
  )
}

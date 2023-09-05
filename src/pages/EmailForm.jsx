import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import Papa from 'papaparse' // Import papaparse
import logo from '../images/emailbuddy-logo.jpg'
// Example import order

axios.defaults.withCredentials = true
let render_url = 'https://calorie-counter-api-portalversion.onrender.com'
let local_url = 'http://localhost:4000'

let tiny_api_key = 'y766a0ts9oo4abd6z0ragycw1vj8z485wybl766h9e3xnpek'

export default function EmailForm() {
  // state variables
  const [theme, setTheme] = useState('light')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [subjects, setSubjects] = useState([])
  const [messages, setMessages] = useState([])
  const [csvData, setCsvData] = useState(null)
  const [emailData, setEmailData] = useState({})
  const [emailTitle, setEmailTitle] = useState('')
  const [titleExists, setTitleExists] = useState('')
  const [emailsSent, setEmailsSent] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const changeTheme = () => {
    if (theme == 'light') {
      setTheme('forest')
    } else {
      setTheme('light')
    }
  }

  // send data to server
  const postEmailData = async (e) => {
    e.preventDefault()

    // alert and confirm that emails will be sent
    let confirmation = window.confirm(
      `Are you sure you want to send ${emailData.recipients.length} emails?`
    )
    if (!confirmation) return
    console.log('sending email data...')

    try {
      // Send the data to the server using axios
      const response = await axios.post(
        `${local_url}/campaigns`,
        {
          title: emailData.title,
          subjects: emailData.subjects, // An array containing the personalized subjects for each recipient
          messages: emailData.messages, // An array containing the personalized messages for each recipient
          recipients: emailData.recipients,
        },
        {
          withCredentials: true,
        }
      )

      // Assuming the server responds with a success message
      console.log('Emails sent successfully!', response.data)
      setEmailsSent(true)
    } catch (error) {
      console.error('Error sending emails:', error.message)

      if (
        error.response &&
        error.response.data === 'campaign title already exists'
      ) {
        // Notify the user that the title is already taken
        setTitleExists(
          'The campaign title is already taken. Please choose another title.'
        )
      } else {
        // Handle other types of errors or display a generic message
        alert('An error occurred while sending the emails.')
      }
    }
  }

  // set title
  const populateTitle = (e) => {
    e.preventDefault()
    setEmailTitle(e.target.value)
  }
  // set message based on csv data
  const populateMessage = (content) => {
    setMessage(content)
  }

  // set subject based on csv data
  const populateSubject = (e) => {
    const value = e.target.value
    setSubject(value)
  }

  const updateEmailData = () => {
    setEmailData({
      title: emailTitle,
      subjects: subjects, // An array containing the personalized subjects for each recipient
      messages: messages, // An array containing the personalized messages for each recipient
      recipients: csvData.slice(1).map((row) => ({
        name: row[1],
        email: row[0],
      })),
    })
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
      updateEmailData()
    }
  }, [message])

  useEffect(() => {
    if (csvData !== null) {
      const newSubjects = csvData.map((row, index) => {
        if (index === 0) return null // Skip header row
        return subject.replace('[Name]', row[1]) // Adjust according to the CSV structure
      })
      console.log('new subjects', newSubjects.filter(Boolean))

      setSubjects(newSubjects.filter(Boolean))
    }
  }, [subject, emailTitle])

  useEffect(() => {
    setTitleExists('')
  }, [emailTitle])

  useEffect(() => {
    if (csvData !== null) {
      updateEmailData()
      console.log(emailData)
    }
  }, [subjects, emailTitle, messages])

  // #TODO
  // we should check if the current campaign title already exists in the database
  return (
    <>
      <main className="main m-0" data-theme={theme}>
        <div className="flex px-5 w-screen">
          <div className="mt-5 flex flex-col items-center">
            <h3 className="text-lg font-bold">Theme</h3>
            <input
              type="checkbox"
              className="toggle mt-1"
              onChange={changeTheme}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="rounded-full h-64" />
        </div>
        <div className="hero py-16 w-screen">
          <div className="hero-content text-center">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold">Welcome to Email Buddy</h1>
              <p className="pb-6">
                Welcome! This is a web application built using React that
                enables you to send personalized emails to recipients by using
                CSV data and an HTML editor. Whether you're sending newsletters,
                announcements, or other types of emails, this app simplifies the
                process and allows you to efficiently manage and deliver your
                customized content for each message.
              </p>
            </div>
          </div>
        </div>

        <div
          className="section flex flex-col items-center w-screen
        "
        >
          <h1 className="text-5xl py-12 font-bold">Get Started</h1>
          <span>Upload CSV File</span>
          <div>
            <input
              type="file"
              className="file-input w-full max-w-xs"
              onChange={handleCsvFile}
            />

            {/* <-- Corrected line */}
          </div>
          {csvData === null ? (
            <h1>Please upload a csv file first.</h1>
          ) : (
            <>
              <form>
                <div className="form-group my-5">
                  <label for="exampleFormControlTextarea1">
                    Enter a title for this email campaign
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    onKeyUp={populateTitle}
                  ></textarea>
                  {titleExists ? (
                    <h4 className="text-danger">{titleExists}</h4>
                  ) : null}
                </div>
                <div className="form-group mb-5">
                  <label for="exampleFormControlTextarea1">
                    Enter email subject line here
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    value={subject}
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
              <button onClick={postEmailData}>
                Send Emails <i className="fas fa-paper-plane"></i>
              </button>
              {emailsSent ? ( // if emails have been sent, show the following
                <h1>Emails have been sent successfully!</h1>
              ) : null}
            </>
          )}
        </div>
      </main>
      <footer className="footer p-10 mb-0 bg-white">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </>
  )
}

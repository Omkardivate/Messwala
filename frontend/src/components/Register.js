import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { USER, MESS } from "../utils/constants"
import { Bounce, toast } from "react-toastify"

const Register = () => {
  let navigate = useNavigate()

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobile, setMobile] = useState("")
  const [messName, setMessName] = useState("")
  const [messTime, setMessTime] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [landmark, setLandMark] = useState("")
  const [choice, setChoice] = useState("user")
  const status= "open"

  const handleSubmit = (e) => {
    e.preventDefault()

    if (choice === "user") {
      const body = {
        userName,
        password,
        mobile,
        email,
        choice
      }
      axios.post(`${USER}/registration`, body).then((response) => {
        const resData = response.data
        const { userId, userName, password, mobile, email } = resData
        console.log(resData)
        if (response.status == 200) {
          toast.success("Registration Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          })

        } else {
          navigate("/register")
        }
        navigate("/login")
      })
    }

    //Mess Registeration
    else {
      const body = {
        userName,
        password,
        mobile,
        email,
        messName,
        messTime,
        state,
        city,
        landmark,
        choice,
        status
      }
      axios.post(`${MESS}/registration`, body).then((response) => {
        const resData = response.data
        const { messId, userName, password, mobile, email } = resData
        console.log(resData)
        if (response.status === 200) {
          toast.success("Registration Successful", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          })
          
        } else {
          navigate("/register")
        }
        navigate("/login")
      })
    }

    // Send the form data to your server or process it as needed
  }

  return (
    <div className="flex  justify-around bg-primary w-full items-center min-h-screen">
      <img src="/registration.svg" className="h-[500px] w-[500px] shadow-md" />
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg mt-2 mb-2">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Registration Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block font-semibold mb-1">
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              pattern="^[A-Za-z\s]+$"
              title="Only letters are allowed"
              
              placeholder="Omkar Divate"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="omkar@gmail.com"
              value={email}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="eg.Omkar@123"
              title="Password must contain atleast one capital letter,small letter,number and special symbol"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="choice" className="block font-semibold mb-1">
              Choose Type
            </label>
            <select
              id="choice"
              name="choice"
              value={choice}
              onChange={(e) => setChoice(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            >
              <option value="user" checked >User</option>
              <option value="mess">Mess</option>
            </select>
          </div>
          {choice == "mess" ? (
            <>
              <div className="mb-4">
                <label htmlFor="messName" className="block font-semibold mb-1">
                  MessName
                </label>
                <input
                  type="text"
                  id="messName"
                  name="messName"
                  pattern="^[A-Za-z\s]+$"
                  placeholder="city"
                  title="Only letters are allowed"
                  value={messName}
                  onChange={(e) => setMessName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="messTime" className="block font-semibold mb-1">
                  MessTime
                </label>
                <input
                  type="text"
                  id="messTime"
                  name="messTime"
                  placeholder="10 AM to 10 PM"
                  title="time should be in between 1-12"
                  pattern="^(1[0-2]|0?[1-9]) (AM|PM|am|pm) (to|:|-) (1[0-2]|0?[1-9]) (AM|PM|am|pm)$"
                  value={messTime}
                  onChange={(e) => setMessTime(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
            <label htmlFor="city" className="block font-semibold mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="city.."
              pattern="^[A-Za-z\s]+$"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block font-semibold mb-1">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="state.."
              pattern="^[A-Za-z\s]+$"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="landmark" className="block font-semibold mb-1">
              Landmark
            </label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              placeholder="landmark.."
              pattern="^[A-Za-z\s]+$"
              value={landmark}
              onChange={(e) => setLandMark(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
            </>
          ) : (
            " "
          )}
          
          <div className="mb-4">
            <label htmlFor="mobile" className="block font-semibold mb-1">
              Mobile
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              pattern="^\d{10}$"
              placeholder="7666133811"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register

import React, { useState } from "react"
import { USER, MESS } from "../utils/constants"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { Bounce, toast } from "react-toastify"
import ReCAPTCHA from "react-google-recaptcha"

const Login = () => {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    choice: "",
  })
  const [capVal, setCapVal] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData.choice)

    if (formData.choice == "user") {
      await axios.post(`${USER}/login`, formData).then((response) => {
        const data = response.data
        console.log(data)
        const { userName, userId } = data
        console.log(userName)
        if (response.data) {
          toast.success("Login Successfully", {
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
          console.log("login successfull")
          sessionStorage["userName"] = userName
          sessionStorage["userId"] = userId
          sessionStorage["email"] = formData.email
          sessionStorage["password"] = formData.password
          sessionStorage["choice"] = formData.choice
          navigate("/")
        } else {
          console.log("Plz enter valid credentials or go to registeration")
          toast.warning("Enter valid credentials or go for registeration", {
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
        }
      })
    } else {
      await axios.post(`${MESS}/login`, formData).then((response) => {
        const data = response.data
        console.log(data)
        const { messId, userName } = data
        if (response.data) {
          toast.success("Login Successfully", {
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
          console.log("login successfull")
          sessionStorage["messId"] = messId
          sessionStorage["userName"] = userName
          sessionStorage["email"] = formData.email
          sessionStorage["password"] = formData.password
          sessionStorage["choice"] = formData.choice
          navigate("/")
        } else {
          toast.warning("Enter valid credentials or go for registeration", {
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
          console.log("Plz enter valid credentials or go to registeration")
        }
      })
    }
  }

  return (
    <div className="flex items-center w-full justify-around min-h-screen bg-gray-100">
      <img src="/login.svg" className="h-[400px] w-[400px] shadow-md" />
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              value={formData.email}
              onChange={handleChange}
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
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              value={formData.password}
              onChange={handleChange}
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
              value={formData.choice}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select One</option>
              <option value="user">User</option>
              <option value="mess">Mess</option>
            </select>
          </div>
          <div class="mt-3 ms-5 me-5 pt-4 ps-4">
            <ReCAPTCHA
              sitekey="6Ld2vjgpAAAAAB-cpCkxehmhmZpd-TCmevbbg4De"
              onChange={(e) => {
                setCapVal(e)
              }}
            ></ReCAPTCHA>
          </div>

          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-rear focus:outline-none focus:bg-rear"
            >
              Login
            </button>
          </div>
          <p className="text-center mt-2 text-[18px]">
            Forgot Password ?{" "}
            <Link to="/forgotpass" className="underline text-blue-500">
              Forgot Password
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login

import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { USER, MESS } from "../utils/constants"
import { Bounce, toast } from "react-toastify"

const Register = () => {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    landmark: "",
    mobile: "",
    choice: "", // added choice field
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    if (formData.choice === "user") {
      axios.post(`${USER}/registration`, formData).then((response) => {
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
          sessionStorage["userName"] = userName
          sessionStorage["userId"] = userId
          sessionStorage["email"] = email
          sessionStorage["mobile"] = mobile
          sessionStorage["password"] = password
          sessionStorage["role"] = formData.choice
        } else {
          navigate("/register")
        }
        navigate("/login")
      })
    }

    //Mess Registeration
    else {
      axios.post(`${MESS}/registration`, formData).then((response) => {
        const resData = response.data
        const { userId, userName, password, fname, lname, mobile, email } =
          resData
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
          sessionStorage["userName"] = userName
          sessionStorage["userId"] = userId
          sessionStorage["email"] = email
          sessionStorage["mobile"] = mobile
          sessionStorage["password"] = password
          sessionStorage["role"] = formData.choice
        } else {
          navigate("/register")
        }
        navigate("/login")
      })
    }
    setFormData({
      user_name: "",
      email: "",
      password: "",
      city: "",
      street: "",
      landmark: "",
      mobile: "",
      choice: "",
    })
    // Send the form data to your server or process it as needed
  }

  return (
    <div className="flex  justify-around bg-primary w-full items-center min-h-screen">
      <img src="/registration.svg" className="h-[500px] w-[500px] shadow-md" />
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
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
              id="username"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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
              value={formData.city}
              onChange={handleChange}
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
              value={formData.state}
              onChange={handleChange}
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
              value={formData.landmark}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block font-semibold mb-1">
              Mobile
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
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

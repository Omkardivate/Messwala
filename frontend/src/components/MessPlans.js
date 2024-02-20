import axios from "axios"
import { useState } from "react"
import { MESS } from "../utils/constants"
import { Bounce, toast } from "react-toastify"

const MessPlans = () => {
  const [formData, setFormData] = useState({
    messPlan: "",
    messPlanPrice: 0,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.messPlanPrice <= 0) {
      toast.warning("No zero or negative", {
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
      return
    }

    await axios
      .put(`${MESS}/messplan/${sessionStorage["messId"]}`, formData)
      .then((response) => {
        if (response.data) {
          setFormData({
            messPlan: "",
            messPlanPrice: 0,
          })
          toast.success(" MessPlan is Added", {
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
        }
      })
  }
  return (
    <div>
      <div className="max-w-md w-full h-1/2 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">MessPlans Form</h2>
        <form onSubmit={handleSubmit} className="">
          <div className="mb-4">
            <label htmlFor="messPlan" className="block font-semibold mb-1">
              Duration
            </label>
            <input
              type="text"
              id="messPlan"
              name="messPlan"
              pattern="^[A-Za-z\s]+$"
              value={formData.messPlan}
              onChange={handleChange}
              placeholder="Monthly mess plan"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="messPlanPrice" className="block font-semibold mb-1">
              Price
            </label>
            <input
              type="number"
              id="messPlanPrice"
              name="messPlanPrice"
              value={formData.messPlanPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500  text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              AddMessPlan
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MessPlans

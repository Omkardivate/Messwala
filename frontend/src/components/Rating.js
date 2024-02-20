import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Bounce, toast } from "react-toastify"
import { MESSRATING } from "../utils/constants"
const Rating = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    messId: { messId: id },
    rating: 0,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleRating = async (e) => {
    e.preventDefault()

    if (formData.rating <= 0 && formData.rating > 5) {
      toast.warning("Rating should in 1-5 range", {
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

    await axios.post(`${MESSRATING}/${id}`, formData).then((response) => {
      if (response.data) {
        toast.success("Rating add Successfully", {
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
        setFormData({
          messId: { messId: id },
          rating: 0,
        })
      }
    })
  }
  return (
    <div className="max-w-md w-full h-1/2 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Rating</h2>
      <form onSubmit={handleRating} className="">
        <div className="mb-4">
          <label htmlFor="rating" className="block font-semibold mb-1">
            Rating
          </label>
          <input
            type="text"
            id="rating"
            name="rating"
            pattern="^[1-5]$"
            placeholder="1-5 rating only"
            value={formData.rating}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="text-center">
          {sessionStorage["messId"] || sessionStorage["userId"] ? (
            <button
              type="submit"
              className="bg-blue-500  text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              GiveRating
            </button>
          ) : (
            <button
              type="submit"
              className="bg-gray-500  text-white px-6 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              disabled
            >
              GiveRating
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
export default Rating

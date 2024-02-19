import { MESSREVIEW } from "../utils/constants"
import { Bounce, toast } from "react-toastify"
import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
const Review = () => {
  const { id } = useParams()

  const [formData, setFormData] = useState({
    messId: { messId: id },
    reviews: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleReview = async (e) => {
    e.preventDefault()

    await axios.post(`${MESSREVIEW}/${id}`, formData).then((response) => {
      if (response.data) {
        toast.success("Review add Successfully", {
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
          reviews: "",
        })
      }
    })
  }
  return (
    <div>
      <div className="max-w-md w-full h-1/2 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Review</h2>
        <form onSubmit={handleReview} className="">
          <div className="mb-4">
            <label htmlFor="reviews" className="block font-semibold mb-1">
              Review
            </label>
            <input
              type="text"
              id="reviews"
              name="reviews"
              pattern="^[A-Za-z\s]+$"
              placeholder="Good REviews only"
              value={formData.reviews}
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
                GiveReview
              </button>
            ) : (
              <button
                type="submit"
                className="bg-gray-500  text-white px-6 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                disabled
              >
                GiveReview
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Review

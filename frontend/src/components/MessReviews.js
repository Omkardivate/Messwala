import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MESSRATING, MESSREVIEW } from "../utils/constants"

const MessReviews = () => {
  const { id } = useParams()
  const [review, setReview] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await axios.get(`${MESSREVIEW}/${id}`).then((response) => {
      console.log(response.data)
      setReview(response.data)
    })
  }

  return (
    <div className="text-secondary w-1/2 space-y-5">
      {review.map((r, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md p-4"
        >
          <p className="text-lg text-white font-semibold">{r.reviews}</p>
        </div>
      ))}
    </div>
  )
}

export default MessReviews

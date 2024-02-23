import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GETSINGLEMESS, MESSRATING } from "../utils/constants"
import { Bounce, toast } from "react-toastify"
import Review from "./Review"
import Rating from "./Rating"
import MessDetails from "./MessDetails"
import MenuCard from "./MenuCard"
import MessReviews from "./MessReviews"

const SingleMess = () => {
  const { id } = useParams()
  const [mess, setMess] = useState([])
  const [ratings, setRatings] = useState([])

  const [reviews, setReviews] = useState("")
  const [status, setStatus] = useState("rating")
  const [rating, setRating] = useState()
  const [messId, setMessId] = useState({ messId: sessionStorage["messId"] })

  const [string, setString] = useState("details")

  useEffect(() => {
    fetchMessData()
  }, [])

  const fetchMessData = async () => {
    await axios.get(`${GETSINGLEMESS}/${id}`).then((response) => {
      console.log(response.data)
      setMess(response.data)
    })
  }
  return (
    <div className=" w-full flex justify-around items-center">
      <div className="space-y-8 flex flex-col items-center justify-center">
        <div className="flex space-x-5">
          <button
            onClick={() => setStatus("rating")}
            className="bg-secondary text-primary px-6 py-4 rounded-md font-semibold hover:bg-rear hover:delay-150"
          >
            Rating
          </button>
          <button
            onClick={() => setStatus("review")}
            className="bg-secondary text-primary px-6 py-4 rounded-md font-semibold hover:bg-rear hover:delay-150"
          >
            Review
          </button>
        </div>
        <>
          {status === "rating" ? (
            <Rating />
          ) : status === "review" ? (
            <Review />
          ) : (
            <Rating />
          )}
        </>
      </div>

      <div className=" h-1/2 w-1/2 flex flex-col items-center space-y-8">
        <div className="flex space-x-5">
          <button
            onClick={() => setString("details")}
            className="bg-secondary text-primary px-6 py-4 rounded-md font-semibold hover:bg-rear hover:delay-150"
          >
            MessDetails
          </button>
          <button
            onClick={() => setString("menucard")}
            className="bg-secondary text-primary px-6 py-4 rounded-md font-semibold hover:bg-rear hover:delay-150"
          >
            MenuCard
          </button>
          <button
            onClick={() => setString("reviews")}
            className="bg-secondary text-primary px-6 py-4 rounded-md font-semibold hover:bg-rear hover:delay-150"
          >
            MessReviews
          </button>
        </div>
        <>
          {string === "details" ? (
            <MessDetails />
          ) : string === "menucard" ? (
            <MenuCard />
          ) : string === "reviews" ? (
            <MessReviews />
          ) : (
            <MessDetails />
          )}
        </>
      </div>
    </div>
  )
}
export default SingleMess

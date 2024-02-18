import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GETSINGLEMESS, MESSRATING } from "../utils/constants"
import { Bounce, toast } from "react-toastify"
import Review from "./Review"
import Rating from "./Rating"
const SingleMess = () => {
  const { id } = useParams()
  const [mess, setMess] = useState([])
  const [ratings, setRatings] = useState([])

  const [reviews, setReviews] = useState("")
  const [status, setStatus] = useState("rating")
  const [rating, setRating] = useState()
  const [messId, setMessId] = useState({ messId: sessionStorage["messId"] })

  useEffect(() => {
    fetchMessData()
  }, [])

  //rating handler
  const handleRating = async () => {
    const body = {
      messId,
      rating,
    }
    await axios.post(`${MESSRATING}/${id}`, body).then((response) => {
      if (response.data != null) {
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
      }
    })
  }

  //review handler

  const handleReview = () => {}

  const fetchMessData = async () => {
    await axios.get(`${GETSINGLEMESS}/${id}`).then((response) => {
      console.log(response.data)
      setMess(response.data)
    })
    await axios.get(`${MESSRATING}/${id}`).then((response) => {
      console.log(response.data)
      setRatings(response.data)
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
          ) : // <div className="max-w-md w-full h-1/2 p-6 bg-white rounded-lg shadow-lg">
          //   <h2 className="text-2xl font-bold mb-6 text-center">Rating</h2>
          //   <form onSubmit={handleRating} className="">
          //     <div className="mb-4">
          //       <label htmlFor="rating" className="block font-semibold mb-1">
          //         Rating
          //       </label>
          //       <input
          //         type="text"
          //         id="rating"
          //         name="rating"
          //         placeholder="1-5 rating only"
          //         value={rating}
          //         onChange={(e) => setRating(e.target.value)}
          //         className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
          //         required
          //       />
          //     </div>

          //     <div className="text-center">
          //       <button
          //         type="submit"
          //         className="bg-blue-500  text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          //       >
          //         GiveRating
          //       </button>
          //     </div>
          //   </form>
          // </div>
          status === "review" ? (
            // <div className="max-w-md w-full h-1/2 p-6 bg-white rounded-lg shadow-lg">
            //   <h2 className="text-2xl font-bold mb-6 text-center">Review</h2>
            //   <form onSubmit={handleReview} className="">
            //     <div className="mb-4">
            //       <label htmlFor="reviews" className="block font-semibold mb-1">
            //         Review
            //       </label>
            //       <input
            //         type="text"
            //         id="reviews"
            //         name="reviews"
            //         placeholder="good review only...."
            //         value={reviews}
            //         onChange={(e) => setReviews(e.target.value)}
            //         className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
            //         required
            //       />
            //     </div>

            //     <div className="text-center">
            //       <button
            //         type="submit"
            //         className="bg-blue-500  text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            //       >
            //         GiveReview
            //       </button>
            //     </div>
            //   </form>
            // </div>
            <Review />
          ) : (
            <Rating />
            // <div className="max-w-md w-full h-1/2 p-6 bg-white rounded-lg shadow-lg">
            //   <h2 className="text-2xl font-bold mb-6 text-center">Rating</h2>
            //   <form onSubmit={handleRating} className="">
            //     <div className="mb-4">
            //       <label htmlFor="rating" className="block font-semibold mb-1">
            //         Rating
            //       </label>
            //       <input
            //         type="text"
            //         id="rating"
            //         name="rating"
            //         placeholder="1-5 rating only"
            //         value={rating}
            //         onChange={(e) => setRating(e.target.value)}
            //         className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
            //         required
            //       />
            //     </div>

            //     <div className="text-center">
            //       <button
            //         type="submit"
            //         className="bg-blue-500  text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            //       >
            //         GiveRating
            //       </button>
            //     </div>
            //   </form>
            // </div>
          )}
        </>
      </div>

      {mess.length != 0 ? (
        <div className="bg-white flex flex-col  justify-center w-2/5  rounded-lg p-5 shadow-lg space-y-3">
          <h1 className="text-xl font-semibold items-center">
            {ratings ? ratings[5] : ""}
          </h1>
          <h1>OwnerName: {ratings ? ratings[11] : ""}</h1>
          <p>DailyMenu: {mess[0][1]}</p>
          <p>DailyMenuPrice: {mess[0][3]}</p>
          <p>DailyMenuTime: {mess[0][0]}</p>
          {mess.map((m) => {
            return (
              <div>
                <h1>
                  {m[2]}: {m[4]}
                </h1>
                {/* <h1>Price: {m[4]}</h1> */}
              </div>
            )
          })}
          <p>Contact: {ratings ? ratings[7] : ""}</p>
          <p>Rating:{ratings ? ratings[0] : ""} </p>
          <p>MessTiming: {ratings ? ratings[6] : ""}</p>
          <p>{`${ratings ? ratings[4] : ""},${ratings ? ratings[2] : ""},${
            ratings ? ratings[10] : ""
          }`}</p>
        </div>
      ) : (
        <h1>No data is available</h1>
      )}
    </div>
  )
}
export default SingleMess

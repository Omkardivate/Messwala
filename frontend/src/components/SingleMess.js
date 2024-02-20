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

  // //rating handler
  // const handleRating = async () => {
  //   const body = {
  //     messId,
  //     rating,
  //   }
  //   await axios.post(`${MESSRATING}/${id}`, body).then((response) => {
  //     if (response.data != null) {
  //       toast.success("Rating add Successfully", {
  //         position: "top-center",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //         transition: Bounce,
  //       })
  //     }
  //   })
  // }

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
          ) : status === "review" ? (
            <Review />
          ) : (
            <Rating />
          )}
        </>
      </div>

      {mess.length != 0 ? (
        // <div className="bg-white flex flex-col  justify-center w-2/5  rounded-lg p-5 shadow-lg space-y-3">
        //   <h1 className="text-xl font-semibold items-center">
        //     {ratings ? ratings[5] : ""}
        //   </h1>
        //   <h1>OwnerName: {ratings ? ratings[11] : ""}</h1>
        //   <p>DailyMenu: {mess[0][1]}</p>
        //   <p>DailyMenuPrice: {mess[0][3]}</p>
        //   <p>DailyMenuTime: {mess[0][0]}</p>
        //   <p>Menu</p>
        //   {mess.map((m) => {
        //     return (
        //       <div>
        //         <h1>
        //           {m[2]}: {m[4]}
        //         </h1>
        //         {/* <h1>Price: {m[4]}</h1> */}
        //       </div>
        //     )
        //   })}
        //   <p>Contact: {ratings ? ratings[7] : ""}</p>
        //   <p>Rating:{ratings ? ratings[0] : ""} </p>
        //   <p>MessTiming: {ratings ? ratings[6] : ""}</p>
        //   <p>
        //     Address:{" "}
        //     {`${ratings ? ratings[4] : ""},${ratings ? ratings[2] : ""},${
        //       ratings ? ratings[10] : ""
        //     }`}
        //   </p>
        // </div>

        <div className="bg-white flex flex-col justify-center w-2/5 rounded-lg p-5 shadow-lg space-y-3">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            {ratings ? ratings[5] : ""}
          </h1>
          <h1 className="text-lg font-semibold text-gray-700">
            OwnerName: {ratings ? ratings[11] : ""}
          </h1>
          <p className="text-gray-600">DailyMenu: {mess[0][1]}</p>
          <p className="text-gray-600">DailyMenuPrice: {mess[0][3]}</p>
          <p className="text-gray-600">DailyMenuTime: {mess[0][0]}</p>
          <p className="text-gray-600">Menu</p>
          {mess.map((m, index) => (
            <div key={index} className="text-gray-600">
              <h1>
                {m[2]}: {m[4]}
              </h1>
            </div>
          ))}
          <p className="text-gray-600">Contact: {ratings ? ratings[7] : ""}</p>
          <p className="text-gray-600">
            Rating:
            {ratings ? (
              <span className="flex">
                {Array(ratings[0])
                  .fill()
                  .map((_) => (
                    <p>⭐</p>
                  ))}
              </span>
            ) : (
              ""
            )}
          </p>
          <p className="text-gray-600">
            MessTiming: {ratings ? ratings[6] : ""}
          </p>
          <p className="text-gray-600">
            Address:{" "}
            {`${ratings ? ratings[4] : ""},${ratings ? ratings[2] : ""},${
              ratings ? ratings[10] : ""
            }`}
          </p>
        </div>
      ) : (
        <img
          src="https://img.freepik.com/vetores-premium/emoticon-procurando-ilustracao-personagem_193274-118.jpg"
          className="w-[200px] h-[200px]"
        />
      )}
    </div>
  )
}
export default SingleMess

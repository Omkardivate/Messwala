import axios from "axios"
import { useEffect } from "react"
import { MESS, USER } from "../utils/constants"
import Mess from "./Mess"
import User from "./User"

const Profile = () => {
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    if (sessionStorage["choice"] == "user") {
      await axios
        .get(`${USER}/${sessionStorage["userId"]}`)
        .then((response) => {
          console.log(response.data)
        })
    } else {
      await axios
        .get(`${MESS}/${sessionStorage["messId"]}`)
        .then((response) => {
          console.log(response.data)
        })
    }
  }
  return (
    <div className="w-full">
      {sessionStorage["choice"] == "user" ? (
        <User userId={sessionStorage["userId"]} />
      ) : (
        <Mess messId={sessionStorage["messId"]} />
      )}
    </div>
  )
}
export default Profile

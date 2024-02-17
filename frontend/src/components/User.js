import axios from "axios"
import { useEffect, useState } from "react"
import { USER } from "../utils/constants"

const User = ({ userId }) => {
  const [userName, setuserName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [id, setId] = useState()

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    await axios.get(`${USER}/${userId}`).then((response) => {
      const { email, mobile, userId, userName } = response.data
      setEmail(email)
      setMobile(mobile)
      setId(userId)
      setuserName(userName)
      console.log(userName)
    })
  }

  return (
    <div>
      <p>{email}</p>
      <p>{mobile}</p>
      <h1>{userName}</h1>
    </div>
  )
}
export default User

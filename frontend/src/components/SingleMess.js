import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { GETSINGLEMESS } from "../utils/constants"

const SingleMess = () => {
  const { id } = useParams()
  useEffect(() => {
    fetchMessData()
  }, [])

  const fetchMessData = async () => {
    await axios.get(`${GETSINGLEMESS}/${id}`).then((response) => {
      console.log(response.data)
    })
  }
  return (
    <div>
      <h1>SingleMess Page</h1>
    </div>
  )
}
export default SingleMess

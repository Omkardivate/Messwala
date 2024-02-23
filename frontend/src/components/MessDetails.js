import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MESS, MESSRATING } from "../utils/constants"

const MessDetails = () => {
  const [messData, setMessData] = useState([])
  const [data, setData] = useState()
  const { id } = useParams()

  const fetchMess = async () => {
    await axios.get(`${MESS}/getmess/${id}`).then((response) => {
      console.log(response.data)
      setData(response.data)
    })
  }

  const fetchData = async () => {
    await axios.get(`${MESSRATING}/${id}`).then((response) => {
      console.log(response.data)
      setMessData(response.data)
      if (response.data.length === 0) {
        fetchMess()
      }
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white w-1/2">
      <h1 className="text-3xl font-bold mb-4">{messData[5]}</h1>
      <h2 className="text-xl font-semibold mb-2">{messData[14]}</h2>
      <h3 className="text-[20px] mb-2">{messData[3]}</h3>
      <h3 className="text-[20px] mb-2">{messData[9]}</h3>
      <span className="text-[20px] mb-2">{messData[6]} </span>
      <span className="text-[20px] mb-2">: </span>
      {messData[7] ? (
        <span className="text-[20px] mb-2">{messData[7]}</span>
      ) : (
        "Not Avialable"
      )}
      <h3 className="text-[20px] mb-2">Time: {messData[8]}</h3>
      <h4 className="text-[20px]">
        {messData[4]}, {messData[2]}, {messData[12]}
      </h4>
    </div>
  )
}

export default MessDetails

import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MESS, MESSRATING } from "../utils/constants"

const MessDetails = () => {
  const [messData, setMessData] = useState([])
  const { id } = useParams()
  const [data, setData] = useState({
    messName:"",
    messTime:"",
    rating:"",
    messPlan:"",
    messPlanPrice:"",
    email:"",
    landmark:"",
    city:"",
    state:""
  })
  

  const fetchMess = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage["token"]}`
    };
    await axios.get(`${MESS}/${id}`, {headers:headers}).then((response) => {
      console.log(response.data)
      setData(response.data)
    })
  }

  const fetchData = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage["token"]}`
    };
    await axios.get(`${MESSRATING}/${id}`,{headers:headers}).then((response) => {
      console.log(response.data)
      console.log("length -"+response.data.length)

      if (response.data.length === 0) {
        fetchMess()
      }
      else{
        setMessData(response.data, response.data[0]= response.data[0].toFixed(1))
      }
      
      
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      { messData.length==0 ? (
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white w-2/3 ">
          <h1 className="text-3xl font-bold mb-4">{data.messName}</h1>
          <h3 className="text-[20px] mb-2">Time: {data.messTime}</h3>
          {/*    choice i.e. 'mess'
          <h2 className="text-xl font-semibold mb-2">{messData[14]}</h2> */}
    
          <h3 className="text-[20px] mb-2">Rating : {data.rating}</h3>
    
          {/* mobile
          <h3 className="text-[20px] mb-2">{messData[9]}</h3> */}
    
          
          {/* mess plan & plan price */}
          
          {data.messPlan ? (
            <>
              <h3 className="text-[20px] mb-2">{data.messPlan} : {data.messPlanPrice}</h3>
            </>
          ) : (
            ""
          )}
    
          {/* email */}
          <h3 className="text-[20px] mb-2">{data.email}</h3>
          
          {/* address: landmark,city,state */}
          <h4 className="text-[20px]">
            {data.landmark}, {data.city}, {data.state}
          </h4>
        </div>
      ):(
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white w-2/3 ">
          <h1 className="text-3xl font-bold mb-4">{messData[5]}</h1>
          <h3 className="text-[20px] mb-2">Time: {messData[8]}</h3>
          {/*    choice i.e. 'mess'
          <h2 className="text-xl font-semibold mb-2">{messData[14]}</h2> */}

          <h3 className="text-[20px] mb-2">Rating : {messData[0]}</h3>

          {/* mobile
          <h3 className="text-[20px] mb-2">{messData[9]}</h3> */}

          
          {/* mess plan & plan price */}
          
          {messData[7] ? (
            <>
              <h3 className="text-[20px] mb-2">{messData[6]} : {messData[7]}</h3>
            </>
          ) : (
            ""
          )}

          {/* email */}
          <h3 className="text-[20px] mb-2">{messData[3]}</h3>
          
          {/* address: landmark,city,state */}
          <h4 className="text-[20px]">
            {messData[4]}, {messData[2]}, {messData[12]}
          </h4>
        </div>
      )}
    </>
  )
}

export default MessDetails
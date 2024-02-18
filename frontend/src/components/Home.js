import { useEffect, useState } from "react"
import { MESS } from "../utils/constants"
import { EmblaCarousel } from "./EmbalCarousel"
import MessCard from "./MessCard"
import { Link } from "react-router-dom"

const Home = () => {
  const [mess, setMess] = useState([])

  useEffect(() => {
    fetchMess()
  }, [])

  const fetchMess = async () => {
    const data = await fetch(`${MESS}/`)
    const json = await data.json()
    //  console.log(json)
    setMess(json)
  }

  return (
    <div className="flex flex-col space-y-2 w-full p-5 mt-3">
      <div className="max-w-[800px] h-1/2 mx-auto">
        <div className="w-full h-full">
          <EmblaCarousel />
        </div>
        <h1 className="text-2xl font-semibold m-3">All Mess</h1>
        <div className="flex space-x-5  p-5 rounded-md max-w-[400px] h-full">
          {mess.map((m) => {
            return (
              <Link
                key={m.messId}
                to={"/mess/" + m.messId}
                className="flex-grow"
              >
                <MessCard messData={m} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home

// <div className="flex space-x-5 bg-yellow-200 p-5 rounded-md max-w-[400px] h-full">
//   {mess.map((m) => (
//     <Link key={m.messId} to={"/mess/" + m.messId} className="flex-grow">
//       <div className="flex flex-col justify-between bg-white rounded-md shadow-md p-4 w-full h-full">
//         <h2 className="text-lg font-semibold">{m.name}</h2>
//         <p className="text-gray-600">{m.description}</p>
//         {/* Add any other content you want to display */}
//       </div>
//     </Link>
//   ))}
// </div>

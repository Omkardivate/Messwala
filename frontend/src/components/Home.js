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
    <div className=" relative flex flex-col  space-x-2 w-full p-5 mt-3">
      <div className="absolute top-0 left-0 w-full h-full">
        <EmblaCarousel />
      </div>

      <div className="absolute  flex space-x-5 bg-yellow-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 p-[20px] rounded-md max-w-[400px]">
        {mess.map((m) => {
          return (
            <Link key={m.messId} to={"/mess/" + m.messId}>
              <MessCard messData={m} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Home

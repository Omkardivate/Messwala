import { useEffect, useState } from "react"
import { MESS } from "../utils/constants"
import { EmblaCarousel } from "./EmbalCarousel"
import MessCard from "./MessCard"
import { toast, Bounce } from "react-toastify"
const Home = () => {
  const [mess, setMess] = useState([])

  useEffect(() => {
    // toast.info("Welcome to MessWala 🍳", {
    //   position: "top-center",
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "colored",
    //   transition: Bounce,
    // })
    fetchMess()

    console.log(mess)
  }, [])

  const fetchMess = async () => {
    const data = await fetch(`${MESS}/`)
    const json = await data.json()
    //  console.log(json)
    setMess(json)
  }

  return (
    <div className=" relative flex flex-col  space-x-2 w-full p-5">
      <div className="absolute top-0 left-0 w-full h-full">
        <EmblaCarousel />
      </div>

      <div className="absolute flex space-x-5 bg-yellow-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 p-[20px] rounded-md max-w-[400px]">
        {mess.map((m) => {
          console.log(m)
          return <MessCard key={m.messId} messData={m} />
        })}
      </div>
    </div>
  )
}

export default Home

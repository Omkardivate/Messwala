import { useEffect, useState } from "react"
import { MESS } from "../utils/constants"
import { EmblaCarousel } from "./EmbalCarousel"
import MessCard from "./MessCard"
import { Link } from "react-router-dom"

const Home = () => {
  const [mess, setMess] = useState([])
  const [filterMess, setFilterMess] = useState([])
  const [text, setText] = useState("")

  useEffect(() => {
    fetchMess()
  }, [])

  const fetchMess = async () => {
    const data = await fetch(`${MESS}/`)
    const json = await data.json()
    console.log(json)
    setMess(json)
    setFilterMess(json)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const data = mess.filter((m) => {
      return (
        m.city.toLowerCase().includes(text.toLowerCase().trim()) ||
        m.landmark.toLowerCase().includes(text.toLowerCase().trim()) ||
        m.state.toLowerCase().includes(text.toLowerCase().trim())
      )
    })

    setFilterMess(data)
  }

  return (
    <div className="flex flex-col space-y-8 p-5 mt-3">
      {/* Search Section */}
      <div className="flex items-center justify-center space-x-2">
        <form
          onSubmit={handleSearch}
          className="flex w-full justify-center space-x-2"
        >
          <input
            type="text"
            className="w-1/2 px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500 bg-gray-100"
            pattern="^[A-Za-z\s]+$"
            onChange={(e) => setText(e.target.value)}
            placeholder="Search by location.."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>

      <div className=" rounded-lg overflow-hidden">
        <EmblaCarousel />
      </div>

      <div className="bg-white rounded-lg shadow-md p-5">
        <h1 className="text-2xl font-bold mb-3 text-secondary">All Mess</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filterMess.map((m) =>
            m.status === "close" ? (
              <div className="bg-blue-100 rounded-lg p-4 hover:bg-blue-200 transition duration-300">
                <MessCard key={m.messId} messData={m} />
              </div>
            ) : (
              <Link key={m.messId} to={"/mess/" + m.messId}>
                <div className="bg-blue-100 rounded-lg p-4 hover:bg-blue-200 transition duration-300">
                  <MessCard key={m.messId} messData={m} />
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Home

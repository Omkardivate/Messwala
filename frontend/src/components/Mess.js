import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MESS } from "../utils/constants"
import { Bounce, toast } from "react-toastify"
import DailyMenu from "./DailyMenu"
import FixedMenu from "./FixedMenu"
import MessPlans from "./MessPlans"
import Status from "./Status"
import MenuCard from "./MenuCard"

const Mess = () => {
  const [userName, setUserName] = useState("")
  const [messName, setMessName] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [landmark, setLandMark] = useState("")
  const [messTime, setMessTime] = useState("")
  const [mobile, setMobile] = useState("")
  const [state, setState] = useState("")
  // const [password, setPassword] = useState("")
  const [choice,setChoice]= useState("")
  const [status,setStatus]= useState("")

  const [opstatus, setOpStatus] = useState("dailymenu")
  

  useEffect(() => {
    fetchMess()
  }, [])

  const fetchMess = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage["token"]}`
    };
    await axios.get(`${MESS}/${sessionStorage["messId"]}`,{headers:headers}).then((response) => {
      const data = response.data

      setUserName(data.userName)
      setCity(data.city)
      setEmail(data.email)
      setLandMark(data.landmark)
      setMessName(data.messName)
      setMessTime(data.messTime)
      setMobile(data.mobile)
      setState(data.state)
      // setPassword(data.password)
      setChoice(data.choice)
      setStatus(data.status)
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage["token"]}`
    };
    const body = {
      userName,
      city,
      email,
      landmark,
      messName,
      messTime,
      mobile,
      state,
      // password,
      choice,
      status
    }
    await axios.put(`${MESS}/${sessionStorage["messId"]}`, body, {headers:headers})
      .then((response) => {
        if (response.data) {
          toast.success("Profile update Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          })
        }
      })
  }
  return (
    <div className="bg-gray-200 h-full w-full flex  justify-around">
      <div className="flex flex-col">
        <div className=" flex flex-col items-center space-y-[100px] mt-[70px]">
          <div className="flex space-x-5 w-full">
            <button
              onClick={() => setOpStatus("messplan")}
              className="bg-secondary text-primary px-6 py-4 rounded-md font-semibold hover:bg-rear hover:delay-150"
            >
              Add MessPlan
            </button>

            <button
              onClick={() => setOpStatus("messcard")}
              className="bg-secondary text-primary px-6 py-4 rounded-md font-semibold hover:bg-rear hover:delay-150"
            >
              Add MenuCard Menu
            </button>
            <button
              onClick={() => setOpStatus("dailymenu")}
              className="bg-secondary text-primary px-6 py-4 rounded-md font-semibold hover:bg-rear hover:delay-150"
            >
              Add DailyMenu
            </button>
            <button
              onClick={() => setOpStatus("menucard")}
              className="bg-secondary text-primary px-6 py-4 rounded-md font-semibold hover:bg-rear hover:delay-150"
            >
              Menucard
            </button>
            
          </div>
          <div>
            {opstatus === "dailyMenu" ? (
              <DailyMenu />
            ) : opstatus === "messcard" ? (
              <FixedMenu />
            ) : opstatus == "messplan" ? (
              <MessPlans />
            ) : opstatus == "menucard" ? (
              <MenuCard/>
            ) :(
              <DailyMenu />
            )}
          </div>
        </div>
      </div>



      <div className="bg-white-200 w-2/5 mt-5 mb-5">
        <div className=" p-5 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            👤{userName}👤
          </h2>
          
              
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <div className="mb-3" >
                <label className="block font-semibold mb-1">
                  Status:
                </label>
                
                { status === "open" ? (
                  <>
                    <input type="radio" name="status" id="open" defaultChecked onClick={(e) => setStatus(e.target.id)}/> <label htmlFor="open">Open</label>
                    <input type="radio" name="status" id="close" className="ml-8" onClick={(e) => setStatus(e.target.id)} /> <label htmlFor="close">Closed</label>
                  </>
                ) : (
                  <>
                    <input type="radio" name="status" id="open" onClick={(e) => setStatus(e.target.id)}/> <label htmlFor="open">Open</label>
                    <input type="radio" name="status" id="close" className="ml-8" defaultChecked onClick={(e) => setStatus(e.target.id)}/> <label htmlFor="close">Closed</label>
                  </>
                )}
            </div>

              <label htmlFor="username" className="block font-semibold mb-1">
                Username
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                pattern="^[A-Za-z\s]+$"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                readOnly
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="password" className="block font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                required
              />
              </div>  */}

            <div className="mb-4">
              <label htmlFor="messName" className="block font-semibold mb-1">
                MessName
              </label>
              <input
                type="text"
                id="messName"
                name="messName"
                pattern="^[A-Za-z\s]+$"
                value={messName}
                onChange={(e) => setMessName(e.target.value)}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="messTime" className="block font-semibold mb-1">
                MessTime
              </label>
              <input
                type="text"
                id="messTime"
                name="messTime"
                pattern="^(1[0-2]|0?[1-9]) (AM|PM) to (1[0-2]|0?[1-9]) (AM|PM)$"
                value={messTime}
                onChange={(e) => setMessTime(e.target.value)}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="city" className="block font-semibold mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                pattern="^[A-Za-z\s]+$"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block font-semibold mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                pattern="^[A-Za-z\s]+$"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="landmark" className="block font-semibold mb-1">
                Landmark
              </label>
              <input
                type="text"
                id="landmark"
                name="landmark"
                pattern="^[A-Za-z\s]+$"
                value={landmark}
                onChange={(e) => setLandMark(e.target.value)}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block font-semibold mb-1">
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                pattern="^\d{10}$"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Update Profile
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
export default Mess

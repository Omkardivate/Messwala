import axios from "axios"
import { useEffect, useState } from "react"
import { USER } from "../utils/constants"
import { Bounce, toast } from "react-toastify"
const User = ({ userId }) => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    await axios.get(`${USER}/${userId}`).then((response) => {
      const { email, mobile, password, userName } = response.data
      setEmail(email)
      setMobile(mobile)
      setPassword(password)
      setUserName(userName)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      userName,

      email,

      mobile,

      password,
    }
    await axios
      .put(`${USER}/${sessionStorage["userId"]}`, body)
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
    <div className="w-full bg-primary flex justify-around items-center h-full">
      <img src="/userProfile.svg" className="w-[600px] h-[600px]" />
      <div className="w-2/5 mb-5">
        <div className=" p-5 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-secondary">
            👤{userName}👤
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block font-semibold mb-1 text-secondary"
              >
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
              <label
                htmlFor="email"
                className="block font-semibold mb-1 text-secondary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-semibold mb-1 text-secondary"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-rear"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="mobile"
                className="block font-semibold mb-1 text-secondary"
              >
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
                className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-rear focus:outline-none focus:bg-blue-600"
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
export default User

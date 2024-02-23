import axios from "axios"
import { useState } from "react"

import { Bounce, toast } from "react-toastify"
import { MESS } from "../utils/constants"
const Status = () => {
  const [formData, setFormData] = useState({
    messId: sessionStorage["messId"],
    status: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleStatus = async (e) => {
    e.preventDefault()

    await axios.post(`${MESS}/addstatus`, formData).then((response) => {
      if (response.data) {
        toast.success("Status Update Successfully", {
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
        setFormData({
          messId: sessionStorage["messId"],
          status: "",
        })
      }
    })
  }
  return (
    <div className="max-w-md w-full h-full p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Mess Status</h2>
      <form onSubmit={handleStatus} className="">
        <div className="mb-4">
          <label htmlFor="choice" className="block font-semibold mb-1">
            Choose Type
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select One</option>
            <option value="open">open</option>
            <option value="close">close</option>
          </select>
        </div>

        <div className="text-center">
          {sessionStorage["messId"] || sessionStorage["userId"] ? (
            <button
              type="submit"
              className="bg-blue-500  text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Apply
            </button>
          ) : (
            <button
              type="submit"
              className="bg-gray-500  text-white px-6 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              disabled
            >
              Apply
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
export default Status

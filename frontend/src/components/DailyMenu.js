import axios from "axios"
import { useState } from "react"
import { DAILYMENU, FIXEDMENU } from "../utils/constants"
import { Bounce, toast } from "react-toastify"
const DailyMenu = () => {
  const [formData, setFormData] = useState({
    messId: { messId: sessionStorage["messId"] },
    menuName: "",
    price: "",
    availbility: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios
      .post(`${DAILYMENU}/${sessionStorage["messId"]}`, formData)
      .then((response) => {
        if (response.data) {
          setFormData({
            messId: { messId: sessionStorage["messId"] },
            menuName: "",
            price: "",
            availbility: "",
          })
          toast.success("Daily Menu is Add", {
            position: "top-center",
            autoClose: 3000,
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
    <div className="w-full h-full bg-yellow-200 flex items-center justify-around">
      <img
        src="https://media.istockphoto.com/id/476040512/photo/daily-specials-menu.webp?b=1&s=170667a&w=0&k=20&c=CGyou7eUoEKHxUNDRClOHFOjRncO8wuKKy7HDrhuRPw="
        className="w-[500px] h-[500px]"
      />
      <div className="max-w-md w-full h-1/2 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">DailyMenu Form</h2>
        <form onSubmit={handleSubmit} className="">
          <div className="mb-4">
            <label htmlFor="menu_ame" className="block font-semibold mb-1">
              MenuName
            </label>
            <input
              type="text"
              id="menuName"
              name="menuName"
              value={formData.menuName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="availbility" className="block font-semibold mb-1">
              Availbility
            </label>
            <input
              type="text"
              id="availbility"
              name="availbility"
              value={formData.availbility}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block font-semibold mb-1">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              AddMenu
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DailyMenu

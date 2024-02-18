import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { SERVICE_ID, TEMPLATE_ID, EMAIL_PUBLIC_KEY } from "../utils/constants"
import { Bounce, toast } from "react-toastify"
const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: EMAIL_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success("Message Sent Successfully", {
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
            user_name: "",
            user_email: "",
            message: "",
          })
        },
        (error) => {
          console.log("FAILED...", error.text)
        }
      )
  }

  return (
    <div className="w-full flex  justify-around items-center">
      <img src="./contact.svg" className="w-[600px] h-[600px] ml-10" />
      <div className=" w-1/4 mx-auto mt-10 p-6 h-2/3 border rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} ref={form}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-secondary font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-secondary font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-secondary font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact

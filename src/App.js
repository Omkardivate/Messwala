import { createBrowserRouter, Outlet } from "react-router-dom"
import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full  flex  flex-1 overflow-y-scroll">
        <Outlet />
      </div>
      {/* <Footer /> */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition="Bounce"
      />
    </div>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
])

export default App

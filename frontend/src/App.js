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
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Profile from "./components/Profile"
import MessPlans from "./components/MessPlans"
import DailyMenu from "./components/DailyMenu"
import FixedMenu from "./components/FixedMenu"
import SingleMess from "./components/SingleMess"
import Forgot from "./components/Forgot"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <div className="bg-primary min-h-screen w-full flex flex-col">
      <Navbar />
      <div className=" flex flex-1 h-full overflow-y-scroll">
        <Outlet />
      </div>

      <Footer />
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
      {
        path: "/profile",
        element: (
          <ProtectedRoute
            element={<Profile />}
            allowedRoles={["mess", "user"]}
          />
        ),
      },

      {
        path: "/messplans",
        element: (
          <ProtectedRoute element={<MessPlans />} allowedRoles={["mess"]} />
        ),
      },
      {
        path: "/fixedmenu",
        element: (
          <ProtectedRoute element={<FixedMenu />} allowedRoles={["mess"]} />
        ),
      },
      {
        path: "/dailymenu",
        element: (
          <ProtectedRoute element={<DailyMenu />} allowedRoles={["mess"]} />
        ),
      },
      {
        path: "/mess/:id",
        element: (
          <ProtectedRoute
            element={<SingleMess />}
            allowedRoles={["mess", "user"]}
          />
        ),
      },
      {
        path: "/forgotpass",
        element: <Forgot />,
      },
    ],
    errorElement: <Error />,
  },
])

export default App

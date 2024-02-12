import { Link } from "react-router-dom"

const Navbar = () => {
  const logOut = () => {
    sessionStorage.clear()
  }
  return (
    <div className="sticky z-[100] w-full bg-secondary h-20 flex justify-between items-center p-5">
      <Link to="/">
        <h2 className=" text-[32px] font-semibold cursor-pointer text-rear">
          MessWala
        </h2>
      </Link>

      <div className="">
        <ul className="flex items-center space-x-4 p-5 text-primary text-md">
          <Link to="/about">
            <li className="ml-10 uppercase  hover:border-b-rear">AboutUs</li>
          </Link>

          <Link to="/contact">
            <li className="ml-10 uppercase  hover:border-b-rear">Contact</li>
          </Link>
          {sessionStorage["userName"] || sessionStorage["email"] ? (
            " "
          ) : (
            <Link to="/register">
              <li className="ml-10 uppercase  hover:border-b-rear">Register</li>
            </Link>
          )}

          {sessionStorage["email"] ? (
            <>
              <p>👋{sessionStorage["email"]}👋</p>
              <button onClick={logOut}>LogOut</button>
            </>
          ) : (
            <Link to="/login">
              <li className="ml-10 uppercase  hover:border-b-rear">Login</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar

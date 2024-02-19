import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({ element, allowedRoles }) => {
  const navigate = useNavigate()
  const [role, setRole] = useState("")

  useEffect(() => {
    const userRole = sessionStorage.getItem("choice")
    if (!userRole || !allowedRoles.includes(userRole)) {
      navigate("/login") // Redirect to login if role not found or not allowed
    } else {
      setRole(userRole)
    }
  }, [navigate, allowedRoles])

  return role ? element : null
}

export default ProtectedRoute

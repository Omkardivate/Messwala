import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GETSINGLEMESS } from "../utils/constants"
import Mess from "./Mess"

const MenuCard = () => {
  const [menu, setMenu] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await axios.get(`${GETSINGLEMESS}/${id}`).then((response) => {
      console.log(response?.data)
      setMenu(response.data)
    })
  }
  return (
    // <h1>MessCard</h1>
    <>
      {menu.length > 0 ? (
        <div className="container mx-auto bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Daily Menu Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-white">Daily Menu</h2>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-4 text-left font-semibold">
                        {menu[0][1] ? menu[0][1] : ""}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-4 text-left font-semibold">
                        {menu[0][0] ? menu[0][0] : ""}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-left font-semibold">
                        {menu[0][3] ? (
                          <div className="flex items-center space-x-1">
                            {
                              <>
                                <span>{menu[0][3]}</span>

                                <img
                                  className="w-[12px] h-[12px]"
                                  src="https://imgs.search.brave.com/4RA8nWlyGBi0VTWDQEnERBt0D54psfyxdkE-I2Q1pd8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2VlL0luZGlhbl9S/dXBlZV9zeW1ib2wu/c3Zn.svg"
                                />
                              </>
                            }
                          </div>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Fixed Menu Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-white">Fixed Menu</h2>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {menu.map((m, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-2 px-4 text-left flex">
                          {m[2] ? m[2] : ""}:{" "}
                          {m[4] ? (
                            <div className="flex items-center space-x-1">
                              <span>{m[4]}</span>

                              <img
                                className="w-[12px] h-[12px]"
                                src="https://imgs.search.brave.com/4RA8nWlyGBi0VTWDQEnERBt0D54psfyxdkE-I2Q1pd8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2VlL0luZGlhbl9S/dXBlZV9zeW1ib2wu/c3Zn.svg"
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}
export default MenuCard

const MessCard = ({ messData }) => {
  console.log(messData)
  return (
    <div className="flex flex-col justify-between bg-gray-100 rounded-md shadow-md p-4 w-full h-full">
      <h2 className="text-2xl font-semibold mb-4">{messData.messName}</h2>
      <p className="text-lg mb-2">OwnerName: {messData.userName}</p>
      <p className="text-lg mb-2">Contact: {messData.mobile}</p>
      {/* <p className="text-lg mb-2">Ranting: {messData.ranting}</p> */}
      <p className="text-lg mb-2">
        Location: {messData.landmark}, {messData.city}, {messData.state}
      </p>
    </div>
  )
}
export default MessCard

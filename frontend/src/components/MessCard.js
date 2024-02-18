const MessCard = ({ messData }) => {
  console.log(messData)
  return (
    <div className="bg-primary rounded-lg shadow-md p-6 text-secondary ">
      <h2 className="text-2xl font-semibold mb-4">{messData.messName}</h2>
      <p className="text-lg mb-2">Manager: {messData.userName}</p>
      <p className="text-lg mb-2">Contact: {messData.mobile}</p>
      <p className="text-lg mb-2">Ranting: {messData.ranting}</p>
      <p className="text-lg mb-2">
        Location: {messData.landmark}, {messData.city}, {messData.state}
      </p>
    </div>
  )
}
export default MessCard

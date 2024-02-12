const MessCard = ({ messData }) => {
  return (
    <div className="bg-gray-100 border border-gray w-1/4 h-2/5">
      <h1>{messData.messName}</h1>
      <h3>{messData.ownerName}</h3>
      <p>
        {messData.city}
        {messData.landmark}
        {messData.state}
      </p>
    </div>
  )
}
export default MessCard

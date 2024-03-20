const MessCard = ({ messData }) => {

  console.log(messData)
  return (
    <>
    {
      messData.status === "open" ? (
        <div className="flex flex-col justify-between bg-gray-200 rounded-md shadow-md p-4 w-full h-full">
          <h2 className="text-2xl font-bold mb-2 text-secondary text-center">
            {messData.messName}
          </h2>
          <p className="text-lg mb-1">
            <span className="text-secondary font-medium">OwnerName:</span>{" "}
            {messData.userName}
          </p>
          {/* <p className="text-lg mb-1">
            <span className="text-secondary font-medium">Contact:</span>{" "}
            {messData.mobile}
          </p> */}
          {messData.status === "open" ? (
            <p className="text-lg mb-1 text-green-700">
              <span className=" font-medium text-green-700 ">Status:</span>{" "}
              <span className="font-bold">{messData.status}</span>
            </p>
          ) : (
            <p className="text-lg mb-1 text-red-700 ">
              <span className="text-red-700">Status:</span>{" "}
              <span className="font-bold">{messData.status}</span>
            </p>
          )}

          {/* <p className="text-lg mb-2">Ranting: {messData.ranting}</p> */}
          <p className="text-lg mb-1">
            <span className="text-secondary font-medium">Location:</span>{" "}
            {messData.landmark}, {messData.city}, {messData.state}
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-between bg-red-100  rounded-md shadow-md p-4 w-full h-full">
          <h2 className="text-2xl font-bold mb-2 text-secondary text-center">
            {messData.messName}
          </h2>
          <p className="text-lg mb-1">
            <span className="text-secondary font-medium">OwnerName:</span>{" "}
            {messData.userName}
          </p>
          {/* <p className="text-lg mb-1">
            <span className="text-secondary font-medium">Contact:</span>{" "}
            {messData.mobile}
          </p> */}
          {messData.status === "open" ? (
            <p className="text-lg mb-1 text-green-700">
              <span className=" font-medium text-green-700 ">Status:</span>{" "}
              <span className="font-bold">{messData.status}</span>
            </p>
          ) : (
            <p className="text-lg mb-1 text-red-700 ">
              <span className="text-red-700">Status:</span>{" "}
              <span className="font-bold">{messData.status}</span>
            </p>
          )}

          {/* <p className="text-lg mb-2">Ranting: {messData.ranting}</p> */}
          <p className="text-lg mb-1">
            <span className="text-secondary font-medium">Location:</span>{" "}
            {messData.landmark}, {messData.city}, {messData.state}
          </p>
        </div>
      )
    }
    </>
    
  )
}
export default MessCard

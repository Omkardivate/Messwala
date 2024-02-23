const Footer = () => {
  return (
    <div className="left-0 bottom-0 w-full bg-secondary text-primary h-[90px] flex justify-around items-center">
      <img src="/symbol.svg" className="w-[100px] h-[80px]" />
      <div className="flex flex-col justify-center items-center ">
        <h1>This site is copyright-protected and is property of MessWala</h1>
        <p className="font-medium">@MessWala Pvt.Ltd.</p>
      </div>
      <div className="flex space-x-4">
        <a href="https://github.com/Omkardivate/Messwala" target="_blank">
          <img
            title="MessWala Github"
            src="/github.svg"
            className="w-[40px] h-[40px] cursor-pointer"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kunal-hole-3a9459189/"
          target="_blank"
        >
          <img
            title="MessWala LinkedIn"
            src="/linkedIn.svg"
            className="w-[40px] h-[40px] cursor-pointer"
          />
        </a>
        <a href="https://instagram.com/_kunal_hole_" target="_blank">
          <img
            title="MessWala Instagram"
            src="/instagram.svg"
            className="w-[40px] h-[40px] cursor-pointer"
          />
        </a>
      </div>
    </div>
  )
}
export default Footer

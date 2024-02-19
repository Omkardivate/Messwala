const About = () => {
  return (
    <div className="bg-primary w-full flex justify-around items-center">
      <img src="/symbol.svg" className="w-[300px] h-[300px]" />
      <div className="bg-primary w-1/2 text-[18px] p-5">
        <h1 className="text-2xl text-secondary font-bold text-center mb-5">
          Features of MessWala
        </h1>
        <ol className="list-decimal pl-5">
          <li className="mb-4">
            Introducing Mess Wala, an innovative Fullstack Application
            leveraging cutting-edge technologies such as ReactJS, SpringBoot,
            and MySql.
          </li>
          <li className="mb-4">
            This dynamic platform revolutionizes the way users, primarily
            students, employees, and workers, discover food messes in their
            desired locations with just a click.
          </li>
          <li className="mb-4">
            Seamlessly presenting menu cards, mess plans, daily specials,
            ratings, and top-rated messes in the area, Mess Wala ensures a
            convenient and efficient dining experience.
          </li>
          <li className="mb-4">
            Not only does this platform cater to users, but it also serves as a
            game-changer for mess owners, providing them with tools to scale up
            their businesses.
          </li>
          <li>
            Elevate your culinary journey with Mess Wala – where technology
            meets taste!
          </li>
        </ol>
      </div>
    </div>
  )
}
export default About

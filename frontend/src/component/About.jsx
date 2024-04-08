import pix from "../assets/pexels-pixabay-460537.jpg"
export const About = () => {
  return(
    <div className="bg-black">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-medium"> About Us </h2>
          <p className="text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Illo tenetur aliquid accusantium corporis nisi, suscipit, 
            labore harum saepe quibusdam incidunt, dolor nihil alias.
            Possimus aspernatur natus illo, rerum quod quos.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src={pix} alt="res" className="w-[400px] h-[400px] object-cover"/>

        </div>
      </div>

    </div>
  )

}

export default About;
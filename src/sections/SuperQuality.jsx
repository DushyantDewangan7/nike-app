import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section id="about-us"
    className=" flex justify-between items-center max-lg:flex-col gap-10 w-full max-container ">
      <div className=" flex flex-1 flex-col">
      
          <h2 className="  font-palanquin text-4xl capitalize font-bold max-w-lg"> 
            We provide You
            <span
            className=" text-coral-red "> Quality  </span>
              Shoe
            <br />
            <span
            className=" text-coral-red inline-block mt-3 px-3">Nike</span>
              Shoes 
          </h2>
          <p className=" mt-4 lg:max-w-lg info-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Praesentium debitis eos illum quia corporis harum odio 
          a necessitatibus deserunt ea quam aspernatur repudiandae animi blanditiis, 
          quibusdam laborum exercitationem iste voluptatem.
          </p>  
          <p className=" mt-6 lg:max-w-lg info-text ">
            OUR DEDICATION details and excellence ensures your satisfaction 
          </p>
            <div className=" mt-11 flex flex-wrap gap-4 ">
              

          <Button  label="Shop now" 
          iconURL={arrowRight}/>
        
            </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt=" shoe8"  width={578} height={522} className=" object-contain"/>

      </div>
      
    </section>
  )
}

export default SuperQuality

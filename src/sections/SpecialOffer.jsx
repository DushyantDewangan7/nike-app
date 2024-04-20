import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className=" flex justify-wrap items-center max-xl:flex-col-reverse gap-10
     max-container ">
      <div className=" flex-1 "> 
      <img src={offer} width={773} height={687} className=" object-contain w-full" /></div>
      <div className=" flex flex-1 flex-col">
      
      <h2 className="  font-palanquin text-4xl capitalize font-bold max-w-lg"> 
       
        <span
        className=" text-coral-red "> Special  </span>
          Offer
        <br />
       
      </h2>
      <p className=" mt-4 lg:max-w-lg info-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Praesentium debitis eos illum quia corporis harum odio 
      a necessitatibus deserunt ea quam aspernatur repudiandae animi blanditiis, 
      quibusdam laborum exercitationem iste voluptatem.
      </p>  
      <p className=" mt-6 lg:max-w-lg info-text ">
        OUR DEDICATION details and excellence ensures your satisfaction 
      </p>
        <div className=" mt-11 flex flex-wrap gap-4">

      <Button  label="view details" />
      <Button 
          label="Learn more"
           backgroundColor= "bg-white"
            borderColor = "border-slate-gray " 
            textColor = "text-slate-gray"/>
        </div>
  </div>
     </section>
  )
}

export default SpecialOffer

import whitening from '../assets/whiting.png'
import Prosthesis from '../assets/Prosthesis.png'
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
export default function Hero() {
  return (
  

        <section
        className="h-screen flex justify-center items-center bg-cover text-center"
        style={{ backgroundImage: `url(https://smilespecialtydentalclinic.com/wp-content/uploads/2024/07/Home-1.-Experience-confidence-with-a-healthy-smile.updated-1.jpg)` }}
        >
                <div className=" bg-cover bg-center bg-no-repeat hero-section  px-6"> 
            <div className="hero-section-left mt-60 flex flex-col justify-start items-start  p-10 ml-20 mb-15">
                <h3 className="font-semibold text-3xl text-teal-600 ml-3">Transform Your Smile</h3>
                <div className="flex flex-col items-start">
                <h2 className="text-7xl font-bold  text-purple-600 ml-4">
                    Experience </h2>
                <h2 className="text-7xl font-bold  text-purple-600 max-w-xl">
                confidence with a healthy smile.</h2>
                </div>
                
           
                <div className="core-service gap-5 mt-5 flex  p-10 ">
                   <img src={whitening} className="w-15 h-15"alt="" /> <div className="flex flex-col items-start">
                        
                        <h4 className="font-semibold text-purple-600">Whitening</h4>
                        <p className="text-gray-500  text-start max-w-lg 10 text-md">
                        Our teeth whitening services use the latest technology and products to brighten your smile, giving you a confident, radiant appearance.
                        </p>
                    </div>
                    <img src={Prosthesis} className="w-15 h-15"alt="" /> 
                    <div className="flex flex-col items-start">
                        <h4 className="font-semibold text-purple-600 ">Prosthesis</h4>
                        <p className="text-gray-500 text-start max-w-lg text-md">
                        Our prosthesis services provide solutions for missing teeth, including bridges, dentures, and implants, for a natural-looking smile.
                        </p>
                    </div>
                </div>
                <button className="group w-auto mt-6 bg-teal-600 cursor-pointer hover:bg-teal-700 text-white p-4 rounded-lg text-lg shadow flex justify-center items-center gap-1">
  View Our Services
  <IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-2" />
</button>

            </div>
        </div>
        <div className="w-300 h-50">
        
      </div>
      
    </section>
    
  );
}

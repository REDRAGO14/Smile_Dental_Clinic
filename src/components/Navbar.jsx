import { FaTiktok, FaInstagram, FaTelegram, FaFacebook, FaArrowRight, } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import clock from '../assets/clock.png'
import phone from '../assets/24-hours.png'
export default function Navbar() {
  return (
    <nav className=" pl-30 pr-30 mt-6 bg-white-200 shadow-xl">
      <div className="nav-head flex  justify-between items-center  mb-5 ">
        <h1 className="text-3xl font-semibold text-gray-700 font-semibold">Smile Specialty Dental Center.</h1>
        <div className="open-hour flex">
          <div></div>
          
          <a href="tel:+251904222324" className='hover:text-teal-500 transition-2s flex'><img src={phone} className="w-10 "alt="" /><p className='font-semibold text-xl grid mr-10 hover:text-teal-500'>  +251 904222324 <span className='text-gray-400 font-small text-sm '>Phone Number</span></p></a>
          <div className="flex">
            <img src={clock} className="w-10 "alt="" />
            <p className='font-semibold text-xl grid '>Monday - Saturday<span  className='text-gray-400 font-small text-sm' > 8:30AM - 6PM</span></p>  
          </div>
          
        </div>
      </div>
      <hr className='w-300  text-gray-300 mb-3'/>
      <div className='nav-bottom sticky top-0 z-50 bg-white flex gap-70 '>
        <div className="nav-list ">
          <ul className='flex gap-6'>
            <li className="cursor-pointer text-gray-700 font-semibold hover:bg-white-600 hover:shadow-2xl p-4 m-0"><a href="#">Home</a></li>
            <li className="cursor-pointer text-gray-700 font-semibold hover:bg-white-600 hover:shadow-2xl p-4 m-0"><a href="#">Services </a></li>
            <li className="cursor-pointer text-gray-700 font-semibold hover:bg-white-600 hover:shadow-2xl p-4 m-0"><a href="#">About us</a></li>
            <li className="cursor-pointer text-gray-700 font-semibold hover:bg-white-600 hover:shadow-2xl p-4 m-0"> <a href="#">FAQ</a></li>
            <li className="cursor-pointer text-gray-700 font-semibold hover:bg-white-600 hover:shadow-2xl p-4 m-0"><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className='nav-bottom-left flex item-center justify-center'>
          <div className='nav-contact flex items-center mr-20 gap-2'>
              <a href="#"><FaFacebook  className="transition-transform duration-300 hover:scale-120 text-purple-600 text-xl"/></a>
              <a href="#"><FaTelegram  className="transition-transform duration-300 hover:scale-120 text-purple-600 text-xl"/></a>
              <a href="#"><FaInstagram className="transition-transform duration-300 hover:scale-120 text-purple-600 text-xl" /></a>
              <a href="#" className="group flex"><FaTiktok  className="transition-transform duration-300 hover:scale-120 text-purple-600 text-xl"/><span className='transition-transform duration-300 group:hover:scale-120 text-gray-600 font-sm text-sm'>TikTok</span></a>
            </div>
          <div>
            <button className='group transition-transform duration-500 p-3 flex item-center justify-center text-gray-200 font-semibold bg-purple-600 rounded   cursor-pointer  shadow-lg'>Book an Appointment <RiCalendarScheduleLine className="transition-transform duration-300 group-hover:translate-y-2"/></button>
          </div>
        </div>
        
      </div>
      
    </nav>
  );
}

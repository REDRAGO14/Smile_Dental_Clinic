import { FaFacebook, FaInstagram, FaPhoneAlt, FaTelegram, FaTiktok } from "react-icons/fa";
import { IoIosArrowUp, IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <>
    <footer className="text-center pl-40 pr-30 p-10 bg-gray-100 flex justify-between">
      <div className="footer-right flex flex-col items-start ">
        <h1 className="text-2xl font-semibold text-purple-500 mb-5">Smile Specialty <span className="text-teal-500">Dental Clinic</span></h1><span className="w-15 h-1 bg-teal-600 "></span>

        <p className="text-gray-800 text-sm p-4">A team of dentists working to ensure you receive the best treatment.</p>
        <ul className="flex flex-col items-start gap-3">
          <li><a href=""className="group flex gap-2 hover:text-gray-900"><span><FaPhoneAlt className="text-purple-500 font-bold text-xl group-hover:text-gray-900" /></span>
+251 904222324
</a></li>
          <li><a href="" className="group flex gap-2 hover:text-gray-900"><span><IoMdMail className="text-purple-500 font-bold  group-hover:text-gray-900 text-xl"/></span>info@smilespecialtydentalclinic.com
</a></li>
          <li><a href="" className="group flex gap-2 hover:text-gray-900"><span><FaFacebook className="text-purple-500 font-bold group-hover:text-gray-900 text-xl"/></span>smilespecialitydental.com</a></li>
        </ul>
      </div>
      <div className="footer-left max-w-150 flex flex-col items-start justify-start gap-6">
        <h1 className="text-2xl font-semibold text-purple-500">Social Networks</h1><span className="w-15 h-1 z-10  bg-teal-600 "></span>
        <p className="text-start">Visit Smile Dental Specialty on these social links and connect with us. Make sure to follow our accounts for regular updates.</p>
    <ul className="flex gap-4">
       <a href="#"><FaFacebook  className="transition-transform duration-300 hover:scale-120 text-purple-600 text-xl"/></a>
                  <a href="#"><FaTelegram  className="transition-transform duration-300 hover:scale-120 text-purple-600 text-xl"/></a>
                  <a href="#"><FaInstagram className="transition-transform duration-300 hover:scale-120 text-purple-600 text-xl" /></a>
                  <a href="#" className="group flex"><FaTiktok  className="transition-transform duration-300 hover:scale-120 text-purple-600 text-xl"/></a>
    </ul>
      </div>
    </footer>
    <div className="bg-blue-600 flex justify-between  p-5 pl-50 pr-50">
      <ul className="gap-2 grid">
        <li>Developed by: <strong>Dagim Yosef</strong>
</li>
        <li>Copyright 2026 by <strong>Smile Specialty Dental Clinic.</strong></li>
        <li>All rights <strong>reserved.</strong></li>
      </ul>
      <div>
        <ul className="flex gap-7">
          <li className="text-white text-lg font-semibold hover:text-blue-200"><a href="#">About us</a></li>
          <li className="text-white text-lg font-semibold hover:text-blue-200"><a href="#">Services</a></li>
          <li className="text-white text-lg font-semibold hover:text-blue-200"><a href="#">FQA</a></li>
          <li className="text-white text-lg font-semibold hover:text-blue-200"><a href="#">Blog</a></li>
          <li className="group text-white text-lg font-semibold hover:text-blue-200"><a href="#" className="flex items-center"><span className="transition-transform duration-300 text-2xl group-hover:-translate-y-1"><IoIosArrowUp /></span>BackToTop</a></li>
        </ul>
      </div>
    </div>
    </>
  );
}

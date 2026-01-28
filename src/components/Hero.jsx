import whitening from "../assets/whiting.png";
import Prosthesis from "../assets/Prosthesis.png";
import chair from "../assets/dentist-chair.png";
import invisible from "../assets/denture.png";
import comfortable from "../assets/diagnostic-tool.png";
import protection from "../assets/dental-insurance.png";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { AnimatePresence, delay, motion } from "framer-motion";

const heroData = [
  {
    title: "Transform Your Smile",
    title2: "Experience confidence with a healthy smile.",
    CoreServiceImg: whitening,
    CoreServiceTit: "Whitening",
    CoreServiceDes:
      "Our teeth whitening services use the latest technology and products to brighten your smile, giving you a confident, radiant appearance.",
    CoreServiceImg2: Prosthesis,
    CoreServiceTit2: "Prosthesis",
    CoreServiceDes2:
      "Our prosthesis services provide solutions for missing teeth, including bridges, dentures, and implants, for a natural-looking smile.",
    bg: "https://smilespecialtydentalclinic.com/wp-content/uploads/2024/07/Home-1.-Experience-confidence-with-a-healthy-smile.updated-1.jpg",
  },
  {
    title: "Compassionate Dental Care",
    title2: "Expert care for your family's dental needs.",
    CoreServiceImg: protection,
    CoreServiceTit: "Full Protection",
    CoreServiceDes:
      "We provide a range of teeth protection options, including mouthguards and custom-fit night guards, to safeguard your teeth from damage.",
    CoreServiceImg2: chair,
    CoreServiceTit2: "Complete Service",
    CoreServiceDes2: "We offer a wide range of dental and related Services.",
    bg: "https://smilespecialtydentalclinic.com/wp-content/uploads/2024/07/Home-3.-Expert-care-for-your-familys-dental-needsupdated.jpg",
  },
  {
    title: "Straighten Your Teeth with Clear Aligners",
    title2: "Invisible Aligners for a Confident Smile",
    CoreServiceImg: invisible,
    CoreServiceTit: "Invisible",
    CoreServiceDes:
      "You can't see them on your teeth, so you can smile and talk with confidence.",
    CoreServiceImg2: comfortable,
    CoreServiceTit2: "Comfortable",
    CoreServiceDes2:
      "They fit your teeth perfectly and don't have any sharp parts, so they don't hurt your mouth.",
    bg: "https://smilespecialtydentalclinic.com/wp-content/uploads/2024/07/Home-2.-Invisible-Aligners-for-a-Confident-Smileupdated.jpg",
  },
];
export default function Hero() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const nextSlide = () => {
    if (sliderIndex < heroData.length - 1) {
      setSliderIndex((prevIndex) => prevIndex + 1);
    } else {
      setSliderIndex(0);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);
  return (
    <section
      className="h-screen flex justify-center items-center bg-cover text-center"
      style={{
        backgroundImage: `url(${heroData[sliderIndex].bg})`,
      }}>
      <div className=" bg-cover bg-center bg-no-repeat hero-section  px-6">
        <div className="hero-section-left mt-60 flex flex-col justify-start items-start p-10 ml-20 mb-15">
          <AnimatePresence mode="wait">
            <motion.div
              className="hero-title flex flex-col items-start"
              key={sliderIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1 }}>
              <h3 className="title font-semibold text-3xl text-teal-600">
                {heroData[sliderIndex].title}
              </h3>

              <div className="title2 mt-4">
                <h2 className="text-7xl font-bold text-left text-purple-600 max-w-xl">
                  {heroData[sliderIndex].title2}
                </h2>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="core-services gap-5 mt-5 flex  p-10 ">
            <AnimatePresence mode="wait">
              <motion.div
                className="core-service1 flex"
                key={sliderIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}>
                <img src={heroData[sliderIndex].CoreServiceImg} className="w-15 h-15" alt="" />{" "}
                <div className="flex flex-col items-start">
                  <h4 className="core-service-title font-semibold text-purple-600">
                    {heroData[sliderIndex].CoreServiceTit}
                  </h4>
                  <p className="core-service-description text-gray-500  text-start max-w-lg 10 text-md">
                    {heroData[sliderIndex].CoreServiceDes}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div className="core-service2 flex"
              key={sliderIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}>
                <img src={heroData[sliderIndex].CoreServiceImg2} className="w-15 h-15" alt="" />
                <div className="flex flex-col items-start">
                  <h4 className="font-semibold text-purple-600 ">
                    {heroData[sliderIndex].CoreServiceTit2}
                  </h4>
                  <p className="text-gray-500 text-start max-w-lg text-md">
                    {heroData[sliderIndex].CoreServiceDes2}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button className="group w-auto mt-6 bg-teal-600 cursor-pointer hover:bg-teal-700 text-white p-4 rounded-lg text-lg shadow flex justify-center items-center gap-1">
            View Our Services
            <IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      </div>
      <div className="w-200 flex flex-col gap-2  items-end mr-20">
        {heroData.map((data, index) => {
          return (
            <span
              onClick={() => setSliderIndex(index)}
              key={index}
              className={`w-2 h-8 bg-gray-400 cursor-pointer hover:bg-teal-600  rounded-sm ${index === sliderIndex && "bg-teal-600 w-4"}`}></span>
          );
        })}
      </div>
    </section>
  );
}
20;

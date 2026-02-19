import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Doctors from "./components/Docters";
import Footer from "./components/Footer";
import ExperienceSection from "./components/About";
import TransformationGallery from "./components/Transformation";
import GoogleReviews from "./components/GoogleReviews";
import ContactLocation from "./components/Contact";

export default function App() {
  return (
    < >
    <div >
      <Navbar />
      <Hero />
      <Services/>
      <ExperienceSection />
      <TransformationGallery />
      <GoogleReviews />
      <Doctors />
      <ContactLocation />
      <Footer />
    </div>
    </>
  );
}

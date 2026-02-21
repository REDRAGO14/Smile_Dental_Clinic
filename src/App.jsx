import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Doctors from "./components/Docters";
import Footer from "./components/Footer";
import ExperienceSection from "./components/About";
import TransformationGallery from "./components/Transformation";
import GoogleReviews from "./components/GoogleReviews";
import ContactLocation from "./components/Contact";
import FAQ from "./components/FAQ";
import ReceptionistDashboard from "./page/ReceptionistDashboard";

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Services/>
    <ExperienceSection />
    <TransformationGallery />
    <GoogleReviews />
    <Doctors />
    <FAQ />
    <ContactLocation />
    <Footer />
  </>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the main website */}
        <Route path="/" element={<Home />} />

        {/* Route for the dashboard */}
        <Route path="/dashboard" element={<ReceptionistDashboard />} />
      </Routes>
    </Router>
  );
}
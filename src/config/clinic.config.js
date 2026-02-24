import whitening from "../assets/whiting.png";
import Prosthesis from "../assets/Prosthesis.png";
import chair from "../assets/dentist-chair.png";
import invisible from "../assets/denture.png";
import comfortable from "../assets/diagnostic-tool.png";
import protection from "../assets/dental-insurance.png";
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaTiktok, FaFacebook, FaTelegram } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi";
import { FaLinkedinIn, FaGraduationCap } from "react-icons/fa";

export const CLINIC_CONFIG = {
  branding: {
    name: "YOMA",
    suffix: "Specialty",
    legalName: "YOMA Specialty Dental Clinic",
    description: "Redefining dental artistry in Ethiopia. Where clinical precision meets a world-class luxury experience.",
    colors: {
      primary: "blue-500",
      secondary: "#2D83E8",
      accent: "#2D83E8",
      bgDark: "blue-500",
        highlight: "#2D83E8",
    },
    socials: [
      { Icon: FaInstagram, url: "https://www.instagram.com/yoma_speciality_dental_clinic/profilecard/" },
      { Icon: FaFacebookF, url: "https://web.facebook.com/profile.php?id=100086603682965&sk=about" },
      { Icon: FaTelegramPlane, url: "https://t.me/YomaDental" },
      { Icon: FaTiktok, url: "https://www.tiktok.com/@yoma_dental_clinic_1?is_from_webapp=1&sender_device=pc" },
    ],
  },
  navigation: [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About us", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Transformation", href: "#transformation" },
  ],
  socials: [
    { icon: FaFacebook, href: "https://web.facebook.com/profile.php?id=100086603682965&sk=about", name: "Facebook" },
    { icon: FaTelegram, href: "https://t.me/YomaDental", name: "Telegram" },
    { icon: FaInstagram, href: "https://www.instagram.com/yoma_speciality_dental_clinic/profilecard/", name: "Instagram" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@yoma_dental_clinic_1?is_from_webapp=1&sender_device=pc", name: "Tiktok" },
  ],
  contactSection: {
    form: {
      badge: "Private Consultation",
      title: "Begin Your",
      subtitle: "Transformation.",
      buttonText: "Book Appointment",
      loadingText: "Processing...",
      successMessage: "Journey begun. Our Clinic will call you Shortly.",
      errorMessage: "Submission failed. Please check details.",
      serverOfflineMessage: "Clinic server is offline.",
      services: [
        "Cosmetic Artistry",
        "Orthodontic Precision",
        "Implantology",
        "Dental Hygiene",
        "Root Treatment"
      ]
    },
    info: {
      title: "Our Center",
      location: {
        label: "Location",
        address: "📍ቁጥር 1 - ለቡ መብራት ኃይል",
        address2: "📍ቁጥር 2 - ላፍቶ",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5008.684881827828!2d38.72985731154037!3d8.948150891072956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b81c5f8558165%3A0x69fefdedf09bae1d!2zWU9NQSBTUEVDSUFMVFkgREVOVEFMIENMSU5JQyDhi67hiJsg4Yi14Y2U4Yi74YiK4YmyIOGLqOGMpeGIreGItSDhiIXhiq3hiJ3hipMg4Yqt4YiK4YqS4Yqt!5e1!3m2!1sen!2set!4v1771970574818!5m2!1sen!2set"
      },
      concierge: {
        label: "Concierge",
        phone: "0940 - 37 77 770"
      }
    },
    validation: {
      nameMinLength: 3,
      nameError: "Name is too short",
      emailError: "Enter a valid email",
      phoneError: "Use format: 0911223344",
      // Ethiopian format validation
      phoneRegex: /^(\+251|0)(9|7)\d{8}$/
    }
  },

  faqs: {
    badge: "Support & Care",
    title: "Frequently",
    subtitle: "Asked.",
    description: "Find immediate answers regarding our bespoke services, scheduling, and clinical protocols.",
    conciergeNote: "If your inquiry remains unaddressed, our concierge staff is available for direct assistance.",
    questions: [
      { 
        question: "Why is visiting the dentist so important?", 
        answer: "Regular visits maintain not only oral health but systemic wellness. Professional care prevents decay, protects against periodontal disease, and preserves the artistry of your smile for long-term functional strength." 
      },
      { 
        question: "My teeth feel fine. Do I still need to see a dentist?", 
        answer: "Problems can exist without symptoms. Beyond prevention, regular checkups allow us to offer aesthetic enhancements—from mimicry fillings to full smile makeovers—ensuring your confidence matches your health." 
      },
      { 
        question: "What should I look for when choosing the right dentist?", 
        answer: "Look for a clinical environment that prioritizes excellence, cleanliness, and clear communication. We ensure all treatment costs and techniques are explained thoroughly before your journey begins." 
      },
      { 
        question: "How can I take care of my teeth between dental checkups?", 
        answer: "Maintain a ritual of brushing twice daily with fluoride toothpaste and flossing once. Avoid high-sugar intake to limit plaque bacteria, and remember to schedule a professional concierge checkup every six months." 
      },
      { 
        question: "At what age should I start taking my child to the dentist?", 
        answer: "The AAPD recommends the first visit by age one. Early examination of emerging baby teeth sets the foundation for a lifetime of oral health and positive associations with dental care." 
      },
    ],
  },
  footer: {
    sections: [
      {
        title: "The Experience",
        links: ["Digital smile Design", "Our Specialists", "Boutique Gallery", "Patient Stories"],
      },
      {
        title: "Concierge",
        links: ["Private Booking", "Virtual Assessment", "International Clients", "Care Assistance"],
      },
    ],
    hours: {
      title: "Clinical Hours",
      schedule: [
        { day: "Mon — Fri", time: "09:00 — 19:00" },
        { day: "Saturday", time: "10:00 — 16:00" },
      ],
      closedText: "Closed Sundays",
    },
    legal: {
      privacyLabel: "Privacy",
      termsLabel: "Terms",
      location: "Addis Ababa",
    }
  },
  contact: {
    phone: "+251 911 000 000",
    email: "concierge@smilespecialty.com",
    address: "123 smile Plaza, Bole District, Addis Ababa",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.553254924558!2d38.786938!3d9.0142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnNTEuMSJOIDM4wrA0NycxMy4wIkU!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set", // Replace with real embed URL
    hours: [
      { days: "Mon — Fri", time: "09:00 — 19:00" },
      { days: "Saturday", time: "10:00 — 16:00" },
      { days: "Sunday", time: "Closed" },
    ],
  },
  transformations: {
    title: "Transformative",
    subtitle: "Results.",
    badge: "Clinical Excellence",
    autoPlayDuration: 6000,
    cases: [
      {
        id: "whitening",
        tabLabel: "Laser Whitening",
        procedure: "Deep Stain Removal",
        duration: "1 Session",
        before:
          "https://i.ibb.co/wNHN4Hy5/Gemini-Generated-Image-mq2f3qmq2f3qmq2f.webp",
        after: "https://i.ibb.co/Z6G9F5wC/image.png",
      },
      {
        id: "veneers",
        tabLabel: "Porcelain Veneers",
        procedure: "Full smile Design",
        duration: "2 Weeks",
        before: "https://i.ibb.co/MQHrtx8/image.png",
        after: "https://i.ibb.co/n86hYMRG/image.png",
      },
      {
        id: "aligners",
        tabLabel: "Clear Aligners",
        procedure: "Orthodontic Realignment",
        duration: "8 Months",
        before: "https://i.ibb.co/nq5VkkLS/image.png",
        after: "https://i.ibb.co/CsnTdkcD/image.png",
      },
    ],
  },
  reviews: {
    rating: "4.9/5",
    count: "500+",
    data: [
      {
        name: "Abebe Kebede",
        text: "The best dental experience in Addis. Truly world-class.",
        rating: 5,
        date: "2 days ago",
      },
      {
        name: "Martha Tadesse",
        text: "Dr. Selamawit and her team are artists. Result is so natural.",
        rating: 5,
        date: "1 week ago",
      },
      {
        name: "Samuel L.",
        text: "Very professional and clean clinic. No pain at all.",
        rating: 5,
        date: "3 weeks ago",
      },
      {
        name: "Hanna M.",
        text: "The environment is so calming and luxury.",
        rating: 5,
        date: "1 month ago",
      },
    ],
  },
  faqs: {
    badge: "Support & Care",
    title: "Frequently",
    subtitle: "Asked.",
    description:
      "Find immediate answers regarding our bespoke services, scheduling, and clinical protocols.",
    conciergeNote:
      "If your inquiry remains unaddressed, our concierge staff is available for direct assistance.",
    questions: [
      {
        question: "Why is visiting the dentist so important?",
        answer:
          "Regular visits maintain not only oral health but systemic wellness.",
      },
      {
        question: "My teeth feel fine. Do I still need to see a dentist?",
        answer:
          "Problems can exist without symptoms. Beyond prevention, we offer aesthetic enhancements.",
      },
      {
        question: "What should I look for when choosing the right dentist?",
        answer:
          "Look for a clinical environment that prioritizes excellence, cleanliness, and clear communication.",
      },
      {
        question: "How can I take care of my teeth between dental checkups?",
        answer: "Maintain a ritual of brushing twice daily and flossing once.",
      },
      {
        question: "At what age should I start taking my child to the dentist?",
        answer: "The AAPD recommends the first visit by age one.",
      },
    ],
  },
  booking: {
    endpoint: "http://localhost:3000/api/booking",
    services: ["Cosmetic Artistry", "Orthodontic Precision", "Implantology"],
    messages: {
      success: "Journey begun. Our concierge will call you.",
      error: "Submission failed. Please check details.",
      offline: "Clinic server is offline.",
    },
  },
  hero: {
    interval: 6000,
    ctaText: "Explore Our Services",
    slides: [
      {
        title: "Transform Your smile",
        title2: "Experience confidence with a healthy smile.",
        services: [
          { img: whitening, tit: "Whitening", des: "Latest technology for a radiant appearance." },
          { img: Prosthesis, tit: "Prosthesis", des: "Natural-looking solutions for missing teeth." },
        ],
        bg: "https://smilespecialtydentalclinic.com/wp-content/uploads/2024/07/Home-1.-Experience-confidence-with-a-healthy-smile.updated-1.jpg",
      },
      {
        title: "Compassionate Care",
        title2: "Expert care for your family's dental needs.",
        services: [
          { img: protection, tit: "Full Protection", des: "Custom guards to safeguard your teeth." },
          { img: chair, tit: "Complete Service", des: "A wide range of dental and related services." },
        ],
        bg: "https://smilespecialtydentalclinic.com/wp-content/uploads/2024/07/Home-3.-Expert-care-for-your-familys-dental-needsupdated.jpg",
      },
      {
        title: "Clear Aligners",
        title2: "Invisible Aligners for a Confident smile",
        services: [
          { img: invisible, tit: "Invisible", des: "smile and talk with complete confidence." },
          { img: comfortable, tit: "Comfortable", des: "Perfect fit with no sharp parts or pain." },
        ],
        bg: "https://smilespecialtydentalclinic.com/wp-content/uploads/2024/07/Home-2.-Invisible-Aligners-for-a-Confident-Smileupdated.jpg",
      },
    ],
  },
   servicesSection: {
    badge: "Our Commitment to Artistry",
    title: "Clinical",
    subtitle: "Excellence.",
    description: "We blend medical precision with aesthetic vision to redefine the standard of modern dental care.",
    ctaText: "Book Appointment",
    viewAllText: "View All Procedures",
    items: [
      {
        category: "Patient Oriented Service",
        title: "DENTAL HYGIENE",
        description: "Professional cleaning and preventive care for healthy teeth and gums using boutique methods.",
        image: "https://smilespecialtydentalclinic.com/wp-content/uploads/2024/07/Home-4.-DENTAL-HYGIENE.jpg",
      },
      {
        category: "Cosmetic Dentistry",
        title: "RESTORATIVE CARE",
        description: "Expertly crafted crowns and veneers designed for a perfect, natural-looking smile.",
        image: "https://smilespecialtydentalclinic.com/wp-content/uploads/2024/07/Home-5.-RESTORATIVE-DENTISTRY-1.jpg",
      },
      {
        category: "Endodontics",
        title: "ROOT TREATMENT",
        description: "Advanced root canal therapy to save and restore damaged teeth with minimal discomfort.",
        image: "https://smilespecialtydentalclinic.com/wp-content/uploads/2024/07/Home-6.-ROOT-CANAL-TREATMENT-640x427.jpg",
      },
      {
        category: "Prosthodontics",
        title: "PROSTHETIC ART",
        description: "Custom dentures and bridges to restore function and confidence through dental artistry.",
        image: "https://smilespecialtydentalclinic.com/wp-content/uploads/2024/07/Home-7.-PROSTHETIC-DENTISTRY-640x427.jpg",
      },
    ],
  },
  aboutSection: {
    badge: "Premium Dental Experience",
    title: "Bespoke Artistry.",
    subtitle: "Digital Precision.",
    description: "We leverage Digital smile Design technology to craft results that are as unique as you are.",
    mainImage: "https://smilespecialtydentalclinic.com/wp-content/uploads/2024/07/Home-9.-Book-Your-Visit-At-2-scaled.jpg",
    ctaText: "Discover Our Philosophy",
    features: [
      "Digital smile Design (DSD) Technology",
      "Ultra-Private Treatment Suites",
      "Advanced Sedation for Total Comfort"
    ],
    stats: [
      { label: "Successful Procedures", value: 12000, suffix: "+" },
      { label: "Expert Specialists", value: 15, suffix: "" },
      { label: "Patient Satisfaction", value: 99, suffix: "%" },
      { label: "Years of Excellence", value: 25, suffix: "" },
    ],
  },
  doctorsSection: {
    badge: "World-Class Expertise",
    title: "Meet Our",
    subtitle: "Specialists.",
    description: "Our team of board-certified specialists is dedicated to the artistry of your smile and the precision of your care.",
    viewProfileText: "View Full Profile",
    practitioners: [
      {
        name: "Dr. Selamawit Moges",
        role: "Senior Orthodontist",
        description: "Dr. Selamawit provides exceptional dental care, using the latest techniques and technology to ensure patient satisfaction.",
        image: "https://smilespecialtydentalclinic.com/wp-content/uploads/2023/04/selam-profile--640x640.jpg",
      },
      {
        name: "Dr. Aschalew Tesfaye",
        role: "Orthodontist",
        description: "A skilled orthodontist delivering exceptional patient care and expertise utilizing advanced techniques for optimal results.",
        image: "https://smilespecialtydentalclinic.com/wp-content/uploads/2023/04/doc-3-640x640.jpg",
      },
      {
        name: "Dr. Tsion Wossenu",
        role: "Doctor of Dental Surgery",
        description: "A skilled DDS professional providing exceptional care and applying advanced dental techniques to achieve optimal results.",
        image: "https://smilespecialtydentalclinic.com/wp-content/uploads/2023/04/doc-4-640x640.jpg",
      },
    ],
  },
};

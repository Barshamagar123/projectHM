import React from 'react'
import Navbar from '../../Components/Common/Navbar/Navbar'
import HeroSection from '../../Components/HeroSection/Herosection'
import AboutSection from '../../Components/AboutUs/AboutSection'
import ProgramsSection from '../../Components/ProgramsSection/ProgramsSection'
import DepartmentsSection from '../../Components/DepartmentsSection/DepartmentsSection'
import FeaturesSection from '../../Components/FeaturesSection/FeaturesSection'
import GallerySection from '../../Components/GallerySection/GallerySection'
import EventsSection from '../../Components/EventsSection/EventsSection'
import TestimonialsSection from '../../Components/TestimonialsSection/TestimonialsSection'
import Footer from '../../Components/Common/Footer/Footer'
import CTASection from '../../Components/CTASection/CTASection'

const Homepage = () => {
// const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//  const [scrolled, setScrolled] = useState(false);
  return (

    <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProgramsSection />
    <DepartmentsSection />
    <FeaturesSection />
    <GallerySection />
    <EventsSection />
    <TestimonialsSection />
    <CTASection />
    <Footer />


    </>
   
  )
}

export default Homepage

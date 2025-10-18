import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import HolidayPackages from './components/HolidayPackages';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import LocationAndBranches from './components/LocationAndBranches';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleBookNowClick = () => {
    const servicesElement = document.getElementById('services');
    servicesElement?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleBookServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  return (
    <div className="bg-black font-['Tajawal'] text-white" dir="rtl">
      <Header />
      <main>
        <Hero onBookNowClick={handleBookNowClick} />
        <Services onBookServiceClick={handleBookServiceClick} />
        <Packages onBookServiceClick={handleBookServiceClick} />
        <HolidayPackages onBookServiceClick={handleBookServiceClick} />
        <About />
        <Testimonials />
        <FAQ />
        <LocationAndBranches />
      </main>
      <Footer />
      <BookingModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        serviceName={selectedService}
      />
    </div>
  );
}

export default App;
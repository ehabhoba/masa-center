import React, { useState, useEffect, useRef } from 'react';
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
import ServiceDetailModal from './components/ServiceDetailModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTopButton from './components/BackToTopButton';
import Preloader from './components/Preloader';
import WhyChooseUs from './components/WhyChooseUs';
import GiftVouchers from './components/GiftVouchers';
import Team from './components/Team';
import Membership from './components/Membership';
import Blog from './components/Blog'; // Import the new component
import ArticleModal from './components/ArticleModal'; // Import the new component
import { Service, Article } from './types';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false); // New state for article modal
  const [selectedService, setSelectedService] = useState('');
  const [serviceForDetail, setServiceForDetail] = useState<Service | null>(null);
  const [articleForDetail, setArticleForDetail] = useState<Article | null>(null); // New state for article detail
  
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200); // Increased duration for a more graceful preloader
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = appRef.current?.querySelectorAll('.section-animate');
    sections?.forEach((section) => observer.observe(section));

    return () => {
      sections?.forEach((section) => observer.unobserve(section));
    };
  }, [isLoading]);


  const handleBookNowClick = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleBookServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedService('');
  };

  const handleViewServiceDetails = (service: Service) => {
    setServiceForDetail(service);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setTimeout(() => setServiceForDetail(null), 300);
  };

  const handleViewArticleDetails = (article: Article) => {
    setArticleForDetail(article);
    setIsArticleModalOpen(true);
  };

  const handleCloseArticleModal = () => {
    setIsArticleModalOpen(false);
    setTimeout(() => setArticleForDetail(null), 300);
  };

  return (
    <>
      <Preloader isLoading={isLoading} />
      <div 
        ref={appRef}
        className={`bg-black font-['Tajawal'] text-white transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
        dir="rtl"
      >
        <Header />
        <main>
          <Hero onBookNowClick={handleBookNowClick} />
          <Services onServiceCardClick={handleViewServiceDetails} />
          <Packages onBookServiceClick={handleBookServiceClick} />
          <HolidayPackages onBookServiceClick={handleBookServiceClick} />
          <GiftVouchers onBookServiceClick={handleBookServiceClick} />
          <Membership onBookServiceClick={handleBookServiceClick} />
          <About />
          <WhyChooseUs />
          <Team />
          <Testimonials />
          <Blog onViewArticleDetails={handleViewArticleDetails} />
          <FAQ />
          <LocationAndBranches />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTopButton />
        <BookingModal 
          isOpen={isBookingModalOpen}
          onClose={handleCloseBookingModal}
          serviceName={selectedService}
        />
        <ServiceDetailModal
          isOpen={isDetailModalOpen}
          onClose={handleCloseDetailModal}
          service={serviceForDetail}
          onBookServiceClick={handleBookServiceClick}
        />
        <ArticleModal
          isOpen={isArticleModalOpen}
          onClose={handleCloseArticleModal}
          article={articleForDetail}
        />
      </div>
    </>
  );
}

export default App;
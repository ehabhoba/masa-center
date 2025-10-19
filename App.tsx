
import React, { useState, useEffect, useRef, useCallback } from 'react';
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
import Careers from './components/Branches'; // Renamed import for Careers component
import Membership from './components/Membership';
import Blog from './components/Blog';
import ArticleModal from './components/ArticleModal';
import PrivacyPolicy from './components/PrivacyPolicy'; // Import the new component
import { Service, Article } from './types';
import HomeServices from './components/HomeServices';

// Fix for TypeScript error: Property 'adsbygoogle' does not exist on type 'Window & typeof globalThis'.
// This declaration extends the global Window interface to include the adsbygoogle property,
// which is added by the Google AdSense script.
declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

// AdSense Component to display an ad unit
const AdSenseUnit = () => {
    useEffect(() => {
        try {
            // This is safe to run even if the adsbygoogle script is not loaded yet.
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error("AdSense error:", err);
        }
    }, []);

    return (
        <div className="container mx-auto my-8 text-center section-animate">
             {/* 
                ملاحظة هامة: الرجاء استبدال "YOUR_AD_SLOT_ID" بمعرف شفرة الوحدة الإعلانية الفعلي من حسابك في AdSense.
                هذا مجرد عنصر نائب ولن يعرض إعلانًا حقيقيًا بدونه.
             */}
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-4442626272315276"
                data-ad-slot="YOUR_AD_SLOT_ID" 
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false); // New state for privacy modal
  const [selectedService, setSelectedService] = useState('');
  const [serviceForDetail, setServiceForDetail] = useState<Service | null>(null);
  const [articleForDetail, setArticleForDetail] = useState<Article | null>(null);
  
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
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

  const handleOpenPrivacyModal = useCallback(() => setIsPrivacyModalOpen(true), []);
  const handleClosePrivacyModal = useCallback(() => setIsPrivacyModalOpen(false), []);

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
          <HomeServices onBookServiceClick={handleBookServiceClick} />
          <Membership onBookServiceClick={handleBookServiceClick} />
          <About />
          <WhyChooseUs />
          <Team />
          <Careers onBookServiceClick={handleBookServiceClick} />
          <Testimonials />
          <AdSenseUnit />
          <Blog onViewArticleDetails={handleViewArticleDetails} />
          <FAQ />
          <LocationAndBranches />
        </main>
        <Footer onPrivacyPolicyClick={handleOpenPrivacyModal} />
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
        <PrivacyPolicy
          isOpen={isPrivacyModalOpen}
          onClose={handleClosePrivacyModal}
        />
      </div>
    </>
  );
}

export default App;

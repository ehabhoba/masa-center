
import React, { useState, useEffect, useCallback } from 'react';

interface HeroProps {
  onBookNowClick: () => void;
}

const heroImages = [
  'https://i.ibb.co/k2B1GZn/pexels-yan-krukau-8538743.jpg',
  'https://i.ibb.co/gDFvL8L/pexels-good-feelings-3768916.jpg',
  'https://i.ibb.co/bJCz5C2/pexels-gabby-k-5938349.jpg',
  'https://i.ibb.co/g9LkTsc/pexels-monstera-production-7249399.jpg',
];

const Hero: React.FC<HeroProps> = ({ onBookNowClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  }, []);
  
  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[70vh] md:h-screen overflow-hidden">
      {/* Image Slider Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)`, zIndex: 1 }}
      >
        {heroImages.map((image) => (
          <div
            key={image}
            className="flex-shrink-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            aria-label="Hero background image"
            role="img"
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight drop-shadow-lg animate-fade-in-down">
          تجربة استرخاء فريدة في مركز ماسة
        </h1>
        <p className="text-md sm:text-lg md:text-xl max-w-3xl mb-8 drop-shadow-md animate-fade-in-up">
          المكان الأمثل للعناية بجسمك وتجديد نشاطك بأيدي متخصصين، حيث تلتقي الفخامة بالاحترافية.
        </p>
        <button
          onClick={onBookNowClick}
          className="bg-amber-500 text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-xl animate-fade-in-up animate-gentle-pulse">
          احجز جلستك الآن
        </button>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 z-30 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-colors"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 z-30 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-colors"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2 rtl:space-x-reverse">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-amber-400 scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;

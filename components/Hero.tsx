import React from 'react';

interface HeroProps {
  onBookNowClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNowClick }) => {
  return (
    <section 
      className="relative h-[70vh] md:h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://i.postimg.cc/NjrHvVHN/Pink-Beauty-Wellness-Spa-Facebook-Cover.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
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
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in-up opacity-0 [animation-delay:1.2s]">
        <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </section>
  );
};

export default Hero;
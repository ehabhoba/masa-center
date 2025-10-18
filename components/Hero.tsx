import React from 'react';

interface HeroProps {
  onBookNowClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNowClick }) => {
  return (
    <section 
      className="relative h-[70vh] md:h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: 'url(https://i.postimg.cc/NjrHvVHN/Pink-Beauty-Wellness-Spa-Facebook-Cover.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg animate-fade-in-down">
          تجربة استرخاء فريدة في مركز ماسة
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md animate-fade-in-up">
          المكان الأمثل للعناية بجسمك وتجديد نشاطك بأيدي متخصصين.
        </p>
        <button
          onClick={onBookNowClick}
          className="bg-amber-500 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-xl animate-bounce-in">
          احجز جلستك الآن
        </button>
      </div>
    </section>
  );
};

export default Hero;
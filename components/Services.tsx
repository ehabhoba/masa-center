import React, { useState } from 'react';
import { serviceCategories } from '../constants';
import { Service, ServiceCategory } from '../types';

interface ServicesProps {
  onServiceCardClick: (service: Service) => void;
}

const ServiceCard: React.FC<{ service: Service, onCardClick: (service: Service) => void }> = React.memo(({ service, onCardClick }) => (
  <div 
    onClick={() => onCardClick(service)}
    className="group bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden flex flex-col h-full cursor-pointer card-glow-effect border border-gray-700/50"
    role="button"
    tabIndex={0}
    onKeyPress={(e) => e.key === 'Enter' && onCardClick(service)}
    aria-label={`View details for ${service.name}`}
  >
    <div className="h-48 overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
          loading="lazy"
        />
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{service.name}</h3>
        <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-700">
          <div className="flex justify-between items-center text-sm text-gray-300">
              <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline text-amber-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {service.duration}
              </span>
              <span className="text-amber-400 font-semibold flex items-center group-hover:text-white transition-colors">
                عرض التفاصيل
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </span>
          </div>
      </div>
    </div>
  </div>
));

const Services: React.FC<ServicesProps> = ({ onServiceCardClick }) => {
  const [activeFilter, setActiveFilter] = useState('الكل');

  const allServicesTitle = 'الكل';
  const categoryTitles = serviceCategories.map(c => c.title);
  const filters = [allServicesTitle, ...categoryTitles];
  
  const filteredCategories = activeFilter === allServicesTitle
    ? serviceCategories
    : serviceCategories.filter(category => category.title === activeFilter);

  return (
    <section id="services" className={`py-16 sm:py-20 bg-black section-animate`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">خدماتنا المتكاملة</h2>
          <p className="mt-4 text-lg text-gray-300">نقدم مجموعة شاملة من خدمات المساج والعناية الرجالية بأعلى معايير الجودة</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-amber-500/20 hover:text-amber-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredCategories.map((category: ServiceCategory, index: number) => (
          <div key={category.title} className="mb-16 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`, opacity: 1}}>
             {activeFilter === 'الكل' && (
              <h3 className="text-2xl font-bold text-center text-amber-400 mb-8 border-b-2 border-amber-800 pb-2 max-w-md mx-auto">{category.title}</h3>
             )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {category.services.map((service: Service) => (
                <ServiceCard key={service.name} service={service} onCardClick={onServiceCardClick}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
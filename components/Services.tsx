import React from 'react';
import { serviceCategories } from '../constants';
import { Service, ServiceCategory } from '../types';

interface ServicesProps {
  onBookServiceClick: (serviceName: string) => void;
}

const ServiceCard: React.FC<{ service: Service, onBookServiceClick: (serviceName: string) => void }> = ({ service, onBookServiceClick }) => (
  <div className="group bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
        <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-700">
          <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
              <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {service.duration}
              </span>
              <span className="font-bold text-amber-400 text-base">
                  {service.price}
              </span>
          </div>
          <button 
            onClick={() => onBookServiceClick(service.name)}
            className="w-full bg-amber-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-amber-400 transition-colors duration-300">
            حجز هذه الخدمة
          </button>
      </div>
    </div>
  </div>
);

const Services: React.FC<ServicesProps> = ({ onBookServiceClick }) => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">خدماتنا المتكاملة</h2>
          <p className="mt-4 text-lg text-gray-300">نقدم مجموعة شاملة من خدمات المساج والعناية الرجالية بأعلى معايير الجودة</p>
        </div>

        {serviceCategories.map((category: ServiceCategory) => (
          <div key={category.title} className="mb-16">
            <h3 className="text-2xl font-bold text-center text-amber-400 mb-8 border-b-2 border-amber-800 pb-2 max-w-md mx-auto">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {category.services.map((service: Service) => (
                <ServiceCard key={service.name} service={service} onBookServiceClick={onBookServiceClick}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
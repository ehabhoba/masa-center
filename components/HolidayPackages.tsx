import React from 'react';
import { holidayPackages } from '../constants';
import { HolidayPackage } from '../types';

interface HolidayPackagesProps {
  onBookServiceClick: (serviceName: string) => void;
}

const HolidayPackageCard: React.FC<{ pkg: HolidayPackage, onBookServiceClick: (serviceName:string) => void }> = React.memo(({ pkg, onBookServiceClick }) => (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden group transition-all duration-300 flex flex-col md:flex-row relative card-glow-effect border border-gray-700/50">
      <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg z-10 animate-pulse">
        عرض خاص
      </div>
      <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
        <img 
          src={pkg.imageUrl} 
          alt={pkg.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
          loading="lazy"
          decoding="async"
          width="1024"
          height="1024"
        />
      </div>
      <div className="p-6 flex flex-col justify-between md:w-2/3">
          <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">{pkg.name}</h3>
              <p className="text-gray-300 mb-4">{pkg.description}</p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{pkg.duration}</span>
              </div>
              <div className="border-t border-gray-700 pt-3 mt-3">
                <h4 className="text-md font-semibold text-white mb-2">تشمل الباقة:</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  {pkg.servicesIncluded.map(service => (
                    <li key={service} className="flex items-center">
                      <svg className="w-4 h-4 text-green-400 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
          </div>
          <div className="flex items-center justify-end mt-6">
              <button 
                  onClick={() => onBookServiceClick(pkg.name)}
                  className="w-full sm:w-auto bg-amber-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/40">
                  احجز هذا العرض
              </button>
          </div>
      </div>
    </div>
));


const HolidayPackages: React.FC<HolidayPackagesProps> = ({ onBookServiceClick }) => {
  return (
    <section id="holiday-packages" className={`py-16 sm:py-20 bg-black section-animate`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">عروض الأعياد والمناسبات</h2>
          <p className="mt-4 text-lg text-gray-300">دلل نفسك أو من تحب بباقاتنا الموسمية الخاصة.</p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {holidayPackages.map((pkg: HolidayPackage) => (
            <HolidayPackageCard key={pkg.name} pkg={pkg} onBookServiceClick={onBookServiceClick}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolidayPackages;
import React from 'react';
import { packages } from '../constants';
import { Package } from '../types';

interface PackagesProps {
  onPackageCardClick: (pkg: Package) => void;
}

const PackageCard: React.FC<{ pkg: Package, onCardClick: (pkg: Package) => void }> = React.memo(({ pkg, onCardClick }) => (
    <div 
      onClick={() => onCardClick(pkg)}
      className="group bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden flex flex-col h-full border border-gray-700/50 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onCardClick(pkg)}
      aria-label={`View details for ${pkg.name}`}
    >
        <div className="h-56 overflow-hidden">
          <img 
            src={pkg.imageUrl} 
            alt={pkg.name} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex flex-col justify-between flex-grow">
            <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">{pkg.name}</h3>
                <p className="text-gray-300 mb-4">{pkg.description}</p>
                 <div className="flex items-center text-sm text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{pkg.duration}</span>
                </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-700">
                <span className="text-amber-400 font-semibold flex items-center justify-end group-hover:text-white transition-colors">
                    عرض تفاصيل الباقة
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </span>
            </div>
        </div>
    </div>
));


const Packages: React.FC<PackagesProps> = ({ onPackageCardClick }) => {
  return (
    <section id="packages" className="py-16 sm:py-20 bg-gray-900 section-animate bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
      <div className="absolute inset-0 bg-gray-900/80"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">الباقات والعروض الخاصة</h2>
          <p className="mt-4 text-lg text-gray-300">استمتع بتجارب متكاملة بأسعار لا تقاوم.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg: Package) => (
            <PackageCard key={pkg.name} pkg={pkg} onCardClick={onPackageCardClick}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
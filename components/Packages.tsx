import React from 'react';
import { packages } from '../constants';
import { Package } from '../types';

interface PackagesProps {
  onBookServiceClick: (serviceName: string) => void;
}

const PackageCard: React.FC<{ pkg: Package, onBookServiceClick: (serviceName:string) => void }> = ({ pkg, onBookServiceClick }) => (
    <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden group border border-amber-800/50 p-6 flex flex-col justify-between">
        <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-3">{pkg.name}</h3>
            <p className="text-gray-300 mb-4">{pkg.description}</p>
             <div className="flex items-center text-sm text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{pkg.duration}</span>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mt-4 gap-4">
            <div className="text-center sm:text-left">
                <span className="text-xl font-bold text-gray-400 line-through">{pkg.originalPrice}</span>
                <p className="text-3xl font-bold text-green-400">{pkg.discountedPrice}</p>
            </div>
            <button 
                onClick={() => onBookServiceClick(pkg.name)}
                className="w-full sm:w-auto bg-amber-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-amber-400 transition-colors duration-300 transform hover:scale-105">
                احجز هذه الباقة
            </button>
        </div>
    </div>
);


const Packages: React.FC<PackagesProps> = ({ onBookServiceClick }) => {
  return (
    <section id="packages" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">الباقات والعروض الخاصة</h2>
          <p className="mt-4 text-lg text-gray-300">استمتع بتجارب متكاملة بأسعار لا تقاوم.</p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {packages.map((pkg: Package) => (
            <PackageCard key={pkg.name} pkg={pkg} onBookServiceClick={onBookServiceClick}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
import React, { useEffect } from 'react';
import { Package } from '../types';

interface PackageDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: Package | null;
  onBookServiceClick: (serviceName: string) => void;
}

const PackageDetailModal: React.FC<PackageDetailModalProps> = ({ isOpen, onClose, pkg, onBookServiceClick }) => {
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!pkg) {
    return null;
  }
  
  const handleBookClick = () => {
    onBookServiceClick(pkg.name);
    onClose(); 
  }

  return (
    <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
        
        <div 
            className={`bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="package-title"
        >
            <div className="relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 z-20 text-gray-300 bg-black/50 rounded-full p-1 hover:text-white transition-colors"
                    aria-label="إغلاق"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto min-h-[300px]">
                        <img 
                            src={pkg.imageUrl} 
                            alt={pkg.name}
                            className="absolute inset-0 w-full h-full object-cover rounded-t-xl lg:rounded-r-none lg:rounded-l-xl"
                            loading="lazy"
                        />
                    </div>

                    <div className="p-8 flex flex-col">
                        <h2 id="package-title" className="text-3xl font-bold text-amber-400 mb-4">{pkg.name}</h2>
                        <p className="text-gray-300 mb-6">{pkg.description}</p>
                        
                        <div className="flex items-center text-lg text-gray-200 mb-6 border-t border-gray-700 pt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>المدة الإجمالية: <span className="font-bold">{pkg.duration}</span></span>
                        </div>
                        
                        <div className="mb-8 flex-grow">
                           {pkg.servicesIncluded && pkg.servicesIncluded.length > 0 && (
                             <>
                                <h4 className="text-md font-semibold text-white mb-3">تشمل الباقة:</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                  {pkg.servicesIncluded.map(service => (
                                    <li key={service.name} className="flex justify-between items-center border-b border-gray-800 pb-2">
                                      <span className="flex items-center">
                                        <svg className="w-4 h-4 text-green-400 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        {service.name}
                                      </span>
                                      <span className="font-mono text-gray-400">{service.duration}</span>
                                    </li>
                                  ))}
                                </ul>
                             </>
                           )}
                        </div>


                        <button
                            onClick={handleBookClick}
                            className="w-full mt-auto bg-amber-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-amber-400 transition-colors duration-300 transform hover:scale-105 flex items-center justify-center text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <span>احجز هذه الباقة الآن</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PackageDetailModal;
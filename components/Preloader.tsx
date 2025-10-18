import React from 'react';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  return (
    <div className={`fixed inset-0 bg-black z-[100] flex items-center justify-center transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative">
        <img 
          src="https://i.postimg.cc/GmZvBrRd/MASA-SPA.png" 
          alt="Masa Center Logo" 
          className="h-24 w-auto animate-pulse" 
        />
        <div 
          className="absolute inset-0 rounded-full"
          style={{ animation: 'preloader-glow 2.5s infinite ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
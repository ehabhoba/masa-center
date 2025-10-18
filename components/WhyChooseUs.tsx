import React from 'react';
import { whyChooseUsItems } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16 sm:py-20 bg-gray-900 section-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">لماذا تختار مركز ماسة؟</h2>
          <p className="mt-4 text-lg text-gray-300">نحن نعدك بتجربة تتجاوز توقعاتك.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {whyChooseUsItems.map((item, index) => (
            <div key={index} className="text-center p-6 bg-black/30 rounded-lg transform transition-transform duration-300 hover:-translate-y-2 card-glow-effect border border-gray-700/50">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-amber-500/10 mx-auto mb-6 border-2 border-amber-500/30">
                <svg className="h-10 w-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(WhyChooseUs);

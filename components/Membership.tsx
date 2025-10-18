import React from 'react';
import { membershipTiers } from '../constants';
import { MembershipTier } from '../types';

interface MembershipProps {
  onBookServiceClick: (serviceName: string) => void;
}

const MembershipCard: React.FC<{ tier: MembershipTier, onBookServiceClick: (serviceName:string) => void }> = ({ tier, onBookServiceClick }) => (
    <div className={`bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-2xl p-8 flex flex-col h-full text-center transition-all duration-300 ease-in-out ${tier.isFeatured ? 'border-2 border-amber-400 scale-105' : 'border border-gray-700/50'} relative`}>
        {tier.isFeatured && (
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-amber-400 text-black text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                الأكثر شعبية
            </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
        <p className={`font-semibold mb-4 ${tier.isFeatured ? 'text-amber-300' : 'text-gray-300'}`}>{tier.price}</p>
        <p className="text-gray-400 text-sm mb-6 flex-grow">{tier.description}</p>
        
        <div className="border-t border-gray-700 my-6"></div>

        <ul className="space-y-3 text-right flex-grow">
            {tier.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 ml-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                </li>
            ))}
        </ul>

        <button 
            onClick={() => onBookServiceClick(`الاستفسار عن ${tier.name}`)}
            className={`w-full mt-8 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${tier.isFeatured ? 'bg-amber-500 text-black hover:bg-amber-400 hover:shadow-amber-500/40' : 'bg-gray-700 text-white hover:bg-amber-500/20 hover:text-amber-400'}`}>
            استفسر الآن
        </button>
    </div>
);

const Membership: React.FC<MembershipProps> = ({ onBookServiceClick }) => {
  return (
    <section id="membership" className="py-16 sm:py-20 bg-black section-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">انضم إلى نادي ماسة المميز</h2>
          <p className="mt-4 text-lg text-gray-300">اختر العضوية التي تناسبك واستمتع بعالم من الرفاهية والخصومات الحصرية.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {membershipTiers.map((tier) => (
            <MembershipCard key={tier.name} tier={tier} onBookServiceClick={onBookServiceClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Membership);

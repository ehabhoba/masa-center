import React, { useState } from 'react';
import { faqs } from '../constants';
import { FAQItem } from '../types';

interface FAQItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItemComponent: React.FC<FAQItemProps> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onClick}
        className="w-full text-right flex justify-between items-center py-5 px-6 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white">{faq.question}</span>
        <span className="transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? '200px' : '0px' }}
      >
        <div className="px-6 pb-5">
          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">الأسئلة الشائعة</h2>
          <p className="mt-4 text-lg text-gray-300">
            نجيب على استفساراتكم لنوفر لكم كل المعلومات التي تحتاجونها.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg">
          {faqs.map((faq, index) => (
            <FaqItemComponent
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
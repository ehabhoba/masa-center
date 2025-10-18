import React from 'react';

interface GiftVouchersProps {
  onBookServiceClick: (serviceName: string) => void;
}

const GiftVouchers: React.FC<GiftVouchersProps> = ({ onBookServiceClick }) => {
  return (
    <section id="gift-vouchers" className="py-16 sm:py-20 bg-black section-animate bg-cover bg-center" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-prism.png')"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-amber-500/20">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-4">هل تبحث عن هدية مثالية؟</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            قدم تجربة الاسترخاء والفخامة لمن تحب. قسائم الهدايا من مركز ماسة هي الطريقة المثلى لتعبر عن اهتمامك.
          </p>
          <button
            onClick={() => onBookServiceClick('الاستفسار عن قسائم الهدايا')}
            className="bg-amber-500 text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-xl animate-gentle-pulse">
            استفسر الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(GiftVouchers);

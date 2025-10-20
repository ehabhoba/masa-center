import React from 'react';

interface HomeServicesProps {
  onBookServiceClick: (serviceName: string) => void;
}

const HomeServices: React.FC<HomeServicesProps> = ({ onBookServiceClick }) => {
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 012.288-2.542M11.802 11.998a3.002 3.002 0 012.396-2.542M14.198 11.998a3 3 0 002.396-2.542M9.802 11.998a3 3 0 00-2.396-2.542M7 16a3 3 0 013-3h4a3 3 0 013 3v4H7v-4z" /></svg>,
      title: 'أخصائيون محترفون',
      description: 'نرسل لك أفضل خبرائنا المعتمدين لضمان خدمة عالية الجودة.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
      title: 'تجهيزات كاملة',
      description: 'نحضر معنا كل ما يلزم من طاولة المساج والزيوت والمناشف المعقمة.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
      title: 'خصوصية وأمان',
      description: 'تمتع بالاسترخاء في بيئتك الخاصة مع ضمان أقصى درجات الخصوصية.',
    },
  ];

  return (
    <section id="home-services" className="relative py-16 sm:py-20 bg-gray-900 section-animate bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://i.ibb.co/gR7J91d/pexels-mikhail-nilov-7533433.jpg')" }}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">استمتع بخدماتنا الفاخرة في راحة منزلك</h2>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            تجربة السبا الكاملة تأتيك أينما كنت. نقدم خدمة مساج منزلي احترافية لتوفير أقصى درجات الراحة والاسترخاء لك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-black/40 rounded-lg border border-gray-700">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-500/10 mx-auto mb-4 border-2 border-amber-500/30 text-amber-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
            <button
                onClick={() => onBookServiceClick('طلب خدمة المساج المنزلي')}
                className="bg-amber-500 text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-xl animate-gentle-pulse">
                اطلب خدمتك المنزلية الآن
            </button>
        </div>

      </div>
    </section>
  );
};

export default React.memo(HomeServices);
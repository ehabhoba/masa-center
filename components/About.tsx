import React, { useRef, useEffect, useState } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  const values = [
      { title: 'الاحترافية', description: 'فريق مدرب ومعتمد.' },
      { title: 'النظافة', description: 'تعقيم كامل بعد كل جلسة.' },
      { title: 'الخصوصية', description: 'تقديم خدمة "برايفت" بمعايير أخلاقية عالية.' },
      { title: 'الجودة', description: 'استخدام أفضل المنتجات والأجهزة.' },
      { title: 'الثقة', description: 'الشفافية الكاملة في الأسعار والخدمات.' },
  ];

  return (
    <section ref={sectionRef} id="about" className={`py-16 sm:py-20 bg-gray-900 section-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            عن مركز ماسة
          </h2>
           <p className="text-lg text-amber-400 font-semibold mb-4">"ماسة - وَهَج الاسترخاء، وِعَاءُ الصحة."</p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-right">
              <div className="bg-black/20 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-2xl font-bold text-amber-400 mb-3">رسالتنا</h3>
                  <p className="text-gray-300 leading-relaxed">
                    تقديم تجربة استرخاء وعلاجية فاخرة ومتميزة، تحت أعلى معايير الاحترافية والنظافة والخصوصية، باستخدام أحدث التقنيات وأفضل الزيوت الطبيعية، لتكون "ماسة" وجهتك الأولى للعناية بالجسد والروح.
                  </p>
              </div>
              <div className="bg-black/20 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-2xl font-bold text-amber-400 mb-3">رؤيتنا</h3>
                  <p className="text-gray-300 leading-relaxed">
                    أن نكون المركز الرائد والمعتمد في مجال المساج والسبا في منطقة الدقي ومحافظات القاهرة الكبرى، والاسم الأول الذي يتبادر إلى أذهان العملاء عند البحث عن جودة الاسترخاء والعلاج.
                  </p>
              </div>
          </div>
          
          <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">قيمنا الأساسية</h3>
              <div className="flex flex-wrap justify-center gap-4">
                  {values.map(value => (
                      <div key={value.title} className="bg-gray-800 py-3 px-5 rounded-full text-center">
                          <p className="font-bold text-white">{value.title}: <span className="font-normal text-gray-300">{value.description}</span></p>
                      </div>
                  ))}
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
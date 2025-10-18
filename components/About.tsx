
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              عن مركز ماسة
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto md:mr-0 mb-6"></div>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              في مركز ماسة، نؤمن بأن الاسترخاء ليس رفاهية، بل هو جزء أساسي من حياة صحية ومتوازنة. نحن نقدم ملاذاً هادئاً بعيداً عن صخب الحياة اليومية، حيث يمكنك تجديد طاقتك واستعادة حيويتك.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              يضم فريقنا نخبة من الأخصائيين المحترفين والمدربين على أعلى مستوى لضمان حصولك على أفضل تجربة ممكنة. نستخدم منتجات طبيعية عالية الجودة ونحرص على توفير بيئة تتسم بالخصوصية المطلقة والنظافة الفائقة.
            </p>
          </div>
          <div className="order-first md:order-last">
            <img 
              src="https://i.postimg.cc/Nf4JzL6M/ai-about-section.jpg" 
              alt="Masa Center Interior" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
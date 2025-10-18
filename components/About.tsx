import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            عن مركز ماسة
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            في مركز ماسة، نؤمن بأن الاسترخاء ليس رفاهية، بل هو جزء أساسي من حياة صحية ومتوازنة. نحن نقدم ملاذاً هادئاً بعيداً عن صخب الحياة اليومية، حيث يمكنك تجديد طاقتك واستعادة حيويتك.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            يضم فريقنا نخبة من الأخصائيين المحترفين والمدربين على أعلى مستوى لضمان حصولك على أفضل تجربة ممكنة. نستخدم منتجات طبيعية عالية الجودة ونحرص على توفير بيئة تتسم بالخصوصية المطلقة والنظافة الفائقة.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
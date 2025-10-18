import React from 'react';

const testimonials = [
  {
    quote: "تجربة لا تُنسى! المساج كان احترافياً جداً والمكان يبعث على الهدوء والراحة. سأعود بالتأكيد.",
    author: "أحمد خالد",
    service: "مساج استرخائي",
  },
  {
    quote: "الحمام المغربي الملكي كان أفضل ما جربت على الإطلاق. شعرت بتجدد كامل ونظافة فائقة. شكراً لكم.",
    author: "محمد علي",
    service: "حمام مغربي ملكي",
  },
  {
    quote: "فريق عمل محترم ومحترف، والاهتمام بالتفاصيل والنظافة ملحوظ. أنصح بشدة بزيارة مركز ماسة.",
    author: "يوسف عبد الرحمن",
    service: "بديكير ومانيكير",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">ماذا يقول عملاؤنا؟</h2>
          <p className="mt-4 text-lg text-gray-300">
            نفخر بثقتكم ونسعد دائماً بخدمتكم.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col text-center transform hover:-translate-y-2 transition-transform duration-300">
              <svg className="w-10 h-10 text-amber-500 mb-4 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
              </svg>
              <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-bold text-white text-lg">{testimonial.author}</p>
                <p className="text-sm text-amber-400">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

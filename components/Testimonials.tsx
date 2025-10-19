import React, { useRef, useEffect, useState, useCallback } from 'react';

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

interface Testimonial {
  quote: string;
  author: string;
  service: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = React.memo(({ testimonial }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col text-center h-full">
    <svg className="w-10 h-10 text-amber-500 mb-4 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
      <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
    <div className="mt-auto">
      <p className="font-bold text-white text-lg">{testimonial.author}</p>
      <p className="text-sm text-amber-400">{testimonial.service}</p>
    </div>
  </div>
));


const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
  
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / testimonials.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  }, [activeIndex]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollToTestimonial = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.scrollWidth / testimonials.length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };


  return (
    <section ref={sectionRef} id="testimonials" className={`py-16 sm:py-20 bg-gray-900 section-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">ماذا يقول عملاؤنا؟</h2>
          <p className="mt-4 text-lg text-gray-300">
            نفخر بثقتكم ونسعد دائماً بخدمتكم.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory space-x-4 rtl:space-x-reverse pb-4 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-x-0 no-scrollbar">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-center flex-shrink-0 w-[90%] md:w-full">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          
          <div className="flex md:hidden justify-center items-center mt-6 space-x-2 rtl:space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-amber-400 w-6' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
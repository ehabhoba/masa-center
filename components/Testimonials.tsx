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

  const scrollToTestimonial = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const card = container.children[index] as HTMLElement;
      if(card) {
        container.scrollTo({
          left: card.offsetLeft,
          behavior: 'smooth',
        });
        setActiveIndex(index);
      }
    }
  }, []);

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    scrollToTestimonial(newIndex);
  };
  
  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    scrollToTestimonial(newIndex);
  };

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
        const children = Array.from(container.children) as HTMLElement[];
        const containerScrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;

        let closestIndex = 0;
        let minDistance = Infinity;

        children.forEach((child, index) => {
            const childCenter = child.offsetLeft + child.offsetWidth / 2;
            const containerCenter = containerScrollLeft + containerWidth / 2;
            const distance = Math.abs(childCenter - containerCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });
        
        if (closestIndex !== activeIndex) {
            setActiveIndex(closestIndex);
        }
    }
  }, [activeIndex]);

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
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll, { passive: true });
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} id="testimonials" className={`py-16 sm:py-20 bg-gray-900 section-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">ماذا يقول عملاؤنا؟</h2>
          <p className="mt-4 text-lg text-gray-300">
            نفخر بثقتكم ونسعد دائماً بخدمتكم.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
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

          <button onClick={handlePrev} className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-8 bg-gray-800/50 p-2 rounded-full text-white hover:bg-amber-500 transition-colors hidden md:block" aria-label="Previous testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
          <button onClick={handleNext} className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-8 bg-gray-800/50 p-2 rounded-full text-white hover:bg-amber-500 transition-colors hidden md:block" aria-label="Next testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>

        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
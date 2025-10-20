import React, { useState, useEffect } from 'react';

const galleryImages = [
  { src: 'https://images.pexels.com/photos/4210376/pexels-photo-4210376.jpeg', alt: 'أخصائي محترف يقوم بعمل مساج علاجي لظهر العميل.' },
  { src: 'https://images.pexels.com/photos/3843396/pexels-photo-3843396.jpeg', alt: 'لقطة مقربة لأحجار المساج الساخنة المستخدمة في العلاج.' },
  { src: 'https://images.pexels.com/photos/7263026/pexels-photo-7263026.jpeg', alt: 'سرير مساج نظيف ومجهز بالكامل في غرفة هادئة.' },
  { src: 'https://images.pexels.com/photos/7690135/pexels-photo-7690135.jpeg', alt: 'أحجار البازلت السوداء مصفوفة بعناية على الظهر لتعزيز الاسترخاء.' },
  { src: 'https://images.pexels.com/photos/8520330/pexels-photo-8520330.jpeg', alt: 'مجموعة من منتجات المساج الطبيعية المستخدمة في الحمام المغربي.' },
  { src: 'https://images.pexels.com/photos/3212179/pexels-photo-3212179.jpeg', alt: 'أجواء سبا هادئة مع شموع مضاءة ومناشف نظيفة جاهزة لجلسة مساج.' },
  { src: 'https://images.pexels.com/photos/3779844/pexels-photo-3779844.jpeg', alt: 'جلسة تدليك وعناية بالقدمين (فوت مساج) احترافية.' },
  { src: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg', alt: 'رجل مسترخٍ تماماً في مركز السبا بعد انتهاء جلسة المساج.' },
  { src: 'https://images.pexels.com/photos/3212164/pexels-photo-3212164.jpeg', alt: 'تفاصيل ديكور غرفة المساج الفاخر مع زهرة الأوركيد والشموع.' },
  { src: 'https://images.pexels.com/photos/4138903/pexels-photo-4138903.jpeg', alt: 'أخصائية تقوم بتطبيق زيت المساج على ظهر العميل.' },
  { src: 'https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg', alt: 'مساج الأنسجة العميقة لمنطقة الكتف والرقبة.' },
  { src: 'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg', alt: 'أجواء الاسترخاء والسكينة داخل مركز ماسة للمساج.' }
];

interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Add a small delay to allow for the closing animation before clearing the image
    setTimeout(() => setSelectedImage(null), 300);
  };
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    
    if (isModalOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);


  return (
    <>
      <section id="gallery" className="py-16 sm:py-20 bg-black section-animate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">معرض الصور</h2>
            <p className="mt-4 text-lg text-gray-300">
              ألقِ نظرة على أجواء الاسترخاء والفخامة في مركز ماسة.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => {
              const baseUrl = image.src.split('?')[0];
              const commonParams = 'auto=compress&cs=tinysrgb&fit=crop';
              
              const srcSet = [
                `${baseUrl}?${commonParams}&w=400&h=400 400w`,
                `${baseUrl}?${commonParams}&w=600&h=600 600w`,
                `${baseUrl}?${commonParams}&w=800&h=800 800w`,
              ].join(', ');
              
              const sizes = "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw";

              return (
                <div
                  key={index}
                  className="group relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg cursor-pointer shadow-lg"
                  onClick={() => openModal(image)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && openModal(image)}
                >
                  <img
                    src={`${baseUrl}?${commonParams}&w=400&h=400`}
                    srcSet={srcSet}
                    sizes={sizes}
                    alt={image.alt}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/50"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Modal (Lightbox) */}
      {selectedImage && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-caption"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm"></div>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-20 text-gray-300 bg-black/50 rounded-full p-2 hover:text-white transition-colors"
            aria-label="إغلاق"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className={`relative max-w-4xl max-h-[90vh] w-full transform transition-all duration-300 ease-out ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            role="group"
          >
            <img
              src={`${selectedImage.src.split('?')[0]}?auto=compress&cs=tinysrgb&w=1200`}
              alt={selectedImage.alt}
              className="rounded-lg shadow-2xl object-contain w-full h-full max-h-[85vh]"
            />
            <figcaption id="lightbox-caption" className="text-center text-white mt-2 text-base bg-black/60 p-2 rounded-b-lg">
              {selectedImage.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
};

export default React.memo(Gallery);
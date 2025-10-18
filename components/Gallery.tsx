import React from 'react';

const images = [
  'https://i.postimg.cc/TPgN3Wf7/ai-gallery-1.jpg',
  'https://i.postimg.cc/W4YxxykC/ai-gallery-2.jpg',
  'https://i.postimg.cc/0j0kG0yP/ai-gallery-3.jpg',
  'https://i.postimg.cc/C1s4sH6v/ai-gallery-4.jpg',
  'https://i.postimg.cc/Bv3vR4Y8/ai-gallery-5.jpg',
  'https://i.postimg.cc/c1J5k6qY/ai-gallery-6.jpg',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">من أجواء مركزنا</h2>
          <p className="mt-4 text-lg text-gray-300">
            شاهد لمحات من بيئة الاسترخاء والرفاهية التي نعدها لك.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group aspect-w-1 aspect-h-1">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
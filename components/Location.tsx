import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">موقعنا</h2>
          <p className="mt-4 text-lg text-gray-300">
            تجدنا بسهولة في قلب المدينة، مستعدون لخدمتكم.
          </p>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.868351180299!2d31.2333738151152!3d30.040683981883713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c604245661%3A0x33e911c7f4a56545!2sTahrir%20Square!5e0!3m2!1sen!2seg!4v1678886453210!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Masa Center Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;

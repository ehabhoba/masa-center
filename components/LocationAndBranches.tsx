import React from 'react';

const mainBranch = {
  name: 'الفرع الرئيسي - الدقي',
  address: '32 شارع هارون، متفرع من شارع ابن مروان، الدقي – الجيزة',
  phones: ['010-5000-6013', '010-3440-3327', '010-3440-3328'],
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.9458058223933!2d31.21431267591041!3d30.03837991880479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458472aa0ae1659%3A0xcd90154e071c2545!2s32%20Haroun%2C%20Street%2C%20Ad%20Doqi%2C%20Giza%20Governorate%203750341!5e0!3m2!1sen!2seg!4v1716921876523!5m2!1sen!2seg',
  mapDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=32+Haroun+Street,+Ad+Doqi,+Giza+Governorate,+Egypt'
};

const otherServiceAreas = [
  'مدينة نصر', 'مصر الجديدة', 'التجمع الخامس', 'المعادي', 'زهراء المعادي',
  'المقطم', 'القاهرة الجديدة', 'جاردن سيتي', 'الزمالك', 'وسط البلد (باب اللوق – التحرير)',
  'مصر القديمة', 'العباسية', 'رمسيس', 'مدينة الشروق', 'مدينة بدر',
  'عين شمس', 'النزهة', 'الرحاب', 'مدينتي', 'العاصمة الإدارية (الحي المالي – الداون تاون)',
  'الدقي', 'المهندسين', 'العجوزة', 'الهرم', 'فيصل', 'حدائق الأهرام',
  'أكتوبر (6 أكتوبر – الحي الأول حتى الحي الثامن)', 'الشيخ زايد', 'ميدان لبنان',
  'بين السرايات', 'المنيل', 'بولاق الدكرور', 'الجيزة (شارع الجامعة – النهضة – مراد)',
  'الطالبية', 'العمرانية', 'المريوطية', 'الكيت كات', 'الوراق', 'إمبابة', 'أرض اللواء'
];

const LocationAndBranches: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">فرعنا الرئيسي ومناطق الخدمة</h2>
          <p className="mt-4 text-lg text-gray-300">
            تجدنا في قلب الدقي ونصل إليك في جميع أنحاء القاهرة.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          
          <div className="lg:col-span-2 bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col">
            <div className="flex-grow">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">{mainBranch.name}</h3>
                <div className="flex items-start mb-4">
                    <svg className="w-6 h-6 text-gray-400 mt-1 ml-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <p className="text-gray-300">{mainBranch.address}</p>
                </div>
                <div className="flex items-start text-left" dir="ltr">
                    <svg className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <div className="flex flex-col">
                      {mainBranch.phones.map((phone) => (
                          <a key={phone} href={`tel:${phone.replace(/-/g, '')}`} className="text-gray-300 hover:text-amber-400 transition-colors text-lg">
                          {phone}
                          </a>
                      ))}
                    </div>
                </div>
            </div>
             <a 
              href={mainBranch.mapDirectionsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 w-full bg-amber-500 text-black font-bold py-3 px-4 rounded-lg hover:bg-amber-400 transition-colors duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span>الحصول على الاتجاهات</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className="lg:col-span-3 relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src={mainBranch.mapEmbedUrl}
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
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8 border-b-2 border-amber-800 pb-2 max-w-md mx-auto">نغطي هذه المناطق أيضاً</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {otherServiceAreas.map((area) => (
              <span key={area} className="bg-gray-700 text-gray-200 text-sm font-medium px-4 py-2 rounded-full shadow-md">
                {area}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationAndBranches;
import React from 'react';

interface CareersProps {
  onBookServiceClick: (serviceName: string) => void;
}

const jobs = [
    {
        title: 'مدربات مساج محترفات',
        requirements: [
            'خبرة مثبتة في أنواع المساج المختلفة (علاجي، استرخائي).',
            'الالتزام بأعلى معايير النظافة والاحترافية.',
            'مهارات تواصل ممتازة مع العملاء.',
            'حسن المظهر واللباقة في التعامل.',
        ],
        benefits: 'رواتب مجزية، عمولات، بيئة عمل محترمة وآمنة.'
    },
    {
        title: 'كابتن مساج (للرجال)',
        requirements: [
            'خبرة في قسم السبا الرجالي والمساج.',
            'القدرة على التعامل مع العملاء وتقديم أفضل خدمة.',
            'الالتزام بمعايير المركز الأخلاقية والمهنية.',
            'يفضل وجود شهادات معتمدة في المجال.',
        ],
        benefits: 'رواتب تنافسية، حوافز، وفرص للتطور المهني.'
    }
];

const Careers: React.FC<CareersProps> = ({ onBookServiceClick }) => {
  return (
    <section id="careers" className="py-16 sm:py-20 bg-black section-animate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">انضم إلى فريق ماسة</h2>
          <p className="mt-4 text-lg text-gray-300">نحن نبحث دائمًا عن مواهب استثنائية لمشاركتنا النجاح.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map(job => (
            <div key={job.title} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-amber-500/30 flex flex-col card-glow-effect">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">{job.title}</h3>
              <div className="flex-grow text-right">
                <p className="font-semibold text-white mb-2">المتطلبات:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                  {job.requirements.map((req, i) => <li key={i}>{req}</li>)}
                </ul>
                 <p className="font-semibold text-white mb-2">ما نقدمه:</p>
                 <p className="text-gray-300">{job.benefits}</p>
              </div>
              <button
                onClick={() => onBookServiceClick(`التقديم لوظيفة: ${job.title}`)}
                className="mt-8 w-full bg-amber-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/40">
                قدم الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Careers);

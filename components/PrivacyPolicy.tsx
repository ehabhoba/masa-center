import React, { useEffect } from 'react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 opacity-100 visible"
      aria-labelledby="privacy-policy-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div
        className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700">
          <h2 id="privacy-policy-title" className="text-2xl font-bold text-amber-400">
            سياسة الخصوصية
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="إغلاق"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 prose prose-invert prose-p:text-gray-300 prose-p:leading-relaxed prose-headings:text-amber-500 max-w-none">
          <p>آخر تحديث: {new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h3>مقدمة</h3>
          <p>
            أهلاً بك في مركز ماسة ("نحن"، "المركز"). نحن نلتزم بحماية خصوصية زوار موقعنا الإلكتروني. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية.
          </p>

          <h3>المعلومات التي نجمعها</h3>
          <p>
            عند تواصلك معنا عبر واتساب لحجز موعد، قد نحصل على معلومات مثل اسمك ورقم هاتفك. كما نستخدم ملفات تعريف الارتباط (Cookies) لجمع بيانات حول كيفية تفاعلك مع موقعنا، مثل الصفحات التي تزورها والوقت الذي تقضيه على الموقع.
          </p>

          <h3>ملفات تعريف الارتباط والإعلانات</h3>
          <ul>
            <li>يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك. يمكنك التحكم في هذه الملفات من خلال إعدادات متصفحك.</li>
            <li>نحن نستخدم خدمات طرف ثالث مثل Google AdSense لعرض الإعلانات على موقعنا.</li>
            <li>قد تستخدم Google ملف تعريف الارتباط DART لعرض الإعلانات بناءً على زياراتك لموقعنا والمواقع الأخرى على الإنترنت.</li>
            <li>يمكن للمستخدمين إلغاء الاشتراك في استخدام ملف تعريف الارتباط DART عن طريق زيارة <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">صفحة سياسة خصوصية إعلانات Google</a>.</li>
          </ul>
          
          <h3>كيف نستخدم معلوماتك</h3>
          <p>
            نستخدم المعلومات التي نجمعها للأغراض التالية:
          </p>
          <ul>
            <li>لتسهيل عملية حجز المواعيد والتواصل معك بخصوصها.</li>
            <li>لتحليل استخدام الموقع وتحسين خدماتنا وتجربة المستخدم.</li>
            <li>لعرض إعلانات مخصصة قد تهمك.</li>
          </ul>
          
          <h3>مشاركة المعلومات</h3>
          <p>
            نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة، إلا كما هو موضح في هذه السياسة أو بموافقتك، أو إذا كان ذلك مطلوباً بموجب القانون.
          </p>

          <h3>أمان البيانات</h3>
          <p>
            نتخذ إجراءات أمنية معقولة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الكشف أو الإتلاف.
          </p>

          <h3>روابط لمواقع أخرى</h3>
          <p>
            قد يحتوي موقعنا على روابط لمواقع أخرى. نحن لسنا مسؤولين عن ممارسات الخصوصية لتلك المواقع. نوصيك بقراءة سياسات الخصوصية الخاصة بهم.
          </p>

          <h3>التغييرات على سياسة الخصوصية</h3>
          <p>
            قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بنشر أي تغييرات على هذه الصفحة.
          </p>

          <h3>اتصل بنا</h3>
          <p>
            إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك الاتصال بنا عبر أرقام الهواتف المتاحة على الموقع.
          </p>
        </div>
        <div className="p-6 bg-gray-800/50 text-right border-t border-gray-700">
            <button onClick={onClose} className="bg-amber-500 text-black font-bold py-2 px-6 rounded-lg hover:bg-amber-400 transition-colors">
                فهمت
            </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

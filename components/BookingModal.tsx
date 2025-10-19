import React, { useState, useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

const WhatsAppIcon = () => (
   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.166l-.36 1.323 1.331-.353z"/></svg>
);

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, serviceName }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    // Reset form when modal opens
    if (isOpen) {
      setName('');
      setPhone('');
      setTime('');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const phoneNumber = '201050006013';
    const message = `مرحباً مركز ماسة،
أود حجز خدمة: *${serviceName}*.

-- تفاصيل الطلب --
الاسم: ${name}
رقم الهاتف: ${phone}
الوقت المفضل: ${time || 'لم يحدد'}

شكراً لكم.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };
  
  const contactNumbers = ['010-3440-3327', '010-3440-3328'];


  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-gray-900 rounded-lg shadow-xl text-white max-w-md w-full p-8 relative transform transition-all duration-300 ease-in-out scale-95 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors"
          aria-label="إغلاق"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-center text-amber-400 mb-2">تأكيد الحجز</h3>
          <p className="text-center text-gray-300 mb-6">
            لحجز خدمة: <span className="font-bold block text-lg mt-1">{serviceName}</span>
          </p>
          <p className="text-gray-400 mb-4 text-sm">
            الرجاء إدخال بياناتك للمتابعة عبر واتساب.
          </p>
          
          <form onSubmit={handleFormSubmit} className="space-y-4 mb-6 text-right">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">الاسم بالكامل</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="مثال: أحمد محمد"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">رقم الهاتف</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="مثال: 01012345678"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1">الوقت المفضل (اختياري)</label>
              <input
                type="text"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="مثال: غداً الساعة 5 مساءً"
              />
            </div>
             <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
               <WhatsAppIcon />
               <span>المتابعة للحجز عبر واتساب</span>
            </button>
          </form>

          <div className="mt-6 text-center border-t border-gray-700 pt-4">
              <p className="text-gray-500 text-sm">أو يمكنك التواصل مباشرة على:</p>
              <div className="space-y-3 mt-4" dir="ltr">
                {contactNumbers.map((phone) => {
                  const telLink = `tel:${phone.replace(/-/g, '')}`;
                  const waLink = `https://wa.me/20${phone.replace(/-/g, '').substring(1)}`;
                  return (
                    <div key={phone} className="flex items-center justify-between text-lg bg-gray-800 p-2 rounded-lg">
                      <span className="text-gray-300 tracking-wider">{phone}</span>
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors" aria-label={`WhatsApp ${phone}`}>
                          <WhatsAppIcon />
                        </a>
                        <a href={telLink} className="text-amber-400 hover:text-amber-300 transition-colors" aria-label={`Call ${phone}`}>
                          <PhoneIcon />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
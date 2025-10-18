import React from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, serviceName }) => {
  if (!isOpen) {
    return null;
  }

  const handleWhatsAppBooking = () => {
    const phoneNumber = '201050006013'; // رقم الهاتف المصري من الفوتر بدون علامة +
    const message = `مرحباً مركز ماسة،\nأود حجز خدمة: *${serviceName}*.\n\nهل يمكننا تحديد الموعد المناسب؟`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

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
            أنت على وشك حجز خدمة: <span className="font-bold block text-lg mt-1">{serviceName}</span>
          </p>
          <p className="text-gray-400 mb-6">
            سيتم تحويلك إلى واتساب لإتمام عملية الحجز والتنسيق مع فريقنا مباشرة.
          </p>
          <button
            onClick={handleWhatsAppBooking}
            className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.166l-.36 1.323 1.331-.353z"/></svg>
            <span>المتابعة للحجز عبر واتساب</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

import React from 'react';

const Footer: React.FC = () => {
  const phoneNumbers = ['010-5000-6013', '010-3440-3327', '010-3440-3328'];
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/masaspacenter', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> },
    { name: 'Instagram', url: 'https://www.instagram.com/masaspacenter/', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.86.399-1.249.787-.389.389-.605.782-.787 1.249-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.86.787 1.249.389.389.782.605 1.249.787.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.86-.399 1.249-.787.389-.389.605-.782-.787-1.249.137-.353.3-.882.344-1.857.047-1.023.058-1.351-.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.787-1.249 3.097 3.097 0 00-1.249-.787c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg> },
    { name: 'YouTube', url: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg> },
    { name: 'TikTok', url: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.85-.98-6.42-2.88-1.57-1.9-2.29-4.35-2.22-6.81.05-1.71.52-3.41 1.44-4.86.99-1.54 2.46-2.73 4.19-3.43.2-.08.4-.17.6-.25.02-3.01.01-6.02.02-9.03z"/></svg> },
  ];

  const PhoneIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg> );
  const WhatsAppIcon = () => ( <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.166l-.36 1.323 1.331-.353z"/></svg> );

  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img className="h-16 w-auto mx-auto mb-4" src="https://i.postimg.cc/GmZvBrRd/MASA-SPA.png" alt="Masa Center Logo" />
        <h3 className="text-2xl font-bold text-white mb-2">مركز ماسة</h3>
        <div className="mb-4">
          <p className="mb-4">للحجز والاستفسار:</p>
            <div className="space-y-3 max-w-xs mx-auto" dir="ltr">
              {phoneNumbers.map((phone) => {
                const telLink = `tel:${phone.replace(/-/g, '')}`;
                const waLink = `https://wa.me/20${phone.replace(/-/g, '').substring(1)}`;
                return (
                  <div key={phone} className="flex items-center justify-between bg-gray-900/50 p-2 rounded-lg">
                    <span className="text-gray-300 text-lg tracking-wider">{phone}</span>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-transform duration-200 hover:scale-125" aria-label={`WhatsApp ${phone}`}>
                        <WhatsAppIcon />
                      </a>
                      <a href={telLink} className="text-amber-400 hover:text-amber-300 transition-transform duration-200 hover:scale-125" aria-label={`Call ${phone}`}>
                        <PhoneIcon />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map(link => (
             <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-gray-400 hover:text-amber-400 transition-transform duration-300 hover:scale-125 hover:-translate-y-1">
              {link.icon}
            </a>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} مركز ماسة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
import React, { useState, useEffect } from 'react';

const AnnouncementBar: React.FC<{ isVisible: boolean, onClose: () => void }> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  
  return (
    <div className="bg-amber-500 text-black relative text-sm py-2 px-4 text-center z-50 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
        <span className="mx-8">✨ عرض خاص: خصم 20% على باقة الاسترخاء الكامل عند الحجز هذا الأسبوع! ✨</span>
        <span className="mx-8">🌿 اكتشف تجربة الحمام المغربي الملكي الفاخرة 🌿</span>
        <span className="mx-8">📞 للحجز السريع، تواصل معنا عبر واتساب الآن! 📞</span>
      </div>
       <button onClick={onClose} className="absolute top-1/2 -translate-y-1/2 left-4 text-black hover:bg-black/20 rounded-full p-1" aria-label="إغلاق الإعلان">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
  );
};


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: 'services', text: 'خدماتنا' },
    { href: 'packages', text: 'الباقات' },
    { href: 'holiday-packages', text: 'عروض الأعياد' },
    { href: 'home-services', text: 'الخدمة المنزلية' },
    { href: 'membership', text: 'النادي المميز' },
    { href: 'about', text: 'عن المركز' },
    { href: 'team', text: 'فريقنا' },
    { href: 'gallery', text: 'معرض الصور' },
    { href: 'careers', text: 'انضم إلينا' },
    { href: 'blog', text: 'المدونة' },
    { href: 'testimonials', text: 'آراء العملاء' },
    { href: 'faq', text: 'الأسئلة الشائعة' },
    { href: 'contact', text: 'فروعنا' },
  ];

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = isAnnouncementVisible ? 120 : 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
    closeMenu();
  };
  
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBar isVisible={isAnnouncementVisible} onClose={() => setIsAnnouncementVisible(false)} />
        <header className={`relative transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex-shrink-0">
                <a href="/" onClick={handleLogoClick} className="flex items-center space-x-2 rtl:space-x-reverse">
                  <img className="h-12 w-auto transition-transform duration-300 hover:scale-110" src="https://i.postimg.cc/GmZvBrRd/MASA-SPA.png" alt="Masa Center Logo" />
                  <span className="text-white font-bold text-xl">مركز ماسة</span>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-1 rtl:space-x-reverse">
                  {navLinks.map(link => (
                    <a key={link.href} href={`#${link.href}`} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-0">
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="relative z-50 p-2 text-gray-400 hover:text-white focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                    <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100 visible bg-black/95 backdrop-blur-lg' : 'opacity-0 invisible'}`}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      >
        <nav
          className="flex flex-col items-center justify-center h-full"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block text-3xl font-medium text-gray-200 hover:text-amber-400 py-4 transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
              style={{ transitionDelay: `${isOpen ? index * 75 + 150 : 0}ms` }}
              tabIndex={isOpen ? 0 : -1}
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default React.memo(Header);
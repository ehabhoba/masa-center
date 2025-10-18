import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { href: '#services', text: 'خدماتنا' },
    { href: '#packages', text: 'الباقات' },
    { href: '#holiday-packages', text: 'عروض الأعياد' },
    { href: '#about', text: 'عن المركز' },
    { href: '#team', text: 'فريقنا' },
    { href: '#testimonials', text: 'آراء العملاء' },
    { href: '#faq', text: 'الأسئلة الشائعة' },
    { href: '#contact', text: 'فروعنا' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
                <img className="h-12 w-auto transition-transform duration-300 hover:scale-110" src="https://i.postimg.cc/GmZvBrRd/MASA-SPA.png" alt="Masa Center Logo" />
                <span className="text-white font-bold text-xl">مركز ماسة</span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1 rtl:space-x-reverse">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-0">
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
              href={link.href}
              onClick={closeMenu}
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
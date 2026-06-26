import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, ChevronDown, X } from 'lucide-react';

export const Navbar = ({ 
  t, 
  lang, 
  toggleLang 
}: { 
  t: any, 
  lang: 'es' | 'en', 
  toggleLang: () => void 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'pt-4 md:pt-6' : 'pt-0'}`}>
        <header className={`pointer-events-auto flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-xl border ${scrolled ? 'w-[95%] sm:w-[90%] max-w-4xl h-14 bg-surface/90 rounded-full border-border shadow-2xl' : 'w-full max-w-full h-16 bg-black/60 rounded-none border-transparent border-b-border shadow-none'}`}>
          <div className={`w-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] mx-auto ${scrolled ? 'px-4 md:px-6 max-w-full' : 'px-5 md:px-10 max-w-6xl'}`}>
            <div className="flex items-center gap-2">
              <Box className="w-5 h-5 text-bg fill-text-primary" />
              <span className="font-semibold text-base tracking-tight text-text-primary">My Timebox</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                <a href="#what-is" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium">{t.whatIs}</a>
                <a href="#features" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium">{t.features}</a>
                <a href="#faq" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium">{t.faq}</a>
              </nav>
              <div className="flex items-center gap-4 border-l border-border pl-6">
                <button onClick={toggleLang} className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium uppercase tracking-widest">
                  {lang === 'es' ? 'EN' : 'ES'}
                </button>
                <a href="https://app.mytimebox.dev" className="inline-flex items-center justify-center px-4 h-9 rounded-full bg-text-primary text-bg font-medium text-sm transition-transform hover:scale-95 active:scale-90">
                  {t.tryNow}
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Dropdown Wrapper */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed left-0 right-0 z-40 flex justify-center pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'top-[2.5rem]' : 'top-16'}`}
          >
            <div className={`pointer-events-auto bg-surface/95 backdrop-blur-xl flex flex-col gap-4 md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border border-t-0 border-b-border ${
              scrolled 
                ? 'w-[90%] sm:w-[85%] max-w-4xl rounded-b-3xl rounded-t-none border-l-border border-r-border p-5 pt-12 shadow-2xl' 
                : 'w-full max-w-full rounded-none border-l-transparent border-r-transparent p-5 pt-5 shadow-none'
            }`}>
              <a href="#what-is" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-text-primary">{t.whatIs}</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-text-primary">{t.features}</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-text-primary">{t.faq}</a>
              <div className="h-px bg-border my-2" />
              <div className="flex items-center justify-between">
                <button 
                  onClick={toggleLang} 
                  className="flex items-center p-1 rounded-full bg-border/50 border border-border"
                  aria-label="Toggle language"
                >
                  <div className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${lang === 'es' ? 'bg-text-primary text-bg shadow-sm' : 'text-text-secondary'}`}>ES</div>
                  <div className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${lang === 'en' ? 'bg-text-primary text-bg shadow-sm' : 'text-text-secondary'}`}>EN</div>
                </button>
                <a href="https://app.mytimebox.dev" className="inline-flex items-center justify-center px-4 h-10 rounded-full bg-text-primary text-bg font-medium text-sm">
                  {t.tryNow}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

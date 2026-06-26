import React from 'react';


export const Footer = ({ t, lang }: { t: any; lang: string }) => {
  return (
    <footer className="py-16 md:py-24 border-t border-border bg-bg">
      <div className="max-w-6xl w-full mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="My Timebox" className="w-6 h-6" />
              <span className="font-medium tracking-tight text-xl text-text-primary">My Timebox</span>
            </div>
            <p className="text-text-secondary max-w-xs leading-relaxed text-sm">
              {lang === 'en' ? 'Master your day with deep focus and minimalist timeboxing.' : 'Domina tu día con enfoque profundo y timeboxing minimalista.'}
            </p>
          </div>
          
          <div className="flex gap-12 sm:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-text-primary">{lang === 'en' ? 'Product' : 'Producto'}</h4>
              <a href="#what-is" className="text-text-secondary hover:text-text-primary transition-colors text-sm">{t.nav.whatIs}</a>
              <a href="#features" className="text-text-secondary hover:text-text-primary transition-colors text-sm">{t.nav.features}</a>
              <a href="#faq" className="text-text-secondary hover:text-text-primary transition-colors text-sm">{t.nav.faq}</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-text-primary">{lang === 'en' ? 'Connect' : 'Conecta'}</h4>
              <a href="https://github.com/arnolcb/timebox" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-sm">GitHub</a>
              <a href="mailto:support@mytimebox.dev" className="text-text-secondary hover:text-text-primary transition-colors text-sm">Email</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-sm">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-text-secondary text-sm font-light">{t.footer}</p>
          <div className="flex items-center gap-6 text-sm font-light text-text-secondary">
            <a href="#" className="hover:text-text-primary transition-colors">{lang === 'en' ? 'Privacy' : 'Privacidad'}</a>
            <a href="#" className="hover:text-text-primary transition-colors">{lang === 'en' ? 'Terms' : 'Términos'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

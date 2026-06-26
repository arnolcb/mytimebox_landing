import React, { useState, useEffect } from 'react';
import { content } from '../data/content';
import { FAQ } from './sections/FAQ';
import { Banner } from './sections/Banner';
import { Footer } from './sections/Footer';
import { BentoGrid } from './sections/BentoGrid';
import { ComparisonTable } from './sections/ComparisonTable';
import { HowItWorks } from './sections/HowItWorks';
import { Features } from './sections/Features';
import { Hero } from './sections/Hero';
import { WhatIsTimeboxing } from './sections/WhatIsTimeboxing';
import { Navbar } from './sections/Navbar';

export default function Landing() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = content[lang];

  // Auto-detect user language
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userLang = navigator.language;
      if (userLang.toLowerCase().startsWith('en')) {
        setLang('en');
      }
    }
  }, []);

  const toggleLang = () => {
    setLang(l => l === 'es' ? 'en' : 'es');
  };



  return (
    <div className="relative min-h-screen bg-bg text-text-primary selection:bg-accent-blue/30">
      <div className="bg-glow" />
      
      <Navbar t={t.nav} lang={lang} toggleLang={toggleLang} />

      <main className="pt-20 md:pt-32">
        
        {/* Hero Section */}
        <Hero t={t.hero} />

        {/* What is Timeboxing */}
        <WhatIsTimeboxing t={t.whatIs} />

        {/* Comparison */}
        <ComparisonTable t={t.comparison} />

        {/* How It Works */}
        <HowItWorks t={t.howItWorks} />

        {/* Integrations */}
        <Features t={t.features} />

        {/* Bento Grid */}
        <BentoGrid t={t} />

        {/* FAQ */}
        <FAQ t={t.faq} />

        {/* Banner (React Bits style CTA Card) */}
        <Banner t={t.banner} />

      </main>

      {/* Footer */}
      <Footer t={t} lang={lang} />
    </div>
  );
}

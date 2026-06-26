import React, { useState, useEffect, Suspense, lazy } from 'react';
import { content } from '../data/content';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';

// Lazy loaded components for Code Splitting below the fold
const WhatIsTimeboxing = lazy(() => import('./sections/WhatIsTimeboxing').then(module => ({ default: module.WhatIsTimeboxing })));
const ComparisonTable = lazy(() => import('./sections/ComparisonTable').then(module => ({ default: module.ComparisonTable })));
const HowItWorks = lazy(() => import('./sections/HowItWorks').then(module => ({ default: module.HowItWorks })));
const Features = lazy(() => import('./sections/Features').then(module => ({ default: module.Features })));
const BentoGrid = lazy(() => import('./sections/BentoGrid').then(module => ({ default: module.BentoGrid })));
const FAQ = lazy(() => import('./sections/FAQ').then(module => ({ default: module.FAQ })));
const Banner = lazy(() => import('./sections/Banner').then(module => ({ default: module.Banner })));
const Footer = lazy(() => import('./sections/Footer').then(module => ({ default: module.Footer })));

export default function Landing({ initialLang = 'es' }: { initialLang?: 'es' | 'en' }) {
  const [lang, setLang] = useState<'es' | 'en'>(initialLang);
  const t = content[lang];

  const toggleLang = () => {
    if (lang === 'es') {
      window.location.href = '/en';
    } else {
      window.location.href = '/';
    }
  };



  return (
    <div className="relative min-h-screen bg-bg text-text-primary selection:bg-accent-blue/30">
      <div className="bg-glow" />
      
      <Navbar t={t.nav} lang={lang} toggleLang={toggleLang} />

      <main className="pt-20 md:pt-32">
        
        {/* Hero Section */}
        <Hero t={t.hero} />

        <Suspense fallback={<div className="h-screen flex items-center justify-center"></div>}>
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
        </Suspense>

      </main>

      <Suspense fallback={<div className="h-20"></div>}>
        {/* Footer */}
        <Footer t={t} lang={lang} />
      </Suspense>
    </div>
  );
}

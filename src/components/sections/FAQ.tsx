import React from 'react';
import { FAQItem } from '../ui/FAQItem';

export const FAQ = ({ t }: { t: any }) => {
  return (
    <section id="faq" className="py-20 md:py-32 border-t border-border bg-surface/30">
      <div className="max-w-3xl w-full mx-auto px-5 md:px-10">
        <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] text-center mb-12 md:mb-16">{t.title}</h2>
        <div className="flex flex-col border-t border-border">
          {t.items.map((item: any, i: number) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

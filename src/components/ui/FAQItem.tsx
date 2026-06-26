import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-border last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-6 text-left focus:outline-none group"
      >
        <h4 className="font-medium text-lg md:text-xl text-text-primary pr-8 transition-colors group-hover:text-text-secondary">{q}</h4>
        <div 
          className={`text-text-secondary flex-shrink-0 transition-transform duration-200 ease-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <ChevronDown size={20} />
        </div>
      </button>
      <div 
        className={`grid transition-all duration-200 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-text-secondary leading-relaxed pb-6 pr-8">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
};

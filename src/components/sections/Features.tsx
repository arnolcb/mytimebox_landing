import React from 'react';
import { motion } from 'framer-motion';
import { springTransition } from '../../utils/animations';
import { GoogleIcon, TeamsIcon } from '../ui/icons/Icons';

export const Features = ({ t }: { t: any }) => {
  return (
    <section id="features" className="py-20 md:py-32 border-t border-border bg-surface/30">
      <div className="max-w-5xl w-full mx-auto px-5 md:px-10 text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] mb-6">{t.title}</h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-20">{t.desc}</p>
        
        <div className="flex flex-row items-start justify-center gap-6 sm:gap-12 md:gap-32 w-full px-4">
          
          {/* Google Calendar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={springTransition}
            className="flex flex-col items-center text-center group cursor-default flex-1"
          >
            <div className="text-text-secondary group-hover:text-text-primary transition-colors duration-500 mb-5 md:mb-8 flex items-center justify-center">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px]">
                <GoogleIcon />
              </div>
            </div>
            <h3 className="text-sm sm:text-base md:text-xl font-medium tracking-tight text-text-primary whitespace-nowrap">{t.f1}</h3>
          </motion.div>
          
          {/* Microsoft Teams */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.1, ...springTransition }}
            className="flex flex-col items-center text-center group cursor-default flex-1"
          >
            <div className="text-text-secondary group-hover:text-text-primary transition-colors duration-500 mb-5 md:mb-8 flex items-center justify-center">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px]">
                <TeamsIcon />
              </div>
            </div>
            <h3 className="text-sm sm:text-base md:text-xl font-medium tracking-tight text-text-primary whitespace-nowrap">{t.f2}</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

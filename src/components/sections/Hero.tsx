import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { springTransition } from '../../utils/animations';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1, transition: springTransition }
};

const RotatingText = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <span className="inline-flex relative overflow-hidden h-[1.2em] align-bottom pr-2">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={springTransition}
          className="absolute left-0 top-0 text-text-primary whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
        {/* Invisible spacer to maintain width based on longest word to prevent reflow */}
        <span className="invisible whitespace-nowrap">{words.reduce((a, b) => a.length > b.length ? a : b)}</span>
      </AnimatePresence>
    </span>
  );
};

export const Hero = ({ t }: { t: any }) => {
  return (
    <section className="min-h-[calc(100dvh-5rem)] md:min-h-[calc(100dvh-8rem)] flex flex-col justify-center pb-8 md:pb-24 pt-4 md:pt-0">
      <div className="max-w-6xl w-full mx-auto px-5 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        <motion.div 
          initial="hidden" animate="visible" variants={containerVariants}
          className="flex-1 w-full"
        >
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-[-0.05em] font-light mb-4 md:mb-6">
            <RotatingText words={t.rotating} /><br/>
            <span className="text-text-secondary">{t.static}</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-text-secondary max-w-[500px] mb-6 md:mb-8 leading-relaxed">
            {t.subtitle}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a href="https://app.mytimebox.dev" className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full bg-text-primary text-bg font-medium text-sm transition-transform hover:scale-95 active:scale-90 w-full sm:w-auto">
              {t.cta} <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.2, ...springTransition, duration: 0.8 }}
          className="flex-1 w-full flex justify-center lg:justify-end mt-4 lg:mt-0"
        >
          <div className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-[500px] flex justify-center">
            <video src="/video/glass_box_3.webm" poster="/video/poster.webp" preload="metadata" autoPlay loop muted playsInline className="w-full h-auto max-h-[35vh] lg:max-h-none object-contain block mix-blend-screen" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

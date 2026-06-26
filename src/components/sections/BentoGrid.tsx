import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Box, CircleCheck } from 'lucide-react';
import { springTransition } from '../../utils/animations';
import { GoogleIcon, TeamsIcon, MicrosoftIcon } from '../ui/icons/Icons';

const IntegrationsSlot = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % 3), 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-10 h-10 rounded-full border border-border/50 bg-bg shadow-inner flex items-center justify-center overflow-hidden relative">
      <AnimatePresence mode="popLayout">
        {index === 0 && (
          <motion.div key="google" initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -25, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="text-text-primary absolute">
            <GoogleIcon />
          </motion.div>
        )}
        {index === 1 && (
          <motion.div key="teams" initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -25, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="text-text-primary absolute">
            <TeamsIcon />
          </motion.div>
        )}
        {index === 2 && (
          <motion.div key="microsoft" initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -25, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="text-text-primary absolute">
            <MicrosoftIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TimeboxBlock = () => (
  <div className="w-10 h-10 rounded-full border border-border/50 bg-text-primary text-bg shadow-[0_0_15px_rgba(255,255,255,0.15)] flex items-center justify-center">
    <Box size={20} className="fill-bg text-text-primary" />
  </div>
);

const SyncAnimation = () => {
  return (
    <div className="md:absolute relative mt-8 md:mt-0 right-0 top-0 bottom-0 w-full md:w-[55%] flex items-center justify-center md:justify-end pr-0 md:pr-12 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)] hidden md:block"></div>
      
      <div className="relative w-full max-w-[280px] h-48 flex items-center justify-between z-10">
        
        {/* App 1 (Integrations) */}
        <div className="w-24 h-32 bg-surface border border-border/80 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-3 gap-3 relative z-20">
          <IntegrationsSlot />
          <div className="w-12 h-2 bg-border/40 rounded-full mt-2"></div>
          <div className="w-8 h-2 bg-border/40 rounded-full"></div>
        </div>
        
        {/* Connection Line & Glowing Particles */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-0 border-t-2 border-dashed border-border/40 z-10 flex justify-center">
           <motion.div 
             className="w-12 h-1 bg-text-primary rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] absolute -top-[3px]"
             initial={{ left: '10%' }}
             whileInView={{ left: '90%' }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
           />
        </div>

        {/* App 2 (Timebox) */}
        <div className="w-24 h-32 bg-surface border border-border/80 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-3 gap-3 relative z-20">
           <TimeboxBlock />
           <div className="w-14 h-2 bg-text-primary/20 rounded-full mt-2"></div>
           <div className="w-10 h-2 bg-border/40 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

const ZenModeClock = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });
  
  // 5 -> 1 (counting), 0 (focus), -1 (work done)
  const [phase, setPhase] = useState(5);

  useEffect(() => {
    if (!isInView) {
      setPhase(5);
      return;
    }
    
    if (phase > 0) {
      const timer = setTimeout(() => setPhase(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (phase === 0) {
      const timer = setTimeout(() => setPhase(-1), 2000); 
      return () => clearTimeout(timer);
    } else if (phase === -1) {
      const timer = setTimeout(() => setPhase(5), 2000);
      return () => clearTimeout(timer);
    }
  }, [isInView, phase]);

  return (
    <div ref={ref} className="w-full flex-1 flex items-center justify-center mb-8">
      <div className="relative w-40 h-40 rounded-full border border-border/50 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] bg-surface overflow-hidden">
        <AnimatePresence mode="wait">
          {phase > 0 ? (
            <motion.div 
              key="timer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0, filter: "blur(4px)" }}
              className="text-4xl font-sans tracking-tighter tabular-nums font-light absolute text-text-primary"
            >
              00:0{phase}
            </motion.div>
          ) : phase === 0 ? (
            <motion.div 
              key="focus"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              className="absolute flex flex-col items-center justify-center text-text-primary"
            >
              <CircleCheck size={28} className="mb-1 text-accent-emerald" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-accent-emerald">Focus</span>
            </motion.div>
          ) : (
            <motion.div 
              key="done"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              className="absolute flex flex-col items-center justify-center text-text-primary"
            >
              <CircleCheck size={28} className="mb-1 text-text-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-text-primary">Done</span>
            </motion.div>
          )}
        </AnimatePresence>

        <svg className="absolute inset-0 w-full h-full -rotate-90" style={{ transformOrigin: "50% 50%" }}>
          <circle cx="50%" cy="50%" r="48%" fill="none" stroke="currentColor" strokeWidth="2" className="text-border opacity-50" />
          <motion.circle 
            cx="50%" cy="50%" r="48%" 
            fill="none" stroke="currentColor" strokeWidth="2" 
            strokeLinecap="round"
            className="text-text-primary" 
            initial={{ pathLength: 1 }}
            animate={{ pathLength: phase > 0 ? phase / 5 : 0 }}
            transition={{ duration: phase === 5 ? 0.3 : (phase <= 0 ? 0.5 : 1), ease: "linear" }}
          />
        </svg>
      </div>
    </div>
  );
};

const StatsSparkline = () => {
  return (
    <div className="md:absolute relative mt-8 md:mt-0 right-0 top-0 bottom-0 w-full md:w-[60%] flex items-center justify-center md:justify-end pr-0 md:pr-12 pointer-events-none">
      <div className="relative w-full h-32 flex items-end">
         <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
           <defs>
             <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="0" y2="1">
               <stop offset="0%" stopColor="var(--color-text-primary)" stopOpacity="0.2" />
               <stop offset="100%" stopColor="var(--color-text-primary)" stopOpacity="0" />
             </linearGradient>
           </defs>
           
           <motion.path 
             d="M0,80 C40,80 60,40 100,50 C140,60 170,25 200,35 L200,100 L0,100 Z"
             fill="url(#sparkline-gradient)"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: "easeOut" }}
           />
           
           <motion.path 
             d="M0,80 C40,80 60,40 100,50 C140,60 170,25 200,35"
             fill="none"
             stroke="var(--color-text-primary)"
             strokeWidth="3"
             strokeLinecap="round"
             initial={{ pathLength: 0, opacity: 0 }}
             whileInView={{ pathLength: 1, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
           />
           
           {/* Glowing dot perfectly aligned in SVG space */}
           <motion.circle
             cx="200" cy="35" r="4"
             fill="currentColor"
             className="text-text-primary drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
             initial={{ scale: 0, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
           />
         </svg>
         
         {/* Floating Label aligned safely below top bounds */}
         <motion.div 
           className="absolute right-[0px] top-[0%] bg-surface border border-border px-3 py-1 rounded-full text-xs font-medium text-text-primary shadow-xl whitespace-nowrap"
           initial={{ y: 5, opacity: 0 }}
           whileInView={{ y: -5, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, ease: "easeOut", delay: 2.2 }}
         >
           +4h hoy
         </motion.div>
      </div>
    </div>
  );
};

export const BentoGrid = ({ t }: { t: any }) => {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="max-w-6xl w-full mx-auto px-5 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] mb-6">{t.bento.title}</h2>
          <p className="text-lg text-text-secondary">{t.bento.desc}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:gap-8 h-auto md:h-[500px]">
          
          {/* Box 1 (Wide) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="md:col-span-2 md:row-span-1 bg-surface border border-border rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="z-10 relative md:w-[45%]">
              <h3 className="text-2xl font-medium tracking-tight mb-2">{t.bento.box1Title}</h3>
              <p className="text-text-secondary">{t.bento.box1Desc}</p>
            </div>
            <SyncAnimation />
          </motion.div>
          
          {/* Box 2 (Square) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ...springTransition }}
            className="md:col-span-1 md:row-span-2 bg-surface border border-border rounded-3xl p-8 md:p-10 min-h-[320px] flex flex-col items-center justify-center text-center overflow-hidden relative group"
          >
            <ZenModeClock />
            <h3 className="text-2xl font-medium tracking-tight mb-2">{t.bento.box2Title}</h3>
            <p className="text-text-secondary">{t.bento.box2Desc}</p>
          </motion.div>
          
          {/* Box 3 (Wide) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ...springTransition }}
            className="md:col-span-2 md:row-span-1 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-surface-hover),var(--color-surface))] border border-border rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="z-10 relative md:w-[40%]">
              <h3 className="text-2xl font-medium tracking-tight mb-2">{t.bento.box3Title}</h3>
              <p className="text-text-secondary">{t.bento.box3Desc}</p>
            </div>
            <StatsSparkline />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

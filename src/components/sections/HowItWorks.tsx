import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { springTransition } from '../../utils/animations';

export const HowItWorks = ({ t }: { t: any }) => {
  // How it works scroll animations
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cardsScrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start start", "end end"]
  });

  // Target scales and opacities based on array position
  const scale0 = useTransform(cardsScrollYProgress, [0, 1], [1, 0.9]);
  const opacity0 = useTransform(cardsScrollYProgress, [0, 1], [0, 0.6]);
  
  const scale1 = useTransform(cardsScrollYProgress, [0.33, 1], [1, 0.95]);
  const opacity1 = useTransform(cardsScrollYProgress, [0.33, 1], [0, 0.3]);
  
  const scale2 = useTransform(cardsScrollYProgress, [0.66, 1], [1, 1]);
  const opacity2 = useTransform(cardsScrollYProgress, [0.66, 1], [0, 0]);

  const cardTransforms = [
    { scale: scale0, overlay: opacity0 },
    { scale: scale1, overlay: opacity1 },
    { scale: scale2, overlay: opacity2 },
  ];

  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="max-w-6xl w-full mx-auto px-5 md:px-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] mb-6">{t.title}</h2>
          <p className="text-lg text-text-secondary">{t.desc}</p>
        </div>
        <div className="flex flex-col relative pb-0 mt-10" ref={cardsContainerRef}>
          {[
            {
              step: "01",
              title: t.s1Title,
              desc: t.s1Desc,
              graphic: (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
                  <div className="w-full h-full max-w-[280px] flex flex-col gap-3 justify-center relative">
                    <div className="w-full bg-surface border border-border/80 rounded-xl p-3 shadow-sm relative overflow-hidden flex items-center gap-3">
                       <div className="w-5 h-5 rounded-full border border-border/80 shrink-0"></div>
                       <div className="w-1/2 h-2.5 bg-text-primary/20 rounded-full"></div>
                    </div>
                    <div className="w-full bg-surface border border-border/80 rounded-xl p-3 shadow-sm relative overflow-hidden flex items-center gap-3 opacity-80">
                       <div className="w-5 h-5 rounded-full border border-border/80 shrink-0"></div>
                       <div className="w-2/3 h-2.5 bg-text-primary/20 rounded-full"></div>
                    </div>
                    <div className="w-full bg-surface border border-border/80 rounded-xl p-3 shadow-sm relative overflow-hidden flex items-center gap-3 opacity-60">
                       <div className="w-5 h-5 rounded-full border border-border/80 shrink-0"></div>
                       <div className="w-1/3 h-2.5 bg-text-primary/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              )
            },
            {
              step: "02",
              title: t.s2Title,
              desc: t.s2Desc,
              graphic: (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
                  <div className="w-full h-full max-w-[280px] bg-bg border border-border/60 rounded-2xl shadow-inner overflow-hidden flex flex-row">
                    {/* Fake Sidebar */}
                    <div className="w-12 border-r border-border/50 bg-surface/30 flex flex-col items-center py-4 gap-4">
                      <div className="w-6 h-6 rounded bg-text-primary/10"></div>
                      <div className="w-6 h-6 rounded bg-text-primary/5"></div>
                      <div className="w-6 h-6 rounded bg-text-primary/5"></div>
                    </div>
                    {/* Fake Calendar */}
                    <div className="flex-1 flex flex-col p-3 gap-2 relative">
                      <div className="w-full h-4 border-b border-border/50 mb-2 flex gap-2">
                         <div className="w-8 h-1 bg-text-primary/20 rounded-full"></div>
                      </div>
                      <div className="w-full h-12 bg-accent-blue/10 border border-accent-blue/20 rounded-md p-2 flex flex-col justify-center">
                        <div className="w-1/2 h-1.5 bg-accent-blue/40 rounded-full mb-1.5"></div>
                        <div className="w-1/3 h-1.5 bg-accent-blue/20 rounded-full"></div>
                      </div>
                      <div className="w-full h-16 bg-accent-emerald/10 border border-accent-emerald/20 rounded-md p-2 flex flex-col justify-center">
                        <div className="w-2/3 h-1.5 bg-accent-emerald/40 rounded-full mb-1.5"></div>
                        <div className="w-1/2 h-1.5 bg-accent-emerald/20 rounded-full"></div>
                      </div>
                      <div className="w-full h-12 border border-dashed border-border/60 rounded-md"></div>
                    </div>
                  </div>
                </div>
              )
            },
            {
              step: "03",
              title: t.s3Title,
              desc: t.s3Desc,
              graphic: (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
                  <div className="w-full h-full max-w-[280px] flex flex-row gap-4 items-center justify-center relative">
                    {/* Timeline */}
                    <div className="w-0.5 h-[80%] bg-border/50 relative">
                      {/* Current time indicator */}
                      <motion.div 
                        initial={{ top: "10%" }}
                        whileInView={{ top: "90%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 3, ease: "easeOut", delay: 1 }}
                        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-rose shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                      >
                        <div className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-px bg-accent-rose/50"></div>
                      </motion.div>
                    </div>
                    {/* Blocks */}
                    <div className="flex-1 h-[80%] flex flex-col justify-between py-4">
                     <div className="w-full h-16 bg-surface border border-border/80 rounded-xl p-3 shadow-sm relative overflow-hidden">
                        <div className="w-1/2 h-2.5 bg-text-primary/20 rounded-full mb-3"></div>
                        <div className="w-full h-2 bg-text-primary/10 rounded-full"></div>
                     </div>
                     <div className="w-full h-24 bg-accent-blue/10 border border-accent-blue/20 rounded-xl p-3 shadow-sm relative overflow-hidden">
                        <div className="w-1/2 h-2.5 bg-accent-blue/40 rounded-full mb-3"></div>
                        <div className="w-full h-2 bg-accent-blue/20 rounded-full"></div>
                     </div>
                     <div className="w-full flex-1 bg-surface border border-border/80 rounded-xl p-3 md:p-4 shadow-sm relative overflow-hidden mt-6">
                        <div className="w-1/3 h-2.5 bg-text-primary/20 rounded-full mb-3"></div>
                     </div>
                    </div>
                  </div>
                </div>
              )
            }
          ].map((item, i) => (
            <React.Fragment key={i}>
              <div className={`w-full relative md:sticky md:h-[450px] md:top-[calc(50vh_-_225px)] ${
                i === 0 ? 'z-10' : 
                i === 1 ? 'z-20' : 
                'z-30'
              }`}>
                <motion.div 
                  style={{ scale: cardTransforms[i].scale }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1, ...springTransition }}
                  className="w-full h-full bg-surface border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative origin-top transform-gpu"
                >
                  {/* Darkening overlay that increases as card scales down */}
                  <motion.div 
                    style={{ opacity: cardTransforms[i].overlay }}
                    className="absolute inset-0 bg-black pointer-events-none z-50 hidden md:block"
                  />

                  {/* Left: Text Content */}
                  <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-transparent relative overflow-hidden z-10">
                    <div className="absolute top-4 left-6 md:top-8 md:left-10 text-[5rem] md:text-[8rem] font-light text-border/40 select-none z-0 tracking-tighter leading-none">
                      {item.step}
                    </div>
                    <div className="relative z-10 mt-12 md:mt-16">
                      <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">{item.title}</h3>
                      <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-md">{item.desc}</p>
                    </div>
                  </div>

                  {/* Right: Graphic Component */}
                  <div className="flex-1 w-full bg-transparent border-t md:border-t-0 md:border-l border-border/50 h-[280px] md:h-full min-h-[300px] relative z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none"></div>
                    {item.graphic}
                  </div>
                </motion.div>
              </div>
              {/* Absolute foolproof spacer to guarantee scroll distance */}
              <div className={`w-full shrink-0 ${
                i === 0 ? 'h-8 md:h-[60vh]' : 
                i === 1 ? 'h-8 md:h-[60vh]' : 
                'h-8 md:h-[40vh]'
              }`} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

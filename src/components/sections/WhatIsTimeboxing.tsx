import React from 'react';
import { motion } from 'framer-motion';
import { springTransition } from '../../utils/animations';

export const WhatIsTimeboxing = ({ t }: { t: any }) => {
  return (
    <section id="what-is" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-6xl w-full mx-auto px-5 md:px-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] mb-4 md:mb-6">{t.title}</h2>
          <p className="text-lg text-text-secondary max-w-[600px]">{t.desc}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1: Prioritize */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, ...springTransition }}
            className="bg-surface border border-border rounded-3xl overflow-hidden group hover:border-border/80 transition-all duration-500 shadow-sm hover:shadow-2xl"
          >
            {/* Visual Area */}
            <div className="h-48 w-full bg-bg/50 border-b border-border/50 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.08),transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Abstract UI: Highlighted Top Priority */}
              <div className="w-3/4 max-w-[200px] flex flex-col gap-3 relative z-10">
                <div className="w-full bg-surface border border-accent-rose/30 shadow-[0_0_15px_rgba(244,63,94,0.15)] rounded-lg p-3 flex items-center gap-3 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-4 h-4 rounded-full bg-accent-rose shadow-[0_0_8px_rgba(244,63,94,0.6)]"></div>
                  <div className="w-1/2 h-2 bg-text-primary/80 rounded-full"></div>
                </div>
                <div className="w-full bg-surface/40 border border-border/40 rounded-lg p-3 flex items-center gap-3 opacity-60 translate-x-2">
                  <div className="w-4 h-4 rounded-full border border-border"></div>
                  <div className="w-2/3 h-2 bg-text-primary/20 rounded-full"></div>
                </div>
                <div className="w-full bg-surface/40 border border-border/40 rounded-lg p-3 flex items-center gap-3 opacity-40 translate-x-4">
                  <div className="w-4 h-4 rounded-full border border-border"></div>
                  <div className="w-1/3 h-2 bg-text-primary/20 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 md:p-8 relative">
              <div className="absolute top-0 right-8 w-12 h-1 bg-accent-rose/50 rounded-b-lg"></div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight text-text-primary group-hover:text-accent-rose transition-colors">{t.p1Title}</h3>
              <p className="text-text-secondary leading-relaxed">{t.p1Desc}</p>
            </div>
          </motion.div>

          {/* Card 2: Brain Dump */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, ...springTransition }}
            className="bg-surface border border-border rounded-3xl overflow-hidden group hover:border-border/80 transition-all duration-500 shadow-sm hover:shadow-2xl"
          >
            {/* Visual Area */}
            <div className="h-48 w-full bg-bg/50 border-b border-border/50 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Abstract UI: Brain Dump Input */}
              <div className="w-3/4 max-w-[200px] h-32 relative z-10 flex flex-col justify-end">
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute top-0 left-4 w-1/3 h-2 bg-text-primary/40 rounded-full"
                />
                <motion.div 
                  initial={{ y: -30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  className="absolute top-4 right-4 w-1/4 h-2 bg-text-primary/30 rounded-full"
                />
                <motion.div 
                  initial={{ y: -15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                  className="absolute top-8 left-10 w-1/2 h-2 bg-text-primary/50 rounded-full"
                />
                <div className="w-full bg-surface border border-border shadow-lg rounded-xl p-4 flex flex-col gap-2 relative z-20 mt-auto border-t-text-primary/20">
                  <div className="w-full h-2 bg-text-primary/10 rounded-full"></div>
                  <div className="w-3/4 h-2 bg-text-primary/10 rounded-full"></div>
                  <div className="w-1/2 h-2 bg-text-primary/10 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 md:p-8 relative">
              <div className="absolute top-0 right-8 w-12 h-1 bg-text-primary/30 rounded-b-lg"></div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight text-text-primary group-hover:text-white transition-colors">{t.p2Title}</h3>
              <p className="text-text-secondary leading-relaxed">{t.p2Desc}</p>
            </div>
          </motion.div>

          {/* Card 3: Schedule */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, ...springTransition }}
            className="bg-surface border border-border rounded-3xl overflow-hidden group hover:border-border/80 transition-all duration-500 shadow-sm hover:shadow-2xl"
          >
            {/* Visual Area */}
            <div className="h-48 w-full bg-bg/50 border-b border-border/50 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Abstract UI: Drag and Drop Calendar Block */}
              <div className="w-3/4 max-w-[200px] h-32 relative z-10 flex gap-4">
                <div className="w-2 h-full border-r border-border/50 relative">
                  <div className="absolute top-1/3 -right-[3px] w-[5px] h-[5px] rounded-full bg-border"></div>
                  <div className="absolute top-2/3 -right-[3px] w-[5px] h-[5px] rounded-full bg-border"></div>
                </div>
                <div className="flex-1 flex flex-col gap-2 pt-2 relative">
                  <div className="w-full h-8 border border-dashed border-border/60 rounded-md"></div>
                  <motion.div 
                    initial={{ y: -40, x: 20, scale: 1.05 }}
                    whileInView={{ y: 0, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
                    className="absolute top-2 left-0 w-full h-12 bg-accent-blue/10 border border-accent-blue/30 rounded-lg p-2 flex flex-col justify-center shadow-[0_0_15px_rgba(56,189,248,0.15)] z-20 group-hover:bg-accent-blue/20 transition-colors"
                  >
                    <div className="w-1/2 h-1.5 bg-accent-blue/50 rounded-full mb-1.5"></div>
                    <div className="w-1/3 h-1.5 bg-accent-blue/30 rounded-full"></div>
                  </motion.div>
                  <div className="w-full h-8 bg-surface/50 border border-border/40 rounded-md mt-10"></div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 md:p-8 relative">
              <div className="absolute top-0 right-8 w-12 h-1 bg-accent-blue/50 rounded-b-lg"></div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight text-text-primary group-hover:text-accent-blue transition-colors">{t.p3Title}</h3>
              <p className="text-text-secondary leading-relaxed">{t.p3Desc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

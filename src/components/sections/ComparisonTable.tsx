import React from 'react';
import { motion } from 'framer-motion';
import { ListX, CircleCheck } from 'lucide-react';
import { springTransition } from '../../utils/animations';

export const ComparisonTable = ({ t }: { t: any }) => {
  return (
    <section className="py-20 md:py-32 bg-surface/30 border-t border-border">
      <div className="max-w-5xl w-full mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] mb-6">{t.title}</h2>
          <p className="text-lg text-text-secondary">{t.desc}</p>
        </div>
        
        <div className="w-full bg-bg border border-border rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Header (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-3 border-b border-border bg-surface/50">
            <div className="p-6"></div>
            <div className="p-6 flex items-center justify-center gap-3 border-l border-border opacity-60">
              <ListX size={20} />
              <h3 className="text-lg font-medium">{t.todoTitle}</h3>
            </div>
            <div className="p-6 flex items-center justify-center gap-3 border-l border-border bg-accent-emerald/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-emerald"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)]"></div>
              <CircleCheck size={20} className="text-accent-emerald relative z-10" />
              <h3 className="text-lg font-medium text-text-primary relative z-10">{t.timeboxTitle}</h3>
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col divide-y divide-border/50">
            {t.rows.map((row: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, ...springTransition }}
                className="flex flex-col md:grid md:grid-cols-3 hover:bg-surface/30 transition-colors"
              >
                {/* Feature Name (Acts as a header on mobile) */}
                <div className="px-5 py-4 md:p-6 flex items-center text-text-primary md:text-text-secondary font-semibold md:font-medium bg-surface/40 md:bg-transparent border-b md:border-b-0 border-border/30 md:border-transparent">
                  {row.feature}
                </div>
                
                {/* To-Do Column */}
                <div className="px-5 py-3.5 md:p-6 flex items-start md:items-center md:justify-center text-text-secondary/70 md:border-l border-border/50 text-sm md:text-base">
                  <div className="md:hidden flex items-center w-[120px] shrink-0 gap-2 opacity-60 mt-0.5">
                    <ListX size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{t.todoTitle}</span>
                  </div>
                  <span className="flex-1">{row.todo}</span>
                </div>

                {/* Timebox Column */}
                <div className="px-5 py-4 md:p-6 flex items-start md:items-center md:justify-center text-text-primary font-medium md:border-l border-border bg-accent-emerald/5 text-sm md:text-base border-t md:border-t-0 border-border/30 md:border-transparent relative">
                  <div className="md:hidden flex items-center w-[120px] shrink-0 gap-2 text-accent-emerald mt-0.5">
                    <CircleCheck size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{t.timeboxTitle}</span>
                  </div>
                  <span className="flex-1">{row.timebox}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

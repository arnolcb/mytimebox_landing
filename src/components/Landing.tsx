import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { Box, Coffee, CircleCheck, Calendar, CalendarRange, BrainCircuit, ArrowRight, X, ChevronDown, ListX, Timer, BarChart, LayoutGrid } from 'lucide-react';

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 40
};

const content = {
  en: {
    nav: {
      whatIs: "Concept",
      features: "Features",
      faq: "FAQ",
      tryNow: "Get Started"
    },
    hero: {
      rotating: ["Redefine", "Organize", "Master", "Elevate"],
      static: "your time.",
      subtitle: <>High-performance, minimalist scheduling built to eliminate cognitive friction. Design your day with absolute precision. <strong className="text-text-primary">100% free, no subscriptions.</strong></>,
      cta: "Start Planning",
      free: "Free forever",
      author: "By @arnolcb"
    },
    whatIs: {
      title: "What is Timeboxing?",
      desc: "A proven productivity method to allocate fixed time periods to tasks, eliminating procrastination and burnout through structural clarity.",
      p1Title: "Prioritize",
      p1Desc: "Define what matters most today. Keep it visible, keep it top of mind.",
      p2Title: "Brain Dump",
      p2Desc: "Offload your mental RAM. Quickly capture tasks before scheduling them.",
      p3Title: "Schedule",
      p3Desc: "Drag, drop, and conquer. Turn to-dos into concrete blocks of time."
    },
    comparison: {
      title: "To-Do Lists vs. Timeboxing",
      desc: "Why traditional lists fail and timeboxing works.",
      todoTitle: "To-Do List",
      timeboxTitle: "Timeboxing",
      rows: [
        { feature: "Primary Focus", todo: "Completing an infinite list", timebox: "Deep work & execution" },
        { feature: "Time Constraints", todo: "None (Parkinson's Law)", timebox: "Strict (1-2 hours max per block)" },
        { feature: "Cognitive Load", todo: "High (Choice paralysis)", timebox: "Low (Zero decision friction)" },
        { feature: "Visualization", todo: "Cluttered text format", timebox: "Structured calendar view" },
        { feature: "Completion Rate", todo: "Low (Easy to procrastinate)", timebox: "High (Artificial urgency)" }
      ]
    },
    howItWorks: {
      title: "How it Works",
      desc: "Master your day in three simple steps.",
      s1Title: "Brainstorm",
      s1Desc: "Empty your mind. Write down all your tasks without thinking about when to do them.",
      s2Title: "Block",
      s2Desc: "Drag and drop tasks into your calendar. Assign a realistic time constraint.",
      s3Title: "Execute",
      s3Desc: "Follow the schedule. Focus exclusively on the current time block until completed."
    },
    features: {
      title: "Connect your Ecosystem.",
      desc: "Pull your meetings, workspaces, and tasks directly into your timebox. Seamlessly integrated with the tools you already use.",
      f1: "Google Calendar",
      f2: "Microsoft Teams",
      f3: "Microsoft Planner (Soon)"
    },
    bento: {
      title: "Built for Performance",
      desc: "Every feature is designed to reduce friction and keep you in the flow state.",
      box1Title: "Real-time Sync",
      box1Desc: "Two-way sync with Google Calendar and Outlook.",
      box2Title: "Zen Mode",
      box2Desc: "Immersive full-screen focus timer.",
      box3Title: "Insights",
      box3Desc: "Track your deep work hours effortlessly."
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "Is it really free?", a: "Yes, the core timeboxing experience is completely free to use. No hidden fees." },
        { q: "Do I need to connect Google or Microsoft?", a: "It's optional, but recommended so your time blocks don't overlap with your meetings." },
        { q: "What happens if a task takes longer than planned?", a: "Timeboxing is about progress, not perfection. Simply reallocate the remaining work to the next day's schedule." },
        { q: "How is this different from a normal to-do list?", a: "A list only tells you what to do. Timeboxing tells you when and for how long, eliminating analysis paralysis." },
        { q: "Is there a mobile app?", a: "Currently, we are a Progressive Web App (PWA) optimized for mobile. You can install it to your home screen without taking up storage space." },
        { q: "Why My Timebox over standard calendars?", a: "Standard calendars are for events. My Timebox is for action, focus, and dopamine-driven completion loops." }
      ]
    },
    banner: {
      title: "Stop wasting time.",
      desc: "A minimalist, high-performance timeboxing app to master your day. Open source. Always free.",
      contact: "Start Planning",
      donate: "Star on GitHub"
    },
    footer: "© 2026 My Timebox. Designed with precision."
  },
  es: {
    nav: {
      whatIs: "Concepto",
      features: "Funciones",
      faq: "FAQ",
      tryNow: "Probar ahora"
    },
    hero: {
      rotating: ["Redefine", "Organiza", "Domina", "Eleva"],
      static: "tu tiempo.",
      subtitle: <>Planificación minimalista de alto rendimiento construida para eliminar la fricción cognitiva. Diseña tu día con precisión absoluta. <strong className="text-text-primary">100% gratis, sin pagos ocultos.</strong></>,
      cta: "Empieza gratis",
      free: "Gratis siempre",
      author: "Por @arnolcb"
    },
    whatIs: {
      title: "¿Qué es Timeboxing?",
      desc: "Un método probado para asignar periodos fijos de tiempo a las tareas, eliminando la procrastinación y el agotamiento estructuralmente.",
      p1Title: "Prioriza",
      p1Desc: "Define lo que más importa hoy. Mantenlo visible y siempre presente.",
      p2Title: "Brain Dump",
      p2Desc: "Descarga tu RAM mental. Captura tareas rápidamente antes de programarlas.",
      p3Title: "Programa",
      p3Desc: "Arrastra, suelta y conquista. Convierte pendientes en bloques concretos."
    },
    comparison: {
      title: "To-Do Lists vs. Timeboxing",
      desc: "Por qué las listas tradicionales fallan y el timeboxing funciona.",
      todoTitle: "To-Do List",
      timeboxTitle: "Timeboxing",
      rows: [
        { feature: "Enfoque principal", todo: "Completar la lista infinita", timebox: "Trabajo profundo (Deep Work)" },
        { feature: "Límites de tiempo", todo: "Inexistentes (ley de Parkinson)", timebox: "Estrictos (1-2 horas max por bloque)" },
        { feature: "Carga cognitiva", todo: "Alta (Parálisis por análisis)", timebox: "Baja (Cero fricción de decisión)" },
        { feature: "Visualización", todo: "Texto desordenado", timebox: "Calendario estructurado" },
        { feature: "Tasa de finalización", todo: "Baja (Procrastinación)", timebox: "Alta (Urgencia artificial)" }
      ]
    },
    howItWorks: {
      title: "Cómo Funciona",
      desc: "Domina tu día en tres sencillos pasos.",
      s1Title: "Brainstorm",
      s1Desc: "Vacía tu mente. Escribe todas tus tareas sin pensar en cuándo hacerlas.",
      s2Title: "Bloquea",
      s2Desc: "Arrastra tus tareas al calendario. Asígnales un límite de tiempo realista.",
      s3Title: "Ejecuta",
      s3Desc: "Sigue el plan trazado. Concéntrate exclusivamente en el bloque de tiempo actual hasta terminarlo."
    },
    features: {
      title: "Conecta tu Ecosistema.",
      desc: "Jala tus reuniones, espacios de trabajo y tareas directamente a tu timebox. Perfectamente integrado con las herramientas que ya usas.",
      f1: "Google Calendar",
      f2: "Microsoft Teams",
      f3: "Microsoft Planner (Pronto)"
    },
    bento: {
      title: "Construido para el Rendimiento",
      desc: "Cada función está diseñada para reducir la fricción y mantenerte en estado de flujo.",
      box1Title: "Sincronización Total",
      box1Desc: "Sincronización bidireccional con Google Calendar y Outlook.",
      box2Title: "Modo Zen",
      box2Desc: "Temporizador de enfoque inmersivo a pantalla completa.",
      box3Title: "Estadísticas",
      box3Desc: "Rastrea tus horas de trabajo profundo sin esfuerzo."
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        { q: "¿Es realmente gratis?", a: "Sí, la experiencia central de timeboxing es completamente gratuita. Sin cobros ocultos." },
        { q: "¿Tengo que conectar mi cuenta de Google/Microsoft?", a: "Es opcional, pero lo recomendamos para que tus bloques de tiempo no choquen con tus reuniones." },
        { q: "¿Qué pasa si no termino una tarea en el tiempo asignado?", a: "El timeboxing se trata de progreso, no de perfección. Simplemente reasigna el tiempo sobrante al día siguiente." },
        { q: "¿En qué se diferencia de una lista de tareas normal?", a: "Una lista solo te dice qué hacer. El timeboxing te dice cuándo y por cuánto tiempo, eliminando la parálisis por análisis." },
        { q: "¿Tienen aplicación móvil (iOS/Android)?", a: "Por ahora somos una Web App optimizada para móviles (PWA), puedes instalarla en tu inicio sin ocupar espacio." },
        { q: "¿Por qué My Timebox en lugar del calendario estándar?", a: "Los calendarios son para eventos. My Timebox es para la acción, el enfoque y ciclos de finalización que generan dopamina." }
      ]
    },
    banner: {
      title: "Deja de perder tiempo.",
      desc: "Una app de timeboxing minimalista y de alto rendimiento para dominar tu día. Open source. Siempre gratis.",
      contact: "Empieza a planear",
      donate: "Star en GitHub"
    },
    footer: "© 2026 My Timebox. Diseñado con precisión."
  }
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

const FAQItem = ({ q, a }: { q: string; a: string }) => {
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

// Interactive Bento Components
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
);

const TeamsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="currentColor">
    <path d="M 20 2 C 16.41 2 13.5 4.91 13.5 8.5 C 13.5 12.09 16.41 15 20 15 C 23.59 15 26.5 12.09 26.5 8.5 C 26.5 4.91 23.59 2 20 2 z M 36.5 6 C 33.462 6 31 8.462 31 11.5 C 31 14.538 33.462 17 36.5 17 C 39.538 17 42 14.538 42 11.5 C 42 8.462 39.538 6 36.5 6 z M 15.720703 18 C 12.610703 18 9.9804688 20.12 9.2304688 23 L 18.5 23 C 21.53 23 24 25.47 24 28.5 L 24 39.5 C 24 42.53 21.53 45 18.5 45 L 13.810547 45 C 15.620547 46.26 17.819219 47 20.199219 47 L 33.720703 47 C 32.050703 45.53 31 43.38 31 41 L 31 24.720703 C 31 21.010703 27.989297 18 24.279297 18 L 15.720703 18 z M 31.599609 20 C 32.489609 21.35 33 22.980703 33 24.720703 L 33 41 C 33 44.29 35.659453 46.97 38.939453 47 C 42.219453 46.96 44.869141 44.29 44.869141 41 L 44.869141 26.789062 C 44.869141 23.039062 41.820312 20 38.070312 20 L 31.599609 20 z M 7.5 25 C 5.567 25 4 26.567 4 28.5 L 4 39.5 C 4 41.433 5.567 43 7.5 43 L 18.5 43 C 20.433 43 22 41.433 22 39.5 L 22 28.5 C 22 26.567 20.433 25 18.5 25 L 7.5 25 z M 9.2128906 29 L 16.787109 29 L 16.787109 30.833984 L 14.123047 30.833984 L 14.123047 39 L 11.876953 39 L 11.876953 30.833984 L 9.2128906 30.833984 L 9.2128906 29 z"></path>
  </svg>
);

const MicrosoftIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
  </svg>
);

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
      
      <div className="flex items-center justify-between w-full max-w-[280px] relative z-0">
        
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

export default function Landing() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(l => l === 'es' ? 'en' : 'es');
  };

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

  return (
    <div className="relative min-h-screen bg-bg text-text-primary selection:bg-accent-blue/30">
      <div className="bg-glow" />
      
      {/* Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'pt-4 md:pt-6' : 'pt-0'}`}>
        <header className={`pointer-events-auto flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-xl border ${scrolled ? 'w-[95%] sm:w-[90%] max-w-4xl h-14 bg-surface/90 rounded-full border-border shadow-2xl' : 'w-full max-w-full h-16 bg-black/60 rounded-none border-transparent border-b-border shadow-none'}`}>
          <div className={`w-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] mx-auto ${scrolled ? 'px-4 md:px-6 max-w-full' : 'px-5 md:px-10 max-w-6xl'}`}>
          <div className="flex items-center gap-2">
            <Box className="w-5 h-5 text-bg fill-text-primary" />
            <span className="font-semibold text-base tracking-tight text-text-primary">My Timebox</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <a href="#what-is" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium">{t.nav.whatIs}</a>
              <a href="#features" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium">{t.nav.features}</a>
              <a href="#faq" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium">{t.nav.faq}</a>
            </nav>
            <div className="flex items-center gap-4 border-l border-border pl-6">
              <button onClick={toggleLang} className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium uppercase tracking-widest">
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
              <a href="https://app.mytimebox.dev" className="inline-flex items-center justify-center px-4 h-9 rounded-full bg-text-primary text-bg font-medium text-sm transition-transform hover:scale-95 active:scale-90">
                {t.nav.tryNow}
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-text-secondary hover:text-text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </header>
      </div>

      {/* Mobile Menu Dropdown Wrapper */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed left-0 right-0 z-40 flex justify-center pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'top-[2.5rem]' : 'top-16'}`}
          >
            <div className={`pointer-events-auto bg-surface/95 backdrop-blur-xl flex flex-col gap-4 md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border border-t-0 border-b-border ${
              scrolled 
                ? 'w-[90%] sm:w-[85%] max-w-4xl rounded-b-3xl rounded-t-none border-l-border border-r-border p-5 pt-12 shadow-2xl' 
                : 'w-full max-w-full rounded-none border-l-transparent border-r-transparent p-5 pt-5 shadow-none'
            }`}>
              <a href="#what-is" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-text-primary">{t.nav.whatIs}</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-text-primary">{t.nav.features}</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-text-primary">{t.nav.faq}</a>
              <div className="h-px bg-border my-2" />
              <div className="flex items-center justify-between">
                <button 
                  onClick={toggleLang} 
                  className="flex items-center p-1 rounded-full bg-border/50 border border-border"
                  aria-label="Toggle language"
                >
                  <div className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${lang === 'es' ? 'bg-text-primary text-bg shadow-sm' : 'text-text-secondary'}`}>ES</div>
                  <div className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${lang === 'en' ? 'bg-text-primary text-bg shadow-sm' : 'text-text-secondary'}`}>EN</div>
                </button>
                <a href="https://app.mytimebox.dev" className="inline-flex items-center justify-center px-4 h-10 rounded-full bg-text-primary text-bg font-medium text-sm">
                  {t.nav.tryNow}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20 md:pt-32">
        
        {/* Hero Section */}
        <section className="min-h-[calc(100dvh-5rem)] md:min-h-[calc(100dvh-8rem)] flex flex-col justify-center pb-8 md:pb-24 pt-4 md:pt-0">
          <div className="max-w-6xl w-full mx-auto px-5 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <motion.div 
              initial="hidden" animate="visible" variants={containerVariants}
              className="flex-1 w-full"
            >
              
              <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-[-0.05em] font-light mb-4 md:mb-6">
                <RotatingText words={t.hero.rotating} /><br/>
                <span className="text-text-secondary">{t.hero.static}</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg sm:text-xl text-text-secondary max-w-[500px] mb-6 md:mb-8 leading-relaxed">
                {t.hero.subtitle}
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a href="https://app.mytimebox.dev" className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full bg-text-primary text-bg font-medium text-sm transition-transform hover:scale-95 active:scale-90 w-full sm:w-auto">
                  {t.hero.cta} <ArrowRight size={16} />
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
                <video src="/video/glass_box_3.webm" autoPlay loop muted playsInline className="w-full h-auto max-h-[35vh] lg:max-h-none object-contain block mix-blend-screen" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is Timeboxing */}
        <section id="what-is" className="py-20 md:py-32 border-t border-border">
          <div className="max-w-6xl w-full mx-auto px-5 md:px-10">
            <div className="flex flex-col items-center text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] mb-4 md:mb-6">{t.whatIs.title}</h2>
              <p className="text-lg text-text-secondary max-w-[600px]">{t.whatIs.desc}</p>
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
                  <h3 className="text-xl font-semibold mb-3 tracking-tight text-text-primary group-hover:text-accent-rose transition-colors">{t.whatIs.p1Title}</h3>
                  <p className="text-text-secondary leading-relaxed">{t.whatIs.p1Desc}</p>
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
                  <h3 className="text-xl font-semibold mb-3 tracking-tight text-text-primary group-hover:text-white transition-colors">{t.whatIs.p2Title}</h3>
                  <p className="text-text-secondary leading-relaxed">{t.whatIs.p2Desc}</p>
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
                  <h3 className="text-xl font-semibold mb-3 tracking-tight text-text-primary group-hover:text-accent-blue transition-colors">{t.whatIs.p3Title}</h3>
                  <p className="text-text-secondary leading-relaxed">{t.whatIs.p3Desc}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 md:py-32 bg-surface/30 border-t border-border">
          <div className="max-w-5xl w-full mx-auto px-5 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] mb-6">{t.comparison.title}</h2>
              <p className="text-lg text-text-secondary">{t.comparison.desc}</p>
            </div>
            
            <div className="w-full bg-bg border border-border rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Header (Hidden on Mobile) */}
              <div className="hidden md:grid grid-cols-3 border-b border-border bg-surface/50">
                <div className="p-6"></div>
                <div className="p-6 flex items-center justify-center gap-3 border-l border-border opacity-60">
                  <ListX size={20} />
                  <h3 className="text-lg font-medium">{t.comparison.todoTitle}</h3>
                </div>
                <div className="p-6 flex items-center justify-center gap-3 border-l border-border bg-accent-emerald/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent-emerald"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)]"></div>
                  <CircleCheck size={20} className="text-accent-emerald relative z-10" />
                  <h3 className="text-lg font-medium text-text-primary relative z-10">{t.comparison.timeboxTitle}</h3>
                </div>
              </div>

              {/* Rows */}
              <div className="flex flex-col divide-y divide-border/50">
                {t.comparison.rows.map((row: any, i: number) => (
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
                        <span className="text-[10px] font-bold uppercase tracking-wider">{t.comparison.todoTitle}</span>
                      </div>
                      <span className="flex-1">{row.todo}</span>
                    </div>

                    {/* Timebox Column */}
                    <div className="px-5 py-4 md:p-6 flex items-start md:items-center md:justify-center text-text-primary font-medium md:border-l border-border bg-accent-emerald/5 text-sm md:text-base border-t md:border-t-0 border-border/30 md:border-transparent relative">
                      <div className="md:hidden flex items-center w-[120px] shrink-0 gap-2 text-accent-emerald mt-0.5">
                        <CircleCheck size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">{t.comparison.timeboxTitle}</span>
                      </div>
                      <span className="flex-1">{row.timebox}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-32 border-t border-border">
          <div className="max-w-6xl w-full mx-auto px-5 md:px-10">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] mb-6">{t.howItWorks.title}</h2>
              <p className="text-lg text-text-secondary">{t.howItWorks.desc}</p>
            </div>
            <div className="flex flex-col relative pb-0 mt-10" ref={cardsContainerRef}>
              {[
                {
                  step: "01",
                  title: t.howItWorks.s1Title,
                  desc: t.howItWorks.s1Desc,
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
                  title: t.howItWorks.s2Title,
                  desc: t.howItWorks.s2Desc,
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
                  title: t.howItWorks.s3Title,
                  desc: t.howItWorks.s3Desc,
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

        {/* Integrations */}
        <section id="features" className="py-20 md:py-32 border-t border-border bg-surface/30">
          <div className="max-w-5xl w-full mx-auto px-5 md:px-10 text-center">
            <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] mb-6">{t.features.title}</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-20">{t.features.desc}</p>
            
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
                  {/* Google Logo */}
                  <svg viewBox="0 0 24 24" className="w-14 h-14 md:w-[72px] md:h-[72px]" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                </div>
                <h3 className="text-sm sm:text-base md:text-xl font-medium tracking-tight text-text-primary whitespace-nowrap">{t.features.f1}</h3>
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
                  {/* Microsoft Teams Logo */}
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-14 h-14 md:w-[72px] md:h-[72px]" viewBox="0 0 50 50" fill="currentColor">
                  <path d="M 20 2 C 16.41 2 13.5 4.91 13.5 8.5 C 13.5 12.09 16.41 15 20 15 C 23.59 15 26.5 12.09 26.5 8.5 C 26.5 4.91 23.59 2 20 2 z M 36.5 6 C 33.462 6 31 8.462 31 11.5 C 31 14.538 33.462 17 36.5 17 C 39.538 17 42 14.538 42 11.5 C 42 8.462 39.538 6 36.5 6 z M 15.720703 18 C 12.610703 18 9.9804688 20.12 9.2304688 23 L 18.5 23 C 21.53 23 24 25.47 24 28.5 L 24 39.5 C 24 42.53 21.53 45 18.5 45 L 13.810547 45 C 15.620547 46.26 17.819219 47 20.199219 47 L 33.720703 47 C 32.050703 45.53 31 43.38 31 41 L 31 24.720703 C 31 21.010703 27.989297 18 24.279297 18 L 15.720703 18 z M 31.599609 20 C 32.489609 21.35 33 22.980703 33 24.720703 L 33 41 C 33 44.29 35.659453 46.97 38.939453 47 C 42.219453 46.96 44.869141 44.29 44.869141 41 L 44.869141 26.789062 C 44.869141 23.039062 41.820312 20 38.070312 20 L 31.599609 20 z M 7.5 25 C 5.567 25 4 26.567 4 28.5 L 4 39.5 C 4 41.433 5.567 43 7.5 43 L 18.5 43 C 20.433 43 22 41.433 22 39.5 L 22 28.5 C 22 26.567 20.433 25 18.5 25 L 7.5 25 z M 9.2128906 29 L 16.787109 29 L 16.787109 30.833984 L 14.123047 30.833984 L 14.123047 39 L 11.876953 39 L 11.876953 30.833984 L 9.2128906 30.833984 L 9.2128906 29 z"></path>
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base md:text-xl font-medium tracking-tight text-text-primary whitespace-nowrap">{t.features.f2}</h3>
              </motion.div>




            </div>
          </div>
        </section>

        {/* Bento Grid */}
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
                {/* Decorative UI element */}
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
                {/* Decorative Stats */}
                <StatsSparkline />
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 md:py-32 border-t border-border bg-surface/30">
          <div className="max-w-3xl w-full mx-auto px-5 md:px-10">
            <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] text-center mb-12 md:mb-16">{t.faq.title}</h2>
            <div className="flex flex-col border-t border-border">
              {t.faq.items.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* Banner (React Bits style CTA Card) */}
        <section className="py-20 md:py-32 flex justify-center border-t border-border bg-surface/30">
          <div className="max-w-4xl w-full mx-auto px-5 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={springTransition}
              className="relative p-[1px] rounded-3xl overflow-hidden group w-full shadow-2xl"
            >
              {/* ln-cta-card-border: Animated glowing border (Double Shine) */}
              <div className="absolute inset-0 bg-border/40"></div>
              <div className="absolute left-1/2 top-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0%,transparent_35%,#e4e4e7_50%,transparent_50%,transparent_85%,#e4e4e7_100%)] opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
              
              {/* ln-cta-card: Inner card content */}
              <div className="relative h-full w-full bg-[#111113] rounded-[23px] flex flex-col items-center text-center p-12 md:p-16">
                <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] mb-4 text-text-primary">
                  {t.banner.title}
                </h2>
                <p className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  {t.banner.desc}
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
                  <a href="https://app.mytimebox.dev" className="flex items-center justify-center gap-2 px-6 h-11 rounded-xl bg-text-primary text-bg font-medium text-sm transition-transform hover:scale-95 active:scale-90 w-full sm:w-auto">
                    {t.banner.contact}
                    <ArrowRight size={16} />
                  </a>
                  <a href="https://github.com/arnolcb/timebox" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 h-11 rounded-xl bg-transparent border border-border text-text-primary font-medium text-sm transition-colors hover:bg-surface-hover active:scale-95 w-full sm:w-auto">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="15" width="15"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    {t.banner.donate}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-16 md:py-24 border-t border-border bg-bg">
        <div className="max-w-6xl w-full mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Box className="w-6 h-6 text-bg fill-text-primary" />
                <span className="font-medium tracking-tight text-xl text-text-primary">My Timebox</span>
              </div>
              <p className="text-text-secondary max-w-xs leading-relaxed text-sm">
                {lang === 'en' ? 'Master your day with deep focus and minimalist timeboxing.' : 'Domina tu día con enfoque profundo y timeboxing minimalista.'}
              </p>
            </div>
            
            <div className="flex gap-12 sm:gap-24">
              <div className="flex flex-col gap-4">
                <h4 className="font-medium text-text-primary">{lang === 'en' ? 'Product' : 'Producto'}</h4>
                <a href="#what-is" className="text-text-secondary hover:text-text-primary transition-colors text-sm">{t.nav.whatIs}</a>
                <a href="#features" className="text-text-secondary hover:text-text-primary transition-colors text-sm">{t.nav.features}</a>
                <a href="#faq" className="text-text-secondary hover:text-text-primary transition-colors text-sm">{t.nav.faq}</a>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-medium text-text-primary">{lang === 'en' ? 'Connect' : 'Conecta'}</h4>
                <a href="https://github.com/arnolcb/timebox" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-sm">GitHub</a>
                <a href="mailto:support@mytimebox.dev" className="text-text-secondary hover:text-text-primary transition-colors text-sm">Email</a>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary transition-colors text-sm">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border gap-4">
            <p className="text-text-secondary text-sm font-light">{t.footer}</p>
            <div className="flex items-center gap-6 text-sm font-light text-text-secondary">
              <a href="#" className="hover:text-text-primary transition-colors">{lang === 'en' ? 'Privacy' : 'Privacidad'}</a>
              <a href="#" className="hover:text-text-primary transition-colors">{lang === 'en' ? 'Terms' : 'Términos'}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

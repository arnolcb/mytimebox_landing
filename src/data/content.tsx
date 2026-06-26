import React from 'react';

export const content = {
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

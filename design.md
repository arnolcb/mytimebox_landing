---
version: v3
name: Timebox Design System
description: Timebox's design system for high-performance, minimalist scheduling. Heavily relies on tactile physics, dark/light theme tokens, and semantic colors.
colors:
  primary: "#18181b"             # Zinc 900
  secondary: "#71717a"           # Zinc 500
  background-light: "#f9fafb"    # Zinc 50
  background-dark: "#0c0c0e"     # Onyx base
  surface-light: "#ffffff"       # Pure white
  surface-dark: "#111113"        # Secondary Onyx
  border-light: "rgba(228, 228, 231, 0.5)" # Zinc 200 (50% opacity)
  border-dark: "rgba(39, 39, 42, 0.8)"     # Zinc 800 (80% opacity)
  border-dark-strong: "rgba(63, 63, 70, 0.6)" # Zinc 700 (60% opacity)
  
  # Semantic accents for time block categorization
  deep-work-blue: "#3b82f6"      # Blue 500
  deep-work-bg-light: "#eff6ff"
  deep-work-bg-dark: "rgba(59, 130, 246, 0.1)"
  
  meeting-rose: "#f43f5e"        # Rose 500
  meeting-bg-light: "#fff1f2"
  meeting-bg-dark: "rgba(244, 63, 94, 0.1)"
  
  shallow-work-slate: "#64748b"  # Slate 500
  shallow-work-bg-light: "#f1f5f9"
  shallow-work-bg-dark: "rgba(100, 116, 139, 0.1)"
  
  break-emerald: "#10b981"       # Emerald 500
  break-bg-light: "#ecfdf5"
  break-bg-dark: "rgba(16, 185, 129, 0.1)"

  # State accents
  alert-red: "#ef4444"           # Red 500
  warning-amber: "#f59e0b"       # Amber 500
  success-green: "#10b981"       # Emerald 500

typography:
  fontFamily-sans: "Geist Sans, system-ui, sans-serif"
  fontFamily-mono: "Geist Mono, monospace"
  heading-display:
    fontSize: "clamp(2rem, 5vw, 4.5rem)"
    fontWeight: "300"
    letterSpacing: "-0.05em"
  heading-section:
    fontSize: "13px"
    fontWeight: "600"
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  body-text:
    fontSize: "14px"
    lineHeight: "20px"
    fontWeight: "400"
  mono-timer:
    fontSize: "clamp(120px, 15vw, 220px)"
    fontWeight: "300"
    fontVariant: "tabular-nums"

spacing:
  base: "4px"
  timeline-minute: "1.5px"       # 1 minute = 1.5px (1 hour = 90px grid block)
  gap-group: "8px"
  gap-component: "16px"
  gap-section: "24px"

rounded:
  sm: "6px"
  md: "8px"
  xl: "12px"                     # Used for schedule blocks, priority chips, modals
  "2xl": "16px"                  # Used for sidebar, command palettes
  "3xl": "24px"                  # Used for board columns and main schedule panel
  full: "9999px"                 # Circular items, toggle knobs, and Zen FAB

components:
  schedule-block:
    rounded: "{rounded.xl}"
    padding: "8px"
    height: "duration * spacing.timeline-minute"
    borderWidth: "1px"
  main-column:
    rounded: "{rounded.3xl}"
    padding: "24px"
  sidebar:
    rounded-mobile: "{rounded.2xl}"
    borderWidth: "1px"
  zen-fab:
    rounded: "{rounded.full}"
    height: "56px"
    width: "56px"
---

# Timebox

## Overview

Timebox is a premium, minimalist time-management application designed for high performance, zero cognitive friction, and tactile satisfaction. The visual design system prioritizes absolute cleanliness (cero "AI-slop"), structural resilience, and micro-interactions that trigger dopamine loops. Every detail—from drag physics to color palettes and typo metrics—focuses on saving time, removing loading latency, and providing immediate feedback.

---

## 1. Visual Theme & Atmosphere

The atmosphere of Timebox is clean, technical, and highly structured, evoking the feel of a modern workspace. We utilize high-contrast layouts with plenty of whitespace, precise vertical alignments, and a restrained color palette. 

- **Density:** Daily App Balanced (Density 6). Information is organized into clean, independent panels. Each panel scrolls independently using custom scrollbar styles to avoid layout shifts.
- **Variance:** Offset Asymmetric (Variance 6). Layout splits, such as the two-column dashboard composition, present notes/priorities on the left and a detailed schedule grid on the right.
- **Motion:** Cinematic CSS and Framer Motion Springs (Motion 7). Motion is functional, weight-driven, and responds physically to drag-and-drop actions.

---

## 2. Color System & Theme Modes

Timebox features a native dual-theme color architecture loaded via `next-themes` and defined in [layout.tsx](file:///home/arnolcb/Documentos/Coding/timebox-app-v3/src/app/layout.tsx). 

### Page Backgrounds & Containers
- **Light Theme (Bone Mode):** Page canvas is styled in `bg-zinc-50`. Card and panel surfaces use `bg-white` with structural divisions using translucent `border-zinc-200/50`.
- **Dark Theme (Onyx Mode):** Page canvas is styled in `bg-[#0c0c0e]`. Card and panel surfaces use `bg-[#111113]` with structural divisions using `border-zinc-800/80` or `border-zinc-700/60`.

### Semantic Categorization Palette
Schedule blocks represent distinct types of tasks, each associated with a unique, desaturated color scale to preserve high contrast and structural hierarchy:
- **Deep Work:** Blue accent (`#3b82f6`). Text colored `text-blue-500` with icons matching `lucide:brain`. Fills use `bg-blue-50/30` or `bg-blue-900/10`.
- **Meetings / Syncs:** Rose accent (`#f43f5e`). Text colored `text-rose-500` with icons matching `lucide:users`. Fills use `bg-rose-50/30` or `bg-rose-900/10`.
- **Shallow Work / Comm:** Slate accent (`#64748b`). Text colored `text-slate-400` or `text-slate-500` with icons matching `lucide:mail`. Fills use `bg-slate-100/30` or `bg-slate-900/10`.
- **Breaks / Rest:** Emerald accent (`#10b981`). Text colored `text-emerald-500` with icons matching `lucide:coffee`. Fills use `bg-emerald-50/30` or `bg-emerald-900/10`.

---

## 3. Typography Rules

Timebox pairs **Geist Sans** (for UI components, notes, and priorities) with **Geist Mono** (for time values, durations, and Zen timers) via Next.js Google Fonts config inside [layout.tsx](file:///home/arnolcb/Documentos/Coding/timebox-app-v3/src/app/layout.tsx) and [globals.css](file:///home/arnolcb/Documentos/Coding/timebox-app-v3/src/app/globals.css).

- **Display & Headings:** Set in Geist Sans, with letter spacing tightened as font sizes grow. Display headings in Zen mode use a light weight (`font-light`) to feel elegant rather than heavy.
- **Section Headers:** Placed in small caps (`text-[13px] uppercase font-semibold tracking-wider`).
- **Body & Controls:** Styled with `text-[14px]` (Geist Sans) with a line-height of `20px` to maintain a relaxed read. Paragraph elements (e.g., notes, priorities) enforce a maximum reading width of 65 characters (`max-w-prose`) to avoid wrapping fatigue.
- **Monospace Override:** Duration pills, timestamp ranges, and countdown indicators are bound to `Geist Mono` (`font-mono`) to prevent tabular layout shifts during ticker updates.

---

## 4. Layout & CSS Resiliency

The shell must be visually robust and fully responsive, ensuring no layout shifts or clipping bugs occur on different screen resolutions.

- **Layout Structure:** Inmutable shell structure uses flexbox columns. The body uses `h-dvh overflow-hidden flex flex-col`. Scrolling is delegated to specific subpanels using `overflow-y-auto` and `min-h-0`.
- **Layout Shift Prevention:** The system utilizes `scrollbar-gutter: stable` globally to prevent content jumping when scrollbars appear.
- **Timeline Scaling:** Time is rendered vertically inside [ScheduleGrid.tsx](file:///home/arnolcb/Documentos/Coding/timebox-app-v3/src/components/timebox/ScheduleGrid.tsx) using the `PIXELS_PER_MINUTE` token (currently `1.5px/minute`). One hour occupies exactly `90px` of vertical height, making it easy to map screen pixels to scheduling mathematics.
- **Responsive Strategies:** Multi-column board views (`xl:flex-row`) collapse to single vertical columns on views narrower than 1280px (`xl`). The sidebar collapses cleanly on devices under 768px (`md`).

---

## 5. Component Stylings

### Schedule Blocks
Schedule blocks are rendered dynamically with a vertical height corresponding to their minutes duration.
- **Radius & Borders:** Rounded corners are set to `rounded-xl` (12px) with `border border-zinc-200 dark:border-zinc-700/60`.
- **Hover & Interaction:** Hover states trigger shadow drops (`hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-600`) and reveal hover controls (such as category tag triggers and delete buttons).
- **Active Dragging:** Uses a dedicated `DragOverlay` displaying `opacity-90 scale-[1.02] transition-transform shadow-xl` with a grabbing cursor (`cursor-grabbing`).

### Priorities & Note Containers
Located in [TopPriorities.tsx](file:///home/arnolcb/Documentos/Coding/timebox-app-v3/src/components/timebox/TopPriorities.tsx) and [BrainDump.tsx](file:///home/arnolcb/Documentos/Coding/timebox-app-v3/src/components/timebox/BrainDump.tsx):
- **Dashed Placeholders:** When drag-and-drop actions are active, empty zones render dashed outlines (`border-2 border-dashed border-zinc-400 dark:border-zinc-500 bg-zinc-100/50 dark:bg-zinc-800/50 backdrop-blur-sm`).
- **Interactive Rows:** Action items are styled in clean, flat rows with custom checkbox inputs that animate smoothly upon status updates.

### Zen Mode
Accessible via the floating action button (`fixed bottom-6 right-6 z-40 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-full w-14 h-14`):
- **Zen Overlay:** Renders a full-screen minimalist modal using Framer Motion animations.
- **Timer Display:** Utilizes massive monospace numbers (`font-mono text-[120px] md:text-[180px] lg:text-[220px] tracking-tighter tabular-nums`).
- **Completion States:** Highlights achievements with a distinct emerald green theme transition coupled with custom confetti triggers.

---

## 6. Motion & Spring Physics

Timebox replaces standard linear CSS animations with spring dynamics to simulate material weight:

- **Spring Configuration:** Modals, overlays, and dragging physics leverage `framer-motion` springs for responsive translation.
- **Visual Feedback:** All click and hover targets use responsive scales (`whileTap={{ scale: 0.95 }}` and `whileHover={{ scale: 1.02 }}`).
- **Hardware Acceleration:** Animations are restricted to `transform` and `opacity` properties to prevent style recalculation lag and CPU spikes.

---

## 7. Voice & Content Guidelines

Written content and copy are treated as key design elements:

- **Strict Emoji Ban:** The interface, technical notes, tooltips, logging, commits, and codebase documentation must remain **100% serious, clean, and professional**. Icons from `@iconify/react` must be used for all graphical metaphors instead of emojis.
- **Tone:** Concise, objective, and task-focused.
- **Labels & CTAs:** Interactive buttons and links start with action verbs (e.g., `Deploy Project`, `Delete Block`, `Create Priority`). Avoid generic responses like `Confirm`, `OK`, or empty titles.
- **System Feedback:** Toasts and modals name the specific item that changed and avoid using adverbs like "successfully" (e.g., `Project deleted` instead of `Successfully deleted project`).

---

## 8. Anti-Patterns (Banned AI Clichés)

We enforce a strict quality checklist to block generic AI design telltales:
- **No Emojis anywhere** in the user interface or code.
- **No purple/neon gradient overlays** or glowing shadows.
- **No generic placeholder names** (e.g., "John Doe", "Acme", "Lorem Ipsum"). Use contextual data.
- **No 3-column equal grid layouts** for page headers.
- **No custom mouse cursors** that interfere with hardware settings.
- **No text overlapping images** or absolute stacking without backdrop protection.
- **No empty states without actionable routes** (e.g., provide a button to add items immediately).
- **No pure black backgrounds** (`#000000`) for dark themes. Use `#0c0c0e` (Onyx) instead.

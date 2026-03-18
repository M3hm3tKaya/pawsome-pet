# Active Context

## Current State
Project is complete with all 6 pages built and verified.

## Architecture Decisions
- Used Framer Motion for scroll-triggered and layout animations
- Lenis for smooth scrolling
- PawPrints as a fixed background layer (z-0) with pointer-events-none
- Each service has its own color scheme (orange/teal/pink/blue)
- All interactive components are client components ("use client")
- Gallery uses CSS columns masonry with Framer Motion AnimatePresence
- Contact form has a success state animation

## Key Patterns
- AnimatedSection wraps content for consistent scroll-triggered animations
- WaveDivider creates smooth section transitions
- Card hover effects use bounce easing for playful feel
- Pill-shaped buttons throughout for consistent UI
- Color-coded service categories maintained across all pages

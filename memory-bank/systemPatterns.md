# System Patterns

## Component Hierarchy
```
RootLayout
  ├── SmoothScroll (client, side-effect only)
  ├── PawPrints (client, decorative fixed layer)
  ├── Navbar (client, fixed top navigation)
  ├── main > {page content}
  └── Footer (server, static footer)
```

## Animation Pattern
All scroll-triggered animations use AnimatedSection component:
- Initial: opacity 0, y 40
- Animate: opacity 1, y 0
- Bounce easing: [0.34, 1.56, 0.64, 1]
- Duration: 0.5s
- Staggered delays via delay prop

## Color System
Each service maintains its color across all pages:
- Konaklama → Orange (#FF8C42)
- Gunluk Bakim → Teal (#2ABFBF)
- Spa & Bakim → Pink (#FF6B8A)
- Egitim → Blue (#5B8DEF)

## Section Pattern
Each page section follows:
1. Background color (alternating white / warm-white)
2. WaveDivider transition
3. AnimatedSection wrapper
4. Content with consistent max-w-7xl container

## Responsive Breakpoints
- Mobile: default (< 640px)
- Tablet: sm (640px), md (768px)
- Desktop: lg (1024px), xl (1280px)

# Technical Context

## Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (with @theme inline)
- **Animations**: Framer Motion + GSAP
- **Smooth Scroll**: Lenis
- **Utilities**: clsx

## Key Technical Decisions
- Tailwind v4 uses `@theme inline` instead of `tailwind.config.ts`
- All custom colors defined in globals.css via CSS variables and @theme
- Font imports via Google Fonts CSS import (Quicksand + Nunito)
- Client components for interactive features (gallery filter, lightbox, mobile menu)
- Server components where possible for performance

## Project Structure
```
src/
  app/
    layout.tsx       - Root layout with Navbar, Footer, PawPrints, SmoothScroll
    page.tsx         - Home page
    hizmetler/       - Services page
    odalar/          - Rooms & Pricing page
    galeri/          - Gallery page
    hakkimizda/      - About page
    iletisim/        - Contact & Reservation page
    globals.css      - Global styles and Tailwind config
  components/
    Navbar.tsx       - Fixed navbar with mobile hamburger
    Footer.tsx       - Dark brown footer with paw prints
    PawPrints.tsx    - Floating paw print decorations
    WaveDivider.tsx  - Wave SVG section dividers
    SmoothScroll.tsx - Lenis smooth scroll wrapper
    AnimatedSection.tsx - Reusable scroll-triggered animation
```

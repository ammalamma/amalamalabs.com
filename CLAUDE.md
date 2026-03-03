# amalamalabs.com

---

## Product Summary

**Type:** Product studio website + personal brand
**Domain:** amalamalabs.com (short: mlmlabs.com)
**Status:** Built — Phase 1 complete
**Positioning:** "One operator. AI team. Shipping real products."

---

## Tech Stack

- **HTML/CSS/JS** — static site, no framework, no build step
- **CSS Cascade Layers** (`@layer`) — modern specificity management
- **Three-tier design tokens** — Primitive → Semantic → Component
- **Phosphor Icons** (duotone weight) — CDN via unpkg
- **Inter + JetBrains Mono** — Google Fonts
- **Vanilla JS** — IntersectionObserver scroll reveal, mobile nav, smooth scroll

---

## Architecture

### CSS Modules (7 files)
| File | Purpose |
|------|---------|
| `css/style.css` | `@layer` declarations + `@import` hub + Google Fonts |
| `css/tokens.css` | Three-tier design tokens (primitives → semantic) |
| `css/base.css` | Reset, body, grain texture overlay, utilities |
| `css/components.css` | Cards, badges, tags, stats, timeline, hero, pipeline, nav, buttons, grids, footer |
| `css/animations.css` | Scroll reveal, hover effects, glow, gradient orbs, reduced-motion |
| `css/responsive.css` | Mobile/tablet/desktop breakpoints |
| `css/legal.css` | Legal page styles (Tossup + TrueMile) |

### Pages
| File | Purpose |
|------|---------|
| `index.html` | 7-section single-page site |
| `components.html` | Component showcase (design system reference) |
| `tossup/*.html` | 3 legal pages (privacy, terms, support) |
| `truemile/*.html` | 3 legal pages (privacy, terms, support) |

### 7-Section Structure
1. **Hero** — Photo, name, tagline, CTAs
2. **Thesis** — AI window, interface bifurcation, system philosophy
3. **Projects** — 5 cards with real metrics
4. **The System** — 4-step pipeline (Collect → Score → Decide → Ship)
5. **Career** — Timeline (Amalama Labs, Diadia, Orogamis, Techstars, Kellogg)
6. **Thinking** — 3 thesis cards
7. **Contact + Footer** — Email, LinkedIn, legal links

---

## Key Decisions

- **Static HTML/CSS/JS** — no framework, no build step, maximum speed
- **CSS Cascade Layers** — eliminates specificity fights across modules
- **Phosphor Icons over Lucide** — 9,000+ icons, duotone weight for dark theme depth
- **Three-tier token system** — industry standard (Penpot, GitLab Pajamas, Open Props)
- **Component-first build** — `components.html` showcase validated before `index.html` assembly
- **CSS/SVG-only graphics** — grain texture (feTurbulence), glassmorphism, gradient orbs, glow shadows
- **Dark theme evolution** — kept #0a0a0a bg, added blue-tint surfaces, indigo→violet gradient accent
- **Amber-forward** — personal brand light, not just product studio

---

## Decision Log

### 2026-02-03
- Created CLAUDE.md + HANDOFF.md structure

### 2026-03-03
- Council session: defined site purpose, brand positioning, design direction
- Researched a16z Speedrun SR007 for application context
- Chose Phosphor Icons (duotone) over Lucide
- Chose CSS Cascade Layers architecture
- Designed three-tier token system
- Component-first build order approved
- Full build plan saved to `plans/site-rebuild-plan.md`

### 2026-03-03 (build session)
- Phase 1-4 complete: tokens, base, components, animations, responsive CSS
- Component showcase (`components.html`) built with 16 sections
- Full 7-section `index.html` assembled
- `js/main.js` written (nav toggle, scroll reveal, active highlighting)
- All 6 legal pages updated (new nav, footer, legal.css import, script tag)
- Headshot copied to `assets/images/headshot.jpg`

---

*Last updated: 2026-03-03*

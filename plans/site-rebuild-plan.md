# Plan: Rebuild amalamalabs.com

## Context

Amalama Labs (mlmlabs.com / amalamalabs.com) is Amber's product studio brand. The current site is a barebones placeholder — empty project grid, placeholder about/contact, but solid legal pages for Tossup and TrueMile.

**Why now:** Amber is preparing to apply to a16z Speedrun (or similar programs). The site needs to serve as an application artifact that proves she's a real builder with a system, not just someone with an idea. a16z values execution ability, speed, earned secrets, and early validation.

**Design direction:** Evolve the existing dark theme (dark bg + indigo accent). Distinctive, not template-y. Component-first build — showcase page before site assembly.

**Headshot:** `/Users/amber/Amber's Headshot - 2025 copy.jpeg`

---

## Architecture Upgrades (from research, 2026-03-03)

### CSS Cascade Layers (`@layer`)
Modern CSS feature, full browser support. Declare layer order up front — eliminates specificity fights:
```css
@layer reset, tokens, base, components, animations, responsive;
```
Endorsed by Smashing Magazine, CSS-Tricks, and every major design system in 2025-2026.

### Phosphor Icons (replaces Lucide)
- 9,000+ icons vs Lucide's ~1,500
- **6 weights** including **duotone** — two-tone effect creates depth on dark backgrounds
- Vanilla HTML via CDN: `<i class="ph-duotone ph-code"></i>`
- More distinctive than Lucide (which is default in every shadcn/React project)

### Custom SVG Icons via Recraft V4 Pro
3-5 custom branded SVG icons for key brand moments:
- **Pipeline steps**: Collect, Score, Decide, Ship (the System section)
- **Amalama Labs logomark** (optional)
- Recraft generates native SVG (clean paths, not raster-to-vector tracing)
- Hand-edit colors to match our token palette
- Use Phosphor for everything else (utility icons, nav, social links)

### Visual Graphics (CSS/SVG, no AI images)
All pure CSS/SVG. No raster images except headshot. Zero AI-generated imagery.

1. **Layered CSS gradients** — Radial color orbs (deep indigo, violet, subtle pink) as ambient backgrounds behind glass cards
2. **SVG noise/grain texture** — `feTurbulence` filter. Most impactful dark theme technique in 2026. Adds organic warmth, reduces gradient banding, creates depth. Zero image files.
3. **Glassmorphism cards** — `backdrop-filter: blur(12px)` with subtle white borders. Needs gradient orbs behind them to work.
4. **Mesh gradients** — Generated from fffuel.co tools (uuunion, gggrain, nnnoise). Export as SVG, customize to palette.
5. **CSS glow effects** — Headshot ring, card hovers, accent elements via `box-shadow` with accent color at low opacity.

### Three-Tier Token Architecture
```
Primitive → Semantic → Component
--color-indigo-500 → --color-accent → --card-border-hover
```
Industry standard per Penpot, GitLab Pajamas, and Open Props.

### Component-First Build Order
Build `components.html` showcase page FIRST. Every component rendered, tested, and validated in isolation. Then assemble `index.html` from proven components.

---

## What Gets Built

### Component Showcase (`components.html`)
One page rendering every component in every state:

1. **Typography** — h1-h4, body, mono, links on dark bg
2. **Colors & Tokens** — Visual palette swatches
3. **Buttons** — Primary (gradient), secondary (border), ghost, icon buttons
4. **Cards** — Project card, thesis card, stat card, glass-morphism variant
5. **Badges & Tags** — Status (Shipped/gold, Building/indigo, Built/emerald, System/violet), tech tags (mono)
6. **Stats** — Large metric numbers, stat bars, metric labels
7. **Timeline** — Career timeline entries
8. **Pipeline** — 4-step system visual (Collect → Score → Decide → Ship) with custom Recraft SVG icons
9. **Hero** — Photo with glow ring + text + CTAs
10. **Navigation** — Desktop and mobile states
11. **Footer** — With legal link sections
12. **Visual effects** — Glassmorphism, grain texture, gradient backgrounds, glow shadows

### 7-Section Single-Page Site (`index.html`)
Assembled from showcase components:

1. **Hero** — Photo (circular, indigo→violet glow border), name, "Founder, Amalama Labs", thesis one-liner, CTA buttons
2. **Thesis** — 2-3 paragraphs: AI leverage, interface bifurcation, systems over hustle
3. **Projects** — 5 cards with real metrics: Tossup (shipped, 12 tools), TrueMile (shipped, CarPlay+widgets), Opportunity Engine (building, 2,712 signals), NateLens (built, 34 feeds), Team Goldilocks (system, 22 consultants)
4. **The System** — 4-step pipeline visual with custom Recraft SVG icons: Collect → Score → Decide → Ship
5. **Career** — Timeline: Amalama Labs, Diadia Health AI, Orogamis, Techstars + Kellogg credential
6. **Thinking** — 3 thesis cards: Billion-Dollar Solo Company, Interface Bifurcation, The Amber Filter
7. **Contact + Footer** — Email, LinkedIn, legal links for both apps

### CSS Component Library

| File | Purpose | ~Lines |
|------|---------|--------|
| `css/style.css` | `@layer` declarations + `@import` hub + Google Fonts | 15 |
| `css/tokens.css` | Three-tier design tokens (primitives → semantic → component) | 90 |
| `css/base.css` | Reset, body, utilities, grain texture overlay | 70 |
| `css/components.css` | Cards, badges, tags, stats, timeline, hero, pipeline, nav, buttons, grids, footer | 280 |
| `css/animations.css` | Scroll reveal, hover effects, glow, glassmorphism, reduced-motion | 60 |
| `css/responsive.css` | Mobile/tablet/desktop breakpoints | 80 |
| `css/legal.css` | Legal page styles (extracted from current) | 100 |

### Color Palette

- **Background:** `#0a0a0a` (keep)
- **Surface 1:** `#141414` (keep)
- **Surface 2:** `#1a1a2e` (new blue-tint depth layer)
- **Accent gradient:** `#6366f1` indigo → `#8b5cf6` violet
- **Status badges:** Shipped `#f59e0b` gold, Building `#6366f1` indigo, Built `#10b981` emerald, System `#8b5cf6` violet
- **Body text links:** `#818cf8` (lighter indigo, WCAG AA compliant)
- **Ambient gradients:** Radial orbs of indigo/violet/subtle pink at low opacity behind glass cards

### Icons
- **Phosphor Icons** via CDN — duotone weight for UI icons (nav, social, utility)
- **Recraft V4 Pro** — 3-5 custom SVG icons for pipeline steps and brand moments
- **Typography:** Inter (body) + JetBrains Mono (code/tags) via Google Fonts

### JavaScript (vanilla, no dependencies)
`js/main.js` (~90 lines): Mobile nav toggle, scroll reveal (IntersectionObserver), smooth-scroll anchor links, active nav highlighting, nav background on scroll.

---

## Files

| Action | File |
|--------|------|
| Create | `components.html` (component showcase page) |
| Rewrite | `index.html` (57 → ~290 lines, assembled from components) |
| Rewrite | `css/style.css` (282 → 15 lines, `@layer` import hub) |
| Create | `css/tokens.css`, `css/base.css`, `css/components.css`, `css/animations.css`, `css/responsive.css`, `css/legal.css` |
| Rewrite | `js/main.js` (1 → ~90 lines) |
| Create | `assets/images/headshot.jpg` (copy from home dir) |
| Create | `assets/icons/` (custom Recraft SVG icons) |
| Edit | `tossup/privacy.html`, `tossup/terms.html`, `tossup/support.html` (nav + footer + script) |
| Edit | `truemile/privacy.html`, `truemile/terms.html`, `truemile/support.html` (nav + footer + script) |
| Update | `CLAUDE.md` |

---

## Execution Order

### Phase 1: Foundation
1. Copy headshot to `assets/images/`
2. Create `css/tokens.css` — full three-tier token system
3. Create `css/style.css` — `@layer` declarations + imports
4. Create `css/base.css` — reset, body defaults, grain texture, utilities

### Phase 2: Component Showcase
5. Create `components.html` scaffold
6. Build each component section in `components.html` + `css/components.css`:
   - Typography → Buttons → Badges/Tags → Cards → Stats → Timeline → Pipeline → Hero → Nav → Footer
7. Add visual effects: glassmorphism, glow, grain, ambient gradients (`css/animations.css`)
8. Test responsive at each breakpoint (`css/responsive.css`)

### Phase 3: Custom Icons
9. Generate 3-5 custom SVG icons via Recraft V4 Pro for pipeline steps
10. Hand-edit SVG colors to match token palette
11. Place in `assets/icons/`, integrate into pipeline component

### Phase 4: Site Assembly
12. Assemble `index.html` from proven showcase components
13. Write all section content (hero copy, thesis text, project descriptions, career entries)
14. Write `js/main.js` (nav toggle, scroll reveal, smooth scroll)

### Phase 5: Polish & Legal
15. Extract legal styles to `css/legal.css`
16. Update 6 legal page nav/footer/script tags
17. Update `CLAUDE.md`
18. Test everything in browser (mobile + desktop)

---

## Verification

- Open `components.html` — every component renders correctly in isolation
- Open `index.html` — all 7 sections render correctly
- Test at 375px, 768px, 1200px+ widths
- Mobile hamburger opens/closes nav
- Smooth scroll works for all anchor links
- Scroll reveal animations trigger on scroll
- Grain texture visible as subtle overlay
- Glassmorphism cards show depth over gradient backgrounds
- Phosphor duotone icons render correctly via CDN
- Custom Recraft SVG icons display in pipeline section
- All 6 legal pages load with new nav, content untouched
- Legal page cross-links work
- No console errors
- WCAG AA contrast passes for all text

---

## Council Decisions (2026-03-03)

- **Brand Strategist:** Amalama Labs = product studio brand with "Amber profile light." Positioning: "One operator. AI team. Shipping real products." Endorsed brands model. 3-5 custom Recraft SVG icons for pipeline brand moments + optional logomark.
- **Creative Director:** Amber-forward visibility. Dark theme with indigo→violet gradient. Headshot with glow ring. Component-first build (showcase page before site). CSS/SVG-only graphics (no AI-generated images). Glassmorphism + grain + ambient gradients for depth. Phosphor duotone icons for distinction.
- **Content Strategist:** 7-section structure prioritizing a16z audience. Lead with thesis, prove with projects, show the system, anchor with career.
- **CPO:** Include real metrics in every project card — numbers tell the story of scale.
- **CTO:** Static HTML/CSS/JS. CSS Cascade Layers (`@layer`) for architecture. Phosphor Icons via CDN (replaces Lucide). Three-tier token system. No framework, no build step.
- **Chief of Staff:** Component-first build order. Site positioned for any a16z program + general credibility.

## Tools & Resources

- **Icons:** [Phosphor Icons CDN](https://www.npmjs.com/package/@phosphor-icons/web) — duotone weight
- **Custom SVGs:** [Recraft V4 Pro](https://recraft.ai) — native SVG generation
- **Background textures:** [fffuel.co](https://fffuel.co) — gggrain, nnnoise, uuunion, ffflux
- **Glassmorphism:** [ui.glass/generator](https://ui.glass/generator)
- **Grain technique:** [CSS-Tricks grainy gradients](https://css-tricks.com/grainy-gradients/)
- **Cascade Layers:** [CSS-Tricks guide](https://css-tricks.com/organizing-design-system-component-patterns-with-css-cascade-layers/)
- **Token architecture:** [Penpot design tokens guide](https://penpot.app/blog/the-developers-guide-to-design-tokens-and-css-variables/)

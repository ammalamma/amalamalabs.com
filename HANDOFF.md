# Handoff

Last updated: 2026-03-03

---

## Last Session (2026-03-03, build session)

### What We Did
- **Built the entire site** — Executed the plan from `plans/site-rebuild-plan.md`
- **Created CSS architecture** — 7 module files with `@layer` cascade layers
  - `tokens.css` — three-tier design tokens (primitives → semantic)
  - `base.css` — reset, body, grain texture overlay, utilities
  - `components.css` — all UI components
  - `animations.css` — scroll reveal, glow, gradient orbs, reduced-motion
  - `responsive.css` — mobile/tablet/desktop breakpoints
  - `legal.css` — legal page styles extracted and tokenized
  - `style.css` — rewritten as `@layer` import hub (13 lines)
- **Built component showcase** (`components.html`) — 16 sections: typography, colors, buttons, badges, project cards, glass cards, stats, timeline, pipeline, hero, thinking cards, section headers, nav, footer, visual effects, Phosphor icons
- **Assembled 7-section site** (`index.html`) — Hero, Thesis, Projects, The System, Career, Thinking, Contact+Footer
- **Wrote `js/main.js`** — mobile nav toggle, scroll reveal (IntersectionObserver), active nav highlighting, nav background on scroll
- **Updated all 6 legal pages** — new nav, footer, legal.css import, Phosphor Icons CDN, script tag
- **Headshot** copied to `assets/images/headshot.jpg`
- **Updated CLAUDE.md** with full tech stack and decisions

### Where We Stopped
**Phase 1-4 complete.** Site is fully built and functional. Not yet tested in browser.

### Blockers / Open Questions
- App Store URLs for Tossup and TrueMile — still using `#` placeholders
- Custom Recraft SVG icons for pipeline steps (Phase 3 from plan) — not yet done
- Writing/Thinking section — content is placeholder thesis text, could be expanded or linked
- Browser testing not yet done (mobile + desktop)
- Not yet committed to git
- Not yet deployed

---

## Next Steps

### Immediate
- [ ] **Test in browser** — open `index.html` and `components.html`, verify all sections
- [ ] Test at 375px, 768px, 1200px+ widths
- [ ] Test mobile hamburger nav
- [ ] Verify Phosphor icons load from CDN
- [ ] Verify grain texture renders
- [ ] Verify glassmorphism and glow effects
- [ ] Check all legal page nav/footer links work
- [ ] Commit to git

### Phase 3 (Custom Icons)
- [ ] Generate 3-5 custom SVG icons via Recraft V4 Pro for pipeline steps
- [ ] Hand-edit SVG colors to match token palette
- [ ] Place in `assets/icons/`, integrate into pipeline component

### After Build
- [ ] Add real App Store URLs when Tossup/TrueMile ship
- [ ] Write or link thesis pieces for the Thinking section
- [ ] Deploy to hosting (Netlify/Vercel static)
- [ ] Set up mlmlabs.com redirect if not already done
- [ ] Prep for a16z Speedrun application

---

## Quick Reference

**Key files:**
- `CLAUDE.md` — Project spec and decisions
- `plans/site-rebuild-plan.md` — Full build plan
- `components.html` — Design system showcase
- `../CLAUDE.md` — Global project rules

**Headshot source:** `/Users/amber/Amber's Headshot - 2025 copy.jpeg`

**Brand:**
- Domain: amalamalabs.com (short: mlmlabs.com)
- Colors: Dark bg (#0a0a0a), indigo (#6366f1) → violet (#8b5cf6) gradient
- Typography: Inter + JetBrains Mono
- Icons: Phosphor duotone weight
- Positioning: "One operator. AI team. Shipping real products."

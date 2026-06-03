# Flow — Design System (Master)

**Source:** UI UX Pro Max Skill v2.0 — Design System Generator
**Product:** Flow — Productivity SaaS Landing Page
**Stack:** React + Vite + Framer Motion

---

## Pattern
- **Name:** Hero-Centric + Trust
- **CTA:** Above fold
- **Sections:** Hero → Features → Pricing → Testimonials → CTA

## Style
- **Name:** Motion-Driven
- **Keywords:** Animation-heavy, microinteractions, smooth transitions, scroll effects, parallax, entrance anim
- **Mode Support:** Light ✓ Full | Dark ✓ Full
- **Performance:** ⚠ Good | **Accessibility:** ⚠ Prefers-reduced-motion

## Colors

### Light Mode
| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#0D9488` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#14B8A6` | `--color-secondary` |
| Accent/CTA | `#EA580C` | `--color-accent` |
| Background | `#F0FDFA` | `--color-background` |
| Foreground | `#134E4A` | `--color-foreground` |
| Muted | `#E8F1F4` | `--color-muted` |
| Border | `#99F6E4` | `--color-border` |
| Destructive | `#DC2626` | `--color-destructive` |
| Ring | `#0D9488` | `--color-ring` |

### Dark Mode Overrides
| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#2DD4BF` | `--color-primary` |
| On Primary | `#042F2E` | `--color-on-primary` |
| Secondary | `#5EEAD4` | `--color-secondary` |
| Accent/CTA | `#FB923C` | `--color-accent` |
| Background | `#042F2E` | `--color-background` |
| Foreground | `#CCFBF1` | `--color-foreground` |
| Muted | `#134E4A` | `--color-muted` |
| Border | `#115E59` | `--color-border` |

## Typography
- **Font:** Plus Jakarta Sans (300–700)
- **Mood:** friendly, modern, saas, clean, approachable, professional
- **Scale:** 12 / 14 / 16 / 20 / 24 / 32 / 48 / 64
- **Line Height:** 1.5 (body), 1.15 (headings)
- **Letter Spacing:** -0.02em (headings), 0 (body)

## Key Effects
- Scroll animations (Intersection Observer pattern via Framer Motion `useInView`)
- Hover: 300–400ms with ease-out
- Entrance: stagger 100–150ms per item
- Parallax: 3–5 layers (subtle)
- Exit animations: 60% of enter duration
- Always respect `prefers-reduced-motion`

## Anti-Patterns to Avoid
- ❌ Static design (no animation at all)
- ❌ Emojis as icons (use SVG)
- ❌ Poor mobile experience
- ❌ No focus states
- ❌ z-index: 9999 (use scale: 10/20/30/50)
- ❌ Animating width/height (use transform/opacity)

## Pre-Delivery Checklist
- [ ] No emojis used as icons (SVG only)
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Light mode: text contrast ≥4.5:1
- [ ] Dark mode: text contrast ≥4.5:1
- [ ] Focus states visible for keyboard nav (2–4px ring)
- [ ] prefers-reduced-motion respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] Touch targets ≥44×44pt
- [ ] 8pt spacing rhythm
- [ ] Semantic color tokens (no raw hex in components)

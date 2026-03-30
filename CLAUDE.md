# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 16 landing page and application form for **Next Gen LMS** — a Japanese e-learning compliance system (LMS) targeted at care facilities (介護施設). The site promotes a platform covering all legally mandated training requirements set by Japan's Ministry of Health, Labour and Welfare.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · React Compiler enabled (`reactCompiler: true` in `next.config.ts`) · Framer Motion · Lucide React

**Styling approach:** CSS-only — no Tailwind or CSS modules (except the auto-generated `page.module.css`). All layout uses inline styles or global utility classes defined in `src/app/globals.css`. The global CSS defines:
- CSS custom properties for the entire design system (colors, spacing, fonts) under `:root` with a `prefers-color-scheme: dark` variant
- Utility classes: `.container`, `.section`, `.glass-panel`, `.btn-primary`, `.btn-secondary`, `.heading-gradient`, `.text-gradient-accent`, `.animate-fade-in`, `.bg-glow-orb`, `.spotlight-card`

**Pages:**
- `/` — Landing page composed of `HeroSection`, `FeaturesSection`, `WorksSection`, `CtaSection`, and a footer
- `/school-application` — Application form (client component) that submits to a Google Apps Script endpoint via `fetch` with `mode: 'no-cors'`

**Key components:**
- `Header` — Fixed, scroll-aware glass header (`"use client"`)
- `SpotlightCard` — Reusable interactive card with a mouse-tracking radial gradient spotlight effect (`"use client"`). Uses a workaround for a Next.js 15+ React Compiler bug where CSS `::before` pseudo-element dynamic variables don't work — the spotlight is rendered as an inline `<div>` instead
- `src/lib/utils.ts` — Exports `cn()` for conditional className joining

**Environment variables:**
- `NEXT_PUBLIC_SCHOOL_FORM_ENDPOINT` — Google Apps Script URL for the school application form POST target (required for `/school-application` to submit)

## Content

All user-facing content is in Japanese. The site targets care facility managers in Japan.

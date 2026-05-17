# CLAUDE.md — hebe-web

## Identity
- Product: **Hebe Web** (AirFexLABS Hebe Suite — digital presence layer)
- First deployment: CEMERESI (clinicacemeresi.com / clinicacemeresi.es)
- Repo: AirFexLABS/hebe-web

## Stack
Next.js 15 · TypeScript · Tailwind CSS · shadcn/ui · Vercel (hosting)

## What lives here
- `src/app/` — Next.js App Router pages
- `src/components/` — reusable UI components (layout, sections, ui primitives)
- `src/lib/` — utilities
- `public/` — static assets (images, video)
- `docs/` — design and content documentation

## Deployment
- **Platform**: Vercel
- **Domains**: clinicacemeresi.com / clinicacemeresi.es
- **Branch strategy**: `main` → production, `develop` → preview

## Current state (CEMERESI demo)
Existing pages:
- `/` — homepage (Hero, Services, TrustBar, Testimonials, WhyCemeresi, CtaDual)
- `/servicios/cirugia-capilar` — hair surgery service page
- `/servicios/medicina-estetica` — aesthetic medicine service page

Components built:
- Layout: Header, Footer, FloatingCTAs
- Sections: Hero, Services, ServiceCard, Testimonial, TrustBar, WhyCemeresi, CtaDual
- Service page: ServiceHero, EducationalIntro, DoctorVoice, ProcessTimeline,
  TechniqueCard, FaqSection, InstagramEmbed, ServiceCta

## Service catalog pages pending (from CEMERESI service catalog)
- Cirugía estética (facial, mamaria, corporal)
- Capilar tratamientos
- Estética integral
- Fisioterapia
- Nutrición y dietética

## Architecture rules
- API-first: any dynamic data (appointments, contact forms, CRM leads) must go
  through hebe-erp or hebe-crm APIs — no direct DB calls from the front
- No patient PII stored in this repo or in Vercel env vars
- Contact forms → Frappe CRM API (lead creation)
- Appointment booking → ERPNext Healthcare API

## Design conventions
- UI icon standard: 16×16 SVG, stroke-based, stroke-width="1.5", fill="none"
- Mobile-first responsive design
- Video hero: `public/hero.mp4` with `public/hero-poster.jpg` fallback

## Do NOT
- Hardcode phone numbers, emails, or addresses in components — use config or CMS
- Store any form submission data locally — always POST to CRM/ERP API
- Commit `node_modules/` or `.next/`

## Compliance
- GDPR: no patient data, no tracking without consent banner
- Cookie consent required before any analytics

## Related repos
- **hebe-platform** — suite ADRs, design tokens, operational docs
- **hebe-erp** — ERPNext Healthcare (appointments, clinical records, billing)
- **hebe-crm** — Frappe CRM (leads, contact forms, follow-ups)

## Session state

### Infrastructure
- [x] Next.js project exists (moved from WebProjects/CEMERESI)
- [x] Demo pages built (homepage, cirugia-capilar, medicina-estetica)
- [ ] GitHub repo created and pushed
- [ ] Vercel project connected
- [ ] Domains configured on Vercel

### Last session
- 2026-05-17: Repo moved to ~/code/hebe-web, CLAUDE.md created.

### Next
- Create GitHub repo AirFexLABS/hebe-web
- Connect to Vercel for preview deployments
- Define remaining service pages

### Backlog
- Contact form → Frappe CRM API integration
- Appointment booking widget → ERPNext API
- Cookie consent banner (GDPR)
- Analytics setup (privacy-first)
- Instagram feed integration (InstagramEmbed component)

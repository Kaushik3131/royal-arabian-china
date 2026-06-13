# Royal Arabian — China Destination Portal

A CMS-driven travel destination page for Royal Arabian DMC, built as part of the Senior Full-Stack Developer Assessment.

**🌐 Live Site:** https://royal-arabian-china.vercel.app/cn  
**🎨 Sanity Studio:** https://royal-arabian-china.vercel.app/studio  
**📦 GitHub Repo:** https://github.com/Kaushik3131/royal-arabian-china  
**🗄️ Sanity Project ID:** `lept2aum` (Dataset: `production`) — hr1 & hr2 @royalarabian.com invited as Viewer  
**🔌 Supabase:** [View `enquiries` table](https://supabase.com/dashboard/project/gkgfiebmfrikumjyuhdm/editor/17567?schema=public) — hr1 & hr2 @royalarabian.com invited as Viewer  


---

## What's Built

The `/cn` route is the China destination page — fully CMS-driven via Sanity with no hardcoded copy. From the hero banner through the package grid and enquiry form, everything is authored and managed inside Sanity Studio (embedded at `/studio`).

Package detail pages live at `/cn/packages/[slug]` and include a day-by-day itinerary, an inclusions list, and a pre-filled enquiry form that carries the package name into Supabase on submit.

---

## Tech Stack

| Layer | Technology | Version | Notes |
|:---|:---|:---|:---|
| Framework | Next.js | `16.1.1` | App Router, ISR, Server Components, Server Actions |
| Runtime / UI | React | `19.2.3` | React Compiler, `useTransition()`, clean client transitions |
| Language | TypeScript | `5.x` | Strict mode — zero `any` types across the codebase |
| Styling | Tailwind CSS | `v4.3` | CSS-first `@theme` design tokens, no JS config file |
| CMS | Sanity / next-sanity | `12.x` | Embedded Studio at `/studio`, centralized GROQ query layer |
| Database | Supabase | JS Client `v2` | Postgres-backed enquiry form submissions |
| Forms | React Hook Form + Zod | `7.x / 4.x` | Client-side validation with server action submission |
| Animations | Framer Motion | `v12` | Scroll-reveal animations, respects `prefers-reduced-motion` |
| Icons | Lucide React | `^0.562.0` | Clean SVG icon set |
| Linter / Formatter | Biome | `2.2.0` | Replaces ESLint + Prettier, runs in ~60ms |
| Testing | Playwright | `1.x` | E2E tests against the live dev server |

---

## Architecture Notes

### Sanity query isolation
All GROQ queries live in [`sanity/queries/`](./sanity/queries/) and are wrapped with `defineQuery()`. Components receive typed props — they never call the Sanity client directly. This makes data fetching easy to trace and swap without touching UI code.

### Dual Sanity client
There are two client modes in [`sanity/lib/client.ts`](./sanity/lib/client.ts). The static `client` uses the CDN and is safe for build-time generation (`generateStaticParams`). The async `getClient()` inspects Next.js `draftMode()` headers at request time — if Draft Mode is active, it switches to an authenticated, non-CDN client pointing at `previewDrafts`. This means the embedded Studio's live preview works without any separate preview server.

### Image utility decoupled from the Sanity client
Early on, passing the full `client` instance into `urlFor()` caused runtime crashes — `draftMode()` can only be called inside a request scope, but image URLs are resolved in client components too. The fix was to initialise the image builder with just `{ projectId, dataset }` env variables directly, keeping it side-effect free and safe to call anywhere.

### ISR at 60 seconds
Public pages use `revalidate: 60`. Static HTML is served immediately (good for SEO and TTFB), and Sanity edits propagate in the background without a full redeploy.

### Server Actions over API routes
The enquiry form uses a Next.js Server Action rather than a `/api/` endpoint. The submission is validated with Zod on the server before it ever touches Supabase — so even if someone bypasses the client-side form, the schema check still runs.

### CSS-only navigation dropdown
The "Travel Partners" header dropdown uses pure Tailwind `group-hover:opacity-100 group-hover:visible` — no `useState`, no JS event listeners. Fewer moving parts, no hydration cost.

### Type-safe image source without `any`
Instead of typing the `urlFor()` argument as `any`, the source type is derived directly from the builder: `Parameters<typeof builder.image>[0]`. It stays in sync with the library automatically.

### SEO & structured data
Every page injects JSON-LD scripts: `WebPage` + `BreadcrumbList` on `/cn`, and `Trip` + `BreadcrumbList` on package detail pages. These are built from live Sanity data so the schema stays accurate as content changes.

### Framer Motion with reduced-motion guard
`ScrollReveal` uses Framer Motion's `useReducedMotion()` hook. If the OS accessibility setting is on, elements render immediately with no motion — no animation plays at all, not just a slower one.

---

## Database Setup

Create the `enquiries` table in Supabase before running the form:

```sql
create table enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  package_name text not null,
  message text,
  created_at timestamptz default now()
);

alter table enquiries enable row level security;
create policy "Allow anonymous inserts" on enquiries for insert with check (true);
```

**Sanity Project ID:** `lept2aum` · **Dataset:** `production`  
**Supabase URL:** `https://gkgfiebmfrikumjyuhdm.supabase.co`

---

## Running Locally

```bash
git clone https://github.com/Kaushik3131/royal-arabian-china.git
cd royal-arabian-china
pnpm install
```

Copy `.env.example` to `.env.local` and fill in your tokens:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=lept2aum
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-13
SANITY_API_READ_TOKEN=your_sanity_read_token
SANITY_API_WRITE_TOKEN=your_sanity_write_token

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

```bash
pnpm dev
```

- Destination page → [http://localhost:3000/cn](http://localhost:3000/cn)
- Sanity Studio → [http://localhost:3000/studio](http://localhost:3000/studio)

---

## Validation

```bash
# Type check
pnpm exec tsc --noEmit

# Lint + format
pnpm exec biome check --write .

# Tailwind v4 compat check
npx @tailwindcss/upgrade --force

# E2E tests (dev server must be running)
npx playwright test
```

---

## Sanity Schemas

Two document types are defined in [`sanity/schemaTypes/`](./sanity/schemaTypes/):

**`destinationType`** — name, slug, tagline, hero image, description, highlights array, good-to-know blocks, and SEO meta fields.

**`packageType`** — name, slug, destination reference, duration, price, original price (for discount display), short description, hero image, inclusions list, itinerary (day/title/description objects), and a `featured` flag to control what shows on the `/cn` grid.

---

## What I'd Add With More Time

These are specific to this repo. The broader platform — customer accounts, booking flows, payment integration — is a separate conversation, but the architecture here is intentionally built to extend into that.

**Platform extensions:**
- **Customer portal** — Supabase Auth is already in the stack. Adding account creation, saved trips, and a booking dashboard would sit naturally on top of what's here.
- **Payment flow** — Stripe or Razorpay wired to the package detail page, with Supabase storing payment records and Sanity holding the package pricing. The enquiry form would become a booking form with a payment step.
- **AI travel assistant chatbot** — A conversational widget handling the early discovery phase: destination questions, budget-based package recommendations, and a guided flow that ends by pre-filling and submitting the enquiry form. I've shipped a similar pattern in a D2C project, so the wiring is straightforward — it's mainly about connecting it to the Sanity package data here.

**Smaller improvements to this codebase:**
- Webhook-triggered ISR revalidation instead of the 60-second poll, so Sanity publishes are instant on the live site.
- CMS-driven icon mapping for "Good to Know" blocks instead of the current title-based switch fallback.
- Optimistic UI on the enquiry form so the success state feels immediate rather than waiting for the server round-trip.

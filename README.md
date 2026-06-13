# Royal Arabian — China Destination Portal (`/cn`)

A high-performance, senior-architected travel destination portal built for Royal Arabian DMC. The site showcases the China destination page (`/cn`) and its featured travel packages (`/cn/packages/[slug]`), powered by a headless CMS (Sanity) and a PostgreSQL database (Supabase) for enquiries.

---

## 🔗 Project Links & Credentials

- **GitHub Repository**: [Kaushik3131/royal-arabian-china](https://github.com/Kaushik3131/royal-arabian-china)
- **Deployment URL**: [https://royal-arabian-china.vercel.app/cn](https://royal-arabian-china.vercel.app/cn)
- **Sanity Project ID**: `lept2aum` (Dataset: `production`)
- **Supabase URL**: `https://gkgfiebmfrikumjyuhdm.supabase.co`

---

## 🛠️ Technology Stack

| Layer | Technology | Version | Description |
|:---|:---|:---|:---|
| **Framework** | Next.js | `16.1.1` | React Server Components, App Router, ISR, Server Actions |
| **Runtime / UI** | React | `19.2.3` | React Compiler, `useTransition()`, clean client transitions |
| **Styling** | Tailwind CSS | `v4.3` | CSS-first `@theme` design tokens, zero runtime JS |
| **Language** | TypeScript | `5.x` | Strict typing (zero `any` types in the codebase) |
| **Linter / Formatter**| Biome | `2.2.0` | Ultra-fast single tool replacing ESLint + Prettier |
| **CMS** | Sanity | `v5` / `next-sanity v12` | Headless content management, dynamic image pipeline |
| **Database** | Supabase | JS Client `v2` | Secure enquiry submissions |
| **Animations** | Framer Motion | `v12` | Accessible scroll-reveal animations (respects reduced motion) |
| **Icons** | Lucide React | `^0.562.0` | Clean SVG icon indicators |
| **Testing** | Playwright | `1.x` | End-to-end integration and form validation tests |

---

## 🏛️ Architecture & Technical Decisions

### 1. Incremental Static Regeneration (ISR)
To combine the speed of static sites with the flexibility of a CMS, all public-facing pages use ISR (`revalidate: 60`).
- **SEO Benefits**: Search engines receive pre-rendered HTML immediately, boosting page load speeds and crawler rankings.
- **Cache Freshness**: Frontend renders from static cache; Sanity updates are rebuilt in the background every 60 seconds.

### 2. Centralized GROQ Query Layer
All Sanity CMS fetching logic is decoupled from UI presentation:
- Queries reside strictly in [sanity/queries/](file:///E:/NextJs/royal-arabian-china/sanity/queries/) using the `defineQuery()` utility.
- Components are purely presentational and receive structured, strictly typed props.
- Custom helpers in [sanity/lib/image.ts](file:///E:/NextJs/royal-arabian-china/sanity/lib/image.ts) transform CMS hot-spot image coordinates into optimized CDN URLs.

### 3. CSS-First Tailwind v4 Theming
Design system variables (Navy primary, Copper accent, typography mappings) are configured entirely inside the [globals.css](file:///E:/NextJs/royal-arabian-china/app/globals.css) file using the `@theme` directive, removing the need for a JavaScript config file and making theming highly portable.

### 4. Biome Toolchain
The linting and code style are governed by Biome 2.2. Checking and formatting compile under ~60ms, strictly enforcing rules like import ordering, security, and accessibility.

### 5. Playwright E2E Strategy
Instead of testing mock UI states in component isolations, E2E Playwright tests verify the critical paths:
- **`destination.spec.ts`**: Verifies the site successfully pulls real-time CMS content (H1, pricing, duration) and that there are no console errors or hydration mismatches.
- **`enquiry.spec.ts`**: Asserts the user booking journey—verifying that clicking "Enquire Now" on a package scrolls and pre-fills the inquiry dropdown, and validates database insertions.

---

## 📦 Database & CMS Setup

### Supabase Table Schema
To run enquiries, run the following SQL script inside the Supabase SQL editor to create the `enquiries` table:

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

-- Enable RLS and insert permissions if needed, or configure anon API keys.
alter table enquiries enable row level security;
create policy "Allow anonymous inserts" on enquiries for insert with check (true);
```

### Sanity Schemas
Custom content schemas are declared inside [sanity/schemaTypes/](file:///E:/NextJs/royal-arabian-china/sanity/schemaTypes/):
1. **`destinationType.ts`**: Governs destination text, banner highlights, hero images, practical details ("Good to Know"), and SEO meta tags.
2. **`packageType.ts`**: Defines specific packages, pricing structure (current price vs. original strikethrough), duration, inclusions list, and a day-by-day itinerary sequence.

---

## 🚀 Local Installation & Setup

Follow these steps to run the portal locally:

### 1. Clone the Repository
```bash
git clone https://github.com/Kaushik3131/royal-arabian-china.git
cd royal-arabian-china
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the project root and populate it with your project tokens:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=lept2aum
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-13
SANITY_API_READ_TOKEN=your_sanity_read_token
SANITY_API_WRITE_TOKEN=your_sanity_write_token

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
*(Refer to `.env.example` for details on obtaining these variables).*

### 4. Run the Development Server
```bash
pnpm dev
```
Open [http://localhost:3000/cn](http://localhost:3000/cn) to view the destination page, or visit [http://localhost:3000/studio](http://localhost:3000/studio) to manage CMS schemas directly within the app.

---

## 🧪 Validation & Testing

Run these commands locally to validate code quality and run automated tests:

### Type Safety
```bash
pnpm exec tsc --noEmit
```

### Linter & Formatter
```bash
pnpm exec biome check --write .
```

### Tailwind Upgrade Compiler check
```bash
npx @tailwindcss/upgrade --force
```

### Playwright E2E Tests
Make sure the Next.js dev server is running on `http://localhost:3000` (or update `playwright.config.ts`), then run:
```bash
npx playwright test
```

---

## 📝 Assessment Roadmap Implementation Check

- [x] **Setup & Tooling**: Next.js 16 setup, Biome formatting, strict type safety.
- [x] **Sanity CMS Integration**: Central queries, embedded Sanity Studio at `/studio`, customized structures.
- [x] **UI & Branding**: Inter & Roboto fonts, sticky Header, responsive MobileNav, desktop Footer, dynamic breadcrumbs.
- [x] **Destination Page (`/cn`)**: Responsive layout, full Hero image overlay, Good to Know grid, schema metadata (WebPage, BreadcrumbList).
- [x] **Package Grid & Cards**: Styled package view, starting rates, conditional strikethrough prices.
- [x] **Supabase Form Integration**: Client component validations with React Hook Form + Zod, server action insertions.
- [x] **Detail Pages (`/cn/packages/[slug]`)**: Dynamic routes, itinerary timelines, pre-filled enquiries.
- [x] **Animations**: Scroll reveal animations handling reduced motion settings.
- [x] **E2E Integration Coverage**: Complete integration test coverage with Playwright.

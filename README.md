# TransitionHQ

A marketing and consultancy website for **TransitionHQ** — a boutique Australian
consultancy helping Australian Defence Force members transition into rewarding
civilian careers.

The site is built to read as an established, human, executive-calibre advisory
firm: editorial layouts, a refined serif/sans pairing, restrained use of gold and
light-blue accents against navy and ivory, and considered photography. It is
deliberately *not* a SaaS/startup template.

> **Placeholder content.** The name “TransitionHQ”, the founder’s name and photo,
> the testimonials, and the Insights articles are all placeholders, written to be
> replaced. See [Customising the site](#customising-the-site).

---

## Tech stack

- **React 18** + **TypeScript**
- **Vite 5** (fast dev server + optimised production build)
- **Tailwind CSS 3** with a bespoke design system (see `tailwind.config.js`)
- **React Router 6** (multi-page, ready to grow into an app)
- No component library — every element is custom, to keep the look bespoke.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build locally
```

Requires Node 18+ (developed on Node 20).

## Project structure

```
src/
  main.tsx            App entry (Router + global styles)
  App.tsx             Routes + shared layout (Nav / Footer)
  index.css           Tailwind layers + bespoke base styles & components
  components/
    Nav.tsx           Sticky editorial nav + full-screen mobile menu
    Footer.tsx        Multi-column footer + independence disclaimer
    Primitives.tsx    Eyebrow, PageIntro, SectionHeading, ConsultationCTA
    Figure.tsx        Photography with an art-directed fallback (never "broken")
    Reveal.tsx        Subtle fade-and-rise on scroll (honours reduced-motion)
    ScrollToTop.tsx   Resets scroll on route change
    icons.tsx         Thin, single-weight line icons (no emoji, no clip-art)
  pages/
    Home.tsx  Program.tsx  Approach.tsx  About.tsx  Insights.tsx  Contact.tsx  NotFound.tsx
  lib/
    content.ts        All site copy & structure (pillars, testimonials, journey, insights)
    images.ts         Curated photography manifest (single place to swap imagery)
```

## Design system

Defined once in `tailwind.config.js` and `src/index.css`.

| Token | Value | Use |
|-------|-------|-----|
| `navy` | `#0A1F3C` | Primary ink, dark sections |
| `paper` | `#FBFAF6` | Warm ivory — dominant background |
| `gold` | `#B58E3F` | Muted accent — hairlines, key CTAs, emphasis |
| `sky` | `#A9C5E0` | Light-blue accent, used sparingly |
| `ink` | `#111E30` | Body text on light |

- **Headings:** Libre Caslon Text (a classic, restrained editorial serif) — clean,
  conventional letterforms that read as an established advisory firm, not a tech
  product or a boutique/creative studio.
- **Body / UI:** Instrument Sans (a clean neutral grotesque) — deliberately not Inter.
- **Motion:** a single slow fade-and-rise on scroll, and nothing else. Disabled
  automatically for `prefers-reduced-motion`.

## Customising the site

Almost everything editable lives in two files:

- **Copy & structure — `src/lib/content.ts`:** navigation, the five programme
  pillars, the transition journey, testimonials and Insights articles.
- **Photography — `src/lib/images.ts`:** every image is referenced from here.
  The current images are curated Unsplash placeholders. To use your own, drop
  files into `public/` and change each `url` to a local path
  (e.g. `/photos/founder.jpg`). The whole site updates from this one file.

Other quick edits:

- **Founder name/photo:** `founderName` in `src/pages/About.tsx`, and
  `photos.founder` in `src/lib/images.ts`.
- **Contact details:** `src/components/Footer.tsx` and `src/pages/Contact.tsx`.
- **Wordmark:** `Wordmark` component in `src/components/Nav.tsx`.

### Wiring the contact form

`src/pages/Contact.tsx` currently shows a front-end confirmation on submit. To
make enquiries live, point the form’s `handleSubmit` at a backend — a
[Formspree](https://formspree.io) endpoint, [Netlify Forms](https://docs.netlify.com/forms/setup/),
or your own API — and submit the collected `FormData`. There is a comment marking
exactly where to do this. The newsletter field on the Insights page is the same.

## Deployment

This is a static single-page app. Build it and deploy the `dist/` folder to any
static host.

```bash
npm run build   # outputs to dist/
```

**Netlify** — build command `npm run build`, publish directory `dist`.
`public/_redirects` is already included so client-side routes work on refresh.

**Vercel** — framework preset “Vite”. `vercel.json` is included with the SPA
rewrite so deep links resolve.

**GitHub Pages / other static hosts** — serve `dist/` and ensure unknown routes
fall back to `index.html` (needed for React Router).

## Seminar flyer (A4 print handout)

A one-page A4 flyer that matches the site's identity lives in [`flyer/`](flyer/),
for handing out at Defence transition seminars:

- `flyer/transitionhq-flyer.html` — the flyer (self-contained; inline QR + web fonts)
- `flyer/transitionhq-flyer.pdf` — the print-ready A4 PDF
- `flyer/generate-qr.mjs` — regenerates the QR code SVG (`flyer/qr.svg`)
- `flyer/build-pdf.sh` — renders the HTML to PDF via headless Chrome

Regenerate the PDF after editing the HTML:

```bash
npm run flyer:pdf     # requires Google Chrome installed
```

To change the QR target URL: edit `URL` in `flyer/generate-qr.mjs`, run
`npm run flyer:qr`, then paste the contents of `flyer/qr.svg` into
`transitionhq-flyer.html` (replacing the `<svg>` after the `<!-- QR -->` marker),
and rebuild the PDF. The QR currently points to `https://transitionhq.com.au`
(placeholder). Contact details on the flyer are placeholders too.

## Growing into a platform

The codebase is structured so a secure client portal can be added later without a
rewrite: routing is already in place (`App.tsx`), UI primitives are shared, and
content/data is separated from presentation. A future portal would live under a
new route group (e.g. `/portal/*`) behind authentication, reusing the same design
system.

## A note on accuracy & independence

TransitionHQ is presented as an **independent private consultancy**. The site does
**not** claim affiliation with or endorsement by the Australian Defence Force, the
Department of Veterans’ Affairs or the Australian Government — this is stated
explicitly in the footer and on the About page. Please keep that accurate as you
edit. Testimonials and statistics are illustrative placeholders; replace them only
with genuine, verifiable content.

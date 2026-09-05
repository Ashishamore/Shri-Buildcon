# ShreeBuildcon

Marketing website for **ShreeBuildcon — Builders & Developers**, a civil contracting,
building and land development firm at Pisadevi, Chhatrapati Sambhajinagar.

Single page, built with React 19, Vite 8 and Tailwind CSS 4.

## Running it

```bash
npm install
npm run dev      # dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Where things are

| Path | What it holds |
| --- | --- |
| `src/data/site.js` | **All site copy and project data.** Edit here, not in components. |
| `src/components/` | One file per section, composed in `src/App.jsx` |
| `src/index.css` | Tailwind theme tokens (colours, fonts) and the few custom classes |
| `src/assets/projects/` | Client site photographs, imported and hashed by Vite |
| `src/assets/developments/` | Artwork extracted from the project brochures |
| `public/brochures/` | Brochure PDFs offered for download |

Page order: hero → stats → about → leadership → services → developments →
civil works gallery → process, vision and values → testimonials → contact.

## Deployment

Hosted on Netlify, built from `main`.

1. In Netlify, **Add new site → Import an existing project** and pick this repository.
2. Leave the build settings alone — `netlify.toml` already sets the command, the
   publish directory and the Node version.
3. Deploy. Every push to `main` rebuilds automatically.

The build command is `VITE_SITE_URL=$URL npm run build`. Netlify sets `$URL` to the
site's primary address, so the Open Graph tags resolve against the real host — the
`*.netlify.app` subdomain at first, then the custom domain once one is attached. No
code change is needed when the domain moves.

A link preview only works for a publicly reachable URL. `localhost` cannot be
crawled, so previews will not appear until the site is deployed. After the first
deploy, previews are cached per URL by each platform; force a refresh with
[Facebook's Sharing Debugger](https://developers.facebook.com/tools/debug/) and
[LinkedIn's Post Inspector](https://www.linkedin.com/post-inspector/). WhatsApp has
no manual tool — append a dummy query string (`?v=2`) to test a fresh fetch.

## Before this goes live

Everything below is marked `PLACEHOLDER` in `src/data/site.js`.

- [ ] **Testimonials** — all three are written to show the design. Replace with real,
      approved client feedback.
- [ ] **Statistics** — "120+ projects completed" and "25+ site personnel" are guesses.
- [ ] **Firm establishment year** — unknown. `EXPERIENCE_SINCE = 2007` is when the
      *director* began working on site, not when the firm was registered. The site
      currently makes no "established" claim; add one once the year is confirmed.
- [ ] **Email address** — `info@shreebuildcon.in` is assumed.
- [ ] **Wordmark font** — the lockup is set in HP Simplified, HP's proprietary
      corporate typeface. It renders only for viewers who have it installed;
      everyone else sees the Source Sans 3 fallback. Self-hosting the files would
      likely breach its licence, so either confirm a licence that allows web
      embedding, or settle on a free face.
- [ ] **Domain** — point `shreebuildcon.in` at the Netlify site once it is registered.
      Nothing in the code needs changing: the build reads the address from Netlify.
- [ ] **Office hours**.
- [ ] **Company profile PDF** — the contact card and footer link to
      `/company-profile.pdf`; drop the file into `public/`.
- [ ] **Director photograph** — the AI-generated placeholder has been removed and the
      leadership section is now built around the quote instead. If the client supplies a
      real photograph of Pradip Kale, the section can take a portrait column back.
- [ ] **Civil works captions** — titles and descriptions in the projects gallery were
      read off the photographs. Confirm them, and fill in the blank `location` and
      `year` fields (the caption switches to those automatically once set).
- [ ] **Shree Nagari attribution** — the brochure credits the project to Abhiraj
      Associates, with Pradip Kale as one of six contacts. The site says "developed in
      association with Abhiraj Associates"; confirm this is how the client wants it put.
- [ ] **Shri Park brochure** — the supplied PDF carries a "Scanned with OKEN Scanner"
      watermark on every page. Ask the client for the original.
- [ ] **Shree Nagari plot sizes** — the brochure cover advertises "700 – 1200 sq. ft.",
      but the plot schedule inside the same brochure lists 64 plots from 697 to
      1,870 sq. ft. The site uses the schedule's range; confirm which the client
      wants published.

## Notes

- The enquiry form has no backend. It validates, then composes the enquiry into a
  WhatsApp message to the firm's number. Swap `handleSubmit` in
  `src/components/Contact.jsx` for a POST when a form service or API exists.
- Photographs are compressed for mobile connections. Site photos were reduced from
  4.84 MB to 2.27 MB; the Shree Nagari brochure from 13.05 MB to 1.54 MB.
- Link previews (WhatsApp, Facebook, LinkedIn, X) come from the Open Graph tags in
  `index.html`. The card at `public/share-image.jpg` is 1200x630; regenerate it if the
  branding changes. `%VITE_SITE_URL%` in the markup is substituted by Vite at build
  time, so the absolute URLs only need changing in `.env`.
- `.env` holds public build-time configuration only. Never put secrets in a `VITE_`
  variable — they are embedded into the client bundle.
- Logo assets come from the client's vector PDF, rendered at 600 dpi with
  transparency. `src/assets/logo.png` is the full-colour mark;
  `src/assets/logo-on-dark.png` recolours its blue to a white-to-grey ramp for dark
  surfaces. The header cross-fades between them on scroll, and the footer and share
  card use the dark-surface version.

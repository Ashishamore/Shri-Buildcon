# Shri Buildcon

Marketing website for **Shri Buildcon — Builders & Developers**, a civil contracting,
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

## Before this goes live

Everything below is marked `PLACEHOLDER` in `src/data/site.js`.

- [ ] **Testimonials** — all three are written to show the design. Replace with real,
      approved client feedback.
- [ ] **Statistics** — "120+ projects completed" and "25+ site personnel" are guesses.
- [ ] **Firm establishment year** — unknown. `EXPERIENCE_SINCE = 2007` is when the
      *director* began working on site, not when the firm was registered. The site
      currently makes no "established" claim; add one once the year is confirmed.
- [ ] **Email address** — `info@shribuildcon.in` is assumed.
- [ ] **Office hours**.
- [ ] **Company profile PDF** — the contact card and footer link to
      `/company-profile.pdf`; drop the file into `public/`.
- [ ] **Director photograph** — `src/assets/director.jpg` is AI-generated. Replace with
      a real photograph of Pradip Kale.
- [ ] **Civil works captions** — titles and descriptions in the projects gallery were
      read off the photographs. Confirm them, and fill in the blank `location` and
      `year` fields (the caption switches to those automatically once set).
- [ ] **Shree Nagari attribution** — the brochure credits the project to Abhiraj
      Associates, with Pradip Kale as one of six contacts. The site says "developed in
      association with Abhiraj Associates"; confirm this is how the client wants it put.
- [ ] **Shri Park brochure** — the supplied PDF carries a "Scanned with OKEN Scanner"
      watermark on every page. Ask the client for the original.

## Notes

- The enquiry form has no backend. It validates, then composes the enquiry into a
  WhatsApp message to the firm's number. Swap `handleSubmit` in
  `src/components/Contact.jsx` for a POST when a form service or API exists.
- Photographs are compressed for mobile connections. Site photos were reduced from
  4.84 MB to 2.27 MB; the Shree Nagari brochure from 13.05 MB to 1.54 MB.

# GDGoC UGM Website

A responsive website for **Google Developer Groups on Campus, Universitas Gadjah Mada**, built for the GDGoC UGM Hacker (Front-End) recruitment assignment. It implements the provided Figma design and consumes the GDGoC UGM REST API.

- **Live demo:** https://gdgoc-study-case-rho.vercel.app
- **Video presentation:** https://drive.google.com/file/d/1RQVDa0bOeQwVcRFLMMN3ywstbiYKddZr/view?usp=sharing
- **Repository:** https://github.com/adelardotsabat/GDGOC-StudyCase
- **Author:** Adelardo Tsabat Chalada Abidin

## Pages

All four pages from the Figma design are implemented:

| Route | Page | API data used |
| --- | --- | --- |
| `/` | Home | `/tracks`, `/faqs` |
| `/about` | About | `/values`, `/roles` |
| `/overview` | Overview | `/tracks`, `/formats`, `/journey` |
| `/contact` | Contact | `/inquiry-categories` |

API base URL: `https://gdgoc-ugm-api.vercel.app/api`

## Features

- **Pixel-aligned UI** based on the Figma design tokens (colors, typography, spacing, radii), defined once in the Tailwind theme.
- **Dynamic data fetching** through a single API service and a reusable `useFetch` hook.
- **Loading, error, and empty states** for every API-driven section: skeleton placeholders, an error message with a retry button, and an empty-state fallback.
- **Responsive layout** from mobile to desktop, including a hamburger menu on small screens.
- **Track selection via URL** (`/overview?track=development`): the selected track is highlighted and shows its "what you'll do" text from the API.
- **FAQ accordion** with a "show all" toggle, built with accessible `aria-expanded` / `aria-controls` attributes.
- **Contact form** with client-side validation, focus management on errors, a success state, and category cards that stay in sync with the dropdown.
- **Reusable components**: the track card is shared between Home and Overview, and icons are reused across pages.

## Additional challenges

- **Advanced frontend logic:** selected track stored in the URL (`?track=`), client-side sorting of formats and journey steps, FAQ accordion with a "show all" toggle.
- **Data understanding:** uses `explore_link` and `what_you_do` from `/tracks`, and `/inquiry-categories` as the single source for both the category cards and the form dropdown.
- **Code quality:** Oxlint for linting, modular structure, reusable components. TypeScript is not used.

## Tech stack

- React + Vite (JavaScript)
- Tailwind CSS
- React Router
- Oxlint
- Deployed on Vercel

## Getting started

Requirements: Node.js (LTS) and npm.

```bash
git clone https://github.com/adelardotsabat/GDGOC-StudyCase.git
cd GDGOC-StudyCase
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

Other scripts (check `package.json` for the exact names):

```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run the linter
```

## Project structure

```
src/
├── assets/        # Figma exports (logos, illustrations, icons)
├── components/
│   ├── layout/    # Navbar, Footer, ScrollToTop
│   ├── sections/  # Shared sections (CTA panel)
│   └── ui/        # Reusable UI (Button, Container, DataState, Skeleton, ...)
├── features/      # Page-specific sections
│   ├── home/
│   ├── about/
│   ├── overview/
│   └── contact/
├── hooks/         # useFetch
├── lib/           # Asset loader
├── pages/         # Route-level pages (compose feature sections)
└── services/      # API client
```

Each page in `pages/` only composes sections from `features/`, and each section keeps its own static content and presentation separate.

## Architecture notes

- **Data layer:** `services/api.js` holds one `request` helper and one function per endpoint. `useFetch` returns `{ data, loading, error, retry }` and cancels in-flight requests on unmount.
- **State rendering:** `DataState` decides what to render (skeleton, error, empty, or content), so each section stays short and consistent.
- **Design tokens:** colors, radii, and container width live in `src/index.css` (`@theme`), so components use names like `bg-brand` and `rounded-card` instead of raw values.
- **Assets:** images load by name through `lib/assets.js`, with an emoji or text fallback if a file is missing.
- **Routing:** `vercel.json` rewrites all paths to `index.html` so deep links and refreshes work on Vercel.

## Notes and limitations

- The API does not provide an endpoint for submitting the contact form, so submission is **simulated** in `features/contact/submitInquiry.js` (validation, loading, and success state). Swapping in a real `fetch` POST only requires changing that file.
- The Figma file only contains desktop frames. The mobile and tablet layouts are my own responsive interpretation of the design.
- Some copy in the design (for example the track labels and the "Best for" lines) is not in the API, so it is stored as static content and mapped by `id`.

## Commit convention

Commits follow Conventional Commits (`feat`, `fix`, `style`, `refactor`, `chore`, `docs`) with one change per commit.
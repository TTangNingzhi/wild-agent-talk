# Coding Agents in the Wild

Open-source presentation site for a live research talk at Google DevAI Research (Ningzhi Tang, August 10, 2026). The site is one continuous, semi-slide-style page with a sticky three-level outline, covering two papers:

- **Programming by Chat** (ASE 2026): a behavioral analysis of 11,579 real-world AI-assisted IDE sessions.
- **How Coding Agents Fail Their Users** (under submission): developer-agent misalignment across 20,574 real-world sessions.

LaTeX sources for both papers live in `sources/` (untracked) and are the reference for every number on the page.

## Develop

```bash
npm install
npm run dev      # vite dev server
npm run build    # tsc -b && vite build
npm run lint     # oxlint
```

## Structure

```
src/
  theme.ts               MUI light theme, projector-scaled type
  App.tsx                renders the outline, page content, and footer
  sections/index.tsx     the talk in order: single source of truth
  sections/              one file per authored section
  components/            slide moments, article sections, findings, and outline
  content/               talk metadata and paper-traced data
  assets/                rendered paper pages and figures
  hooks/                 scroll-driven helpers
```

Adding a section means adding one entry to `src/sections/index.tsx`; the nav and scroll tracking pick it up automatically.

See `AGENTS.md` for the layout, style, tone, and copy rules this site follows.

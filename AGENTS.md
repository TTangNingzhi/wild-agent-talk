# Project: Coding Agents in the Wild

A semi-slide-style presentation website for a live research talk at Google DevAI Research (Ningzhi Tang, August 10, 2026). Presents two papers in sources/: programming-by-chat (ASE '26) and coding-agent-misalignment (under submission at EMNLP '26).

## Layout: semi-slide

One continuous scrolling page, not a slide deck. A few full-viewport "slide moments" (cover, part dividers, headline findings); everything else flows like a well-designed article. Smooth scrolling, stable anchor ids per section, large type that reads well on a projector.

## Style

- MUI (@mui/material) components everywhere, but tuned away from stock MUI defaults: the theme in src/theme.ts is the single place to change type, color, and spacing.
- Google Sans for display and headings, Google Sans Text for body, Google Sans Code for monospace. All three load from fonts.googleapis.com in index.html.
- Google brand palette: Blue #1a73e8 as primary, with Red #ea4335, Yellow #fbbc04, Green #34a853 as the accent set. Google greys for text and dividers. Light theme, white background. No gradients, no glassmorphism.
- @mui/x-charts for standard charts; hand-written SVG for custom visualizations. Original paper figures may be used, copied from sources/ into assets.
- Animations subtle and purposeful, interruptible by scroll, never replaying on every small scroll, never laggy.

## Layout and type rules

These come from direct review feedback; do not regress them.

- Content spans the full width of its column. No narrow left-hugging blocks, no maxWidth in ch units on headings or subtitles just to shorten a line.
- The rail and the content are one block, not two floating elements. The shell is `[outer margin][rail][RAIL_GAP][content][outer margin]`, laid out as a flex row in `shellSx` (src/layout.ts). The gap between rail and content stays tight at `RAIL_GAP`; all the breathing room belongs to the two outer margins, which are equal.
- Outer margins are `max(OUTER_MIN, (100% - SHELL_MAX) / 2)`, so the shell centers and stops growing past `SHELL_MAX`. Widen the page by raising `SHELL_MAX`, never by removing the cap.
- The rail is a sticky column inside the flex row, not `position: fixed`. Fixed positioning breaks the shared margin and is what made the rail drift away from the content.
- Slide and Section fill the column they are given; they must not re-center or re-cap their own width.
- The rail shows the whole outline at once, three levels deep: part, research question, section. Not abstract dots, and never collapsed. Findings stop at the page; they do not appear in the rail.
- No scroll progress bar at the top of the viewport.
- No tiny text anywhere. 14px is the floor, including eyebrows, captions, and nav labels.
- No oversized headlines either. Display type caps at 56px; the scale should feel calm, not shouty.

## Hierarchy: four levels, one token each

The talk has exactly four levels, and each one owns a single visual token. Do not invent a fifth, and do not reuse a token for something else.

1. **Part** (Opening, each paper, Closing): a full-viewport `PartDivider`, one accent color, one top-level heading in the rail.
2. **Research question** (Data, RQ1, RQ2, ...): an `RqMarker` band, rendered once above the first section of the run, never per section. Registered as `rq` on the section entry; `App` inserts the band wherever the value changes, and the key doubles as the scroll anchor.
3. **Section**: an `h2` title, and the last level that appears in the rail. `Section` has no label slot above the title; if a section seems to need one, it usually belongs under a different RQ.
4. **Finding**: a `Finding` block inside a section, its number beside an `h3` claim, evidence underneath. Every numbered finding in either paper uses this same block, whether its evidence is two stats or a full figure, and findings are never navigation.

Below all of that, labels inside a card (step names, loop names) use grey `overline`. Accent color means hierarchy or data series, never decoration, so a colored small-caps label always reads as "this is where you are" and a grey one as "this is what this card is called". Exceptions are labels that encode data, such as the DataScale timeline stages and the archetype chips, whose colors match the paper figures.

## Brand color as structure

`src/accents.ts` assigns one Google color per part, each used once: blue for the opening, yellow for Programming by Chat, red for Coding Agent Misalignment (the half about failure), green for the closing. That accent drives the part divider rule, the RQ band, the finding numbers, and the rail, so color tells the audience where they are. The cover carries all four as a single full-width rule.

## Facts and assets

- Every number on the page comes from `src/content/dataset.ts` or `src/content/talk.ts`, traced to the papers in sources/. Never inline a statistic in a component.
- Paper first pages and figures are rendered from the PDFs in sources/ with `pdftoppm -png -r 160`, downscaled with `sips -Z`, and live in `src/assets/papers/` and `src/assets/figures/`.
- Scroll-triggered reveals use the `Reveal` component, which fires once and never replays.

## Tone

Calm and professional by default. Playful touches are welcome in small doses and only where they aid comprehension or memorability. Real episodes from the papers are the best source of humor; no decorative jokes or emoji.

## Copy rules

- Never use em or en dashes in visible text; rephrase with commas, colons, or periods. Hyphens in compound words are fine.
- Keep on-page text short: the presenter carries the narrative, the page carries evidence.

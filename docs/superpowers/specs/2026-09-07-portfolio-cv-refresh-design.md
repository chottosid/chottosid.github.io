# Portfolio CV Refresh — Design

Date: 2026-09-07
Source of truth: `Overall_Final.pdf` (Sept 2026 CV). Goal: sync facts, curate — the site is a
portfolio, not a CV copy.

## Decisions

1. **Profile (title + summary): unchanged.** User explicitly wants the current self-introduction kept.
2. **Experience:** add *Machine Learning Engineering Expert, BUET (Jul 2026 – Present)* on top with
   three condensed bullets (BNBC compliance-checking LLM system, building-code document pipeline,
   violation detection + regulation retrieval). PeriScaleAI entry unchanged.
3. **Research:** DMOTE gets its full title and status *Under review (A\* main track, first author)*.
   DDS-E-Sim venue wording synced to "NeurIPS 2025 Workshops (FPI & SPIGM)". Other entries unchanged.
4. **Projects: 10 → 6.** Keep Veritas, ChinhoAI, ScrappyBuddy, Cognitia, Woodland Escapade,
   Kothin Trains. Cut Shohochori, AxleCar, Network Security Toolkit, Compiler. Visuals: Veritas logo
   (`public/projects/veritas.png`, 24K) and Kothin Trains search+seat-map screenshot
   (`public/projects/trains.jpg`, 44K, recompressed from a 1.2M PNG), rendered via plain `<img>` when
   `project.image` exists. Woodland Escapade gets **no** image: its README screenshots show the old
   2D IGraphics "bounce" scaffolding, which contradicts the FPS description — stale until fresh
   gameplay screenshots exist. Demo videos stay links, not embeds.
5. **Education:** "Graduated Jun 2026" wording; coursework line dropped. CGPA stays out
   (deliberately removed in 9f45b16).
6. **Awards:** IMO entry → "Extended Camp and National Camp"; Sir Fazle Hasan Abed Scholar → 2020.
7. **Skills:** 9 categories → 5 by folding (Pandas/SciPy into ML & AI; scraping tools into the
   agentic bucket; backend + DB/infra merged; programming + frontend merged). Blockchain & Web3 kept.
8. **Housekeeping:** `*.pdf` added to `.gitignore` — `Overall_Final.pdf` contains a phone number and
   the repo auto-deploys on push.

## Skipped (add later if wanted)

Video embeds, per-project detail pages, "now" section.

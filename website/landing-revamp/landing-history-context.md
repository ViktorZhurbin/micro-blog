# Landing page copy — history and recovered material

Reference document. Describes what the Castro landing page's copy has been
across its different eras, and collects recovered material that could be
reused or adapted.

## The eras

The landing page has been rewritten several times, in this order:

1. **Satirical, fully committed.** The first version the site ever had.
   Proper nouns and headers carry the joke; the technical prose underneath
   stays plain. No hedging anywhere.
2. **Serious, satire pushed to the edges.** The joke recedes to opening/closing
   lines and error messages; body copy becomes descriptive.
3. **Educational.** Framed as a teaching artifact for island architecture
   specifically — "learn island architecture by reading ~1500 lines of code."
4. **Minimalist.** Docs deleted, landing page reduced to a plain description
   of what the tool does. Boring by design, or by drift.

The current rework is a return to era 1's commitment level, not a return to
era 1's content — the island-only framing from eras 1 and 3 is being widened
to static site generation / framework in general, with islands as Castro's
specific answer within that.

Also part of the current rework: the self-irony of building a framework like
this at all, now that anyone can (with LLMs). The copy should own that rather than
pretend otherwise — see "Whose framework" below for what this means for the
tagline specifically.

## The original landing page — full text

The first version (era 1), quoted in full because it's the strongest existing
reference for "fully committed, no hedging":

> # Castro
>
> ### The People's Framework
>
> **The Educational Island Architecture Framework**
> **(That Happens to Be Communist)**
>
> _"The satire is optional. The knowledge is real."_
>
> **[Read the Manifesto]** **[View Source Code]** **[Start Tutorial]**
>
> ---
>
> ## The Revolutionary Directives
>
> Learn how modern SSGs work by reading ~1500 lines of well-commented code.
> Three hydration strategies. Zero configuration.
>
> **no:pasaran** — _"They shall not pass (to the client)"_
> Component renders at build time. No JavaScript shipped to client. Pure
> static HTML for maximum performance.
> _[live counter demo]_
> ↑ Try clicking. Nothing happens. Zero JS was sent to your browser.
>
> **lenin:awake** — _"The leader is always ready"_
> Component becomes interactive immediately on page load. Full
> interactivity from the start.
> _[live counter demo]_
> ↑ This counter is interactive immediately. JS loaded on page load.
>
> **comrade:visible** — _"Only work when the people are watching"_
> Component hydrates when scrolled into viewport. Lazy loading with
> IntersectionObserver. Default behavior.
> _[live counter demo]_
> ↑ JS loads when scrolled into view. Open DevTools Network tab to verify.
>
> ---
>
> ## How The Revolution Works
>
> Island architecture explained. No magic, just smart progressive
> enhancement.
>
> **1 — Build Time**
> Castro compiles your pages and renders all islands to static HTML. Every
> component gets server-side rendered, creating instant visual content.
>
> **2 — Browser Receives HTML**
> Pure HTML arrives first. Your page is visible immediately. No waiting for
> JavaScript bundles. Islands are wrapped in `<castro-island>` custom
> elements.
>
> **3 — Selective Hydration**
> JavaScript loads based on your directive. `no:pasaran` stays static.
> `lenin:awake` hydrates immediately. `comrade:visible` waits for viewport
> intersection.
>
> **4 — Interactive Islands**
> Components become interactive exactly when needed. Fast initial load,
> progressive enhancement, minimal JavaScript. This is island architecture.
>
> ---
>
> **Workers of the Web, Unite!**
> **Seize the Means of Rendering.**
>
> [About] [GitHub]
>
> _Built with Castro | The People's Framework_

## Hero copy, by era

- Kicker under the logo: **THE PEOPLE'S FRAMEWORK**.
- Era 1 tagline: **"The Educational Island Architecture Framework (That
  Happens to Be Communist)"**
- A later tagline: **"Your Five-Year Plan to Learn Island Architecture"** —
  the grandiosity-gap structure (grand ideological frame, small mundane
  event). The back half ("Learn Island Architecture") is the part now out of
  scope, since the page is widening past islands to framework/SSG machinery.
- Quote line, present from era 1: **"The satire is optional. The knowledge is
  real."** Later softened to "The satire is optional. The code is serious."

## Section headers, by era

- **WHAT THE PARTY OFFERS** — header over a feature-card grid. The grid no
  longer exists in any era after this one.
- **HOW THE REVOLUTION WORKS** — header over the pipeline explainer in era 1.
  Progressively flattened in later eras to "HOW IT WORKS AT RUNTIME," then
  "HOW IT WORKS."

## Feature cards

- A card built around the codebase's line count as the pitch itself: _"A
  working Static Site Generator in ~1500 lines of well-commented code. Learn
  island architecture by reading the source."_ Later replaced by the blander
  "READABLE BY DESIGN." The core codebase is close to 1350 lines today, if a
  version of this card returns.

### Slogans, by directive

**`no:pasaran`** — _"They shall not pass (to the client)"_
Caption: _"↑ Try clicking. Nothing happens. Zero JS was sent to your
browser."_

**`comrade:eager`** — _"Some comrades wait. This one doesn't."_ / _"Ready before you asked"_
Hydrates on page load. Use for components the user reaches for immediately.

**`comrade:visible`** — _"Only work when the people are watching"_
Caption: _"↑ JS loads when scrolled into view. Open DevTools Network tab to
verify."_ A later "live demonstration" caption: _"Before hydration, it is
pure, state-approved HTML. Upon intersection, the `comrade:visible`
directive executes, the Preact runtime is distributed, and the component
becomes interactive."_

**`comrade:patient`** — three
slogans across its life: _"Work when nobody else is busy"_ →
_"I'll hydrate when everyone else is done"_ →
_"Serves the collective once the essential work is complete."_

### `no:pasaran`'s self-aware version

Before it was dropped, `no:pasaran`'s own description already admitted the
joke: _"Component renders at build time only. In practice, use a regular
Component.tsx if you don't need interactivity. **This directive is here for
the memes.**"_

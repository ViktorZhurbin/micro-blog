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

> **[star emblem]**
>
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

## Whose framework

The current tagline candidates (below) both use the word "your" — "Your
Five-Year Plan to Understand Your Framework" and the "...Read Your Own
Framework" variant. That word is ambiguous, and the ambiguity matters:

- **Visitor's sense** — "the framework you, the reader, will be using." Reads
  as ordinary second-person marketing address, no different from any SaaS
  landing page's "your workflow" or "your team."
- **Author's sense** — "the framework I built, myself, and am now asking you
  to watch me try to understand." This is the self-irony the page is going
  for: a five-year state-planning apparatus mounted to comprehend a tool one
  person wrote on their own time, that anyone could now build with an
  LLM's help.

The tagline alone can't force the second reading — "your" defaults to the
visitor's sense unless something nearby tips it. That tipping has to happen
in copy near the tagline (kicker line, subline, or the line right under the
hero) — something that makes clear the "you" being addressed, or at least
implicated, is the author, not a generic visitor. Without that, the tagline's
irony collapses into a normal marketing line that happens to be dressed as a
communist joke, which is the flat version the page is trying to avoid.

## Routes referenced by old copy

- **`/manifesto`** — linked from CTA buttons ("Read the Manifesto") across
  multiple eras. Never built.
- **`/tutorial`** — a CTA on the original landing page. Never built.
- **`/showcase`** — hosted the live directive demo before it was removed.
- **`/about`** — existed for a period, contained the line _"The communist
  theme makes it memorable. The lessons are real."_

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

## The directive demo

Era 1 had a live grid of working hydration-directive counters on the landing
page itself, each with its own slogan — later demoted to a separate page,
then removed. No version of these slogans exists anywhere on the site today.

### Directive naming

The three original directive names were `no:pasaran`, `lenin:awake`, and
`comrade:visible`. Later, in the educational era, the names were
standardized to a more sober, teachable set: `lenin:awake` > `comrade:eager`,
`comrade:patient` (newly added), `comrade:visible`. `no:pasaran` was dropped,
on the reasoning that "static, no JS" isn't really a hydration directive —
it's just the absence of an island.

### Slogans, by directive

**`no:pasaran`** — _"They shall not pass (to the client)"_
Caption: _"↑ Try clicking. Nothing happens. Zero JS was sent to your
browser."_

**`lenin:awake`** — _"The leader is always ready"_
Caption: _"↑ This counter is interactive immediately. JS loaded on page
load."_ A later replacement line, after the name changed to `comrade:eager`:
**"Some comrades wait. This one doesn't."**

**`comrade:visible`** — _"Only work when the people are watching"_
Caption: _"↑ JS loads when scrolled into view. Open DevTools Network tab to
verify."_ A later "live demonstration" caption: _"Before hydration, it is
pure, state-approved HTML. Upon intersection, the `comrade:visible`
directive executes, the Preact runtime is distributed, and the component
becomes interactive."_

**`comrade:idle` / `comrade:patient`** — three
slogans across its life: _"Work when nobody else is busy"_ →
_"I'll hydrate when everyone else is done"_ →
_"Serves the collective once the essential work is complete."_

### `no:pasaran`'s self-aware version

Before it was dropped, `no:pasaran`'s own description already admitted the
joke: _"Component renders at build time only. In practice, use a regular
Component.tsx if you don't need interactivity. **This directive is here for
the memes.**"_

A demo card was briefly built specifically for `no:pasaran`, then deleted:
**`BureaucraticPermit`**, styled as a bureaucratic form:

```
FORM 27B/6 — REQUEST FOR CLIENT-SIDE INTERACTIVITY
☐ Component requires user interaction
☐ Static HTML is insufficient
☐ I have read the Party's rendering guidelines
[SUBMIT REQUEST]
FORM STATUS: PERMANENTLY PENDING
```

Stamped diagonally with **"JS DENIED."** All checkboxes and the button are
disabled — the form performs the permanently-pending request it describes.

## Island examples

Several attempts to find a genuinely funny and cool and engaging example of
an island instead of a dumb, simple counter, but still searching for better
options.

### PropagandaRadio

A headline ticker with prev/next controls.

- Header: `STATE RADIO`, badge `ON AIR`
- Headlines (rotating, 5s interval): `Virtual DOM dissidents sent to
re-education` · `Bundle sizes redistributed equally` · `Hydration declared
mandatory for all components` · `Island architecture triumphs over SPA
revisionism` · `Optimal line count achieved. Further additions
prohibited.`
- Controls: `◀ PREV` / `NEXT ▶`
- Counter: `01 / 05` style, current index over total

### FiveYearPlan

A click-to-work progress toy.

- Header: `FIVE-YEAR PLAN` / `CYCLE #{n}`
- Readout label: `TRACTOR OUTPUT`
- Progress badges: `STAKHANOVITE PACE` (≥50%), `SATISFACTORY TOIL` (≥25%)
- Default button label: **`WORK HARDER, COMRADE!`**
- On completing a cycle, one random line flashes on the button:
  `QUOTA FULFILLED. QUOTA RAISED.` / `TARGET ACHIEVED. NEW TARGET ISSUED.` /
  `THE PLAN SUCCEEDS. THE PLAN CONTINUES.` / `OUTPUT NOTED. NORMS ADJUSTED.`

### Redactor

A censorship-toggle toy.

- Header: `FIELD REPORT № 2847`, classification badge
  (`CLASSIFICATION: PENDING` → `CLASSIFICATION: APPROVED`)
- Toggled stats: Q3 grain output `43% of target` → `HISTORIC SURPLUS` ·
  District 7 tractors `3 of 11` → `ALL OF THEM` · Saturday brigade sign-ups
  `12%` → `UNANIMOUS`
- Button: `SUBMIT FOR REVIEW` → `✓ APPROVED FOR DISTRIBUTION`

An earlier draft used plainer toggled lines instead of the field-report
frame: _"The recent harvest was poor → **GLORIOUS**. The tractors are old and
unreliable → **MAGNIFICENT**. Worker morale has declined → **SKYROCKETED**
since the last policy change."_ An intermediate version of the button read
`✓ APPROVED BY THE MINISTRY OF TRUTH` — a callback to the 404 page (see
below) — but that wording didn't survive to the recovered file.

## Footer

Original, two lines:

```
WORKERS OF THE WEB, UNITE!
SEIZE THE MEANS OF RENDERING.
```

## 404 page

```
This page has been redacted by the Ministry of Truth.
It never existed.

Perhaps it was a counter-revolutionary element that needed correction.

[Return to the Collective]
```

## Variants and options on unresolved questions

Places where the copy has genuinely varied across eras or drafts, with no
single answer treated as correct:

**Hero tagline.** Candidates for completing "Your Five-Year Plan to ___",
keeping the grandiosity-gap frame and swapping what it's a five-year plan
_for_:

- "...Understand Your Framework"
- "...Read Your Own Framework"

Whichever is chosen, see "Whose framework" above — the tagline needs support
nearby to land the author-facing reading of "your."

**Directive naming.** Options: keep the current sober names
(`comrade:eager` / `comrade:patient` / `comrade:visible`), or restore the
original names with their original punchlines (`lenin:awake` — "the leader
is always ready," etc.).

**Whether `no:pasaran` returns.** It was dropped for not being a real
hydration directive, but it shipped a self-aware joke about that exact fact
before it was removed, and has a demo component (`BureaucraticPermit`)
already built for it.

**Hero layout.** The hero has room for a kicker line, a tagline, and a quote
line. Which of these a new tagline replaces or sits alongside, and whether
"The satire is optional. The knowledge is real." (or a variant of it)
returns, is open.

# Landing page rewrite — grouped by component

Same ten responses as `results.md`, regrouped by section so each part can be compared across models directly. No text edited or summarized — every block below is copied verbatim from `results.md`. Model + effort labels are kept as sub-headers so authorship stays traceable.

Component order: Hero/Header, What It Offers (intro), Hydration Directives, Pipeline (How It Works), In-Body Live Demo, Additional/Bonus Sections, Footer/CTA, Island Example Replacement Note, Stray Text.

---

## 1. Hero / Header

### Opus 4.6 (High)

```markdown
**[star emblem]**

# Castro

### The People's Framework

**Your Five-Year Plan to Understand Your Framework**

_Preact. Bun. ~1350 lines. One author. Possibly overplanned._

_"The satire is optional. The code compiles."_

**[Read the Manifesto]** **[View Source Code]**
```

### Opus 4.7 (Extra)

```markdown
**[star emblem]**

# Castro

### THE PEOPLE'S FRAMEWORK

**Your Five-Year Plan to Understand Your Framework**

_Written by one comrade. Being read, in due course, by the same comrade._

**[View Source]** **[Install]**
```

### Sonnet 4.6 (High)

```markdown
**[star emblem]**

# Castro

### The People's Framework

**A Working Static Site Generator**
**(That Happens to Be Communist)**

_"The satire is optional. The code is serious."_

**[View Source Code]** **[GitHub]**

---

_One person built this. An LLM could have. The Five-Year Plan to understand it is yours either way._
```

### Opus 5 (High)

```markdown
**[star emblem]**

# Castro

### The People's Framework

**Your Five-Year Plan to Understand Your Framework**

The framework in question is this one. One person wrote it, on evenings, with a machine helping. He is the "you." The Plan is his.

_"The satire is optional. The machinery is real."_

**[Read the Manifesto]** **[View the Source]** **[Begin the Plan]**
```

### Opus 4.8 (High)

```markdown
**[star emblem]**

# Castro

### The People's Framework

**Your Five-Year Plan to Understand Your Framework**

_One comrade built this. Now he convenes a full state planning apparatus to comprehend what he wrote on a weekend. You are invited to observe the proceedings._

**[View Source Code]** **[Read the Docs]** **[Defect to Astro]**
```

### Sonnet 5 (Extra)

```markdown
**[star emblem]**

# Castro

### THE PEOPLE'S SSG

**Your Five-Year Plan to Understand Your Framework**

_One comrade. One weekend. Zero committees. The framework is real, and so, regrettably, is the person who built it._

**[Read the Manifesto]** **[View Source Code]** **[Comrade, Get Started]**
```

### Sonnet 5 (High)

```markdown
# Castro

**[star emblem]**

### The People's Framework

**Your Five-Year Plan to Understand Your Framework**

_I built this alone. I'm still not sure I understand it either._

**[Read the Manifesto]** **[View Source Code]** **[Start Tutorial]**
```

### ChatGPT (Think)

```markdown
**[star emblem]**

# Castro

### The People's Framework

## Your Five-Year Plan to Understand Your Framework

_Yes, "your" means me. I built this framework, and now I am responsible for understanding it._

**[Read the Docs]** **[View Source Code]**

_The satire is optional. The code works._
```

### Gemini 3.6 Flash (Extended Thinking)

```markdown
★

# Castro

### THE PEOPLE'S FRAMEWORK

**Your Five-Year Plan to Understand Your Framework**

_(A ~1,350-line personal static site generator I built with an LLM, so I could finally understand how my own tooling works.)_

_"The satire is optional. The knowledge is real."_

**[Read the Source (~1,350 LOC)]** **[View on GitHub]** **[Quickstart Guide]**
```

### Gemini 3.1 Pro (Extended Thinking)

```markdown
**[star emblem]**

# Castro

### THE PEOPLE'S FRAMEWORK

**Your Five-Year Plan to Understand Your Framework**

_(A monolithic state apparatus designed to comprehend an SSG I built myself over a weekend, now that the means of production are just an LLM prompt away.)_

_"The ideology is manufactured. The HTML is real."_

**[Read the Manifesto]** **[View Source Code]** **[Start Tutorial]**
```

---

## 2. What It Offers (Intro)

### Opus 4.6 (High)

```markdown
## What the Party Offers

Castro is a static site generator. You write Preact components. Castro compiles them to HTML, applies file-system routing, wraps them in layouts, and ships the result with zero client-side JavaScript — unless you ask for it.

When a component needs interactivity, you declare it as an island. Castro server-renders it at build time like everything else, then selectively hydrates it in the browser according to a directive you assign. The rest of the page stays static.

Markdown and MDX are first-class inputs. Layouts resolve by convention. Configuration is a single file, if you need one at all.
```

### Opus 4.7 (Extra)

```markdown
## What the Framework Is

Castro is a static site generator built on Preact and Bun. It renders your pages to HTML at build time and hydrates only the components that need to move. Written on personal time by one comrade, in an era when a static site generator is a weekend project. It works.

**Content** — Markdown and MDX files under `src/pages/`. Each becomes a route.

**Layouts** — Preact components that wrap your pages. Nested layouts compose.

**Islands** — Interactive Preact components, selectively hydrated. Everything else ships as static markup.

**Output** — A directory of static files. Deploy to whatever serves HTML.
```

### Sonnet 4.6 (High)

```markdown
## Your Five-Year Plan to Understand Your Framework

A static site generator in ~1350 lines of well-commented code. Build time rendering. Selective hydration. Zero configuration. Read the source — all of it.
```

### Opus 5 (High)

```markdown
## THE MEANS OF PRODUCTION

A static site generator built on Preact and Bun. Markdown and components go in, static HTML comes out. The core is about 1,350 lines of commented source — small enough to read in one sitting.

**Routes are files.** Anything under the pages directory becomes a URL. No route table, no manifest, no config file.

**Content is markdown.** Markdown compiles at build time. Frontmatter becomes page data available to layouts and components.

**Layouts are components.** A page names a layout; the layout receives its content and data and renders the surrounding page.

**Bundles are per-page.** Bun bundles only what a page actually imports. A page with no interactive components ships no JavaScript at all.

**The dev server watches.** Edits to content, layouts, or components trigger a rebuild and a reload.
```

### Opus 4.8 (High)

```markdown
## What The Party Provides

Castro is a static site generator built on Preact and Bun. It compiles pages to HTML at build time and ships JavaScript only where you ask for it. No runtime framework tax on content that never moves.

Islands are the mechanism: components you explicitly mark as interactive, hydrated on your terms, surrounded by static HTML that costs the client nothing. Everything else stays a document.

The whole apparatus is roughly 1,350 lines. You are meant to read them. That is the entire pitch.
```

### Sonnet 5 (Extra)

```markdown
## What the State Provides

A static site generator. Islands architecture. No build-tool Politburo, no config file five-year plan — you write pages, Castro renders them, the people receive HTML.

**Zero-Config Deployment** — Point Castro at a folder of pages. It builds. No central committee approval required.

**Islands, Not Bundles** — Ship interactivity only where it's declared, not everywhere, indiscriminately, like a rumor.

**~1,350 Lines, Fully Auditable** — Read the entire framework in an evening. No hidden clauses. No fine print. No footnotes from a shadow government.
```

### Sonnet 5 (High)

```markdown
## What The State Provides

A static site generator. Preact components, Bun runtime, islands where you need them. Nothing you haven't seen before, assembled by someone who thought that was a personal failing.
```

### ChatGPT (Think)

```markdown
## THE PEOPLE'S STATIC SITE GENERATOR

Castro builds static sites with Bun and Preact.

Pages are rendered ahead of time and delivered as HTML. Interactive parts become islands only when they need to. The rest remains static.

No application runtime is required for content that does not need one.

**Build once. Ship HTML. Hydrate selectively.**
```

### Gemini 3.6 Flash (Extended Thinking)

```markdown
## What the Party Offers

Castro is a zero-configuration static site generator built on Bun and Preact. It compiles site pages into plain static HTML at build time, using isolated component islands and explicit hydration directives to keep client-side JavaScript strictly under state control.

- **Static First** — Pages ship zero JavaScript by default unless explicitly instructed.
- **Island Architecture** — Interactive Preact components hydrate independently on demand.
- **Transparent Engine** — A complete, working framework core in ~1,350 lines of clear, readable code.
```

### Gemini 3.1 Pro (Extended Thinking)

No separate intro section — folded into "Centralized State Planning," which doubles as the pipeline. See §4.

---

## 3. Hydration Directives

### Opus 4.6 (High) — 4 directives

```markdown
## The Hydration Directives

Each island receives a directive from the Central Committee. The directive determines when — and whether — its JavaScript reaches the browser.

**`no:pasaran`** — _"They shall not pass (to the client)"_
Not a directive. A regular component with no island wrapper. Static HTML, no JavaScript, no hydration. Listed for completeness and ideology.
_[live demo]_
↑ Click all you want. The request has been permanently tabled.

**`lenin:awake`** — _"The leader is always ready"_
Hydrates immediately on page load. JavaScript is fetched and executed as soon as the document is parsed. For components the user will reach first.
_[live demo]_
↑ Interactive on arrival.

**`comrade:visible`** — _"Only work when the people are watching"_
Hydrates when the component scrolls into the viewport. IntersectionObserver handles detection. This is the default — assigned automatically when you declare an island with no directive.
_[live demo]_
↑ JavaScript loaded when you scrolled here. Check the Network tab.

**`comrade:patient`** — _"Work when nobody else is busy"_
Hydrates during `requestIdleCallback`. The component waits until the main thread has nothing better to do. For below-the-fold elements with no urgency.
_[live demo]_
↑ Hydrated when the browser had a free moment.
```

### Opus 4.7 (Extra) — 3 directives

```markdown
## The Revolutionary Directives

Islands hydrate on your terms. Three directives, plus one for the memes.

**no:pasaran** — _"Held at the border. Nothing reaches the client."_
The component renders at build time. No JavaScript is bundled for it.
_[live directive demo]_
↑ Nothing happens on click. Zero bytes of JavaScript were sent to your browser for this component.

**lenin:awake** — _"First to load. First to serve."_
The component hydrates on page load. Interactive from first paint.
_[live directive demo]_
↑ Interactive immediately. The bundle for this island loaded with the page.

**comrade:visible** — _"Awakens under the people's gaze."_
The component hydrates when it scrolls into view. Default behavior.
_[live directive demo]_
↑ Open DevTools, watch the Network tab, scroll down. The bundle arrives on intersection.

_`no:pasaran` is technically not a hydration directive — it is the absence of one. It is here for the memes. If the component does nothing interactive, use a regular component._
```

### Sonnet 4.6 (High) — 4 directives

```markdown
## The Revolutionary Directives

Islands are Castro's answer to the question every framework eventually faces: how much JavaScript reaches the browser, and when?

Three strategies. Pick one per component.

**comrade:eager** — _"Some comrades wait. This one doesn't."_
Hydrates immediately on page load. Full interactivity from the start. Use when the component must be ready before the user notices it.

**comrade:visible** — _"Only work when the people are watching."_
Hydrates on viewport intersection via `IntersectionObserver`. JavaScript loads when scrolled into view.
↑ Open DevTools Network tab. Nothing loads until this enters the viewport.

**comrade:patient** — _"Serves the collective once the essential work is complete."_
Hydrates during idle time. Defers to the browser's own schedule.

**no:pasaran** — _"They shall not pass (to the client)."_
Not a hydration strategy. A non-island. Component renders at build time; no JavaScript ships. In practice: just don't use an island. This directive exists for the record. And the memes.

_[live demo — one component per directive, one counter, four fates]_
```

### Opus 5 (High) — 4 directives

```markdown
## THE STANDING DIRECTIVES

Islands are how Castro decides which JavaScript is worth shipping. A component is static HTML by default and becomes an island only when a directive is attached to it.

**`lenin:awake`** — _"The vanguard does not sleep."_
Hydrates as soon as the bundle loads. Use for controls that must respond to the first click, above the fold.

**`comrade:visible`** — _"Labour begins when the inspector arrives."_
Hydrates on viewport intersection via IntersectionObserver. The default, and correct for most components below the fold.

**`comrade:idle`** — _"Takes the shift nobody else wants."_
Hydrates during browser idle time via requestIdleCallback. For components that should eventually work but never urgently.

**`no:pasaran`** — _"The border to the browser is closed."_
Renders at build time and ships nothing. This is not a hydration strategy — it is the absence of one, and a plain component does the same job. It is here because it is funny, not because it is necessary.
```

### Opus 4.8 (High) — 3 + unmarked

```markdown
## The Directives

Three ways a component may be granted interactivity. The Party recognizes no others.

**`comrade:eager`** — _"Some comrades wait. This one doesn't."_
Hydrates the moment the page loads. Use for components the user reaches for immediately.
_[live counter demo]_
↑ Interactive on arrival. JavaScript loads with the page.

**`comrade:visible`** — _"Serves only when observed."_
Hydrates when scrolled into view, via IntersectionObserver. The sensible default.
_[live counter demo]_
↑ Static until it enters the viewport. Watch the Network tab as you scroll.

**`comrade:patient`** — _"Serves the collective once the essential work is done."_
Hydrates during browser idle time, after more urgent components. Use for the non-critical.
_[live counter demo]_
↑ Loads last, on purpose. Nothing else waits on it.

And a fourth option, for completeness: don't mark it an island at all. It renders once, at build time, ships zero JavaScript, and does nothing forever. This is not a directive. It is a regular component, and it is usually the correct choice.
```

### Sonnet 5 (Extra) — 3 directives

```markdown
## The Hydration Directives

Three ways for a component to become interactive. Pick one per component. No component may abstain.

**`no:pasaran`** — _"It shall not pass — to the client."_
Renders once, at build time, and never again. No JavaScript reaches the browser. This is not a hydration strategy. This is the absence of one, dressed in a uniform.

**`lenin:awake`** — _"The leader is always ready."_
Hydrates the instant the page loads. Interactive immediately, whether the page needed it yet or not.

**`comrade:visible`** — _"Only works when watched."_
Hydrates on scroll into view, via IntersectionObserver. The default. Diligence, but only under observation.
```

### Sonnet 5 (High) — 4 directives

```markdown
## The Directives

Three ways for a component to earn its JavaScript. Nobody is forced to hydrate. Nobody is exempt either.

**`comrade:eager`** — _"Ready before you asked"_
Hydrates on page load. Full interactivity from the first paint, no waiting for permission.
_[live demo]_
↑ Interactive the moment the page is. Nothing to verify — it already happened.

**`comrade:patient`** — _"Serves the collective once the essential work is complete"_
Hydrates after the main thread clears. Lower priority, same eventual outcome.
_[live demo]_
↑ Watch the network tab. It waits its turn.

**`comrade:visible`** — _"Only works when watched"_
Hydrates on intersection. The default, because most of your page is below the fold and none of it needs a runtime yet.
_[live demo]_
↑ Scroll down. The moment this enters view, it wakes up.

**`no:pasaran`** — _"Correctly identifies itself as unnecessary"_
Not a directive. A component with no directive at all — rendered once, shipped as HTML, never touched by JavaScript again. Kept in the list so nobody has to feel bad about not needing it.
```

### ChatGPT (Think) — 3 directives

```markdown
## THE REVOLUTIONARY DIRECTIVES

Castro's islands use explicit directives to decide when client-side JavaScript should enter the proceedings.

**`no:pasaran`** — _They shall not pass._

This is technically not a hydration directive. It means there is no island to hydrate. The component renders at build time and ships as static HTML.

_[live static example]_

**`lenin:awake`** — _The leader is always ready._

The island hydrates immediately when the page loads. Use it when interaction is required from the beginning.

_[live eager example]_

**`comrade:visible`** — _Only work when the people are watching._

The island waits until it enters the viewport, then loads its client-side code and hydrates.

_[live visible example]_
```

### Gemini 3.6 Flash (Extended Thinking) — 4 directives

```markdown
## The Revolutionary Directives

Hydration is never implicit. Castro uses custom element markers to manage component execution, letting you dictate the exact runtime cost of every element on the page.

**no:pasaran** — _"They shall not pass (to the client)"_
Component renders exclusively at build time into static HTML. No JavaScript bundle is compiled or sent to the browser.
_[ BureaucraticPermit Demo ]_
`[Submit Interactive Request]` Status: Permanently Pending. Zero JS shipped to browser.

**lenin:awake** — _"The leader is always ready"_
Component hydrates immediately on page load. Reserved for critical interactive UI elements above the fold.
_[ GosplanCalculator Demo ]_
Interactive Preact state attaches instantly on DOMContentLoaded.

**comrade:visible** — _"Only work when the people are watching"_
Component hydrates when scrolled into the viewport using `IntersectionObserver`. The default choice for on-demand interactivity.
_[ ProductionFeed Demo ]_
JavaScript executes only when the component crosses the viewport boundary.

**comrade:idle** — _"Serves the collective once the essential work is complete"_
Component hydrates during browser idle periods via `requestIdleCallback`. Ideal for secondary UI components and background tools.
```

### Gemini 3.1 Pro (Extended Thinking) — 3 directives

```markdown
## The Hydration Directives

Granular client-side control, enforced through three core strategies. Comprehend the entire runtime by reading ~1,350 lines of source code.

**`no:pasaran`** — _"They shall not pass (to the client)"_
The component is rendered strictly at build time. Zero JavaScript is bundled or distributed to the browser.
_[live demo: Bureaucratic Permit Form]_
↑ Pure static HTML. The form is permanently disabled. JavaScript entry was denied.

**`lenin:awake`** — _"The leader is always ready"_
The component initiates hydration the moment the document is delivered. Full Preact interactivity is established before the user attempts interaction.
_[live demo: The Bureau of Redundant Frameworks]_
↑ Fully interactive immediately. JS initialized on DOM load.

**`comrade:visible`** — _"Only work when the people are watching"_
The component defers hydration until it enters the viewport. Supervised by a highly efficient, state-approved `IntersectionObserver`.
_[live demo: The Bureau of Redundant Frameworks]_
↑ JavaScript bundle is fetched and executed only upon scrolling into view. Audit the Network tab to verify.
```

**Quick scan — directive sets chosen:**

| Model            | Count        | Names                                                       |
| ---------------- | ------------ | ----------------------------------------------------------- |
| Opus 4.6         | 4            | no:pasaran, lenin:awake, comrade:visible, comrade:patient   |
| Opus 4.7         | 3            | no:pasaran, lenin:awake, comrade:visible                    |
| Sonnet 4.6       | 4            | comrade:eager, comrade:visible, comrade:patient, no:pasaran |
| Opus 5           | 4            | lenin:awake, comrade:visible, comrade:idle, no:pasaran      |
| Opus 4.8         | 3 + unmarked | comrade:eager, comrade:visible, comrade:patient             |
| Sonnet 5 (Extra) | 3            | no:pasaran, lenin:awake, comrade:visible                    |
| Sonnet 5 (High)  | 4            | comrade:eager, comrade:patient, comrade:visible, no:pasaran |
| ChatGPT          | 3            | no:pasaran, lenin:awake, comrade:visible                    |
| Gemini 3.6 Flash | 4            | no:pasaran, lenin:awake, comrade:visible, comrade:idle      |
| Gemini 3.1 Pro   | 3            | no:pasaran, lenin:awake, comrade:visible                    |

---

## 4. Pipeline / How It Works

### Opus 4.6 (High)

```markdown
## How the Apparatus Works

**1 — Collectivization**
Castro reads your source directory. Pages become routes. Layouts attach by naming convention. Markdown files are parsed, components are imported, the full page tree is assembled.

**2 — Production**
Every page is rendered to static HTML on the build machine. Islands are server-rendered inside their `<castro-island>` wrappers, producing complete visual output before any JavaScript is involved.

**3 — Distribution**
HTML goes to the browser. The page is visible and readable immediately — no spinner, no hydration delay, no layout shift. This is the whole page, not a shell.

**4 — Mobilization**
Island JavaScript loads according to each directive. Some components hydrate on page load, some on scroll, some when the browser is idle. Everything else stays as it arrived: static HTML, no runtime.
```

### Opus 4.7 (Extra)

```markdown
## How the Revolution Works

The pipeline, from source file to loaded browser tab.

**1 — Discover**
Castro walks `src/pages/` and maps files to routes. Markdown, MDX, and Preact become routes the same way.

**2 — Render**
Every page renders to HTML at build time. Islands render too — their initial state ships as static markup, indistinguishable from anything else on the page.

**3 — Bundle**
Only interactive islands receive JavaScript. The bundler emits one small chunk per island, keyed by directive.

**4 — Deliver**
The output is a static directory. The browser receives HTML first. Islands come online when their directive is satisfied.
```

### Sonnet 4.6 (High)

```markdown
## How the Revolution Works

No magic. Build-time rendering plus selective hydration. Here is the full pipeline:

**1 — Build Time**
Castro compiles your pages and renders all components to static HTML. Islands become `<castro-island>` custom elements in the output.

**2 — HTML Arrives First**
The page is visible immediately. No JavaScript bundles block rendering. The HTML is complete.

**3 — Directives Execute**
Each island reads its directive. `comrade:eager` hydrates now. `comrade:visible` waits for intersection. `comrade:patient` waits for idle. `no:pasaran` waits forever, by design.

**4 — Selective Interactivity**
JavaScript loads per component, per strategy. Minimal footprint. Progressive enhancement. This is island architecture.
```

### Opus 5 (High)

```markdown
## THE PRODUCTION CYCLE

**1 — Collection**
Castro walks the pages directory, resolves each file to a route, and reads frontmatter into page data.

**2 — Rendering**
Every page is rendered to HTML at build time, including any interactive components. The output is complete markup, not a shell waiting for a bundle.

**3 — Bundling**
Interactive components are wrapped in `<castro-island>` elements and compiled into separate bundles, one per island, referenced by the page that needs them.

**4 — Delivery**
The browser receives HTML and paints it. No JavaScript is required for the page to be visible or readable.

**5 — Hydration**
Each island loads its bundle according to its directive. Islands with no directive never load anything.
```

### Opus 4.8 (High)

```markdown
## How It Works At Build Time

No magic. Four steps, each one ordinary.

**1 — Compilation**
Castro renders every page and every island to static HTML on the server. The output is a complete, visible document before any script runs.

**2 — Delivery**
The browser receives that HTML first and paints it. Islands arrive wrapped in `<castro-island>` elements, inert, waiting for their instructions.

**3 — Hydration**
Each island's directive decides when its JavaScript loads — on load, on visibility, or on idle. Unmarked components never hydrate, because there is nothing to hydrate.

**4 — Interactivity**
Islands come alive when their directive fires. The rest of the page was already done. That is the whole trick, and there is no more to it.
```

### Sonnet 5 (Extra)

```markdown
## How It Actually Works

No magic. No manifesto required to read this part.

**1 — Build Time**
Castro renders every page and every island to static HTML ahead of time. This happens once, on your machine, not on the user's.

**2 — First Paint**
The browser receives plain HTML. The page is visible before any JavaScript has loaded, let alone run.

**3 — Selective Hydration**
Each island's directive decides what happens next: nothing (`no:pasaran`), immediately (`lenin:awake`), or on arrival in the viewport (`comrade:visible`).

**4 — Interactivity, on Schedule**
Islands wake up according to their directive, not all at once. Most of the page never needed to.
```

### Sonnet 5 (High)

```markdown
## How It Actually Works

No magic. Four steps, in order, every time.

**1 — Build**
Every page and every island renders to static HTML at build time. This happens on your machine, not the visitor's.

**2 — Delivery**
The browser receives HTML. The page is visible before any JavaScript has been considered, let alone loaded.

**3 — Selection**
Each island's directive decides if and when its script arrives. `comrade:eager` doesn't wait. `comrade:visible` waits for the viewport. `no:pasaran` never asks.

**4 — Hydration**
Islands that requested JavaScript get it, exactly when they asked for it. Everything else stays exactly as fast as HTML.
```

### ChatGPT (Think)

```markdown
## HOW THE PLAN PROCEEDS

Castro separates the work of building a page from the work of running JavaScript in the browser.

**1 — SOURCE**

Write pages and Preact components as your source.

**2 — BUILD**

Castro renders the page to HTML and prepares the islands for the browser.

**3 — DELIVER**

The browser receives useful HTML immediately instead of waiting for an application bundle to produce the page.

**4 — HYDRATE**

Islands load client-side code according to their directive. Static components remain static.
```

### Gemini 3.6 Flash (Extended Thinking)

```markdown
## How the Revolution Works

The build and runtime architecture decouples layout rendering from client hydration in four predictable steps:

**1 — Build-Time Compilation**
Bun parses your project files, renders Preact components to static HTML strings, and packages interactive islands into separate asset chunks.

**2 — Immediate HTML Delivery**
The browser receives pure, fully formed HTML. Content displays immediately without waiting for JavaScript execution or main-thread bundle parsing.

**3 — Custom Element Wrapping**
Islands are wrapped in `<castro-island>` custom elements containing directive metadata (`data-directive`). The lightweight client runtime observes these nodes.

**4 — Targeted Hydration**
When directive conditions are met (viewport entry, idle state, or immediate load), the runtime imports the island bundle and attaches Preact event listeners to the DOM.
```

### Gemini 3.1 Pro (Extended Thinking)

Combined intro + pipeline (only 3 models fold these together; this is the one that does it most fully):

```markdown
## Centralized State Planning

A strict pipeline for static site generation. One pass, zero configuration, absolute control.

**1 — Mass Production (Build Step)**
Castro compiles your routing tree and pre-renders all components to static HTML using Bun and Preact. The document structure is resolved completely on the server before it reaches the masses.

**2 — Unobstructed Distribution (Delivery)**
Bare HTML is transmitted directly to the client. The browser paints the full UI instantly, without waiting for a single JavaScript bundle to parse or execute.

**3 — The Vanguard (Selective Hydration)**
Interactivity is injected only where explicitly mandated. Dynamic islands are isolated within `<castro-island>` custom elements, leaving the rest of the document strictly static.
```

---

## 5. In-Body Live Demo (beyond the per-directive `[live demo]` stubs)

Most models only place a `_[live demo]_` placeholder inline under each directive (see §3). A few break the demo out into its own section instead:

### Opus 5 (High)

```markdown
## A DEMONSTRATION FOR THE INSPECTORATE

Four identical `LabourRecord` components, one per directive, each reporting on its own hydration.

_[live LabourRecord — `lenin:awake`]_
↑ Reported for duty before you finished reading this line.

_[live LabourRecord — `comrade:visible`]_
↑ Was still an unhydrated record until this card entered the viewport.

_[live LabourRecord — `comrade:idle`]_
↑ Waited for the browser to run out of more important work.

_[live LabourRecord — `no:pasaran`]_
↑ Permanently on the roster, never activated. The button does nothing. That is the entire feature.
```

### Sonnet 5 (Extra)

```markdown
## [Live demo section — see note below]
```

(Placeholder only — the actual demo concept, `CensusForm`, is described in the island-replacement note; see §8.)

### Sonnet 5 (High)

```markdown
## FIELD REPORT № [live component]

_(replacement for the old counter demos — see note below)_

A build log, rendered live, that reports its own bundle size as it assembles the page — and revises the number downward, in real time, as each unhydrated island is confirmed unnecessary.

`Bundle size: 340kb` → `Bundle size: 340kb (REVISED)` → `Bundle size: 12kb (FINAL, APPROVED)`

Button: **RUN THE BUILD AGAIN**
```

---

## 6. Additional / Bonus Sections (unique to one model)

### Sonnet 4.6 (High) — "The Means of Production" + "The Codebase"

```markdown
## The Means of Production

Castro is Preact and Bun. The full codebase is ~1350 lines. There is no framework magic that isn't in those lines.

**Preact** handles component rendering at build time and hydration in the browser.
**Bun** handles the build, the file system, and the dev server.
**`<castro-island>`** is a custom element. Read its implementation — it's the whole mechanism.

The point is not that the architecture is novel. The point is that you can read all of it.

## The Codebase

| File            | What it does                            |
| --------------- | ---------------------------------------- |
| `build.ts`      | Compiles pages, renders islands to HTML |
| `server.ts`     | Dev server with file watching           |
| `island.ts`     | The `<castro-island>` custom element    |
| `directives.ts` | Hydration strategy implementations      |

~1350 lines total. Start anywhere.
```

### Opus 5 (High) — "On the Necessity of This Framework"

```markdown
## ON THE NECESSITY OF THIS FRAMEWORK

There is no shortage of static site generators, and several of them do islands better than this one does. Castro exists because building the machinery teaches you things that using the machinery hides — and because a working framework is now a few weekends of work for one person with an LLM at their elbow.

That is what the Plan is for. A state planning apparatus, five years of it, aimed at a codebase one person wrote himself and can no longer entirely remember.
```

### Opus 4.6 (High) — "The Source"

```markdown
## The Source

The entire framework is ~1350 lines of commented source. Not a design constraint — just the size of the problem. Routes, layouts, islands, Markdown, build pipeline, dev server. The full apparatus.

You can read it in an afternoon. You can fork it over the weekend. An LLM could probably rewrite it by lunch.

**[View Source Code]**
```

### Opus 4.8 (High) — "Read The Source"

```markdown
## Read The Source

Castro is working software and openly unserious software. It was built by one person, at a time when building one of these is no longer an achievement — an LLM will draft you a static site generator over lunch. The value here isn't that it exists. It's that it's small enough to read end to end and learn how the machinery actually fits together.

**[Browse the ~1,350 lines]**
```

### ChatGPT (Think) — "A Framework Small Enough to Read" + "The Five-Year Plan Continues"

```markdown
## A FRAMEWORK SMALL ENOUGH TO READ

Castro is a working static site generator, not an attempt to replace civilization.

The implementation stays small enough to inspect, follow, and change.

You can trace the build pipeline. You can see where rendering happens. You can see when an island receives JavaScript.

The code is the explanation.

**[Read the Source]**

## THE FIVE-YEAR PLAN CONTINUES

**Static generation.**

**Preact components.**

**Selective hydration.**

**One person's framework, now publicly documented.**
```

---

## 7. Footer / CTA

### Opus 4.6 (High)

```markdown
**Workers of the Web, Unite.**
**Seize the Means of Rendering.**

[GitHub]

_Built with Castro · The People's Framework_
```

### Opus 4.7 (Extra)

```markdown
**Workers of the Web, Unite!**
**Seize the Means of Rendering.**

[GitHub]

_Built with Castro | The People's Framework_
```

### Sonnet 4.6 (High)

```markdown
**Workers of the Web, Unite.**
**Seize the Means of Rendering.**

[GitHub]

_Built with Castro | The People's Framework_
```

### Opus 5 (High)

```markdown
**PROLETARIANS OF THE BUILD STEP, UNITE.**
**THE OUTPUT DIRECTORY BELONGS TO THE PEOPLE.**

[About] [GitHub]

_Built with Castro | The People's Framework_
```

### Opus 4.8 (High)

```markdown
**Workers of the Web, Unite.**
**Seize the Means of Rendering.**

[About] [GitHub]

_Built with Castro | The People's Framework_
```

### Sonnet 5 (Extra)

```markdown
**Workers of the Bundle, Unite!**
**You Have Nothing to Lose but Your Runtime Overhead.**

[About] [GitHub] [Manifesto]

_Built with Castro, by one person, on purpose | The People's SSG_
```

### Sonnet 5 (High)

```markdown
**Workers of the Framework, Unite!**
**You Have Nothing to Lose But Your Bundle Size.**

[About] [GitHub]

_Built with Castro, alone, on purpose | The People's Framework_
```

### ChatGPT (Think)

```markdown
**Workers of the Web, Unite!**

**Seize the Means of Rendering.**

[Docs] [GitHub]

_Built with Castro | The People's Framework_
```

### Gemini 3.6 Flash (Extended Thinking)

```markdown
**WORKERS OF THE WEB, UNITE!**
**SEIZE THE MEANS OF RENDERING.**

[GitHub] [Documentation] [Source Code]

_Built with Castro | The People's Framework_
```

### Gemini 3.1 Pro (Extended Thinking)

```markdown
**Workers of the Web, Unite!**

**Seize the Means of Rendering.**

[About] [GitHub]

_Built with Castro | The People's Framework_
```

**Quick scan — footer tagline variants:** most reuse "Workers of the Web, Unite / Seize the Means of Rendering" verbatim; Opus 5, Sonnet 5 (Extra), and Sonnet 5 (High) each wrote a bespoke second line tied to their own demo concept (output directory, runtime overhead, bundle size).

---

## 8. Island Example Replacement Note

The one section present, in some form, in every response — each model's pitch for replacing the original three demo islands (PropagandaRadio / FiveYearPlan / Redactor).

### Opus 4.6 (High)

```markdown
**Island example note:** Replace the existing demos with **Classified Dossier** — a field report with data fields rendered as [REDACTED] bars in static HTML. On hydration, hover/click lifts the redaction and reveals the text underneath; a classification stamp transitions from CLASSIFIED to DECLASSIFIED. The metaphor maps structurally rather than decoratively: the content is already there (server-rendered), hydration is the clearance to interact with it. The three precedents dress unrelated widgets in Soviet clothes; this one makes the hydration event itself the punchline.
```

### Opus 4.7 (Extra)

```markdown
**Replacement island example:** a small **Dispatch** card — headline, one-line bulletin, and a "Next" control — one instance per directive, each cycling through real satirical bulletins. Better than PropagandaRadio / FiveYearPlan / Redactor because the joke sits in text that reads at a glance rather than in an interactive toy whose payload only lands after several clicks, and because a card-shaped artifact justifies its own existence on the page instead of announcing itself as a demo.
```

### Sonnet 4.6 (High)

```markdown
**Island demo note:** Replace PropagandaRadio / FiveYearPlan / Redactor with a single component called **`CentralCommittee`** — a live build-stats panel that "reports" Castro's own last build: pages rendered, islands hydrated by directive, total JS shipped. Real numbers, state-bureaucracy framing. Better fit than the three precedents because it's about the tool itself (self-aware, not decorative), the data is always true (no confected scenario), and the joke is the same one the page is making — a planning apparatus applied to something one person built in an afternoon.
```

### Opus 5 (High)

```markdown
**Note on the island example — `LabourRecord`:** a personnel card showing the component's own status (`ON THE ROSTER — NOT YET REPORTED` before hydration; on hydration it stamps the time since page load and the bytes delivered, and enables a `REPORT FOR DUTY` counter button). PropagandaRadio, FiveYearPlan and Redactor are satirical toys bolted onto behaviour that has nothing to do with hydration — the joke and the demonstration run on separate tracks. Here the card's content _is_ the hydration event, so the bureaucratic frame and the technical thing being shown are the same object, and the difference between the four directives is visible on the page instead of in the Network tab.
```

### Opus 4.8 (High)

```markdown
Island example note: I'd replace the counter with **Redactor** as the primary live demo — it's the only one of the three precedents where the interaction _is_ the joke rather than decoration around it. A counter proves hydration happened; Redactor proves it while also demonstrating the payload (toggling a field report from grim reality to "HISTORIC SURPLUS" is a click that visibly changes state, which is exactly what hydration buys you). PropagandaRadio is a passive ticker that could run on a `setInterval` with no hydration at all, so it doesn't illustrate the point; FiveYearPlan is a counter in a costume. Keep plain counters only in the three directive cards, where you _want_ the interaction stripped to nothing so the directive timing is the visible variable.
```

### Sonnet 5 (Extra)

```markdown
**Note on the live demo:** none of the three precedents (ticker, progress-toy, censorship-toggle) are really about _hydration_ — they're generic interactive widgets that happen to sit inside an island. A better fit: **`CensusForm`** — a form that "recounts" its own submissions live. Each time you click submit, the tally increments and the button's label changes (`SUBMIT` → `SUBMITTED` → `RECOUNTING` → `SUBMIT AGAIN, FOR ACCURACY`), while a counter below reads `OFFICIAL TALLY: {n}` no matter how many times you actually clicked. It's funny specifically because the _joke_ (results are predetermined regardless of input) is demonstrated by the _mechanism_ (client-side state updating instantly) — so watching the island hydrate live is the punchline, not just the backdrop for one. Ship three of these side by side, one per directive, so the directive itself is the visible variable: the `no:pasaran` one doesn't count anything at all (it's static — clicking does nothing, which is the point), the `lenin:awake` one counts from the moment the page loads, and the `comrade:visible` one only starts counting once scrolled into view.
```

### Sonnet 5 (High)

```markdown
**Note on the demo:** PropagandaRadio and FiveYearPlan are decoration — clicking them doesn't demonstrate anything about Castro, it just proves a click handler works. Redactor gets closer (the toggle _shows_ a mechanism) but the mechanism it shows isn't Castro's. A build-log demo that visibly shrinks its own bundle size as islands opt out of hydration ties the joke directly to the thing being sold: the state revising its own numbers downward is funny, and here the number is real and the revision is the actual pitch.
```

### ChatGPT (Think)

```markdown
**Replacement island example:** Use a tiny **interactive field report**: a static report rendered in full, with one control that changes a single value and marks the report "APPROVED." It demonstrates the actual point of an island—mostly static HTML with one small interactive boundary—without turning the demo into a generic counter or a separate comedy toy.
```

### Gemini 3.6 Flash (Extended Thinking)

```markdown
Note on replacement island example: The `BureaucraticPermit` demo replaces generic counters by visually demonstrating `no:pasaran` static rendering (a form with permanently disabled client-side state mutation), creating a memorable satirical event while accurately proving zero JS load.
```

### Gemini 3.1 Pro (Extended Thinking)

```markdown
**Replacement Island Demo: "The Bureau of Redundant Frameworks"**
A click-to-generate component that outputs randomly named JavaScript frameworks (e.g., "Proletariat.js", "ReduxGrad") alongside the terminal output "1,350 lines successfully generated by LLM" — this replaces the previous island iterations because it turns the page's core self-irony (that personal frameworks are now trivially easy to mass-produce) into the interactive event itself, functionally serving the message rather than just applying a generic Soviet coat of paint.
```

**Quick scan — replacement concepts proposed:**

| Model            | Replacement concept            | Core mechanic                                                     |
| ---------------- | ------------------------------ | ----------------------------------------------------------------- |
| Opus 4.6         | Classified Dossier             | redaction lifts on hydration, stamp flips CLASSIFIED→DECLASSIFIED |
| Opus 4.7         | Dispatch                       | cycling bulletin card, one per directive                          |
| Sonnet 4.6       | CentralCommittee               | live real build-stats panel                                       |
| Opus 5           | LabourRecord                   | personnel card stamps time/bytes on hydration                     |
| Opus 4.8         | Redactor (kept)                | field-report toggle, reused from original three                   |
| Sonnet 5 (Extra) | CensusForm                     | tally always shows a fixed "official" count regardless of clicks  |
| Sonnet 5 (High)  | Build-log demo                 | bundle size revises downward live as islands opt out              |
| ChatGPT          | Interactive field report       | one control flips a value, marks "APPROVED"                       |
| Gemini 3.6 Flash | BureaucraticPermit             | disabled submit button, static demo of `no:pasaran`               |
| Gemini 3.1 Pro   | Bureau of Redundant Frameworks | click-to-generate fake framework names                            |

---

## 9. Stray Text

### Sonnet 5 (Extra)

Leaked planning text at the very top of the response, before the actual page content begins:

```markdown
Good, that confirms the project context. Now let me write the skeleton.
```

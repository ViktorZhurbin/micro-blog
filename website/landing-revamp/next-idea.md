I read through all five files — the voice rules, the era history, and the current skeleton. Let me check what's in the skills directory before I write anything out.No markdown skill here, so straight to the copy.The through-line I settled on: headers carry the joke, body prose informs. That's what made era 1 work, and it means you can go fully committed in the frame without the page ever getting harder to read.

Four things worth arguing about:

**The self-irony is already overdone, not underdone.** Count the deflations in the current skeleton and the earlier draft: "Possibly overplanned," "The code compiles," the `no:pasaran` aside, "not an attempt to replace civilization." Each is funny alone. Stacked, they read as pre-emptive apology — the page never asserts anything, so there's nothing for the joke to sit on. I kept two (the quote line, the `no:pasaran` aside) and cut the rest. The Self-Criticism section is where honesty belongs, and it's more effective for being the only place.

**The LLM line shouldn't be the tagline.** "Built with an LLM. Argued with it for three months" is your best sentence, but as a hero it opens on process rather than product, and it's out of register — the page would announce itself as a Soviet joke one line later, from a standing start. It's the thesis of Self-Criticism instead. Trade-off: it's the line most likely to get you attention on HN, so if reach matters more than coherence, move it up. Alternate is in the file.

**You have a developer landing page with no code on it.** This is the bigger gap than anything about voice. The page claims readability three times and never shows a line. Six lines under "The Means of Production" would do more work than the entire Production Cycle section. I put a placeholder in — substitute the real directive syntax, I was guessing.

**The directives promise three, the demo shows one.** Your earlier note picked `LabourRecord` (one per directive, each reporting its own hydration) precisely because it makes the difference visible on the page rather than in the Network tab. The single `FiveYearPlan` island demonstrates one third of what the section above it just described. Not relitigating the decision, but the copy can't paper over it — the demo caption is doing what it can.

Also restored the per-directive slogans from era 1. The "one joke maximum" rule in voice.md is per error message; on a landing page, a consistent slogan device isn't accumulation, it's a pattern.

---

# Castro — landing copy, revision

Working principle throughout: **headers and proper nouns carry the joke, body prose
stays plain and technical.** That's era 1's structure, which is why era 1 could be
fully committed without becoming unreadable. The commitment lives in the frame, not
in the sentences that have to inform.

---

## The page

````md
# CASTRO

### My Five-Year Plan to Build a Framework Over a Weekend

Bun, Preact, ~1,350 lines.
Delivered in three months, ahead of schedule.

_"The satire is optional. The code compiles."_

**[Get Started]** **[Read the Source]**

---

## The Means of Production

A static site generator built on Bun and Preact. JSX and Markdown go in, static
HTML comes out. Interactive islands where you ask for them, and nowhere else.

Configuration is optional. There is no plugin ecosystem. There is nothing to
learn beyond the directives below.

```jsx
// pages/index.jsx — PLACEHOLDER, substitute real syntax
import Counter from "../islands/Counter.jsx";

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Counter comrade:visible />
    </main>
  );
}
````

---

## The Standing Directives

Each island carries one directive. It decides when — and whether — that island's
JavaScript reaches the browser.

**comrade:visible** `DEFAULT`
_"Only work when the people are watching."_
Hydrates when the island scrolls into view. Right for most islands.

**comrade:eager**
_"Some comrades wait. This one doesn't."_
Hydrates as soon as the element mounts. For above-the-fold UI that can't wait.

**comrade:patient**
_"Takes the shift nobody else wants."_
Hydrates once the browser goes idle. For important UI that isn't on the
critical path.

> There was a fourth, `no:pasaran`. It didn't hydrate anything, which was the
> point, which was also why it isn't here.

---

## The Production Cycle _(raised surface)_

**01 — COLLECTION**
Castro walks the pages directory, resolving each file to a route.

**02 — RENDERING**
JSX and Markdown render to static HTML at build time. Islands are wrapped in a
`<castro-island>` marker. Pages with no islands ship no hydration runtime at
all — the cost only exists where you use it.

**03 — HYDRATION**
HTML reaches the browser and is readable immediately. Each `<castro-island>`
then loads its bundle according to its directive — or never does.

---

## Demonstration

One island, `comrade:visible`. Nothing was downloaded for this card until you
scrolled to it. Open the Network tab and reload if you'd like to watch it
not happen.

_[FiveYearPlan island demo, comrade:visible]_

---

## Self-Criticism _(raised surface)_

Castro began as a transcription error. Dictation software heard "Astro" and
produced "Castro," and the rest of the project followed from the joke.

Anyone can build a framework now. That is roughly the point, and it isn't the
whole story. A language model will write you a static site generator this
afternoon. It will also write you three more abstractions than you need, and it
will keep doing that indefinitely. Most of the work was removing things. The
~1,350 lines are what survived.

The existing tools are good. Astro carries more than I wanted to carry.
Eleventy asked me to assemble more than I wanted to assemble. I wanted JSX and
Markdown in, static HTML out, islands only where I ask for them. That is a
small want, and this is a small thing that satisfies it.

---

## A Framework Small Enough to Read _(raised surface)_

About 1,350 lines of commented source: dev server, file-based routing,
structured errors, the build pipeline, the hydration runtime. Each module is
meant to fit in your head.

You can trace a page from file to route to HTML. You can see exactly where an
island's JavaScript gets requested. When something is wrong, you can find it.

**[Read the Source]**

---

**Workers of the Web, Unite.**
**Seize the Means of Rendering.**

_Built with Castro | The People's Framework_ · [GitHub]

```

---

## Alternates

### Hero tagline

1. **My Five-Year Plan to Build a Framework Over a Weekend** — recommended.
   Grand frame, small event, and the sub-line lands the real number underneath it.
2. **Built with an LLM. Argued with it for three months.** — the best single line
   you have, but out of register and it opens the page on process rather than
   product. Better deployed inside Self-Criticism (see below).
3. **A Weekend Project, Three Months In** — dry and honest, no ideological frame.
   Works only if the whole page drops the Soviet register, which would be a
   different rewrite.

### Hero sub-line

- `Delivered in three months, ahead of schedule.` — recommended; the Party's
  report contradicting the Plan is the joke.
- `The weekend ran long.` — quieter, less structured.
- `Bun, Preact, ~1,350 lines. Possibly overplanned.` — current version. See notes
  on deflation stacking.

### Quote line

- `"The satire is optional. The code compiles."` — current. Deadpan minimum claim.
- `"The satire is optional. The code is not."` — asserts something instead of
  shrugging. Use this one if you keep other deflating lines elsewhere.

### Self-Criticism opener

If you want line 2 above in the page, it replaces the first paragraph's function:

> **Built with an LLM. Argued with it for three months.**
>
> Castro began as a transcription error — dictation software heard "Astro" and
> produced "Castro," and the rest followed from the joke. Anyone can build a
> framework now; that is roughly the point, and it isn't the whole story. [...]

### Footer

- Both slogans stacked — recommended, and it calls back to "The Means of
  Production" as a section header.
- `Workers of the Web, Unite.` alone — current, less committed.
```

import "./MeansOfProduction.css";
import { Section } from "./Section";

const directives = [
  {
    name: "comrade:visible",
    isDefault: true,
    behaviour: "Hydrates when the island scrolls into view. Right for most islands.",
  },
  {
    name: "comrade:patient",
    behaviour:
      "Hydrates once the browser goes idle. For important UI that isn't on the critical path.",
  },
  {
    name: "comrade:eager",
    behaviour: "Hydrates as soon as the element mounts. For above-the-fold UI that can't wait.",
  },
];

export function MeansOfProduction() {
  return (
    <Section title="The Means of Production">
      <p>
        A static site generator built on Bun and Preact. JSX and Markdown go in, static HTML comes
        out. Interactive islands where you need them.
      </p>
      <p>
        Each island carries a directive. It decides when — and whether — that island's JavaScript
        reaches the browser.
      </p>

      <dl class="directives">
        {directives.map(({ name, behaviour, isDefault }) => (
          <div key={name}>
            <dt>
              <code>{name}</code>
              {isDefault && <span class="directives-default">DEFAULT</span>}
            </dt>
            <dd>{behaviour}</dd>
          </div>
        ))}
      </dl>

      <aside class="directives-aside">
        There was a fourth, <code>no:pasaran</code>. It didn't hydrate anything, which was the
        point, which was also why it isn't here.
      </aside>
    </Section>
  );
}

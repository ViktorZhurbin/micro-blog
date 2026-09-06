import "./ProductionCycle.css";
import { Section } from "./Section";

const items = [
  {
    title: "COLLECTION",
    description: <>Castro walks the pages directory, resolving each file to a route.</>,
  },
  {
    title: "RENDERING",
    description: (
      <>
        JSX and Markdown render to static HTML at build time. Islands are wrapped in a{" "}
        <code>{"<castro-island>"}</code> marker. Pages with no islands ship no hydration runtime at
        all — the cost only exists where you use it.
      </>
    ),
  },
  {
    title: "HYDRATION",
    description: (
      <>
        HTML reaches the browser and is readable immediately. Each <code>{"<castro-island>"}</code>{" "}
        then loads its bundle according to its directive — or never does.
      </>
    ),
  },
];

export function ProductionCycle() {
  return (
    <Section title="The Production Cycle" raised>
      <div class="production-cycle-list">
        {items.map((item, i) => (
          <div class="production-cycle-item" key={item.title}>
            <p class="production-cycle-num">{String(i + 1).padStart(2, "0")}</p>
            <div>
              <p class="production-cycle-item-title">{item.title}</p>
              <p class="production-cycle-item-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

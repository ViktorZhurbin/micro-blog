import { Section } from "./Section";

export function SmallEnoughToRead() {
  return (
    <Section title="A Framework Small Enough to Read" raised>
      <p>
        The core is about 1,350 lines of commented source — dev server, structured errors,
        file-based routing, and the rest of it. Small enough to inspect, follow, and change.
      </p>
      <p>
        You can trace the build pipeline. You can see where rendering happens. You can see when an
        island receives JavaScript.
      </p>
      <a
        href="https://github.com/ViktorZhurbin/castro"
        target="_blank"
        rel="noopener"
        role="button"
      >
        READ THE SOURCE
      </a>
    </Section>
  );
}

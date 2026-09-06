import FiveYearPlan from "@/components/islandExamples/FiveYearPlan.island";

import { Section } from "./Section";

import "./Demonstration.css";

export function Demonstration() {
  return (
    <Section title="Demonstration">
      <p>JS loaded when the card scrolled into view. Check with Network tab open</p>
      {/* The <castro-island> host is inline by default; this gives it a block
          box so the card can carry margin like any other section element. */}
      <div class="demonstration-card">
        <FiveYearPlan comrade:visible />
      </div>
    </Section>
  );
}

import "./Hero.css";
import { StarIcon } from "@/components/icons/StarIcon";

import { CTAButtons } from "./CTAButtons";

export function Hero() {
  return (
    <div class="hero">
      <div class="container hero-content">
        <div>
          <StarIcon />
        </div>
        <h1>CASTRO</h1>

        <hr class="hero-hr" />

        <h2>A Five-Year Plan to Understand One's Own Framework</h2>
        <p class="hero-subtitle">Bun, Preact. ~1350 lines. Possibly overplanned.</p>
        <p class="hero-quote">The satire is optional. The code compiles.</p>
        <CTAButtons />
      </div>
    </div>
  );
}

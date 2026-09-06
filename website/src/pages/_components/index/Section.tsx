import type { ComponentChildren } from "preact";

import "./Section.css";
import { cx } from "@/helpers/css";

/**
 * One landing-page section: the shared measure, vertical rhythm, and title.
 * Every section on the page goes through here so the left edge stays put as
 * the reader scrolls — sections used to carry their own container width, and
 * the text stepped in and out four times down the page.
 *
 * `raised` puts the section on the secondary surface. The page alternates it
 * so consecutive sections separate without a rule between them.
 */
export function Section(props: { title: string; raised?: boolean; children: ComponentChildren }) {
  return (
    <section class={cx(props.raised ? "section section-raised" : "section")}>
      <div class="section-body">
        <h2 class="section-title">{props.title}</h2>
        {props.children}
      </div>
    </section>
  );
}

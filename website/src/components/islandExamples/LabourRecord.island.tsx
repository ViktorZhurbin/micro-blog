import { useEffect, useRef, useState } from "preact/hooks";

import "./LabourRecord.css";

/**
 * Personnel card that reports its own hydration.
 *
 * Everything below the status line is absent from the build output: the SSR
 * pass renders `ON THE ROSTER`, and the stamp and the button exist only once
 * the island's bundle arrives. That gap is the demonstration — a reader can
 * check it in view-source, which no number on the card could prove.
 *
 * The directive is read off the host element and the elapsed time off
 * `performance.now()` at mount, so the card cannot report a hydration that
 * didn't happen.
 */
export default function LabourRecord() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [report, setReport] = useState<{ directive: string; elapsed: string } | null>(null);
  const [reports, setReports] = useState(0);

  useEffect(() => {
    const host = rootRef.current?.closest("castro-island");

    setReport({
      directive: host?.getAttribute("directive") ?? "unknown",
      elapsed: `${(performance.now() / 1000).toFixed(1)}s`,
    });
  }, []);

  return (
    <div class="labour-record" ref={rootRef}>
      <div class="labour-record-header">
        <span>PERSONNEL FILE</span>
        <code>{report?.directive ?? "—"}</code>
      </div>

      {report ? (
        <>
          <p class="labour-record-status labour-record-status-active">ON DUTY</p>
          <p class="labour-record-stamp">Reported {report.elapsed} after the page opened.</p>
          <button class="primary" onClick={() => setReports((r) => r + 1)}>
            REPORT FOR DUTY — {reports}×
          </button>
        </>
      ) : (
        <p class="labour-record-status">ON THE ROSTER — NOT YET REPORTED</p>
      )}
    </div>
  );
}

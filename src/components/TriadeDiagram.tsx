import type {ReactNode} from 'react';
import styles from './TriadeDiagram.module.css';

/**
 * The core visual metaphor of the theory:
 * an invariant centre (0) from which two perspectives (+1 / -1) project.
 */
export default function TriadeDiagram(): ReactNode {
  return (
    <figure className={styles.figure} aria-labelledby="triade-caption">
      <svg
        className={styles.svg}
        viewBox="0 0 440 372"
        role="img"
        aria-label="Diagramm: invariantes Zentrum 0 mit den Projektionen +1 und −1">
        <defs>
          <linearGradient id="triade-line" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--teal-400)" />
            <stop offset="1" stopColor="var(--teal-700)" />
          </linearGradient>
          <radialGradient id="triade-halo" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="var(--teal-300)" stopOpacity="0.35" />
            <stop offset="1" stopColor="var(--teal-300)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="220" cy="150" r="118" fill="url(#triade-halo)" />
        <circle
          cx="220"
          cy="150"
          r="96"
          fill="none"
          stroke="var(--teal-300)"
          strokeOpacity="0.4"
          strokeDasharray="2 6"
        />

        <line
          x1="220"
          y1="164"
          x2="105"
          y2="300"
          stroke="url(#triade-line)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="220"
          y1="164"
          x2="335"
          y2="300"
          stroke="url(#triade-line)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="105"
          y1="300"
          x2="335"
          y2="300"
          stroke="var(--gold)"
          strokeWidth="2"
          strokeDasharray="5 7"
          strokeLinecap="round"
          opacity="0.75"
        />

        <circle cx="220" cy="150" r="35" fill="var(--teal-700)" />
        <circle cx="220" cy="150" r="33" fill="none" stroke="var(--paper)" strokeOpacity="0.25" />
        <text x="220" y="161" className={styles.zero}>
          0
        </text>

        <circle cx="105" cy="300" r="27" fill="var(--paper-raised)" stroke="var(--teal-500)" strokeWidth="2.5" />
        <text x="105" y="309" className={styles.pole}>
          −1
        </text>

        <circle cx="335" cy="300" r="27" fill="var(--paper-raised)" stroke="var(--teal-500)" strokeWidth="2.5" />
        <text x="335" y="309" className={styles.pole}>
          +1
        </text>

        <text x="220" y="90" className={styles.centerLabel}>
          invarianter Kern
        </text>
        <text x="66" y="352" className={styles.small}>
          Projektion
        </text>
        <text x="306" y="352" className={styles.small}>
          Projektion
        </text>
      </svg>
      <figcaption id="triade-caption" className={styles.caption}>
        Ein Zentrum, zwei Perspektiven: <strong>0</strong> bleibt unverändert,
        während <strong>+1</strong> und <strong>−1</strong> gültige, aber
        standortabhängige Lesarten desselben Kerns sind.
      </figcaption>
    </figure>
  );
}

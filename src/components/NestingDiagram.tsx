import type {ReactNode} from 'react';
import styles from './NestingDiagram.module.css';

/**
 * Visualises the two-level nesting: an ontological core layer and an
 * epistemic evaluation layer that rides on top of it.
 */
export default function NestingDiagram(): ReactNode {
  return (
    <div className={styles.wrapper} role="img" aria-label="Zweistufige Verschachtelung: Kernebene und Wahrnehmungsebene">
      <div className={styles.layer}>
        <span className={styles.layerLabel}>Ebene 2 · Wahrnehmung</span>
        <div className={styles.pills}>
          <span className={`${styles.pill} ${styles.plus}`}>
            +1 <small>gut / bejahend</small>
          </span>
          <span className={`${styles.pill} ${styles.minus}`}>
            −1 <small>schlecht / verneinend</small>
          </span>
        </div>
      </div>

      <div className={styles.bracket} aria-hidden="true">
        <span />
      </div>

      <div className={`${styles.layer} ${styles.coreLayer}`}>
        <span className={styles.layerLabel}>Ebene 1 · Kern</span>
        <div className={styles.pills}>
          <span className={`${styles.pill} ${styles.core}`}>
            0 <small>invariante Grundwahrheit</small>
          </span>
        </div>
      </div>

      <p className={styles.note}>
        Die Projektionen dürfen den Kern <em>lesen</em>, nicht <em>überschreiben</em>.
      </p>
    </div>
  );
}

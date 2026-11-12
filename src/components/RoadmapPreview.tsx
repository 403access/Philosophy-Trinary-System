import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './RoadmapPreview.module.css';

type Phase = {
  id: string;
  label: string;
  status: 'done' | 'active' | 'next' | 'later';
  title: string;
  body: string;
};

const phases: Phase[] = [
  {
    id: 'P1',
    label: 'Phase 1',
    status: 'done',
    title: 'Axiomatisierung',
    body: 'Kern, Projektionen und Invarianz-Operator formal definieren.',
  },
  {
    id: 'P2',
    label: 'Phase 2',
    status: 'done',
    title: 'Stand der Forschung',
    body: 'Abgrenzung zu Łukasiewicz, Supervaluationismus, Bilateralismus, Mereologie.',
  },
  {
    id: 'P3',
    label: 'Phase 3',
    status: 'active',
    title: 'Proof of Concept',
    body: 'Logischer Beweis und lauffähiger TypeScript-Prototyp.',
  },
  {
    id: 'P4',
    label: 'Phase 4',
    status: 'next',
    title: 'Paper',
    body: 'Interdisziplinärer Entwurf mit Limitationen und Falsifikationskriterien.',
  },
  {
    id: 'P5',
    label: 'Phase 5',
    status: 'later',
    title: 'Peer Review',
    body: 'Stresstest, Einreichung und offene Replikation.',
  },
];

export default function RoadmapPreview(): ReactNode {
  return (
    <section className={`mp-section mp-section--sunken ${styles.section}`} id="roadmap">
      <div className="mp-container">
        <div className={styles.head}>
          <div>
            <span className="mp-kicker">Roadmap</span>
            <h2 className={`mp-section-title ${styles.title}`}>
              Vom Axiom zum Paper.
            </h2>
          </div>
          <Link className="button button--secondary" to="/roadmap">
            Vollständige Roadmap →
          </Link>
        </div>

        <ol className={styles.track}>
          {phases.map((phase) => (
            <li key={phase.id} className={`${styles.item} ${styles[phase.status]}`}>
              <div className={styles.marker} aria-hidden="true">
                <span />
              </div>
              <div className={styles.content}>
                <span className={styles.label}>{phase.label}</span>
                <h3 className={styles.itemTitle}>{phase.title}</h3>
                <p className={styles.itemBody}>{phase.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

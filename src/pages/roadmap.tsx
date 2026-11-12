import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './roadmap.module.css';

type Status = 'done' | 'active' | 'next' | 'later';

type Phase = {
  id: string;
  title: string;
  period: string;
  status: Status;
  summary: string;
  deliverables: {label: string; done: boolean}[];
  link: string;
};

const statusLabel: Record<Status, string> = {
  done: 'Abgeschlossen',
  active: 'In Arbeit',
  next: 'Geplant',
  later: 'Später',
};

const phases: Phase[] = [
  {
    id: 'P1',
    title: 'Axiomatisierung',
    period: '2026 Q4',
    status: 'done',
    summary:
      'Träger, Kernrahmen, Projektionen und die Invarianz-Bedingung werden formal definiert.',
    deliverables: [
      {label: 'Träger T = {−1, 0, +1}', done: true},
      {label: 'Kernrahmen ⟨K, I⟩', done: true},
      {label: 'Admissibilitätsbedingung', done: true},
      {label: 'Nicht-Kollaps-Satz (informell)', done: true},
    ],
    link: '/docs/trinaeritaet/formale-definition',
  },
  {
    id: 'P2',
    title: 'Stand der Forschung',
    period: '2026 Q4',
    status: 'done',
    summary:
      'Abgrenzung zu Mereologie, Supervaluationismus, Bilateralismus, mehrwertigen Logiken und relationalem Realismus.',
    deliverables: [
      {label: 'Vergleich mit 5 Nachbaransätzen', done: true},
      {label: 'USP-Definition', done: true},
      {label: 'Arbeitsbibliographie', done: true},
    ],
    link: '/docs/trinaeritaet/verwandte-konzepte',
  },
  {
    id: 'P3',
    title: 'Proof of Concept',
    period: '2027 Q1',
    status: 'active',
    summary:
      'Ein lauffähiger Prototyp und eine formale Konsistenzprüfung zeigen, dass die Struktur trägt.',
    deliverables: [
      {label: 'TypeScript-Prototyp', done: true},
      {label: 'Rust-Prototyp', done: false},
      {label: 'Lean-Formalisierung T1–T6', done: false},
      {label: 'Fallstudie verteiltes System', done: false},
    ],
    link: '/docs/implementierung/architektur',
  },
  {
    id: 'P4',
    title: 'Paper',
    period: '2027 Q2',
    status: 'next',
    summary:
      'Die Theorie wird als interdisziplinäre wissenschaftliche Arbeit verdichtet.',
    deliverables: [
      {label: 'Abstract & Gliederung', done: true},
      {label: 'Erste Vollfassung', done: false},
      {label: 'Interne Reviews', done: false},
      {label: 'Einreichung', done: false},
    ],
    link: '/docs/forschung/paper-outline',
  },
  {
    id: 'P5',
    title: 'Peer Review & Replikation',
    period: '2027 Q4 – 2028',
    status: 'later',
    summary:
      'Externe Prüfung, Revision und offene Replikation. Die Theorie wird angreifbar.',
    deliverables: [
      {label: 'Journal-Einreichung', done: false},
      {label: 'Response to Reviewers', done: false},
      {label: 'Open-Source-Release', done: false},
      {label: 'Replikationsstudie', done: false},
    ],
    link: '/docs/forschung/falsifizierbarkeit',
  },
];

function StatusBadge({status}: {status: Status}) {
  return (
    <span className={`${styles.badge} ${styles[status]}`}>
      {statusLabel[status]}
    </span>
  );
}

export default function RoadmapPage(): ReactNode {
  return (
    <Layout
      title="Roadmap"
      description="Der Weg von der Axiomatisierung zur publizierten, geprüften Theorie der Trinärität.">
      <header className={styles.hero}>
        <div className="mp-container">
          <span className="mp-kicker">Forschungsprogramm</span>
          <Heading as="h1" className={styles.title}>
            Roadmap
          </Heading>
          <p className={styles.lede}>
            Von der formalen Definition über den Proof of Concept bis zur
            Peer Review. Fünf Phasen, klare Deliverables, ein offenes Ergebnis.
          </p>
          <div className={styles.legend}>
            <span className={`${styles.dot} ${styles.done}`} /> Abgeschlossen
            <span className={`${styles.dot} ${styles.active}`} /> In Arbeit
            <span className={`${styles.dot} ${styles.next}`} /> Geplant
            <span className={`${styles.dot} ${styles.later}`} /> Später
          </div>
        </div>
      </header>

      <main className="mp-section">
        <div className="mp-container">
          <ol className={styles.timeline}>
            {phases.map((phase) => (
              <li key={phase.id} className={styles.item}>
                <div className={styles.rail} aria-hidden="true">
                  <span className={`${styles.node} ${styles[phase.status]}`} />
                </div>
                <div className={styles.card}>
                  <div className={styles.cardHead}>
                    <div>
                      <span className={styles.phaseId}>
                        {phase.id} · {phase.period}
                      </span>
                      <h2 className={styles.phaseTitle}>{phase.title}</h2>
                    </div>
                    <StatusBadge status={phase.status} />
                  </div>
                  <p className={styles.summary}>{phase.summary}</p>
                  <ul className={styles.deliverables}>
                    {phase.deliverables.map((d) => (
                      <li key={d.label} className={d.done ? styles.ok : ''}>
                        <span className={styles.check}>{d.done ? '✓' : '○'}</span>
                        {d.label}
                      </li>
                    ))}
                  </ul>
                  <Link className={styles.link} to={phase.link}>
                    Kapitel öffnen →
                  </Link>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.note}>
            <h2>Was die Roadmap nicht verspricht</h2>
            <p>
              Einen Erfolg. Die Theorie kann an der Invariantenwahl, an der
              Formalisierung oder an fehlender empirischer Evidenz scheitern.
              Genau das macht sie zu einem wissenschaftlichen Programm.
            </p>
            <div className={styles.noteActions}>
              <Link className="button button--secondary" to="/docs/forschung/falsifizierbarkeit">
                Falsifikationskriterien
              </Link>
              <Link className="button button--primary" to="/paper">
                Paper &amp; PDF
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

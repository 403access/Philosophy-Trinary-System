import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

type Pillar = {
  glyph: string;
  title: string;
  body: string;
  to: string;
  tag: string;
};

const pillars: Pillar[] = [
  {
    glyph: '∂',
    tag: 'Ontologie',
    title: 'Formale Ontologie & Mereologie',
    body:
      'Existenz, Identität und die Teil-Ganzes-Relation als axiomatisches System — ohne den Stufenaufstieg der Mengenlehre.',
    to: '/docs/grundlagen/mereologie',
  },
  {
    glyph: '◇',
    tag: 'Modalität',
    title: 'Modale Logik & mögliche Welten',
    body:
      'Notwendigkeit, Möglichkeit, Wissen und Pflicht über Kripke-Semantiken — präzise statt metaphorisch.',
    to: '/docs/grundlagen/modalitaet',
  },
  {
    glyph: '∫',
    tag: 'Epistemologie',
    title: 'Wahrscheinlichkeit & Bayesianismus',
    body:
      'Überzeugungsgrade als Credences, rationaler Glaubenswechsel und Konditionalisierung als formales Modell.',
    to: '/docs/grundlagen/wahrscheinlichkeit',
  },
  {
    glyph: '⚖',
    tag: 'Rationalität',
    title: 'Entscheidungs- & Spieltheorie',
    body:
      'Rationales Handeln, kollektive Dilemmata und soziale Wahl — bis zu Arrows Unmöglichkeitstheorem.',
    to: '/docs/grundlagen/entscheidung-spieltheorie',
  },
  {
    glyph: '⧗',
    tag: 'Struktur',
    title: 'Zeit, Raum & Prozess',
    body:
      'Topologische und algebraische Modelle für Zeitpunkte, Ereignisse und Kontinuen.',
    to: '/docs/grundlagen/zeit-raum-prozess',
  },
  {
    glyph: '⊕',
    tag: 'Trinärität',
    title: 'Die Trinäritäts-Theorie',
    body:
      'Ein invarianter Kern und zwei koexistierende Projektionen: die Logik der Perspektive, formal gefasst.',
    to: '/docs/trinaeritaet/einfuehrung',
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={`mp-section ${styles.section}`} id="felder">
      <div className="mp-container">
        <div className={styles.head}>
          <span className="mp-kicker">Methodische Säulen</span>
          <h2 className={`mp-section-title ${styles.title}`}>
            Sechs Felder, ein Anspruch: Präzision.
          </h2>
          <p className="mp-section-lede">
            Mathematische Philosophie ersetzt sprachliche Intuition durch
            Strukturen, die auf Konsistenz, Entscheidbarkeit und formale
            Gültigkeit geprüft werden können.
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <Link key={pillar.title} to={pillar.to} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.glyph} aria-hidden="true">
                  {pillar.glyph}
                </span>
                <span className={styles.tag}>{pillar.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardBody}>{pillar.body}</p>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

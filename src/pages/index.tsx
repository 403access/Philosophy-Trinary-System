import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RoadmapPreview from '@site/src/components/RoadmapPreview';
import TriadeDiagram from '@site/src/components/TriadeDiagram';
import NestingDiagram from '@site/src/components/NestingDiagram';

import styles from './index.module.css';

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={clsx('mp-container', styles.heroInner)}>
        <div className={styles.heroCopy}>
          <span className="mp-kicker">Forschungsprogramm · Preprint v0.1</span>
          <Heading as="h1" className={styles.heroTitle}>
            Mathematische
            <br />
            <span className={styles.heroAccent}>Philosophie</span>
          </Heading>
          <p className={styles.heroLede}>
            Die Präzision der mathematischen Logik, angewandt auf die tiefen
            Fragen der Philosophie — und auf eine neue Theorie der{' '}
            <strong>Trinärität</strong>: ein invarianter Kern, zwei
            koexistierende Perspektiven.
          </p>
          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Dokumentation lesen
            </Link>
            <Link className="button button--secondary button--lg" to="/paper">
              Paper als PDF
            </Link>
          </div>
          <ul className={styles.heroMeta}>
            <li>
              <strong>6</strong> methodische Säulen
            </li>
            <li>
              <strong>30+</strong> Dokumente
            </li>
            <li>
              <strong>5</strong> Forschungsphasen
            </li>
            <li>
              <strong>offen</strong> &amp; replizierbar
            </li>
          </ul>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroCard}>
            <TriadeDiagram />
          </div>
        </div>
      </div>
    </header>
  );
}

function TheorySection() {
  return (
    <section className={clsx('mp-section', styles.theory)} id="theorie">
      <div className="mp-container">
        <div className={styles.theoryGrid}>
          <div className={styles.theoryCopy}>
            <span className="mp-kicker">Die Kernidee</span>
            <h2 className={clsx('mp-section-title', styles.theoryTitle)}>
              Ein Kern. Zwei Projektionen. Eine Invarianz.
            </h2>
            <p className={styles.theoryLede}>
              Klassische binäre Systeme kollabieren, sobald zwei Akteure
              denselben Sachverhalt gegensätzlich bewerten: Sie registrieren
              einen Widerspruch. Die Trinärität trennt deshalb{' '}
              <strong>Fakt</strong> und <strong>Bewertung</strong> auf zwei
              Ebenen.
            </p>
            <ul className={styles.theoryList}>
              <li>
                <span className={styles.bullet}>0</span>
                <div>
                  <strong>Der Kern.</strong> Eine invariante Grundwahrheit, die
                  nicht durch Perspektiven ersetzt, sondern nur gelesen wird.
                </div>
              </li>
              <li>
                <span className={styles.bullet}>±1</span>
                <div>
                  <strong>Die Projektionen.</strong> Zwei Wahrnehmungen — gut
                  oder schlecht — die beide gültig bleiben, solange sie den Kern
                  nicht verändern.
                </div>
              </li>
              <li>
                <span className={styles.bullet}>⊙</span>
                <div>
                  <strong>Die Invarianz.</strong> Ein Integritäts-Constraint, der
                  echte Faktenstreitigkeiten von bloßen Perspektivendifferenzen
                  trennt.
                </div>
              </li>
            </ul>
            <div className={styles.theoryActions}>
              <Link className="button button--primary" to="/docs/trinaeritaet/einfuehrung">
                Theorie erkunden
              </Link>
              <Link className="button button--outline" to="/docs/trinaeritaet/formale-definition">
                Formale Definition
              </Link>
            </div>
          </div>

          <div className={styles.theoryVisual}>
            <NestingDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

const applications = [
  {
    n: '01',
    title: 'Neuro-symbolische KI',
    body: 'Faktenwissen und normative Wertung getrennt halten — Urteilskraft statt Halluzination.',
    to: '/docs/anwendungen/neuro-symbolische-ki',
  },
  {
    n: '02',
    title: 'Verteilte Systeme',
    body: 'Lokale Sichten koexistieren, ohne den unveränderlichen Event-Log zu überschreiben.',
    to: '/docs/anwendungen/verteilte-systeme',
  },
  {
    n: '03',
    title: 'Recht & Mediation',
    body: 'Erst den Faktenkern festhalten, dann die Bewertungen als Projektionen verhandeln.',
    to: '/docs/anwendungen/recht-mediation',
  },
  {
    n: '04',
    title: 'Kognition',
    body: 'Ein Ereignis zugleich als schmerzhaft und wachstumsfördernd integrieren.',
    to: '/docs/anwendungen/kognition',
  },
];

function ApplicationsSection() {
  return (
    <section className={clsx('mp-section', styles.apps)} id="anwendungen">
      <div className="mp-container">
        <div className={styles.appsHead}>
          <span className="mp-kicker">Anwendungen</span>
          <h2 className={clsx('mp-section-title', styles.appsTitle)}>
            Wo die Trennung von Kern und Perspektive trägt.
          </h2>
        </div>
        <div className={styles.appsGrid}>
          {applications.map((app) => (
            <Link key={app.n} to={app.to} className={styles.appCard}>
              <span className={styles.appN}>{app.n}</span>
              <h3>{app.title}</h3>
              <p>{app.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PaperCta() {
  return (
    <section className={styles.paperSection}>
      <div className="mp-container">
        <div className={styles.paperCard}>
          <div className={styles.paperCopy}>
            <span className={styles.paperKicker}>Preprint · v0.1</span>
            <h2 className={styles.paperTitle}>
              Die Theorie als wissenschaftliche Arbeit.
            </h2>
            <p className={styles.paperLede}>
              Axiomatisierung, Stand der Forschung, Proof of Concept,
              Limitationen und Falsifikationskriterien — gesetzt für den Druck,
              optimiert für den Bildschirm.
            </p>
          </div>
          <div className={styles.paperActions}>
            <Link className="button button--primary button--lg" to="/paper">
              Paper öffnen
            </Link>
            <Link className="button button--secondary button--lg" to="/roadmap">
              Roadmap ansehen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Mathematische Philosophie & Trinärität"
      description={siteConfig.tagline}>
      <Hero />
      <HomepageFeatures />
      <TheorySection />
      <ApplicationsSection />
      <RoadmapPreview />
      <PaperCta />
    </Layout>
  );
}

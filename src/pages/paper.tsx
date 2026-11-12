import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './paper.module.css';

const contents = [
  {n: '1', title: 'Einleitung & Motivation', to: '/docs/intro'},
  {
    n: '2',
    title: 'Grundlagen der mathematischen Philosophie',
    to: '/docs/grundlagen/mathematische-philosophie',
  },
  {
    n: '3',
    title: 'Die Trinäritäts-Theorie',
    to: '/docs/trinaeritaet/einfuehrung',
  },
  {
    n: '4',
    title: 'Formale Definition',
    to: '/docs/trinaeritaet/formale-definition',
  },
  {
    n: '5',
    title: 'Die Invarianz-Bedingung',
    to: '/docs/trinaeritaet/invarianz',
  },
  {
    n: '6',
    title: 'Binäre Verschachtelung',
    to: '/docs/trinaeritaet/binaere-verschachtelung',
  },
  {
    n: '7',
    title: 'Mereologie & Trinärität',
    to: '/docs/trinaeritaet/mereologie-verbindung',
  },
  {
    n: '8',
    title: 'Verwandte Konzepte & Abgrenzung',
    to: '/docs/trinaeritaet/abgrenzung-usp',
  },
  {
    n: '9',
    title: 'Kritik & Grenzen',
    to: '/docs/trinaeritaet/kritik-grenzen',
  },
  {
    n: '10',
    title: 'Anwendungen',
    to: '/docs/anwendungen/ueberblick',
  },
  {
    n: '11',
    title: 'Forschungsprogramm & Falsifizierbarkeit',
    to: '/docs/forschung/forschungsprogramm',
  },
  {n: '12', title: 'Referenzen', to: '/docs/referenzen'},
];

const formats = [
  {
    tag: 'PDF',
    title: 'Druckfertiges Paper',
    body: 'A4, Serifensatz, akademische Ränder, KaTeX-Formeln. Optimiert für Lesbarkeit und Zitierbarkeit.',
    href: '/pdf/trinaeritaet-paper.pdf',
    cta: 'PDF herunterladen',
    accent: true,
  },
  {
    tag: 'HTML',
    title: 'Dokumentation',
    body: 'Die vollständige, verlinkte Fassung mit Navigation, Suche und Dark Mode.',
    href: '/docs/intro',
    cta: 'Online lesen',
  },
  {
    tag: 'MD',
    title: 'Markdown-Quelltext',
    body: 'Alle Kapitel als Markdown — für eigene Bearbeitung, Übersetzung oder Einreichung.',
    href: 'https://github.com/mathematische-philosophie/trinaeritaet',
    cta: 'Quelltext ansehen',
  },
  {
    tag: 'BIB',
    title: 'Zitationsvorlage',
    body: 'BibTeX-Eintrag für die Referenzverwaltung.',
    href: '#zitieren',
    cta: 'Zum BibTeX',
  },
];

function DownloadIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PaperPage(): ReactNode {
  return (
    <Layout
      title="Paper & PDF"
      description="Der Preprint zur Trinärität: Abstract, Inhaltsverzeichnis und alle Exportformate.">
      <header className={styles.hero}>
        <div className={clsx('mp-container', styles.heroInner)}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>Preprint · v0.1 · 2026</span>
            <Heading as="h1" className={styles.title}>
              Trinärität
            </Heading>
            <p className={styles.subtitle}>
              Ein invariantes Kernmodell koexistierender Perspektiven —
              formale Ontologie, epistemische Admissibilität und Anwendungen
              in neuro-symbolischen Systemen.
            </p>
            <div className={styles.actions}>
              <a
                className={clsx('button button--primary button--lg', styles.pdfButton)}
                href="/pdf/trinaeritaet-paper.pdf"
                download>
                <DownloadIcon />
                PDF herunterladen
              </a>
              <Link className="button button--secondary button--lg" to="/docs/intro">
                Online lesen
              </Link>
            </div>
            <dl className={styles.meta}>
              <div>
                <dt>Version</dt>
                <dd>v0.1 (Entwurf)</dd>
              </div>
              <div>
                <dt>Stand</dt>
                <dd>November 2026</dd>
              </div>
              <div>
                <dt>Umfang</dt>
                <dd>40 Seiten</dd>
              </div>
              <div>
                <dt>Lizenz</dt>
                <dd>CC BY 4.0</dd>
              </div>
            </dl>
          </div>

          <aside className={styles.abstractCard}>
            <span className={styles.abstractLabel}>Abstract</span>
            <p>
              Klassische binäre Modelle behandeln Fakt und Bewertung auf
              derselben Ebene. Dadurch kollabieren gegensätzliche, aber
              gleichermaßen rationale Perspektiven zu einem logischen
              Widerspruch. Wir führen die <strong>Trinärität</strong> ein: ein
              Modell mit einem invarianten Kern (<strong>0</strong>) und zwei
              koexistierenden Projektionen (<strong>+1/−1</strong>), deren
              Zulässigkeit durch eine berechenbare Invarianzbedingung definiert
              ist. Wir geben eine Axiomatisierung, zeigen einen
              Nicht-Kollaps-Satz, grenzen das Modell zu Supervaluationismus,
              Bilateralismus und mehrwertigen Logiken ab und demonstrieren es an
              verteilten und neuro-symbolischen Systemen.
            </p>
            <div className={styles.keywords}>
              <span>formale Ontologie</span>
              <span>Mereologie</span>
              <span>Supervaluationismus</span>
              <span>Trinärität</span>
              <span>VSA</span>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="mp-section">
          <div className="mp-container">
            <div className={styles.sectionHead}>
              <span className="mp-kicker">Formate</span>
              <h2 className={clsx('mp-section-title', styles.sectionTitle)}>
                Ein Werk, vier Zugänge.
              </h2>
              <p className="mp-section-lede">
                Dieselben Inhalte, für unterschiedliche Zwecke aufbereitet:
                Lesen, Drucken, Bearbeiten, Zitieren.
              </p>
            </div>

            <div className={styles.formatGrid}>
              {formats.map((f) => (
                <a
                  key={f.tag}
                  className={clsx(styles.formatCard, f.accent && styles.accent)}
                  href={f.href}
                  {...(f.href.startsWith('http') ? {target: '_blank', rel: 'noreferrer'} : {})}>
                  <span className={styles.formatTag}>{f.tag}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                  <span className={styles.formatCta}>{f.cta} →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx('mp-section', 'mp-section--sunken')}>
          <div className="mp-container">
            <div className={styles.tocGrid}>
              <div>
                <span className="mp-kicker">Inhalt</span>
                <h2 className={clsx('mp-section-title', styles.sectionTitle)}>
                  Inhaltsverzeichnis
                </h2>
                <p className="mp-section-lede">
                  Zwölf Kapitel, die von den Grundlagen über die formale
                  Definition bis zu Anwendungen und Falsifikationskriterien
                  führen.
                </p>
                <div className={styles.tocActions}>
                  <Link className="button button--primary" to="/docs/intro">
                    Kapitel 1 beginnen
                  </Link>
                  <a className="button button--secondary" href="/pdf/trinaeritaet-paper.pdf" download>
                    Gesamtes PDF
                  </a>
                </div>
              </div>

              <ol className={styles.toc}>
                {contents.map((c) => (
                  <li key={c.n}>
                    <span className={styles.tocN}>{c.n}</span>
                    <Link to={c.to}>{c.title}</Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="mp-section" id="zitieren">
          <div className="mp-container">
            <div className={styles.citeGrid}>
              <div>
                <span className="mp-kicker">Zitieren</span>
                <h2 className={clsx('mp-section-title', styles.sectionTitle)}>
                  BibTeX
                </h2>
                <p className="mp-section-lede">
                  Die Arbeit ist als offener Preprint verfügbar. Bitte zitiere
                  die jeweils aktuelle Version.
                </p>
              </div>
              <pre className={styles.bibtex}>
{`@misc{trinaeritaet2026,
  title        = {Trin{\\"a}rit{\\"a}t: Ein invariantes Kernmodell
                  koexistierender Perspektiven},
  author       = {Mathematische Philosophie Research Collective},
  year         = {2026},
  month        = {nov},
  note         = {Preprint v0.1},
  howpublished = {\\url{https://trinaeritaet.example.org/paper}},
  license      = {CC BY 4.0}
}`}
              </pre>
            </div>

            <div className={styles.exportNote}>
              <h3>Wie das PDF entsteht</h3>
              <p>
                Das PDF wird automatisch aus der Docusaurus-Dokumentation
                gerendert: ein Headless-Chrome-Druck mit akademischem
                Print-Stylesheet (A4, Serifensatz, KaTeX), anschließend werden
                die Kapitel zu einem Dokument zusammengeführt. Der Build-Befehl
                lautet <code>npm run build:pdf</code>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

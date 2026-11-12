# Mathematische Philosophie · Trinärität

Ein offenes Forschungsprogramm an der Schnittstelle von formaler Philosophie,
mathematischer Logik und künstlicher Intelligenz — als Docusaurus-Site,
Dokumentation und druckfertiges Paper.

> **Trinärität**: ein invarianter Kern (`0`) und zwei koexistierende
> Perspektiven (`+1` / `−1`), die gültig bleiben, solange sie den Kern nicht
> verändern.

## Was hier drin ist

- **Marketing-Site** (`/`) — Hero, methodische Säulen, Theorie, Anwendungen,
  Roadmap und Paper-CTA.
- **Dokumentation** (`/docs`) — 30+ Kapitel in fünf Bereichen: Grundlagen,
  Trinäritäts-Theorie, Anwendungen, Forschung, Implementierung.
- **Roadmap** (`/roadmap`) — fünf Phasen mit Deliverables und Status.
- **Paper & PDF** (`/paper`) — Abstract, Inhaltsverzeichnis, Exportformate und
  ein automatisch gesetztes A4-PDF.
- **Forschungslog** (`/forschung`) — Notizen und Zwischenstände.
- **PDF-Export** — Headless-Chrome-Rendering der Dokumentation zu einem
  akademisch gesetzten Paper (`bun run build:pdf`).

## Technik

| Baustein | Version / Zweck |
| --- | --- |
| Bun | 1.4 — Paketmanager und Script-Runner |
| Docusaurus | 3.10 (Classic Preset, TypeScript) |
| React | 19 |
| KaTeX | Formelsatz via `remark-math` + `rehype-katex` |
| Puppeteer | Rendering des PDFs mit installiertem Chrome |
| pdf-lib | Zusammenführen der Kapitel und Seitenzahlen |
| Infima | Theme-Basis, umfangreich überschrieben |

## Schnellstart

Voraussetzung: **Bun ≥ 1.4** (kein npm nötig).

```bash
bun install
bun run start        # Dev-Server auf http://localhost:3000/Philosophy-Trinary-System/
```

Produktions-Build:

```bash
bun run build
bun run serve        # gebaute Site lokal testen
```

## PDF erzeugen

Das PDF wird **nach** dem Build aus der gerenderten Dokumentation erzeugt:

```bash
bun run build:pdf
```

Das entspricht:

```bash
bun run build
bun run pdf
```

Ergebnis:

- `static/pdf/trinaeritaet-paper.pdf` (im Repository, 50 Seiten)
- `build/pdf/trinaeritaet-paper.pdf` (vom Server ausgeliefert)

Der Export nutzt:

1. einen kleinen statischen Server über `build/`,
2. installiertes Google Chrome (Fallback: Puppeteers Chromium),
3. ein akademisches Print-Stylesheet (A4, Serifensatz, KaTeX),
4. `pdf-lib` zum Zusammenführen und Nummerieren der Seiten.

Konfiguration der Kapitelreihenfolge: `scripts/export-pdf.mjs` → `chapters`.

## Deployment (GitHub Pages)

Die Site wird automatisch über **GitHub Actions** auf **GitHub Pages** deployt.

- **Live:** <https://403access.github.io/Philosophy-Trinary-System/>
- **Workflow:** `.github/workflows/deploy.yml`
- **Trigger:** Push auf `main` oder manuell über `workflow_dispatch`
- **Pages-Quelle:** GitHub Actions (`Settings → Pages → Build and deployment`)
- **Build:** `bun install --frozen-lockfile` → `bun run build` → Upload des `build/`-Verzeichnisses

Die `baseUrl` ist auf `/Philosophy-Trinary-System/` gesetzt, weil es sich um
eine Projektseite handelt. Für eine Custom Domain müssen `url` und `baseUrl` in
`docusaurus.config.ts` angepasst werden.

Das PDF liegt bereits unter `static/pdf/` im Repository und wird dadurch ohne
zusätzlichen CI-Schritt mitdeployt. Nach inhaltlichen Änderungen kann es lokal
mit `bun run build:pdf` neu erzeugt und eingecheckt werden.

## Visual QA

```bash
node scripts/preview.mjs
```

Erzeugt Screenshots von Startseite, Docs, Roadmap, Paper und Forschungslog in
`.preview/` (nicht eingecheckt).

## Projektstruktur

```text
.
├─ docs/                     # Die Dokumentation (Markdown/MDX)
│  ├─ grundlagen/            # Logik, Mereologie, Modalität, …
│  ├─ trinaeritaet/          # Die Theorie: Definition, Invarianz, …
│  ├─ anwendungen/           # KI, verteilte Systeme, Recht, Kognition
│  ├─ forschung/             # Programm, Paper-Outline, Falsifizierbarkeit
│  └─ implementierung/       # Architektur, TypeScript, Rust
├─ blog/                     # Forschungslog
├─ src/
│  ├─ pages/                 # /, /roadmap, /paper
│  ├─ components/            # Triade-, Nesting-, Feature-, Roadmap-Komponenten
│  └─ css/custom.css         # Akademisches Theme
├─ scripts/
│  ├─ export-pdf.mjs         # PDF-Pipeline
│  └─ preview.mjs            # Screenshot-QA
├─ static/
│  ├─ img/                   # Logo, Favicon, Social Card
│  └─ pdf/                   # Generiertes Paper
├─ i18n/de/                  # Deutsche Theme-Übersetzungen
├─ docusaurus.config.ts
└─ sidebars.ts
```

## Inhaltsarchitektur

Die Dokumentation ist als fortschreitendes Argument aufgebaut:

1. **Grundlagen** — Was ist mathematische Philosophie? Logik, Mereologie,
   Modallogik, Wahrscheinlichkeit, Entscheidungstheorie, Zeit.
2. **Trinärität** — Einführung, formale Definition, Invarianz, binäre
   Verschachtelung, Mereologie-Brücke, verwandte Konzepte, Abgrenzung, Kritik.
3. **Anwendungen** — neuro-symbolische KI, CRDTs, semantische Kompression,
   Recht & Mediation, Kognition.
4. **Forschung** — Forschungsprogramm, Paper-Outline, Falsifizierbarkeit,
   offene Fragen, Roadmap.
5. **Implementierung** — Architektur, TypeScript- und Rust-Prototyp.

## Wissenschaftlicher Status

Dies ist ein **Preprint v0.1**, kein etablierter Konsens. Die Theorie ist
bewusst so gebaut, dass sie scheitern kann. Die Widerlegungskriterien stehen in
[`docs/forschung/falsifizierbarkeit.md`](docs/forschung/falsifizierbarkeit.md).

## Lizenz

Inhalte: CC BY 4.0. Code: MIT (sofern nicht anders angegeben).

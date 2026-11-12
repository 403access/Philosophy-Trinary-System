/**
 * Export the documentation as a print-ready A4 PDF.
 *
 * Pipeline:
 *   1. serve the built Docusaurus site from ./build
 *   2. render a cover page with headless Chrome
 *   3. render every chapter (with academic print CSS + real page margins)
 *   4. compute chapter start pages and render a table of contents
 *   5. merge cover + TOC + chapters and stamp page numbers
 *
 * Usage:
 *   npm run build
 *   npm run pdf
 *
 * or simply:
 *   npm run build:pdf
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import puppeteer from 'puppeteer';
import {PDFDocument, StandardFonts, rgb} from 'pdf-lib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const buildDir = path.join(root, 'build');
const outDir = path.join(root, 'static', 'pdf');
const buildOutDir = path.join(buildDir, 'pdf');
const outFile = path.join(outDir, 'trinaeritaet-paper.pdf');

const fontsLink =
  'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap';

/** Curated chapter order and titles for the paper edition. */
const chapters = [
  {route: '/docs/intro', title: 'Einleitung & Motivation'},
  {
    route: '/docs/grundlagen/mathematische-philosophie',
    title: 'Grundlagen der mathematischen Philosophie',
  },
  {
    route: '/docs/trinaeritaet/einfuehrung',
    title: 'Die Trinäritäts-Theorie',
  },
  {
    route: '/docs/trinaeritaet/formale-definition',
    title: 'Formale Definition',
  },
  {
    route: '/docs/trinaeritaet/invarianz',
    title: 'Die Invarianz-Bedingung',
  },
  {
    route: '/docs/trinaeritaet/binaere-verschachtelung',
    title: 'Binäre Verschachtelung',
  },
  {
    route: '/docs/trinaeritaet/mereologie-verbindung',
    title: 'Mereologie & Trinärität',
  },
  {
    route: '/docs/trinaeritaet/verwandte-konzepte',
    title: 'Verwandte Konzepte',
  },
  {
    route: '/docs/trinaeritaet/abgrenzung-usp',
    title: 'Abgrenzung & USP',
  },
  {
    route: '/docs/trinaeritaet/kritik-grenzen',
    title: 'Kritik & Grenzen',
  },
  {
    route: '/docs/anwendungen/ueberblick',
    title: 'Anwendungen',
  },
  {
    route: '/docs/forschung/paper-outline',
    title: 'Paper-Outline',
  },
  {
    route: '/docs/forschung/falsifizierbarkeit',
    title: 'Falsifizierbarkeit',
  },
  {route: '/docs/referenzen', title: 'Referenzen'},
];

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
};

const BASE_PATH = '/Philosophy-Trinary-System';

function resolveFile(urlPath) {
  let clean = decodeURIComponent(urlPath.split('?')[0]);
  if (clean.startsWith(BASE_PATH)) {
    clean = clean.slice(BASE_PATH.length) || '/';
  }
  const candidate = path.join(buildDir, clean);
  if (!candidate.startsWith(buildDir)) return null;
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    return candidate;
  }
  // trailingSlash: false produces docs/intro.html instead of docs/intro/index.html
  const html = `${candidate}.html`;
  if (fs.existsSync(html) && fs.statSync(html).isFile()) return html;
  const index = path.join(candidate, 'index.html');
  if (fs.existsSync(index)) return index;
  return null;
}

function startServer() {
  const server = http.createServer((req, res) => {
    const file = resolveFile(req.url || '/');
    if (!file) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      return;
    }
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, {
      'Content-Type': mime[ext] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    fs.createReadStream(file).pipe(res);
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      resolve({server, port: server.address().port});
    });
  });
}

/* No @page rule here: the real margins come from Puppeteer's margin option.
   Putting `@page { margin: 0 }` in this stylesheet would cancel them. */
const printCss = `
  html, body { background: #ffffff !important; }
  .navbar,
  .theme-doc-sidebar-container,
  .theme-doc-toc-desktop,
  .theme-doc-toc-mobile,
  .theme-doc-footer,
  .pagination-nav,
  .theme-doc-breadcrumbs,
  .theme-doc-version-banner,
  div[class*='announcementBar'],
  footer.footer,
  button[class*='collapseSidebarButton'],
  a.hash-link { display: none !important; }

  .main-wrapper { padding: 0 !important; }
  .docPage,
  .docMainContainer,
  .container,
  .row,
  .col {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    flex: 1 1 auto !important;
  }

  .theme-doc-markdown {
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif !important;
    font-size: 10.6pt !important;
    line-height: 1.66 !important;
    color: #151515 !important;
  }
  .theme-doc-markdown h1 {
    font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif !important;
    font-size: 22pt !important;
    font-weight: 700 !important;
    line-height: 1.15 !important;
    margin: 0 0 14pt !important;
    color: #0b3d3d !important;
  }
  .theme-doc-markdown h2 {
    font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif !important;
    font-size: 14pt !important;
    font-weight: 600 !important;
    margin: 20pt 0 8pt !important;
    color: #0b3d3d !important;
    border-bottom: 0.5pt solid #d8d2c4 !important;
    padding-bottom: 3pt !important;
  }
  .theme-doc-markdown h3 {
    font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif !important;
    font-size: 12pt !important;
    font-weight: 600 !important;
    margin: 14pt 0 6pt !important;
    color: #1a1a1a !important;
  }
  .theme-doc-markdown p,
  .theme-doc-markdown li {
    orphans: 3;
    widows: 3;
  }
  .theme-doc-markdown blockquote {
    border-left: 2.5pt solid #35aaa6 !important;
    background: #f5f8f7 !important;
    margin: 10pt 0 !important;
    padding: 6pt 10pt !important;
    font-style: italic;
  }
  .theme-doc-markdown table {
    font-size: 8.8pt !important;
    border-collapse: collapse !important;
    width: 100% !important;
  }
  .theme-doc-markdown th,
  .theme-doc-markdown td {
    border: 0.5pt solid #cfc8b8 !important;
    padding: 3.5pt 5pt !important;
  }
  .theme-doc-markdown pre {
    background: #f6f3ea !important;
    color: #151515 !important;
    border: 0.5pt solid #ddd6c7 !important;
    border-radius: 3pt !important;
    font-size: 8.2pt !important;
    line-height: 1.45 !important;
    padding: 8pt !important;
    white-space: pre-wrap !important;
    word-break: break-word !important;
    break-inside: avoid !important;
    page-break-inside: avoid !important;
  }
  .theme-doc-markdown table,
  .theme-doc-markdown blockquote,
  .theme-doc-markdown .alert {
    break-inside: avoid !important;
    page-break-inside: avoid !important;
  }
  .theme-doc-markdown h2,
  .theme-doc-markdown h3 {
    break-after: avoid !important;
    page-break-after: avoid !important;
  }
  .theme-doc-markdown code {
    font-size: 0.86em !important;
    background: #f3f0e8 !important;
    border: 0.4pt solid #e0dacd !important;
    border-radius: 2pt !important;
    padding: 0 2pt !important;
  }
  .theme-doc-markdown pre code {
    border: 0 !important;
    background: transparent !important;
    padding: 0 !important;
  }
  .katex { font-size: 1em !important; }
  .katex-display { margin: 8pt 0 !important; overflow: visible !important; }
  .alert {
    border: 0.5pt solid #cfc8b8 !important;
    border-left: 3pt solid #0f6b6b !important;
    background: #f7f5ef !important;
    border-radius: 3pt !important;
    padding: 7pt 10pt !important;
    font-size: 9.4pt !important;
  }
`;

function coverHtml() {
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8" />
<link rel="stylesheet" href="${fontsLink}" />
<style>
  @page { size: A4; margin: 0; }
  html, body { margin: 0; padding: 0; }
  .cover {
    width: 210mm; height: 297mm; box-sizing: border-box;
    padding: 30mm 26mm 22mm;
    background: linear-gradient(150deg, #083f3f 0%, #0f6b6b 55%, #0b5353 100%);
    color: #fbfaf6;
    font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif;
    display: flex; flex-direction: column; justify-content: space-between;
    position: relative; overflow: hidden;
  }
  .glow {
    position: absolute; width: 420px; height: 420px; border-radius: 50%;
    right: -120px; top: -100px;
    background: radial-gradient(circle, rgba(169,222,217,0.35), transparent 65%);
  }
  .kicker {
    font-family: 'Source Sans 3', Helvetica, Arial, sans-serif;
    font-size: 9pt; letter-spacing: 3.5pt; text-transform: uppercase;
    color: #a9ded9; font-weight: 700;
  }
  h1 {
    font-size: 46pt; line-height: 0.98; margin: 18pt 0 0;
    letter-spacing: -1.2pt; font-weight: 700; color: #fbfaf6;
  }
  .sub {
    font-size: 15pt; line-height: 1.4; color: #d7f0ed;
    margin-top: 14pt; max-width: 140mm; font-style: italic;
  }
  .triade { margin-top: 26pt; }
  .abstract {
    font-family: 'Source Serif 4', Georgia, serif; font-size: 10pt; line-height: 1.6;
    color: #d7f0ed; max-width: 150mm; margin-top: 18pt;
    border-left: 2px solid rgba(169,222,217,0.5); padding-left: 12pt;
  }
  .footer {
    display: flex; justify-content: space-between; align-items: flex-end;
    font-family: 'Source Sans 3', Helvetica, Arial, sans-serif; font-size: 8.5pt;
    color: #a9ded9; letter-spacing: 0.6pt;
    border-top: 1px solid rgba(251,250,246,0.22); padding-top: 10pt;
  }
  .footer strong { color: #fbfaf6; font-weight: 700; }
</style>
</head>
<body>
  <div class="cover">
    <div class="glow"></div>
    <div>
      <div class="kicker">Forschungsprogramm · Preprint v0.1 · 2026</div>
      <h1>Trinärität</h1>
      <div class="sub">Ein invariantes Kernmodell koexistierender Perspektiven</div>
      <div class="abstract">
        Formale Ontologie, epistemische Admissibilität und Anwendungen in
        neuro-symbolischen Systemen. Eine Axiomatisierung mit Nicht-Kollaps-Satz,
        Abgrenzung zu Supervaluationismus und Bilateralismus sowie expliziten
        Falsifikationskriterien.
      </div>
      <div class="triade">
        <svg width="150" height="110" viewBox="0 0 300 220" fill="none">
          <circle cx="150" cy="90" r="30" fill="#fbfaf6"/>
          <path d="M150 100 L72 180" stroke="#fbfaf6" stroke-width="4" stroke-linecap="round"/>
          <path d="M150 100 L228 180" stroke="#fbfaf6" stroke-width="4" stroke-linecap="round"/>
          <path d="M72 180 L228 180" stroke="#e0b25a" stroke-width="2.5" stroke-dasharray="5 7" stroke-linecap="round"/>
          <circle cx="72" cy="180" r="15" fill="#fbfaf6"/>
          <circle cx="228" cy="180" r="15" fill="#fbfaf6"/>
          <text x="150" y="99" text-anchor="middle" font-family="Helvetica" font-size="24" font-weight="700" fill="#0f6b6b">0</text>
          <text x="72" y="186" text-anchor="middle" font-family="Helvetica" font-size="15" font-weight="700" fill="#0f6b6b">−1</text>
          <text x="228" y="186" text-anchor="middle" font-family="Helvetica" font-size="15" font-weight="700" fill="#0f6b6b">+1</text>
        </svg>
      </div>
    </div>
    <div class="footer">
      <div><strong>Mathematische Philosophie</strong> · Research Collective</div>
      <div>CC BY 4.0 · A4 · Automatisch gesetzt</div>
    </div>
  </div>
</body>
</html>`;
}

function tocHtml(entries) {
  const rows = entries
    .map(
      (entry, index) => `
      <div class="row">
        <span class="n">${String(index + 1).padStart(2, '0')}</span>
        <span class="t">${entry.title}</span>
        <span class="dots"></span>
        <span class="p">${entry.page}</span>
      </div>`,
    )
    .join('');

  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8" />
<link rel="stylesheet" href="${fontsLink}" />
<style>
  html, body { margin: 0; padding: 0; background: #ffffff; }
  body {
    font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif;
    color: #151515;
  }
  .kicker {
    font-family: 'Source Sans 3', Helvetica, Arial, sans-serif;
    font-size: 8.5pt; letter-spacing: 3pt; text-transform: uppercase;
    color: #0f6b6b; font-weight: 700;
  }
  h1 {
    font-size: 30pt; line-height: 1.05; margin: 10pt 0 4pt;
    color: #0b3d3d; letter-spacing: -0.6pt; font-weight: 700;
  }
  .sub { font-size: 10.5pt; color: #6b665c; margin: 0 0 22pt; font-style: italic; }
  .rule { height: 1px; background: #d8d2c4; margin: 0 0 16pt; }
  .row {
    display: flex; align-items: baseline; gap: 8pt;
    padding: 6.5pt 0; border-bottom: 0.5pt solid #ece7dc;
  }
  .n {
    font-family: 'Source Sans 3', Helvetica, Arial, sans-serif;
    font-size: 8pt; font-weight: 700; color: #0f6b6b;
    width: 22pt; flex: 0 0 22pt;
  }
  .t { font-size: 11pt; color: #151515; }
  .dots { flex: 1; border-bottom: 1px dotted #bcb5a6; transform: translateY(-3pt); }
  .p {
    font-family: 'Source Sans 3', Helvetica, Arial, sans-serif;
    font-size: 9.5pt; font-weight: 600; color: #0b3d3d;
    width: 24pt; text-align: right;
  }
  .foot {
    margin-top: 22pt;
    font-family: 'Source Sans 3', Helvetica, Arial, sans-serif;
    font-size: 8pt; color: #8a857a;
    display: flex; justify-content: space-between;
  }
</style>
</head>
<body>
  <div class="kicker">Trinärität · Preprint v0.1</div>
  <h1>Inhalt</h1>
  <div class="sub">Ein invariantes Kernmodell koexistierender Perspektiven</div>
  <div class="rule"></div>
  ${rows}
  <div class="foot">
    <span>Mathematische Philosophie · Research Collective</span>
    <span>CC BY 4.0</span>
  </div>
</body>
</html>`;
}

async function launchBrowser() {
  const attempts = [
    () => puppeteer.launch({headless: true, channel: 'chrome', args: ['--no-sandbox']}),
    () =>
      puppeteer.launch({
        headless: true,
        executablePath:
          '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        args: ['--no-sandbox'],
      }),
    () => puppeteer.launch({headless: true, args: ['--no-sandbox']}),
  ];

  let lastError;
  for (const attempt of attempts) {
    try {
      return await attempt();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

function stampPageNumbers(pdfDoc, font) {
  const pages = pdfDoc.getPages();
  const total = pages.length;
  pages.forEach((page, index) => {
    if (index === 0) return; // cover has no number
    const label = `${index + 1} / ${total}`;
    const size = 8;
    const width = font.widthOfTextAtSize(label, size);
    page.drawText(label, {
      x: (page.getWidth() - width) / 2,
      y: 14,
      size,
      font,
      color: rgb(0.42, 0.42, 0.42),
    });
  });
}

const pageMargin = {
  top: '20mm',
  right: '20mm',
  bottom: '18mm',
  left: '20mm',
};

async function main() {
  if (!fs.existsSync(buildDir)) {
    console.error(
      '✖ Kein build/-Verzeichnis gefunden. Bitte zuerst `npm run build` ausführen.',
    );
    process.exit(1);
  }

  fs.mkdirSync(outDir, {recursive: true});
  fs.mkdirSync(buildOutDir, {recursive: true});

  console.log('▸ Starte lokalen Server für den Build …');
  const {server, port} = await startServer();
  const base = `http://127.0.0.1:${port}`;

  console.log('▸ Starte Chrome …');
  const browser = await launchBrowser();

  try {
    // 1. Cover
    console.log('▸ Rendere Cover …');
    const cover = await browser.newPage();
    await cover.setContent(coverHtml(), {waitUntil: 'networkidle0'});
    const coverPdf = await cover.pdf({
      format: 'A4',
      printBackground: true,
      margin: {top: '0', right: '0', bottom: '0', left: '0'},
    });
    await cover.close();

    // 2. Chapters
    const chapterBuffers = [];
    const chapterPageCounts = [];

    for (const [i, chapter] of chapters.entries()) {
      const url = `${base}${BASE_PATH}/${chapter.route.replace(/^\//, '')}`;
      console.log(`▸ Kapitel ${i + 1}/${chapters.length}: ${chapter.route}`);
      const page = await browser.newPage();
      await page.setViewport({width: 1200, height: 1600, deviceScaleFactor: 2});

      await page.goto(url, {waitUntil: 'networkidle0', timeout: 90000});
      await page.waitForSelector('.theme-doc-markdown', {timeout: 30000});
      await page.emulateMediaType('print');
      await page.addStyleTag({content: printCss});

      // Give KaTeX and fonts a moment to settle.
      await page.evaluate(
        () =>
          new Promise((resolve) => {
            requestAnimationFrame(() => setTimeout(resolve, 250));
          }),
      );

      const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: pageMargin,
        displayHeaderFooter: false,
      });
      chapterBuffers.push(pdf);
      chapterPageCounts.push((await PDFDocument.load(pdf)).getPageCount());
      await page.close();
    }

    // 3. Table of contents — page numbers depend on the TOC's own length.
    let tocPages = 1;
    let tocBuffer;
    for (let attempt = 0; attempt < 4; attempt += 1) {
      let cursor = 1 + tocPages + 1; // cover + toc + 1-based page numbers
      const entries = chapters.map((chapter, index) => {
        const entry = {
          title: chapter.title,
          page: cursor,
        };
        cursor += chapterPageCounts[index];
        return entry;
      });

      console.log(
        `▸ Rendere Inhaltsverzeichnis (${tocPages} Seite${
          tocPages === 1 ? '' : 'n'
        }) …`,
      );
      const tocPage = await browser.newPage();
      await tocPage.setContent(tocHtml(entries), {waitUntil: 'networkidle0'});
      tocBuffer = await tocPage.pdf({
        format: 'A4',
        printBackground: true,
        margin: pageMargin,
      });
      await tocPage.close();

      const actualTocPages = (await PDFDocument.load(tocBuffer)).getPageCount();
      if (actualTocPages === tocPages) break;
      tocPages = actualTocPages;
    }

    // 4. Merge cover + TOC + chapters
    console.log('▸ Führe Kapitel zusammen …');
    const merged = await PDFDocument.create();
    for (const buffer of [coverPdf, tocBuffer, ...chapterBuffers]) {
      const doc = await PDFDocument.load(buffer);
      const pages = await merged.copyPages(doc, doc.getPageIndices());
      for (const p of pages) merged.addPage(p);
    }

    const font = await merged.embedFont(StandardFonts.Helvetica);
    stampPageNumbers(merged, font);

    merged.setTitle(
      'Trinärität: Ein invariantes Kernmodell koexistierender Perspektiven',
    );
    merged.setAuthor('Mathematische Philosophie Research Collective');
    merged.setSubject('Formale Ontologie, Trinärität und neuro-symbolische KI');
    merged.setKeywords(['Trinärität', 'formale Philosophie', 'Mereologie', 'KI']);
    merged.setCreator('Docusaurus + Puppeteer PDF exporter');
    merged.setProducer('pdf-lib');

    const bytes = await merged.save();
    fs.writeFileSync(outFile, bytes);
    fs.writeFileSync(path.join(buildOutDir, 'trinaeritaet-paper.pdf'), bytes);

    console.log(`✔ PDF geschrieben: ${outFile}`);
    console.log(`  Seiten: ${merged.getPageCount()}`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((error) => {
  console.error('✖ PDF-Export fehlgeschlagen:');
  console.error(error);
  process.exit(1);
});

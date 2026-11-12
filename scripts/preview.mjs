/**
 * Dev utility: serve ./build and capture screenshots for visual QA.
 * Usage: node scripts/preview.mjs
 * Output: .preview/*.png
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const buildDir = path.join(root, 'build');
const outDir = path.join(root, '.preview');

const routes = [
  ['home', '/', 1440, 3200],
  ['docs', '/docs/trinaeritaet/formale-definition', 1440, 2600],
  ['roadmap', '/roadmap', 1440, 2600],
  ['paper', '/paper', 1440, 2600],
  ['blog', '/forschung', 1440, 1800],
  ['home-mobile', '/', 390, 900],
  ['docs-mobile', '/docs/trinaeritaet/formale-definition', 390, 900],
];

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
};

const BASE_PATH = '/Philosophy-Trinary-System';

function resolveFile(urlPath) {
  let clean = decodeURIComponent(urlPath.split('?')[0]);
  if (clean.startsWith(BASE_PATH)) {
    clean = clean.slice(BASE_PATH.length) || '/';
  }
  const candidate = path.join(buildDir, clean);
  if (!candidate.startsWith(buildDir)) return null;
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  const html = `${candidate}.html`;
  if (fs.existsSync(html) && fs.statSync(html).isFile()) return html;
  const index = path.join(candidate, 'index.html');
  if (fs.existsSync(index)) return index;
  return null;
}

const server = http.createServer((req, res) => {
  const file = resolveFile(req.url || '/');
  if (!file) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  res.writeHead(200, {
    'Content-Type': mime[path.extname(file).toLowerCase()] || 'application/octet-stream',
  });
  fs.createReadStream(file).pipe(res);
});

await new Promise((r) => server.listen(0, '127.0.0.1', r));
const port = server.address().port;
fs.mkdirSync(outDir, {recursive: true});

const browser = await puppeteer.launch({headless: true, channel: 'chrome', args: ['--no-sandbox']});
try {
  for (const [name, route, width, height] of routes) {
    const page = await browser.newPage();
    await page.setViewport({width, height, deviceScaleFactor: 1});
    await page.goto(`http://127.0.0.1:${port}${BASE_PATH}/${route.replace(/^\//, '')}`, {
      waitUntil: 'networkidle0',
      timeout: 90000,
    });
    await new Promise((r) => setTimeout(r, 700));
    const file = path.join(outDir, `${name}.png`);
    await page.screenshot({path: file, fullPage: name === 'home'});
    console.log('✔', file);
    await page.close();
  }

  // Dark mode home
  const dark = await browser.newPage();
  await dark.setViewport({width: 1440, height: 2200, deviceScaleFactor: 1});
  await dark.goto(`http://127.0.0.1:${port}${BASE_PATH}`, {waitUntil: 'networkidle0'});
  await dark.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
  await new Promise((r) => setTimeout(r, 700));
  await dark.screenshot({path: path.join(outDir, 'home-dark.png')});
  console.log('✔', path.join(outDir, 'home-dark.png'));
  await dark.close();
} finally {
  await browser.close();
  server.close();
}

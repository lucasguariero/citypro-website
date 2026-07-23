// generate-pdfs.js
// Gera 4 PDFs (home, plataforma, contato, sobre) com 1440px de largura
// Uso:
//   1) npm install puppeteer
//   2) node generate-pdfs.js
//
// Resultado: 4 arquivos .pdf na mesma pasta do script.

const puppeteer = require('puppeteer');
const path = require('path');

const BASE = 'file://' + path.resolve(__dirname).replace(/\\/g, '/') + '/';
const PAGES = [
  { file: 'index.html',      out: 'citypro-home.pdf' },
  { file: 'plataforma.html', out: 'citypro-plataforma.pdf' },
  { file: 'contato.html',    out: 'citypro-contato.pdf' },
  { file: 'sobre.html',      out: 'citypro-sobre.pdf' },
];

(async () => {
  console.log('Iniciando browser headless...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  for (const p of PAGES) {
    const url = BASE + p.file;
    const out = path.resolve(__dirname, p.out);
    console.log(`Renderizando ${p.file} -> ${p.out}`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(r => setTimeout(r, 1000));
    await page.pdf({
      path: out,
      width: '1440px',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });
    console.log('  salvo: ' + out);
  }

  await browser.close();
  console.log('\\nPronto! 4 PDFs gerados.');
})().catch(e => { console.error('Erro:', e); process.exit(1); });

# CityPro · Site institucional

Landing page + páginas internas do CityPro, plataforma de licenciamento urbanístico digital para prefeituras.

## Estrutura

- `index.html` — Home
- `plataforma.html` — Plataforma (5 pilares + BIM)
- `contato.html` — Contato (formulário + FAQ)
- `sobre.html` — Sobre (missão, história, valores, FAQ)
- `img/` — Imagens e SVGs

## Stack

- HTML puro + Tailwind CSS (CDN)
- Google Fonts (Inter, Inter Tight, JetBrains Mono)
- Sem build step, sem Node

## Deploy

### Vercel (recomendado)

1. Suba o repo pro GitHub (privado, `lucasguariero/citypro-website`)
2. No dashboard da Vercel (vercel.com/new), clique **"Import Project"**
3. Selecione o repo `citypro-website`
4. Framework preset: **Other** (HTML estático)
5. Root directory: `./` (raiz)
6. Deploy

A Vercel gera uma URL tipo `citypro-website.vercel.app` automaticamente.

### Domínio custom (opcional)

Em **Vercel > Settings > Domains**, adicione `citypro.net.br` e aponte o DNS:
- `A` record: `76.76.21.21`
- `CNAME` para `www`: `cname.vercel-dns.com`

## Atualizar

Faça as alterações localmente, depois:

```bash
git add .
git commit -m "describe change"
git push
```

A Vercel rebuilda automaticamente.

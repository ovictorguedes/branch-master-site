# Branch Master — Website

Site institucional da Branch Master (landing page de página única).

## Estrutura

- **`index.html`** — site final **pré-renderizado como HTML estático** (sem bundler client-side): título/meta/`lang` corretos, fontes embutidas, âncoras funcionando, logo em SVG inline. É a página servida em produção.
- **`dist/branch-master-site.html`** — build original gerado por bundler (renderizava via JavaScript). Mantido como referência; o `index.html` foi otimizado a partir dele.
- **`Home.dc.html`** — página-fonte (herói, seções de serviços, sobre, contato).
- **`Footer.dc.html`**, **`WhatsAppButton.dc.html`** — componentes de origem usados na página.
- **`support.js`, `image-slot.js`** — scripts de apoio usados pelos arquivos de origem.
- **`uploads/`** — logo e ícone da marca (`branchmaster.svg`, `ICON_POSITIVO_1.png`).
- **`favicon.ico`** — ícone da aba.

> As seções **Serviços**, **Sobre** e **Contato** são âncoras dentro da própria `index.html` (site de página única), não arquivos separados.

## Ver o site localmente

Abra o `index.html` direto no navegador, ou rode um servidor local:

```bash
python -m http.server 8000
```

Depois acesse http://localhost:8000

## Publicação (GitHub Pages)

Como o `index.html` está na raiz, basta ativar o GitHub Pages em **Settings → Pages**, selecionando a branch `main` e a pasta `/ (root)`.

# Branch Master — Website

Site institucional da Branch Master. Site **multipágina** estático.

## Páginas (o que é publicado)

- **`index.html`** — Home
- **`servicos.html`** — Serviços (Automação, Integração, Dashboards, com "A dor / O que fazemos / O resultado")
- **`sobre.html`** — Sobre (missão, processo, diferenciais, foto da equipe)
- **`contato.html`** — Contato (formulário + mapa)

Todas compartilham o mesmo cabeçalho (logo + menu Home/Serviços/Sobre/Contato + botão WhatsApp) e rodapé. As páginas são HTML estático puro (sem bundler client-side), com fontes via Google Fonts. `title`, `meta description`, `lang="pt-BR"` e Open Graph definidos por página.

O **formulário de Contato** não tem backend: ao enviar, ele abre o WhatsApp com os dados preenchidos. Para receber os leads por e-mail, dá para plugar um serviço como Formspree depois.

## Fonte / edição

- **`Home.dc.html`** — arquivo-fonte que contém **as 4 páginas empilhadas**, cada uma dentro de um bloco `<sc-if value="{{ isHome|isServicos|isSobre|isContato }}">`. É renderizado pelo `support.js` (roteamento client-side). As páginas `.html` acima foram geradas a partir dele.
- **`Footer.dc.html`, `WhatsAppButton.dc.html`** — componentes de origem.
- **`support.js`, `image-slot.js`** — runtime dos arquivos `.dc.html`.
- **`dist/branch-master-site.html`** — build antigo (só a Home). Mantido como referência.
- **`uploads/`** — logo e ícone da marca. **`favicon.ico`** — ícone da aba.

> Não há bundler local para regerar os `.html` a partir do `.dc.html`. Para editar o site publicado, edite os arquivos `.html` diretamente (ou renderize `Home.dc.html` no navegador, ajustando os `<sc-if>` para exibir a página desejada).

## Ver localmente

```bash
python -m http.server 8000
```

Acesse http://localhost:8000

## Publicação (GitHub Pages)

Já publicado em **https://ovictorguedes.github.io/branch-master-site/** (branch `main`, raiz).

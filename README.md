# Personal web profile - Ndagi, Stanley M

- Built using VuePress
- Hosted on Netlify

## Run

- Install dependencies:

  ```bash
  yarn
  ```

- Run locally:

  ```bash
  yarn dev
  ```

- Build:

  ```bash
  yarn build
  hs src/.vuepress/dist
  ```

*hs - `http-server` ([npm package](https://www.npmjs.com/package/http-server))

## Editing guide

- [Vuepress' frontmatter](https://vuepress.github.io/reference/frontmatter.html)
  - permalink
  - permalinkPattern
  - externalIcon
- [Theme's frontmatter](https://vuepress.github.io/reference/default-theme/frontmatter.html)
  - footerHtml (HomePage)
- [Theme's Config](https://vuepress.github.io/reference/default-theme/config.html#locale-config)
  - editLink (& editLinkText)
  - lastUpdated (& lastUpdatedText)
  - contributors (& contributorsText)
  - tip, warning, danger
  - notFound
  - backToHome
- `h2` has a `br` below it. `h1`, `h3`, `h4`, `h5`, `h6` do not. (Contrary to GitHub flavoured markdown)
- `<center></center>` makes content align center
- [Plugin API](https://vuepress.github.io/reference/plugin-api.html)
  - extendsPageOptions
- `footerHtml`

# poolconductor.com

Marketing site for Pool Conductor, built with Astro and deployed through GitHub
Pages.

## Development

```sh
npm install
npm run dev
```

Build the static site with `npm run build`; the output is written to `dist/`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and deploys
the site to GitHub Pages. `public/CNAME` declares the `poolconductor.com` custom
domain; configure the GitHub Pages custom domain and DNS records in GitHub and
your DNS provider.

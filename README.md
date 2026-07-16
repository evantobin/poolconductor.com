# Pool Conductor Website

This repository contains the Astro marketing site for
[Pool Conductor](https://poolconductor.com), deployed through GitHub Pages.

## Choose Your Setup

### Buy Pool Conductor

The finished Pool Conductor device is for pool owners who want a ready-to-install
controller rather than a hardware and firmware project. Alongside local Matter
control, the commercial experience includes:

- A web dashboard for pump status, relay control, and equipment setup.
- Historical energy, circulation, and temperature information.
- Remote firmware updates and on-demand diagnostic logs.
- A completed controller instead of a DIY wiring and toolchain setup.

Visit [poolconductor.com](https://poolconductor.com) for device availability.

### Build Local-Only

The [Matter Pool Controller firmware](https://github.com/evantobin/matter-pool-controller)
is available for people who prefer to build and maintain their own ESP32-S3
controller. It is local-only: no required cloud account, telemetry upload,
remote logging, or OTA client.

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

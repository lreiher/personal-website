# [lennartreiher.de](https://lennartreiher.de) – Lennart Reiher's Personal Website

### Development

```bash
pnpm dev
```

### Static Production Build

```bash
pnpm build # generates static site in out/
python3 -m http.server --directory out 8080 # serve with any static file server
```

### Deployment

Main branch is automatically deployed to [lennartreiher.de](https://lennartreiher.de) via [GitHub Workflow](.github/workflows/deploy.yml).

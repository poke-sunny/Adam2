# Adam Ellahi Project F1 Website

This is the first hostable website build from the Project F1 Design Bible and Formula One Digital Design Language.

## Local Development

```bash
npm install
npm run dev
```

Open:

`http://localhost:3000`

## Production Build

```bash
npm run build
npm run start
```

The project includes a local npm cache setting so installs stay inside the workspace on this machine.

## Vercel Deployment

Recommended route:

1. Push this `website` folder to GitHub.
2. Import the repository into Vercel.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Output directory: leave default.
6. Add the production domain, for example `adamellahi.com`.

## Source System

The site uses the creative source of truth from:

- `../Project_F1_Design_Bible_v1`
- `../design-system`

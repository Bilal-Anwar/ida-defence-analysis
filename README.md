# International Defence Analysis

React / TypeScript frontend built with Vite and Tailwind CSS.

## Run locally on Windows

Dependencies are installed in this workspace. Run in PowerShell:

```powershell
./start-local.ps1
```

Open http://127.0.0.1:3000 and keep the terminal open.

For a fresh checkout with Node.js and npm installed:

```powershell
npm install
npm run dev -- --host 127.0.0.1
```

Checks: `npm run lint` and `npm run build`.

This environment has local npm at `.tools/package/bin/npm-cli.js`, invoked with Node.
No Gemini API key is required by the current frontend. Contact/newsletter and magazine download actions are demonstrations. See [ANALYSIS.md](ANALYSIS.md) for findings and limitations.

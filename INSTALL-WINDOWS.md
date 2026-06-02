# Install on Windows / Git Bash

This version is pinned to Vite 5 and React 18 for Node.js 20.5.1.

```bash
unzip malakias-interactive-profile-node20-vite5.zip
cd malakias-interactive-profile
rm -rf node_modules package-lock.json
npm cache verify
npm config set registry https://registry.npmjs.org/
npm install --registry=https://registry.npmjs.org/
npm run dev
```

Open the Vite URL shown in the terminal, usually http://localhost:5173/.

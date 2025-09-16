# Deployment Configuration

## Node.js Version Issue Fix

This project has been configured to resolve the `globalThis is not defined` error that occurs when deploying with Node.js versions below 12.0.0.

### Configuration Files Added

1. **`.nvmrc`** - Specifies Node.js version 18 for local development
2. **`netlify.toml`** - Configures Netlify deployment with Node.js 18
3. **`package.json`** - Added engines field specifying minimum Node.js version

### For Different Deployment Platforms

#### Netlify
- Uses `netlify.toml` configuration
- Node.js version: 18
- Build command: `npm run build`
- Publish directory: `_site`

#### Vercel
Create `vercel.json`:
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "_site"
      }
    }
  ],
  "functions": {
    "src/api/**/*.js": {
      "runtime": "nodejs18.x"
    }
  }
}
```

#### GitHub Pages
- Use GitHub Actions with Node.js 18
- Build command: `npm run build`
- Deploy from `_site` directory

### Local Development
- Use Node.js 18+ (recommended: use `.nvmrc` with `nvm use`)
- Run `npm install` to install dependencies
- Run `npm run build` to build the project
- Run `npm run dev` for development with live reload

### Troubleshooting

If you still encounter the `globalThis` error:
1. Ensure your deployment platform is using Node.js 18+
2. Clear any build caches on your deployment platform
3. Verify the configuration files are properly committed to your repository
4. Check that your deployment platform is reading the configuration files correctly

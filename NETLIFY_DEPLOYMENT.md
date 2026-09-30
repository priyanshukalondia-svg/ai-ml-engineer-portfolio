# Netlify Deployment Guide

This guide explains how to deploy the AI/ML Engineer Portfolio to Netlify.

## Prerequisites

- A Netlify account
- This repository connected to your Netlify account
- Node.js 20+ installed (for local testing)

## Automatic Deployment

The repository is now configured for automatic Netlify deployment with the following files:

### 1. `netlify.toml`
This file contains all the build and deployment settings:
- Build command: `npm run build`
- Publish directory: `.output/public`
- Functions directory: `.output/server`
- Node version: 20
- Redirect rules for SPA routing
- Security headers
- Cache headers for static assets

### 2. `vite.config.ts`
Updated to use the Netlify preset for Nitro:
```typescript
nitro: {
  preset: "netlify",
}
```

### 3. `public/_redirects`
Fallback redirect rules for client-side routing.

## Deployment Steps

### Option 1: Connect to Netlify (Recommended)

1. Log in to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub, GitLab, etc.)
4. Select this repository
5. Netlify will auto-detect the settings from `netlify.toml`
6. Click "Deploy site"

That's it! Netlify will:
- Install dependencies
- Build the project with `npm run build`
- Deploy to `.output/public`
- Set up serverless functions from `.output/server`

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site (first time only)
netlify init

# Deploy
netlify deploy --prod
```

## Environment Variables

If you need environment variables (e.g., for Supabase or other services):

1. Go to your Netlify site dashboard
2. Navigate to "Site settings" → "Environment variables"
3. Add your variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - Any other `VITE_*` variables your app needs

## Image Assets

All images are stored in `src/assets/` and are properly imported in the code:

```typescript
import aiSystemHero from "@/assets/ai-system-hero.jpg";
import contactVisual from "@/assets/contact-visual.jpg";
// ... etc
```

Vite will:
- Bundle and optimize these images during build
- Generate proper paths in the output
- Place them in the `.output/public` directory

The images will be correctly served on Netlify with proper cache headers.

## Troubleshooting

### Build Fails

**Issue**: Build fails with dependency errors
**Solution**: Check that Node version is set to 20 in `netlify.toml`

**Issue**: Build fails with "Cannot find module"
**Solution**: Ensure all dependencies are in `package.json` and run `npm install` locally first

### Images Not Loading

**Issue**: Images show 404 errors
**Solution**: 
- Verify images exist in `src/assets/`
- Check that imports use `@/assets/` path alias
- Ensure Vite is processing the assets (they should be in `.output/public` after build)

**Issue**: Images have wrong paths
**Solution**: Use the imported references, not string paths:
```typescript
// ✅ Correct
import heroImage from "@/assets/hero.jpg";
<img src={heroImage} />

// ❌ Incorrect
<img src="/assets/hero.jpg" />
```

### Routing Issues

**Issue**: Direct URL access (e.g., `/about`) returns 404
**Solution**: The `netlify.toml` redirect rules should handle this. Verify the file is committed.

### Performance Issues

**Issue**: Images load slowly
**Solution**: Images are already set with cache headers. Consider:
- Using WebP format for better compression
- Lazy loading images with `loading="lazy"`
- Using responsive images with `srcset`

## Local Testing

Test the production build locally before deploying:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the production build
npm run preview
```

Or test with Netlify CLI:

```bash
# Build and serve locally with Netlify
netlify dev
```

## Build Output Structure

After running `npm run build`, you'll see:

```
.output/
├── public/           # Static assets (deployed)
│   ├── assets/       # Bundled CSS, JS, images
│   ├── favicon.ico
│   └── ...
└── server/           # Serverless functions (deployed)
    └── ...
```

Netlify serves:
- Static files from `.output/public`
- Dynamic requests via `.output/server` functions

## Continuous Deployment

Once connected to Netlify:

1. Push changes to your repository
2. Netlify automatically detects the push
3. Runs the build command
4. Deploys the new version
5. Your site is live!

## Custom Domain

To add a custom domain:

1. Go to "Domain settings" in Netlify
2. Click "Add custom domain"
3. Follow the instructions to update your DNS
4. Netlify provides free SSL via Let's Encrypt

## Support

- [Netlify Documentation](https://docs.netlify.com/)
- [TanStack Start Documentation](https://tanstack.com/start)
- [Nitro Documentation](https://nitro.unjs.io/)
- [Vite Documentation](https://vitejs.dev/)

---

**Note**: This project uses TanStack Start with Nitro and Vite. The build process is optimized for Netlify's serverless platform.

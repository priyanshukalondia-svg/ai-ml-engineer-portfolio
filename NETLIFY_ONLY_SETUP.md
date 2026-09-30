# 🚀 Netlify-Only Deployment Setup

This AI/ML Engineer Portfolio is **exclusively optimized for Netlify deployment**. All configuration files and documentation are tailored specifically for the Netlify platform.

## Why Netlify?

This project uses Netlify because it provides:
- ✅ **Seamless Git Integration** - Auto-deploys on push
- ✅ **Global CDN** - Fast loading worldwide
- ✅ **Automatic HTTPS** - Free SSL certificates
- ✅ **Simple Configuration** - Single `netlify.toml` file
- ✅ **Instant Rollbacks** - One-click deploy reversions
- ✅ **Build Previews** - Preview PRs before merging
- ✅ **Free Tier** - Perfect for personal portfolios

---

## 📋 Complete Setup Guide

### Prerequisites

1. **GitHub Account** - Repository hosting
2. **Netlify Account** - Sign up at https://app.netlify.com (free)
3. **Supabase Account** - For backend services (optional but recommended)

### Step 1: Repository Setup

Your repository should have these files (already included):

```
✅ netlify.toml          # Netlify configuration
✅ vite.config.ts        # Build configuration (static preset)
✅ public/_redirects     # SPA routing rules
✅ .env.example          # Environment variables template
✅ package.json          # Dependencies and scripts
```

### Step 2: Connect to Netlify

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** as your Git provider
4. Authorize Netlify to access your repositories
5. Select `ai-ml-engineer-portfolio` repository
6. Build settings will be auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `.output/public`
   - **Node version:** `20`

7. Click **"Deploy site"**

### Step 3: Configure Environment Variables

Go to **Site settings → Environment variables** and add:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-public-key
VITE_SUPABASE_PROJECT_ID=your-project-id
```

**Where to find these:**
1. Go to https://supabase.com/dashboard
2. Select your project
3. Settings → API
4. Copy the values

After adding variables, trigger a new deploy:
- Deploys tab → **"Trigger deploy"** → **"Deploy site"**

### Step 4: Custom Domain (Optional)

1. **Site settings → Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Netlify provides free SSL automatically

---

## 🔧 Configuration Explained

### netlify.toml

```toml
[build]
  command = "npm run build"    # Build command
  publish = ".output/public"   # Deploy directory
  
[build.environment]
  NODE_VERSION = "20"          # Node.js version

[[redirects]]
  from = "/*"
  to = "/index.html"           # SPA routing
  status = 200
```

This tells Netlify:
- Run `npm run build` to build the project
- Deploy files from `.output/public`
- Use Node.js version 20
- Redirect all routes to index.html for client-side routing

### vite.config.ts

```typescript
export default defineConfig({
  nitro: {
    preset: "static",         // Static site generation
    serveStatic: true,        # Serve all files as static
    prerender: {
      crawlLinks: true,       # Pre-render linked pages
      routes: ["/"],          # Start from homepage
    },
  },
});
```

This configures:
- Static site generation (no serverless functions)
- All assets served as static files
- Optimal performance for Netlify CDN

---

## 🏗️ Build Process

### What Happens on Deploy

```
1. Netlify detects push to main branch
   ↓
2. Pulls latest code from GitHub
   ↓
3. Runs npm install (installs dependencies)
   ↓
4. Runs npm run build
   ↓
5. Vite builds with static preset
   ↓
6. Generates .output/public/ directory
   ├── index.html
   ├── assets/ (JS, CSS, images)
   ├── favicon.ico
   └── robots.txt
   ↓
7. Deploys to Netlify CDN
   ↓
8. Site is live! ✨
```

### Build Time

- **Clean build:** 2-4 minutes
- **Cached build:** 1-2 minutes

---

## 🎯 Deployment Workflow

### Automatic Deployment

Every push to `main` branch automatically triggers deployment:

```
git add .
git commit -m "Update portfolio"
git push origin main
    ↓
Netlify detects push
    ↓
Builds and deploys
    ↓
Live in 2-4 minutes
```

### Manual Deployment

To manually trigger a deploy:
1. Go to Netlify dashboard
2. **Deploys tab**
3. Click **"Trigger deploy"** → **"Deploy site"**

### Clear Cache and Redeploy

If you encounter issues:
1. **Deploys tab**
2. **"Trigger deploy"** → **"Clear cache and deploy site"**
3. This forces a fresh build without cache

---

## 📊 Monitoring Your Site

### Netlify Dashboard

**Deploys Tab:**
- View deploy history
- Check build logs
- Rollback to previous deploys

**Analytics** (Optional, Paid):
- Page views
- Unique visitors
- Traffic sources

**Functions** (Not used in this setup):
- This project uses static generation
- No serverless functions needed

### Build Logs

Check build logs for errors:
1. Go to **Deploys** tab
2. Click on a deploy
3. View full build log

**Success looks like:**
```
✓ Built in 45s
✓ Nitro built in 2s
Site is live ✨
```

**Failure looks like:**
```
ERROR: Cannot find module
Build failed
```

---

## 🔍 Troubleshooting

### 404 Page Not Found

**Cause:** Old cached build or incorrect configuration

**Fix:**
1. Verify `netlify.toml` exists in repository root
2. Check `vite.config.ts` has `preset: "static"`
3. Trigger deploy with cache cleared
4. Wait 3-5 minutes for build

### Build Fails

**Common causes:**
- Missing dependencies
- Wrong Node version
- Syntax errors in code
- Missing environment variables

**Fix:**
1. Check build log for specific error
2. Verify Node version is 20
3. Run `npm install` and `npm run build` locally
4. Fix any errors before pushing

### Images Not Loading

**Cause:** Images not in `src/assets/` or wrong import path

**Fix:**
1. Verify images are in `src/assets/`
2. Import images: `import img from "@/assets/image.jpg"`
3. Use imported variable: `<img src={img} />`
4. Never use string paths: `<img src="/assets/image.jpg" />`

### Environment Variables Not Working

**Cause:** Variables not set in Netlify or wrong prefix

**Fix:**
1. Go to **Site settings → Environment variables**
2. Ensure all `VITE_*` variables are set
3. Variables must start with `VITE_` to be exposed to client
4. After adding, trigger new deploy

---

## 🚀 Optimization Tips

### Performance

- ✅ Images automatically optimized by Vite
- ✅ CSS/JS automatically minified
- ✅ Cache headers configured for 1 year
- ✅ CDN distribution worldwide

### SEO

- ✅ Meta tags in `__root.tsx`
- ✅ `robots.txt` in public folder
- ✅ Sitemap generation (add if needed)
- ✅ Fast loading times (good for SEO)

### Security

- ✅ HTTPS enabled automatically
- ✅ Security headers configured
- ✅ No exposed API keys (use `VITE_` prefix carefully)

---

## 📝 Continuous Deployment Checklist

Before every deployment:

- [ ] Test locally: `npm run build && npm run preview`
- [ ] Check for console errors
- [ ] Verify all images load
- [ ] Test navigation works
- [ ] Check mobile responsiveness
- [ ] Update environment variables if needed
- [ ] Push to GitHub
- [ ] Wait for Netlify deploy
- [ ] Verify live site works

---

## 🌐 Your Live Site

After successful deployment, your portfolio will be available at:

**Default URL:** `https://[site-name].netlify.app`

**Custom Domain:** Configure in Netlify dashboard

**Example:** https://priyanshukalondia.netlify.app

---

## 📚 Additional Resources

- **Netlify Documentation:** https://docs.netlify.com/
- **Netlify Support Forums:** https://answers.netlify.com/
- **TanStack Start Docs:** https://tanstack.com/start
- **Vite Documentation:** https://vitejs.dev/
- **Project Documentation:**
  - `NETLIFY_DEPLOYMENT.md` - Detailed deployment guide
  - `NETLIFY_CHECKLIST.md` - Testing checklist
  - `NETLIFY_404_FIX.md` - Troubleshooting guide

---

## 💡 Pro Tips

1. **Use Deploy Previews:** Enable branch deploys for testing before merging
2. **Monitor Build Times:** Keep builds fast by optimizing dependencies
3. **Use Environment Variables:** Never commit secrets to repository
4. **Enable Notifications:** Get Slack/Discord/Email alerts for deploys
5. **Keep Node Updated:** Match local Node version with Netlify (v20)
6. **Use Git Tags:** Tag releases for easy rollback
7. **Test Locally First:** Always build locally before pushing

---

## 🎉 Success Indicators

Your deployment is successful when:

- ✅ Build completes without errors
- ✅ Deploy log shows "Site is live"
- ✅ Homepage loads without 404
- ✅ All images display correctly
- ✅ Navigation works smoothly
- ✅ Resume downloads properly
- ✅ Contact form submits
- ✅ No console errors in browser
- ✅ Mobile version works
- ✅ Lighthouse score > 90

---

## 🆘 Need Help?

If you encounter any issues:

1. Check the build log in Netlify dashboard
2. Review this documentation
3. Read `NETLIFY_404_FIX.md` for common issues
4. Post in Netlify Support Forums with:
   - Your site URL
   - Error message
   - Build log (sanitize secrets)
   - What you've tried

---

**Built for Netlify. Optimized for Performance. Ready to Deploy.** 🚀

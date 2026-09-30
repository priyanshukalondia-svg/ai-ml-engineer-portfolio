# Fixing "Page not found" on Netlify

## Problem
Your site shows "Page not found" when deployed to Netlify, even though it works locally.

## Root Cause
TanStack Start with the Lovable config defaults to a Cloudflare/Vercel preset. The build output structure might not match what Netlify expects for serverless functions.

## Solution Applied

### Changed Configuration

**1. Updated `vite.config.ts`** to use static preset:
```typescript
nitro: {
  preset: "static",  // Changed from "netlify"
  serveStatic: true,
  prerender: {
    crawlLinks: true,
    routes: ["/"],
  },
}
```

**2. Simplified `netlify.toml`**:
- Removed functions directory
- Simple SPA redirect: `/* → /index.html`
- Static site deployment

### Why This Works

1. **Static Build**: Generates a complete static site that Netlify can serve directly
2. **SPA Routing**: All requests go to `index.html`, then React Router handles routing
3. **No Serverless**: Avoids Netlify Functions complexity for a pure client-side app
4. **Images Bundled**: Vite includes all assets in the static build

## Steps to Deploy

### 1. Commit Changes
```bash
git add .
git commit -m "Fix Netlify deployment - use static preset"
git push origin main
```

### 2. Clear Netlify Cache (Important!)
In Netlify Dashboard:
1. Go to your site
2. Site settings → Build & deploy → Post processing
3. Scroll to "Asset optimization"
4. Click "Clear cache and retry deploy"

OR trigger a new deploy:
1. Go to Deploys tab
2. Click "Trigger deploy" → "Clear cache and deploy site"

### 3. Add Environment Variables
If not already added, go to Site settings → Environment variables:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
VITE_SUPABASE_PROJECT_ID=your-project-id
```

### 4. Wait for Deploy
- Build should complete in 2-5 minutes
- Watch the deploy log for errors
- Once complete, visit your site

## Verification Checklist

After deployment, verify:
- [ ] Homepage loads (no 404)
- [ ] All sections visible
- [ ] Images display correctly
- [ ] Navigation works (scroll to sections)
- [ ] Resume PDF downloads
- [ ] Contact form works
- [ ] Browser console has no errors

## If Still Getting 404

### Check Build Log

Look for these in the Netlify deploy log:

**Good signs:**
```
✓ Built in XXX ms
✓ Nitro built in XXX ms
Publishing directory: .output/public
```

**Bad signs:**
```
Error: Cannot find module...
Build failed
```

### Common Issues & Fixes

#### Issue 1: Build Fails
**Error**: "Cannot find module" or dependency errors

**Fix**:
```bash
# Locally
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "Update lock file"
git push
```

#### Issue 2: Empty .output/public
**Error**: Build succeeds but site is still 404

**Fix**: Check build log for the actual publish directory. It might be:
- `.output/public` (expected)
- `dist` (wrong)
- `.nitro/public` (wrong)

Update `netlify.toml` publish directory if different.

#### Issue 3: Index.html Missing
**Error**: Publish directory exists but no index.html

**Fix**: The static preset should generate index.html. If missing:

1. Try building locally:
```bash
npm run build
ls .output/public  # Should see index.html
```

2. If index.html exists locally but not on Netlify, check:
   - `.gitignore` isn't excluding build files
   - Build command in Netlify matches local

#### Issue 4: Routing Loops
**Error**: Page reloads infinitely

**Fix**: Check `netlify.toml` redirects:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200  # NOT 301 or 302
```

## Alternative: Use Vercel Instead

If Netlify continues to have issues, this project works perfectly on Vercel:

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel auto-detects TanStack Start
4. Add environment variables
5. Deploy

No configuration needed - works out of the box!

## Debugging Commands

### Local Build Test
```bash
# Clean build
rm -rf .output node_modules
npm install
npm run build

# Check output
ls -la .output/public

# Should see:
# - index.html
# - assets/ (folder with CSS, JS, images)
# - favicon.ico
# - robots.txt
```

### Local Preview
```bash
npm run preview
# Visit http://localhost:4173
# Should work like production
```

### Netlify CLI Test
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and test locally
netlify build
netlify dev
```

## Check Netlify Deploy Log

Look for these specific messages:

### Successful Build
```
8:03:45 PM: build-image version: 123abc
8:03:45 PM: buildbot version: 456def
8:03:45 PM: Building without cache
8:03:45 PM: Starting to prepare the repo for build
8:03:47 PM: Downloading and installing node v20...
8:03:50 PM: npm install
8:05:23 PM: npm run build
8:06:45 PM: ✓ Nitro built in 1234ms
8:06:45 PM: Publishing directory: .output/public
8:06:46 PM: Finished processing build request in 3m15s
```

### Failed Build
```
8:03:45 PM: npm run build
8:04:23 PM: ERROR: Cannot find module '@tanstack/...'
8:04:23 PM: Build failed
```

## Contact Support

If none of these solutions work:

1. Check the build log in Netlify Dashboard
2. Copy any error messages
3. Post in [Netlify Support Forums](https://answers.netlify.com/)
4. Include:
   - Your site URL
   - Deploy log (sanitize any secrets)
   - Error message
   - What you've tried

## Success Criteria

You'll know it's working when:
- ✅ Netlify deploy log shows "Published"
- ✅ Site URL loads the portfolio homepage
- ✅ All images are visible
- ✅ No 404 errors
- ✅ Browser console is clean (no errors)

---

## Updated Files

The following files have been updated to fix the 404:

1. ✅ `vite.config.ts` - Static preset
2. ✅ `netlify.toml` - Simplified config
3. ✅ `NETLIFY_404_FIX.md` - This guide

**Next step**: Commit and push, then trigger a new Netlify deploy with cache cleared.

---

**Pro Tip**: If you're still having issues, temporarily try deploying to Vercel to verify your build works. If it works on Vercel but not Netlify, the issue is Netlify-specific configuration. If it fails on both, the issue is in your code/build.

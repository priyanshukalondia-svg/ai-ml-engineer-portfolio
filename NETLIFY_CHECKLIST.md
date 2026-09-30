# Netlify Deployment Checklist ✓

Use this checklist to ensure your deployment to Netlify is successful.

## Pre-Deployment Checklist

### 1. Configuration Files ✓
- [x] `netlify.toml` - Build and deployment configuration
- [x] `vite.config.ts` - Updated with Netlify preset
- [x] `public/_redirects` - Fallback redirect rules
- [x] `.gitignore` - Includes `.output` directory
- [x] `.env.example` - Template for environment variables

### 2. Dependencies ✓
- [x] All dependencies in `package.json`
- [x] Node version specified (20) in `netlify.toml`
- [x] Build scripts defined in `package.json`

### 3. Assets ✓
- [x] Images in `src/assets/` directory
- [x] Images imported using `@/assets/` path alias
- [x] PDF resume in `src/assets/`
- [x] Favicon in `public/`
- [x] robots.txt in `public/`

### 4. Code Quality ✓
- [x] No hardcoded localhost URLs
- [x] Environment variables properly configured
- [x] Relative paths for all assets
- [x] Proper error handling in place

## Netlify Setup Steps

### 1. Connect Repository
1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select your Git provider (GitHub recommended)
4. Authorize Netlify to access your repositories
5. Select this repository: `ai-ml-engineer-portfolio`

### 2. Build Settings (Auto-detected from netlify.toml)
Netlify should automatically detect these settings. Verify they match:

- **Base directory**: (leave blank)
- **Build command**: `npm run build`
- **Publish directory**: `.output/public`
- **Functions directory**: `.output/server`

### 3. Environment Variables
Add these in Netlify Dashboard → Site settings → Environment variables:

**Required:**
```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_PUBLISHABLE_KEY=your-publishable-key
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
VITE_SUPABASE_PROJECT_ID=your-project-id
```

**Optional:**
```
SUPABASE_PROJECT_ID=your-project-id
```

**Where to find these values:**
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings → API
4. Copy:
   - Project URL → `SUPABASE_URL` and `VITE_SUPABASE_URL`
   - `anon` `public` key → `SUPABASE_PUBLISHABLE_KEY` and `VITE_SUPABASE_PUBLISHABLE_KEY`
   - Reference ID → `SUPABASE_PROJECT_ID` and `VITE_SUPABASE_PROJECT_ID`

### 4. Deploy
1. Click "Deploy site"
2. Wait for the build to complete (2-5 minutes)
3. Check the deploy log for any errors
4. Visit your site at the generated Netlify URL

## Post-Deployment Checklist

### 1. Verify Site Functionality
- [ ] Homepage loads correctly
- [ ] All sections visible (About, Projects, Record, Contact)
- [ ] Images load properly (check all project images)
- [ ] Navigation works (scroll to sections)
- [ ] Resume PDF downloads correctly
- [ ] External links open in new tabs
- [ ] Contact form submits successfully

### 2. Verify Assets
Check these images specifically:
- [ ] Hero image (ai-system-hero.jpg)
- [ ] SentinelML project image (sentinelml.png)
- [ ] Agentic RAG project image (agentic-rag.png)
- [ ] Sentry project image (sentry.png)
- [ ] E-commerce dashboard (ecommerce-intelligence.jpg)
- [ ] Customer segmentation (customer-segmentation.jpg)
- [ ] Spotify analysis (listening-analysis.jpg)
- [ ] Divider images (3 total)
- [ ] Contact visual (contact-visual.jpg)
- [ ] Resume PDF (priyanshu-kalondia-resume.pdf)

### 3. Verify Performance
- [ ] Page loads in < 3 seconds
- [ ] Images are cached (check browser dev tools)
- [ ] No console errors
- [ ] Mobile responsive design works
- [ ] Lighthouse score > 90 (optional but recommended)

### 4. Verify SEO
- [ ] Meta tags present in `<head>`
- [ ] Open Graph tags for social sharing
- [ ] Favicon displays correctly
- [ ] robots.txt accessible

### 5. Test Different Browsers
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers

### 6. Test Different Scenarios
- [ ] Direct URL access (e.g., visit `yourdomain.netlify.app` directly)
- [ ] Refresh page (should not get 404)
- [ ] Deep linking to sections (e.g., `#projects`, `#contact`)
- [ ] External link sharing (share URL on social media)

## Troubleshooting Common Issues

### Build Fails
**Problem**: Build fails with module not found
**Solution**: 
```bash
# Locally, delete node_modules and reinstall
rm -rf node_modules
npm install

# Push changes and redeploy
git add .
git commit -m "Fix dependencies"
git push
```

### Images Don't Load
**Problem**: 404 errors on images
**Solution**:
1. Check images exist in `src/assets/`
2. Verify imports in `src/routes/index.tsx` use `@/assets/` alias
3. Check build log for asset processing errors
4. Ensure images are not in `.gitignore`

### Environment Variables Not Working
**Problem**: Supabase errors or "Missing environment variable"
**Solution**:
1. Go to Site settings → Environment variables
2. Ensure all `VITE_*` variables are set
3. Redeploy the site (variables are only applied on new deploys)
4. Check deploy log to verify variables are available

### Routing Issues
**Problem**: Direct URLs return 404
**Solution**:
1. Check `netlify.toml` has redirect rules
2. Verify `.output/server` directory exists after build
3. Check Functions are deployed (Site settings → Functions)

### Contact Form Not Working
**Problem**: Form submission fails
**Solution**:
1. Check Supabase environment variables are correct
2. Verify Supabase project is active
3. Check browser console for error messages
4. Test Supabase connection directly

## Custom Domain Setup (Optional)

### 1. Add Custom Domain
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `yourname.com`)

### 2. Configure DNS
**Option A: Netlify DNS (Recommended)**
1. Change nameservers at your domain registrar to Netlify's
2. Netlify will manage all DNS records

**Option B: External DNS**
Add these records at your DNS provider:
```
Type: A
Name: @ (or your domain)
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

### 3. Enable HTTPS
1. Netlify provides free SSL via Let's Encrypt
2. Enable "Force HTTPS" in Domain settings
3. Wait for certificate provisioning (up to 24 hours)

## Continuous Deployment

Once set up, every push to your repository triggers:
1. Netlify detects the push
2. Runs `npm run build`
3. Tests the build
4. Deploys if successful
5. Rolls back if failed

### Branch Deploys (Optional)
Enable branch deploys for testing:
1. Go to Site settings → Build & deploy → Continuous deployment
2. Enable "Branch deploys"
3. Choose "All" or specific branches
4. Each branch gets its own preview URL

## Monitoring and Analytics

### Netlify Analytics (Optional, Paid)
- Server-side analytics (no cookies needed)
- Real visitor data
- No client-side JavaScript required

### External Analytics (Free Options)
Consider adding:
- Google Analytics 4
- Plausible Analytics
- Cloudflare Web Analytics

Add tracking code to `src/routes/__root.tsx` in the `head()` function.

## Support Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Support Forum](https://answers.netlify.com/)
- [TanStack Start Docs](https://tanstack.com/start)
- [Nitro Netlify Preset](https://nitro.unjs.io/deploy/providers/netlify)

## Success! 🎉

Your AI/ML Engineer Portfolio is now live on Netlify!

**Next Steps:**
1. Share your portfolio URL
2. Update your resume with the link
3. Add the link to your GitHub profile
4. Share on LinkedIn and Twitter
5. Keep building and deploying new projects!

---

**Pro Tips:**
- Enable deploy notifications (Slack, Discord, Email)
- Set up deploy previews for PRs
- Use Netlify CLI for local testing: `netlify dev`
- Monitor build times and optimize if needed
- Keep dependencies updated for security

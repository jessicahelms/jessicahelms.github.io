# Quick Start Guide: Run & Deploy Your Portfolio

## 1. TEST LOCALLY (Right Now)

**Easiest way:** Just open the file in your browser
```bash
# Navigate to your Portfolio folder and double-click index.html
# Or from command line:
cd c:/Users/jessh/repos/Portfolio
start index.html
```

That's it—it should open in your browser and work perfectly.

---

## 2. GO LIVE (Choose One Option Below)

### OPTION A: GitHub Pages (FREE, Easiest) ⭐ RECOMMENDED

**Step 1: Create a GitHub account** (if you don't have one)
- Go to https://github.com/signup
- Sign up with email

**Step 2: Create a repository**
- Go to https://github.com/new
- Name it: `yourname.github.io` (replace "yourname" with your actual GitHub username)
- Description: "Portfolio Website"
- Make it **Public**
- Click "Create Repository"

**Step 3: Upload your files**
- Click "uploading an existing file" link (or use the upload button)
- Drag & drop all files from your Portfolio folder:
  - `index.html`
  - `styles/` folder with `main.css`
  - `scripts/` folder with `main.js` and `animations.js`
  - `data.json`
  - `README.md`

**Step 4: Go live**
- Wait 1 minute
- Visit: `https://yourname.github.io`
- **Your site is now LIVE!** 🎉

**To get a custom domain (yourname.com):**
- Buy a domain from GoDaddy, Namecheap, or Google Domains (~$10-15/year)
- In your GitHub repo → Settings → Pages
- Under "Custom domain," enter your domain name
- Follow the DNS setup instructions (usually just 2-3 copy/paste steps)
- Wait 5-10 minutes for it to propagate
- Your site is now at `yourname.com`

---

### OPTION B: Netlify (FREE, Also Easy)

**Step 1: Connect to GitHub**
- Go to https://netlify.com
- Click "Sign up"
- Choose "GitHub"
- Authorize Netlify

**Step 2: Create a repo and push code** (requires git)
```bash
cd c:/Users/jessh/repos/Portfolio
git add .
git commit -m "Initial portfolio"
git push origin main
```

**Step 3: Deploy**
- In Netlify: Click "Add new site" → "Import an existing project"
- Select your Portfolio repo
- Click "Deploy"
- Wait ~1 minute
- **Site is LIVE at:** `random-name-12345.netlify.app`

**To get a custom domain:**
- Buy domain from GoDaddy/Namecheap/Google Domains (~$10-15/year)
- In Netlify: Domain Settings → "Add custom domain"
- Follow DNS instructions

---

### OPTION C: Traditional Web Hosting (if you already have hosting)

If you have web hosting (like Bluehost, HostGator, etc.):

1. Use FTP/SFTP to upload files to your `public_html` folder
2. Files should be accessible at your domain

---

## 3. MY RECOMMENDATION

**For you: Use GitHub Pages**

✅ **Why:**
- Completely free (including free SSL/HTTPS)
- GitHub integrates with your portfolio code (bonus for PhD programs—shows you use Git!)
- Custom domain setup is simple
- Automatic updates—just push changes and they go live instantly

---

## 4. UPDATE WEBAPP LINKS

Before going live, edit `index.html` and replace:
- Line ~445: Replace `[Add your data visualizer link]` with actual URL
- Line ~456: Replace `[Add brain segmentation tool link]` with actual URL

---

## 5. QUICK CHECKLIST

- [ ] Test locally by opening `index.html` in browser
- [ ] Verify all content is correct (CV data, contact info)
- [ ] Add your webapp links
- [ ] Create GitHub account (or sign up for Netlify)
- [ ] Push code to GitHub OR upload to Netlify
- [ ] Test that site is accessible online
- [ ] (Optional) Buy custom domain and connect it
- [ ] Share link with PhD programs! 🎓

---

## AFTER DEPLOYMENT

**To make updates:**

1. **Edit locally:** Make changes to files in your Portfolio folder
2. **Push to GitHub:**
   ```bash
   cd c:/Users/jessh/repos/Portfolio
   git add .
   git commit -m "Update [what changed]"
   git push origin main
   ```
3. **Site updates automatically** (~1 minute)

---

## DOMAIN NAMES TO CONSIDER

- `jessicahelms.com`
- `jessica-helms.com`
- `jessicahelmsresearch.com`
- `jessicahelms.dev` (cheaper, looks technical!)

---

**Questions?** Let me know and I'll walk you through the specific steps!

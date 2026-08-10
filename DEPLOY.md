# 🚀 Deploy AI Screen Recorder

**Project Location:** `/home/ubuntu/projects/ai-screen-recorder/`
**Build Output:** `/home/ubuntu/projects/ai-screen-recorder/dist/`

---

## 📦 Deployment Options

### Option 1: Netlify Drop (EASIEST - No Account Needed)
1. Go to: https://app.netlify.com/drop
2. Drag & drop the `dist/` folder
3. Done! Get your URL instantly

### Option 2: Vercel (Recommended)
1. Go to: https://vercel.com/new
2. Import from GitHub (you need to create repo first)
3. Or use CLI:
   ```bash
   npm i -g vercel
   cd ~/projects/ai-screen-recorder
   vercel --prod
   ```

### Option 3: GitHub Pages
1. Create GitHub repo: https://github.com/new
2. Name: `ai-screen-recorder`
3. Make it public
4. Push code:
   ```bash
   cd ~/projects/ai-screen-recorder
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Azzzz/ai-screen-recorder.git
   git push -u origin main
   ```
5. Go to Settings → Pages → Deploy from main branch

### Option 4: Cloudflare Pages
1. Go to: https://dash.cloudflare.com/pages
2. Create a new project
3. Connect to GitHub
4. Build command: `npm run build`
5. Output: `dist`

---

## 🎯 Quick Start (Recommended)

**Step 1:** Create GitHub Repo
- Visit: https://github.com/new
- Repo name: `ai-screen-recorder`
- Make it **Public**
- Don't add README (we have one)

**Step 2:** Push to GitHub
```bash
cd ~/projects/ai-screen-recorder
git init
git config user.email "ridhoefendi02@gmail.com"
git config user.name "Azzzz"
git add .
git commit -m "Initial commit: AI Screen Recorder MVP"
git remote add origin https://github.com/Azzzz/ai-screen-recorder.git
git push -u origin main
```

**Step 3:** Deploy to Vercel
- Go to: https://vercel.com/new
- Import your GitHub repo
- Click Deploy
- Get your live URL!

---

## 📋 Files Ready for Deploy

```
dist/
├── index.html          (1.06 KB)
└── assets/
    ├── index-*.css     (14.5 KB)
    └── index-*.js      (159 KB)
```

**Total size:** ~175 KB (very lightweight!)

---

## ✅ Pre-Deploy Checklist

- [x] Build successful
- [x] Payment links in README
- [x] Sponsor buttons in UI
- [x] Crypto address added
- [x] Email contact added
- [ ] GitHub repo created
- [ ] Code pushed to GitHub
- [ ] Deployed to hosting

---

## 💡 Need Help?

Just let me know which option you want to use and I'll guide you through it! 🚀

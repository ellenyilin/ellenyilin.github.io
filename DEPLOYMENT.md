# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages using your existing `yilin.github.io` repository.

## 🚀 Quick Deployment Steps

### Option 1: Replace Existing Files (Recommended)
1. **Navigate to your GitHub repository**: Go to `/Users/wangyilin/Desktop/2025Summer/yilin.github.io/`
2. **Backup existing files** (optional): Rename current `index.html` to `index-backup.html`
3. **Copy new files**: Copy all files from this folder to your GitHub repository folder
4. **Add background image**: Copy your `background.jpg` from the images folder to the new `images/` folder
5. **Commit and push**:
   ```bash
   cd "/Users/wangyilin/Desktop/2025Summer/yilin.github.io"
   git add .
   git commit -m "Update portfolio with new design"
   git push origin main
   ```

### Option 2: Create New Repository
1. **Create new repository**: Create a new repository named `yilin.github.io`
2. **Upload files**: Upload all files from this folder to the repository
3. **Enable GitHub Pages**: 
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Click "Save"
4. **Access your site**: Visit `https://yilin.github.io`

## 📁 File Structure After Deployment

Your GitHub repository should look like this:
```
yilin.github.io/
├── index.html
├── style.css
├── script.js
├── images/
│   └── background.jpg
└── README.md
```

## 🎨 Customization Before Deployment

### 1. Update Personal Information
Edit `index.html` to replace placeholder content:
- Your name and title
- About section content
- Skills and technologies
- Project descriptions and links
- Contact information

### 2. Add Your Background Image
- Place your background image in the `images/` folder
- Name it `background.jpg`
- Recommended size: 1920x1080px or similar

### 3. Update Project Links
Replace `#` placeholders with actual URLs:
- GitHub repository links
- Live demo links
- Portfolio gallery links

### 4. Update Contact Information
- Email address
- Social media links
- Location information

## 🔧 GitHub Pages Settings

1. **Repository Settings**:
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" section

2. **Source Configuration**:
   - Source: "Deploy from a branch"
   - Branch: "main" (or "master")
   - Folder: "/ (root)"

3. **Custom Domain** (optional):
   - If you have a custom domain, add it in the "Custom domain" field
   - Add a CNAME file to your repository root

## 🚨 Troubleshooting

### Common Issues:

1. **Site not updating**:
   - Wait 5-10 minutes for GitHub Pages to rebuild
   - Check if there are any build errors in the Actions tab

2. **Background image not showing**:
   - Ensure the image is named `background.jpg`
   - Check the file path in CSS: `url('images/background.jpg')`
   - Verify the image is committed to the repository

3. **Mobile menu not working**:
   - Check browser console for JavaScript errors
   - Ensure `script.js` is properly linked in HTML

4. **Styling issues**:
   - Verify `style.css` is properly linked
   - Check for any CSS syntax errors
   - Clear browser cache

### Debug Steps:
1. Open browser developer tools (F12)
2. Check Console tab for errors
3. Check Network tab for failed resource loads
4. Verify all file paths are correct

## 📱 Testing Your Site

Before deploying, test locally:
1. Open `index.html` in your browser
2. Test all navigation links
3. Test mobile responsiveness (resize browser window)
4. Test contact form functionality
5. Verify all images load correctly

## 🔄 Updating Your Site

To update your portfolio:
1. Make changes to files locally
2. Test changes in browser
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
4. Wait 5-10 minutes for GitHub Pages to rebuild

## 📞 Support

If you encounter any issues:
1. Check the GitHub Pages documentation
2. Verify all file paths and names are correct
3. Ensure all files are committed to the repository
4. Check the repository's Actions tab for build errors

Your portfolio should be live at `https://yilin.github.io` once deployed successfully!

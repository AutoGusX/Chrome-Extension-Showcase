# 🚀 Deployment Guide

This guide will help you deploy your Chrome Extensions Showcase to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Chrome Extensions Showcase files (completed)

## 🎯 Quick Deployment Steps

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `chrome-extensions-showcase` or `my-extensions`
3. Make it **public** (required for free GitHub Pages)
4. Don't initialize with README (we already have files)

### 2. Upload Your Files

**Option A: Using Git (Recommended)**
```bash
# Navigate to your project directory
cd chrome-extensions-showcase

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Chrome Extensions Showcase"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Option B: Using GitHub Web Interface**
1. Go to your repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop all files from your `chrome-extensions-showcase` folder
4. Commit the changes

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)**
6. Click **Save**

### 4. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

It may take 5-10 minutes for the site to be live after enabling Pages.

## 🔧 Customization

### Update Content

1. **Edit Extension Information**: Modify the extension tiles in `README.md`
2. **Add Your Extensions**: Create new `.md` files in the `extensions/` folder
3. **Update Navigation**: Edit `_sidebar.md` to add new extensions
4. **Change Branding**: Update the hero section with your information

### Add Your Extensions

1. Create a new file: `extensions/your-extension-name.md`
2. Use the existing extension pages as templates
3. Add your extension to the main `README.md` file
4. Update `_sidebar.md` with the new extension

### Add Videos

1. Upload videos to YouTube, Vimeo, or similar
2. Replace the video placeholder in extension pages:
```html
<iframe width="100%" height="400" 
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        frameborder="0" 
        allowfullscreen>
</iframe>
```

### Add Screenshots

1. Create a `media/` folder in your repository
2. Upload extension screenshots
3. Update image paths in extension pages:
```html
<img src="../media/your-screenshot.png" alt="Screenshot" />
```

## 🌐 Custom Domain (Optional)

If you have your own domain:

1. Edit the `CNAME` file in your repository
2. Replace the commented content with your domain:
```
your-domain.com
```
3. Configure your domain's DNS to point to GitHub Pages
4. In your repository settings, enter your custom domain in the Pages section

## 🔄 Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update extensions showcase"
git push
```

Changes will be live within a few minutes.

## 🎨 Advanced Customization

### Color Scheme
Edit CSS variables in `assets/style.css`:
```css
:root {
  --primary-color: #your-color;
  --accent-color: #your-accent;
  /* ... */
}
```

### Layout
- Modify grid layouts in the CSS
- Adjust breakpoints for mobile responsiveness
- Customize animations and transitions

### Functionality
- Add new filter categories
- Customize JavaScript behaviors
- Add analytics tracking

## 🐛 Troubleshooting

### Site Not Loading
- Check that repository is public
- Verify GitHub Pages is enabled
- Wait 10-15 minutes for changes to propagate

### Styles Not Working
- Ensure all file paths are correct
- Check for typos in HTML/CSS
- Verify all assets are uploaded

### Search Not Working
- Docsify search plugin loads automatically
- Clear browser cache if issues persist

### Custom Domain Issues
- Verify CNAME file is in repository root
- Check DNS settings with your domain provider
- May take up to 24 hours for DNS changes

## 📞 Support

If you encounter issues:

1. Check the browser console for errors
2. Verify all files are uploaded correctly
3. Compare with the working template structure
4. Search GitHub Pages documentation for specific issues

## 🎉 You're Live!

Congratulations! Your Chrome Extensions Showcase is now live on the web. Share your URL with others to showcase your amazing extensions!

Remember to:
- Update content regularly
- Add new extensions as you develop them
- Keep screenshots and videos current
- Monitor user feedback and engagement 
# Ellen Yilin - Personal Portfolio

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features a clean design, smooth animations, and mobile-first responsive layout. Designed for GitHub Pages deployment.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, mobile navigation, form validation
- **GitHub Pages Ready**: Optimized for free GitHub Pages hosting
- **Background Image Support**: Uses your existing background image from the images folder
- **Fast Loading**: Optimized CSS and JavaScript for quick page loads
- **Accessibility**: Built with accessibility best practices in mind

## 📁 Project Structure

```
personal_page/
├── index.html          # Main HTML file
├── style.css           # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── images/             # Background images folder
│   └── background.jpg  # Hero section background
└── README.md           # This file
```

## 🛠️ Setup Instructions

### Local Development
1. **Download Files**: Download all files to your local machine
2. **Add Background Image**: Place your background image in the `images/` folder as `background.jpg`
3. **Open in Browser**: Simply open `index.html` in any modern web browser
4. **Customize Content**: Edit the HTML file to add your personal information

### GitHub Pages Deployment
1. **Create Repository**: Create a new repository named `yilin.github.io` (or your username)
2. **Upload Files**: Upload all files to the repository root
3. **Enable Pages**: Go to repository Settings > Pages > Source: Deploy from a branch > main
4. **Access Site**: Your site will be available at `https://yilin.github.io`

## 🎨 Customization Guide

## 🎨 Customization Guide

### Personal Information
Edit the following sections in `index.html`:

#### Navigation & Hero Section
```html
<!-- Update your name in navigation -->
<div class="nav-logo">
    <a href="#home">Your Name</a>
</div>

<!-- Update hero content -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<h2 class="hero-subtitle">Your Job Title</h2>
<p class="hero-description">
    Your professional description...
</p>
```

#### About Section
```html
<!-- Update about content -->
<p>
    Your personal story and professional background...
</p>

<!-- Update statistics -->
<div class="stat">
    <h3>50+</h3>
    <p>Projects Completed</p>
</div>
```

#### Skills Section
Update the skills in the three categories:
- **Frontend**: React, Vue.js, JavaScript, etc.
- **Backend**: Node.js, Python, Express, etc.
- **Tools & Others**: Git, Docker, AWS, etc.

#### Projects Section
Replace the placeholder projects with your actual work:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-laptop-code"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-live-demo-url" class="btn btn-small">Live Demo</a>
            <a href="your-github-url" class="btn btn-small btn-outline">GitHub</a>
        </div>
    </div>
</div>
```

#### Contact Section
Update your contact information:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+1 (555) 123-4567</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, Country</span>
</div>
```

Update social media links:
```html
<div class="social-links">
    <a href="your-github-url" class="social-link"><i class="fab fa-github"></i></a>
    <a href="your-linkedin-url" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="your-twitter-url" class="social-link"><i class="fab fa-twitter"></i></a>
    <a href="your-instagram-url" class="social-link"><i class="fab fa-instagram"></i></a>
</div>
```

### Styling Customization

#### Colors
The main color scheme can be customized in `styles.css`:

```css
/* Primary colors */
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #fbbf24;
    --text-color: #333;
    --background-color: #ffffff;
}
```

#### Fonts
Change the font family in the CSS:

```css
body {
    font-family: 'Your-Font-Name', sans-serif;
}
```

Don't forget to add the font link in the HTML head section.

### Adding Your Photo

1. Replace the profile icon in the hero section with your actual photo
2. Update the CSS for `.profile-image` to use a background image:

```css
.profile-image {
    background-image: url('path-to-your-photo.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    width: 200px;
    height: 200px;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🚀 Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Upload your files
3. Go to repository Settings > Pages
4. Select source branch and save

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be live instantly

### Vercel
1. Connect your GitHub repository
2. Deploy with one click

### Traditional Web Hosting
1. Upload files via FTP to your hosting provider
2. Ensure `index.html` is in the root directory

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Happy coding!** 🎉

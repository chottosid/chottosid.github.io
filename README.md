# chottosid.github.io

This is my personal academic portfolio website built with Next.js and optimized for GitHub Pages.

## Features

- 🎓 **Academic-focused design** - Clean, professional layout suitable for researchers and academics
- 🌙 **Dark/Light mode** - Toggle between themes with automatic system preference detection
- 📱 **Responsive design** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Static site generation** - Fast loading and SEO-optimized
- 🚀 **GitHub Pages ready** - Automatic deployment via GitHub Actions

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information
Edit the following in `app/page.js`:
- Your name and title in the hero section
- Research interests and background in the About section
- Current research projects
- Publications list
- Experience and education
- Contact information and social links

### Styling
- Global styles are in `app/globals.css`
- Color scheme and theme variables are defined in CSS custom properties
- The design uses modern CSS with flexbox and grid layouts

## Deployment to GitHub Pages

This project includes automatic deployment via GitHub Actions:

1. **Automatic Deployment**: Every push to `main` branch triggers a build and deployment
2. **Manual Deployment**: You can also trigger deployment manually from the Actions tab

### Initial Setup for GitHub Pages:
1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy your site

Your site will be available at: `https://chottosid.github.io`

## Project Structure

```
├── app/
│   ├── layout.js          # Root layout with metadata and fonts
│   ├── page.js           # Main homepage component
│   └── globals.css       # Global styles and academic theme
├── public/
│   └── .nojekyll         # Prevents Jekyll processing
├── .github/workflows/
│   └── deploy.yml        # GitHub Actions deployment workflow
├── next.config.js        # Next.js configuration for static export
└── package.json          # Dependencies and scripts
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **CSS3** - Modern styling with custom properties
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static hosting

## Academic Features

- Clean typography optimized for readability
- Professional color scheme suitable for academic content
- Structured sections for research, publications, and experience
- Mobile-responsive design for accessibility
- Dark mode support for comfortable reading
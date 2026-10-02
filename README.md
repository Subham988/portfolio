# Modern Developer & Designer Portfolio

A sleek, responsive, and production-ready personal portfolio website built with modern semantic HTML5, modern CSS3 (with responsive layouts, glassmorphism, CSS variables, and light/dark theme toggle), and vanilla ES6 JavaScript.

## 🚀 Features

- **Theme Toggle**: Seamless Dark Mode / Light Mode with automatic system preference detection and `localStorage` persistence.
- **Hero Showcase**: Interactive code card mockup, glowing ambient backgrounds, status indicator, and social handles.
- **Dynamic Projects Grid**: Real-time category filtering (Full Stack, Frontend / UI, Cloud & AI) with clean cards and live links.
- **Skills Matrix**: Categorized tags for Frontend, Backend, DevOps, and Tools.
- **Career Timeline**: Clean chronological experience milestones.
- **Functional Contact Form**: Client-side validation and simulated dispatch with animated success feedback.
- **Mobile Optimized**: Responsive hamburger menu and fluid typography across all screen sizes.
- **Zero Dependencies**: Pure standard web technologies. No build step or bundlers required.

## 📁 File Structure

```
portfolio/
├── index.html       # Main webpage structure & semantic layout
├── styles.css       # Design system, CSS variables, glassmorphism & responsive media queries
├── script.js        # Theme toggle, filter logic, animations, and form validation
└── README.md        # Documentation and customization guide
```

## 💻 How to View & Run

### Quick View (Direct in Browser)
Simply double-click [`index.html`](file:///Users/subham0514/.gemini/antigravity/scratch/portfolio/index.html) or run in your terminal:

```bash
open /Users/subham0514/.gemini/antigravity/scratch/portfolio/index.html
```

### Local Dev Server (Optional)
If you prefer running via a local HTTP server:

```bash
cd /Users/subham0514/.gemini/antigravity/scratch/portfolio
npx serve .
# or
python3 -m http.server 3000
```
Then visit `http://localhost:3000`.

## 🎨 Customization
- **Personal Details**: Update your name, titles, bio, and social links in [`index.html`](file:///Users/subham0514/.gemini/antigravity/scratch/portfolio/index.html).
- **Colors & Branding**: Modify the `--accent-primary` and `--accent-gradient` variables in [`styles.css`](file:///Users/subham0514/.gemini/antigravity/scratch/portfolio/styles.css).
- **Projects**: Edit or duplicate the `<article class="project-card">` elements in [`index.html`](file:///Users/subham0514/.gemini/antigravity/scratch/portfolio/index.html).

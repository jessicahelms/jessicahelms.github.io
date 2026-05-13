# Jessica Helms – Portfolio Website

A professional, data-driven portfolio website showcasing bioinformatic research, spatial transcriptomics expertise, and computational skills.

## Features

✨ **Interactive & Engaging**
- Animated hero section with particle system
- Scroll reveal animations for all sections
- Smooth navigation and hover effects
- Responsive design across all devices

📊 **Data-Driven Design**
- Skill proficiency visualizations
- Interactive platform/tool displays
- Timeline-based experience layout
- Color-coded research areas

🎨 **Visual Design**
- Professional navy blue, coral, and teal color scheme
- Modern, clean typography
- Scientific yet exciting aesthetic
- Fully responsive layout

## Tech Stack

- **HTML5** – Semantic markup
- **CSS3** – Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** – No frameworks, lightweight interactions
- **Chart.js** – (Available for future data visualizations)

## Getting Started

### Option 1: Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Portfolio.git
cd Portfolio
```

2. Open `index.html` in a web browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

3. Visit `http://localhost:8000` in your browser

### Option 2: Direct Browser

Simply open `index.html` directly in your web browser.

## File Structure

```
Portfolio/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All styling (responsive, animations)
├── scripts/
│   ├── main.js            # Core functionality, animations, canvas
│   └── animations.js      # Interactive elements, hover effects
├── data.json              # Structured data (for future use)
└── README.md             # This file
```

## Customization

### Update Your Information

Edit `data.json` with your information, then update `index.html` sections accordingly.

### Change Colors

Update CSS variables in `styles/main.css`:
```css
:root {
    --primary: #1a3a52;      /* Navy blue */
    --secondary: #e74c3c;    /* Coral red */
    --accent: #17a2b8;       /* Teal cyan */
    /* ... other colors ... */
}
```

### Add Your Links

- Data Visualizer: Replace `[Add your data visualizer link]` in HTML
- Brain Segmentation Tool: Replace `[Add brain segmentation tool link]` in HTML
- Contact: Update email, phone, LinkedIn in the Contact section

## Deployment

### GitHub Pages

1. Create a GitHub repository named `yourusername.github.io`
2. Clone this repository into it
3. Push to GitHub:
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```
4. Access at `https://yourusername.github.io`

### Netlify

1. Drag and drop the `Portfolio` folder to Netlify
2. Or connect your GitHub repository
3. Site goes live instantly

### Traditional Web Hosting

1. Upload files to your web host via FTP/SFTP
2. Access via your domain

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full responsive support

## Performance

- **Lightweight**: No heavy dependencies (~150KB total)
- **Fast loading**: Optimized CSS and vanilla JS
- **Smooth animations**: 60fps performance
- **Mobile optimized**: Responsive and touch-friendly

## Future Enhancements

- [ ] Add Chart.js visualizations for skills matrix
- [ ] Integration with GitHub API to display repos
- [ ] Dark mode toggle
- [ ] Blog/research articles section
- [ ] PDF resume download
- [ ] Three.js background visualizations
- [ ] Content management system (CMS) integration

## SEO

The site includes:
- Proper meta tags and descriptions
- Semantic HTML5 structure
- Fast loading times
- Mobile responsiveness
- Open Graph tags (ready to add)

## Accessibility

- Semantic HTML for screen readers
- Color contrast compliance
- Keyboard navigation support
- Focus states on interactive elements

## License

This portfolio is your personal website. Modify and deploy as needed!

## Contact

For questions about customizing this portfolio, refer to the Contact section on the website.

---

**Built with ❤️ for PhD admissions | 2025**

# Stars and the Underground - Official Website

A modern, responsive website for the music band "Stars and the Underground" featuring a built-in music player, show listings, and band information.

## Features

- 🎵 **Interactive Music Player** - Built-in player with play/pause, next/previous controls
- 🎨 **Modern Dark Theme** - Sleek design with music-focused aesthetics
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Smooth Animations** - Engaging transitions and hover effects
- 🎤 **Band Information** - About section, discography, and upcoming shows
- 📧 **Contact Form** - Working contact form with validation
- 🎯 **Interactive Elements** - Hover effects, ripple buttons, and floating cards

## Sections

- **Hero**: Eye-catching landing with animated music icons
- **About**: Band history, mission, and statistics
- **Music**: Album showcase with track listings and play buttons
- **Shows**: Upcoming concert dates and venues
- **Contact**: Contact information and working contact form
- **Footer**: Social media links and additional information

## Music Player Features

- Floating music player with track information
- Play/pause, previous/next track controls
- Progress bar and time display
- Click album covers to play tracks
- Responsive design for mobile devices

## Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your browser, or
3. Use a local server:
   ```bash
   npm install
   npm run dev
   ```

### Deployment to Render

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Render
3. Choose "Static Site" as the service type
4. Set the build command to: `echo "No build required"`
5. Set the publish directory to: `.` (root)
6. Deploy!

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All CSS styles with dark theme
├── script.js           # JavaScript with music player
├── package.json        # Node.js dependencies
├── render.yaml         # Render deployment config
└── README.md           # This file
```

## Customization

### Music Content
Update the tracks array in `script.js` to add your actual music:

```javascript
this.tracks = [
    {
        title: "Your Song Title",
        artist: "Stars and the Underground",
        duration: "3:45",
        src: "path/to/your/audio/file.mp3"
    }
];
```

### Band Information
- Update band name, bio, and statistics in `index.html`
- Replace placeholder album covers with actual artwork
- Add real show dates and venues
- Update contact information

### Styling
- All styles are in `styles.css`
- Dark theme with music-focused color scheme
- Easy to customize colors, fonts, and layouts
- Responsive design for all screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast loading times
- SEO-friendly structure
- Mobile-optimized

## License

MIT License - feel free to use this template for your band or music project!

## Support

If you have any questions or need help customizing this website for your band, feel free to reach out!
# satu

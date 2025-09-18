# Band Website Customization Guide

This guide will help you easily customize the website with your actual band information.

## 🎵 Quick Customization Checklist

### 1. Basic Band Information
- [ ] Band Name (replace "Your Band Name")
- [ ] Band Bio/Story
- [ ] Music Genre
- [ ] Band Members (optional)
- [ ] Contact Information
- [ ] Social Media Links

### 2. Files to Update

#### `index.html` - Main Content

**Band Name (Replace in multiple places):**
```html
<!-- Line 6 -->
<title>Your Band Name - Official Website</title>

<!-- Line 16 -->
<a href="#home">Your Band Name</a>

<!-- Line 47 -->
<h1 class="hero-title">Your Band Name</h1>

<!-- Line 65 -->
<h3>Our Journey</h3>
<p>We emerged from the vibrant music scene...</p>

<!-- Line 200+ -->
<h3>Your Band Name</h3>
```

**Hero Section:**
```html
<!-- Lines 47-48 -->
<h1 class="hero-title">Your Band Name</h1>
<p class="hero-subtitle">Experience the raw energy and authentic sound that defines our music</p>
```

**About Section:**
```html
<!-- Lines 65-66 -->
<h3>Our Journey</h3>
<p>We emerged from the vibrant music scene, bringing together diverse influences to create a unique sound that resonates with audiences worldwide. Our music blends raw emotion with powerful melodies, creating an unforgettable experience.</p>
```

**Statistics (Update with your actual numbers):**
```html
<!-- Lines 70-80 -->
<div class="stat">
    <h4>50+</h4>
    <p>Live Performances</p>
</div>
<div class="stat">
    <h4>3</h4>
    <p>Albums Released</p>
</div>
<div class="stat">
    <h4>5+</h4>
    <p>Years Together</p>
</div>
```

**Music Section (Update with your albums):**
```html
<!-- Lines 100-150 -->
<div class="album-card">
    <div class="album-cover">
        <div class="image-placeholder">
            <i class="fas fa-compact-disc"></i>
        </div>
    </div>
    <h3>Your Album Name</h3>
    <p>Latest Album • 2024</p>
    <div class="album-tracks">
        <div class="track">
            <span class="track-number">1</span>
            <span class="track-name">Your Song Title</span>
            <span class="track-duration">3:45</span>
        </div>
    </div>
</div>
```

**Shows Section (Update with your actual shows):**
```html
<!-- Lines 160-200 -->
<div class="show-card">
    <div class="show-date">
        <span class="month">MAR</span>
        <span class="day">15</span>
    </div>
    <div class="show-info">
        <h3>Your Venue Name</h3>
        <p>Your City, State</p>
        <span class="show-time">8:00 PM</span>
    </div>
    <div class="show-action">
        <a href="#" class="btn btn-primary">Get Tickets</a>
    </div>
</div>
```

**Contact Information:**
```html
<!-- Lines 220-240 -->
<h4>Email</h4>
<p>info@yourbandname.com</p>

<h4>Booking</h4>
<p>+1 (555) 123-4567</p>

<h4>Location</h4>
<p>Your City, State<br>Based Worldwide</p>
```

### 3. Update JavaScript (`script.js`)

**Music Tracks (Lines 50-70):**
```javascript
this.tracks = [
    {
        title: "Your Song Title",
        artist: "Your Band Name",
        duration: "3:45",
        src: "audio/your-song.mp3" // Add your actual audio files
    },
    {
        title: "Another Song",
        artist: "Your Band Name", 
        duration: "4:12",
        src: "audio/another-song.mp3"
    }
];
```

### 4. Content Templates

#### For a Rock Band:
```html
<h1 class="hero-title">Thunder & Lightning</h1>
<p class="hero-subtitle">Raw power meets melodic precision in our electrifying performances</p>

<h3>Our Journey</h3>
<p>Thunder & Lightning formed in 2019 when four friends with a shared passion for rock music came together. We've been electrifying audiences with our high-energy performances and powerful anthems ever since.</p>
```

#### For an Indie Band:
```html
<h1 class="hero-title">Urban Echoes</h1>
<p class="hero-subtitle">Indie sounds that capture the soul of the city</p>

<h3>Our Journey</h3>
<p>Urban Echoes emerged from the underground music scene, crafting intimate songs that speak to the modern experience. Our music blends indie rock with electronic elements to create something truly unique.</p>
```

#### For a Jazz Band:
```html
<h1 class="hero-title">Midnight Jazz Collective</h1>
<p class="hero-subtitle">Smooth sounds and soulful melodies for the modern listener</p>

<h3>Our Journey</h3>
<p>The Midnight Jazz Collective brings together seasoned musicians with a passion for contemporary jazz. We blend traditional jazz elements with modern influences to create fresh, innovative sounds.</p>
```

### 5. Add Your Music Files

1. **Create an `audio/` folder** in your website directory
2. **Add your MP3 files** to the folder
3. **Update the JavaScript** with your actual file paths:

```javascript
src: "audio/your-actual-song.mp3"
```

### 6. Update Album Covers

Replace the placeholder album covers:
1. **Add your album artwork** as image files
2. **Update the HTML** to use your images:

```html
<div class="album-cover">
    <img src="images/your-album-cover.jpg" alt="Your Album Name">
    <div class="play-button">
        <i class="fas fa-play"></i>
    </div>
</div>
```

### 7. Social Media Links

Update the footer social media links:

```html
<div class="social-links">
    <a href="https://facebook.com/yourband"><i class="fab fa-facebook"></i></a>
    <a href="https://twitter.com/yourband"><i class="fab fa-twitter"></i></a>
    <a href="https://instagram.com/yourband"><i class="fab fa-instagram"></i></a>
    <a href="https://youtube.com/yourband"><i class="fab fa-youtube"></i></a>
    <a href="https://open.spotify.com/artist/yourband"><i class="fab fa-spotify"></i></a>
</div>
```

### 8. Color Customization

To change the color scheme, update these CSS variables in `styles.css`:

```css
/* Primary color (red) */
color: #ff6b6b;

/* Secondary color (teal) */
color: #4ecdc4;

/* Background gradients */
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
```

**Color Scheme Ideas:**
- **Rock Band**: Red and black (#ff0000, #000000)
- **Indie Band**: Purple and pink (#8b5cf6, #ec4899)
- **Jazz Band**: Blue and gold (#3b82f6, #f59e0b)
- **Electronic**: Green and cyan (#10b981, #06b6d4)

### 9. SEO Optimization

Add these meta tags to improve search visibility:

```html
<meta name="description" content="Official website for Your Band Name - Listen to our music, check upcoming shows, and get in touch">
<meta name="keywords" content="music, band, your band name, concerts, albums, [your genre]">
<meta property="og:title" content="Your Band Name - Official Website">
<meta property="og:description" content="Official website for Your Band Name">
<meta property="og:image" content="images/your-band-photo.jpg">
```

### 10. Testing Your Changes

1. **Local Testing:**
   ```bash
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

2. **Check Responsiveness:**
   - Test on mobile devices
   - Use browser dev tools to test different screen sizes

3. **Validate Content:**
   - Check all links work
   - Verify contact information
   - Test contact form submission
   - Test music player functionality

### 11. Quick Start Template

Here's a quick template to get you started:

```html
<!-- Replace these with your actual information -->
<h1 class="hero-title">[Your Band Name]</h1>
<p class="hero-subtitle">[Your tagline - what makes your music special?]</p>

<h3>Our Journey</h3>
<p>[Your band's story - when did you start, what's your sound, any notable achievements?]</p>

<!-- Update these numbers -->
<div class="stat">
    <h4>[X]</h4>
    <p>Live Performances</p>
</div>
<div class="stat">
    <h4>[X]</h4>
    <p>Albums Released</p>
</div>
<div class="stat">
    <h4>[X]</h4>
    <p>Years Together</p>
</div>
```

### 12. Deployment

After customizing:

1. **Git Setup:**
   ```bash
   git add .
   git commit -m "Updated with [Your Band Name] information"
   git push
   ```

2. **Deploy to Render:**
   - Your site will automatically update
   - Check the live site for any issues

## 🎵 Need Help?

If you need assistance with any specific customization:
1. Tell me your band name and I'll update it for you
2. Share your band bio and I'll integrate it
3. Let me know your music genre for styling suggestions
4. Provide your contact information for updates

The website is designed to be easily customizable - just replace the placeholder content with your actual information!

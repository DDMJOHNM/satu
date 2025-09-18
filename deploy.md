# Deployment Instructions for Stars and the Underground Website

## Quick Deploy to Render

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Stars and the Underground website"
   git remote add origin YOUR_REPOSITORY_URL
   git push -u origin main
   ```

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Static Site"
   - Connect your Git repository
   - Configure:
     - **Name**: stars-and-underground (or your preferred name)
     - **Build Command**: `echo "No build required"`
     - **Publish Directory**: `.` (root directory)
   - Click "Create Static Site"

3. **Custom Domain (Optional)**
   - In your Render dashboard, go to your site settings
   - Add your custom domain
   - Update DNS records as instructed

## Alternative: Manual Upload

If you prefer not to use Git:

1. Zip all files in this directory
2. Upload the zip file to Render
3. Render will automatically extract and serve the files

## Testing Locally

Before deploying, test locally:

```bash
# Option 1: Python server
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 2: Node.js server
npm install
npm run dev
# Then visit http://localhost:3000
```

## File Checklist

Make sure these files are included in your deployment:
- ✅ index.html
- ✅ styles.css
- ✅ script.js
- ✅ package.json
- ✅ render.yaml
- ✅ README.md

## Music Player Setup

The website includes a built-in music player. To add your actual music:

1. **Add Audio Files**: Place your MP3 files in an `audio/` folder
2. **Update Track List**: Edit the `tracks` array in `script.js`
3. **Replace Placeholder URLs**: Update the `src` property for each track

Example:
```javascript
this.tracks = [
    {
        title: "Midnight City",
        artist: "Stars and the Underground",
        duration: "3:45",
        src: "audio/midnight-city.mp3"
    }
];
```

## Customization for Your Band

### 1. Update Band Information
- **Band Name**: Replace "Stars and the Underground" throughout the site
- **Bio**: Update the about section with your band's story
- **Statistics**: Modify the numbers in the stats section

### 2. Add Your Music
- **Albums**: Replace placeholder album covers with your artwork
- **Tracks**: Update track listings with your actual songs
- **Audio Files**: Add your MP3 files and update the JavaScript

### 3. Update Show Information
- **Venues**: Replace placeholder venues with real locations
- **Dates**: Update with actual show dates
- **Tickets**: Link to your actual ticket sales pages

### 4. Contact Information
- **Email**: Update contact email addresses
- **Phone**: Add your booking phone number
- **Location**: Update your base location

## Troubleshooting

- **404 errors**: Make sure `index.html` is in the root directory
- **Styling issues**: Check that `styles.css` is properly linked
- **JavaScript errors**: Verify `script.js` is loaded and check browser console
- **Mobile issues**: Test responsive design on different screen sizes
- **Music player not working**: Check that audio files are properly linked

## Performance Tips

- The site is already optimized for production
- All external resources use CDNs for fast loading
- Images are placeholder graphics - replace with optimized images
- Consider adding a favicon.ico file
- Compress audio files for faster loading

## SEO Optimization

Add these meta tags to improve search visibility:

```html
<meta name="description" content="Official website for Stars and the Underground - Listen to our music, check upcoming shows, and get in touch">
<meta name="keywords" content="music, band, stars and underground, concerts, albums">
<meta property="og:title" content="Stars and the Underground - Official Website">
<meta property="og:description" content="Official website for Stars and the Underground band">
<meta property="og:image" content="path/to/your/band-photo.jpg">
```

## Social Media Integration

The footer includes social media links. Update these with your actual profiles:

- Facebook
- Twitter
- Instagram
- YouTube
- Spotify

## Analytics

Consider adding Google Analytics or similar tracking:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## Backup

Before making major changes:
1. Keep a backup of your working version
2. Test changes locally before deploying
3. Use version control (Git) to track changes

## Support

If you need help customizing the website for your band:
1. Check the README.md for detailed instructions
2. Review the code comments in the files
3. Test changes in a local environment first
4. Contact for additional support if needed

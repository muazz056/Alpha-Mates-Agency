# Project Screenshots Directory

## Purpose
This directory contains real screenshots of your completed projects for the portfolio gallery.

## Structure
```
/screenshots
  /ai-ecommerce-platform
    - 01-homepage.jpg
    - 02-products.jpg
    - 03-dashboard.jpg
    - 04-admin.jpg
    - 05-mobile.jpg
    - 06-analytics.jpg
  
  /healthcare-chatbot
    - 01-chat-interface.jpg
    - 02-dashboard.jpg
    - 03-analytics.jpg
    - 04-settings.jpg
    - 05-mobile.jpg
  
  /trading-dashboard
    - 01-main-dashboard.jpg
    - 02-charts.jpg
    - 03-portfolio.jpg
    - 04-settings.jpg
```

## Image Guidelines

### Dimensions
- **Width:** 1200-1600px
- **Height:** 800-1200px (maintain 16:9 or 4:3 aspect ratio)

### Format & Quality
- **Format:** JPG or WebP
- **Quality:** 80-90%
- **File Size:** < 500KB per image

### Naming Convention
- Use lowercase
- Use hyphens for spaces
- Number files sequentially
- Be descriptive: `01-homepage-desktop.jpg`, not `img1.jpg`

## How to Add Screenshots

### 1. Take Screenshots
- Use Chrome DevTools (Cmd/Ctrl + Shift + P → "Screenshot")
- Or use browser extensions like Awesome Screenshot
- Capture full-page or visible viewport

### 2. Optimize Images
```bash
# Using ImageOptim (Mac)
imageoptim screenshot.jpg

# Using online tools
- tinypng.com
- squoosh.app
- compressor.io
```

### 3. Organize Files
- Create project folder matching the slug in `projects.ts`
- Add numbered, descriptive screenshots
- Keep original files backed up elsewhere

### 4. Update projects.ts
```typescript
gallery: [
  '/screenshots/your-project-slug/01-homepage.jpg',
  '/screenshots/your-project-slug/02-features.jpg',
  // ...
],
```

## Quick Start

1. **Create project folder:**
   ```bash
   mkdir public/screenshots/ai-ecommerce-platform
   ```

2. **Add screenshots:**
   - Copy your screenshots to the folder
   - Rename them sequentially

3. **Update code:**
   - Edit `src/lib/data/projects.ts`
   - Replace Unsplash URLs with local paths

## Example
```typescript
// Before (temporary Unsplash)
gallery: [
  'https://images.unsplash.com/photo-xyz?w=1200',
  'https://images.unsplash.com/photo-abc?w=1200',
]

// After (real screenshots)
gallery: [
  '/screenshots/ai-ecommerce-platform/01-homepage.jpg',
  '/screenshots/ai-ecommerce-platform/02-products.jpg',
  '/screenshots/ai-ecommerce-platform/03-dashboard.jpg',
]
```

## Tips

- ✅ **DO:** Take screenshots of actual projects
- ✅ **DO:** Show different views (desktop, tablet, mobile)
- ✅ **DO:** Highlight key features
- ✅ **DO:** Use realistic demo data
- ❌ **DON'T:** Use random stock photos
- ❌ **DON'T:** Include sensitive data
- ❌ **DON'T:** Use low-quality images

## Need Help?
See `HOW-TO-ADD-REAL-SCREENSHOTS.md` in the project root for detailed instructions.


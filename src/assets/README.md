# Assets Directory

This directory contains all the static assets for the portfolio website.

## 📁 Directory Structure

```
assets/
├── projects/          # Project screenshots and images
│   ├── ecommerce-cover.jpg
│   ├── ecommerce-1.jpg
│   ├── ecommerce-2.jpg
│   ├── ecommerce-3.jpg
│   ├── ecommerce-4.jpg
│   ├── task-app-cover.jpg
│   ├── task-app-1.jpg
│   ├── task-app-2.jpg
│   ├── task-app-3.jpg
│   ├── portfolio-cover.jpg
│   ├── portfolio-1.jpg
│   ├── portfolio-2.jpg
│   ├── weather-cover.jpg
│   ├── weather-1.jpg
│   ├── weather-2.jpg
│   ├── weather-3.jpg
│   ├── social-cover.jpg
│   ├── social-1.jpg
│   ├── social-2.jpg
│   ├── social-3.jpg
│   ├── social-4.jpg
│   ├── fitness-cover.jpg
│   ├── fitness-1.jpg
│   ├── fitness-2.jpg
│   └── fitness-3.jpg
├── avatars/           # Profile and testimonial avatars
│   ├── sarah.jpg
│   ├── michael.jpg
│   └── emily.jpg
└── icons/             # Custom SVG icons (if any)
```

## 🖼️ Image Requirements

### Project Images
- **Cover Images**: 800x600px (16:10 ratio) - JPG format
- **Gallery Images**: 1200x800px (3:2 ratio) - JPG format
- **File Size**: Keep under 500KB for optimal performance
- **Format**: JPG for photos, PNG for screenshots with text

### Avatar Images
- **Size**: 200x200px (1:1 ratio)
- **Format**: JPG or PNG
- **File Size**: Under 100KB

## 🔄 Replacing Assets

1. **Export from Figma**: Use the Figma design file to export images at the specified dimensions
2. **Optimize**: Compress images using tools like TinyPNG or ImageOptim
3. **Replace**: Overwrite the placeholder files with your actual project images
4. **Update Paths**: Ensure the image paths in the data files match your new filenames

## 📱 Responsive Images

The website automatically handles responsive images using Tailwind CSS classes. Images will scale appropriately for different screen sizes.

## 🚀 Performance Tips

- Use WebP format when possible for better compression
- Implement lazy loading for gallery images
- Consider using different image sizes for different breakpoints
- Optimize images for web (72 DPI is sufficient)

## 📝 Naming Convention

- Use descriptive, lowercase names with hyphens
- Include the project name and image type
- Example: `ecommerce-cover.jpg`, `task-app-gallery-1.jpg`

## ⚠️ Important Notes

- **Don't delete this README file** - it helps with project maintenance
- **Keep original high-resolution images** in a separate folder for future use
- **Test image loading** after replacing assets
- **Verify responsive behavior** on different devices 
# Edwin Mauricio Olivera - Portfolio

A complete standalone HTML/CSS/JavaScript portfolio website for Edwin Mauricio Olivera, Digital Design Professor and Experience Designer.

## Features

### 🎨 Design & User Experience
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Theme**: Toggle between themes with persistent preference storage
- **Smooth Animations**: Intersection Observer API for fade-in animations
- **Professional Typography**: Custom font stack with Fraunces and Roboto Flex

### 📱 Modern Interactive Features
- **Mobile-First Navigation**: Hamburger menu with smooth transitions
- **Social Media Integration**: Direct links to all professional profiles
- **Video Showcases**: Autoplay videos with proper controls for courses
- **Contact Form**: Functional contact form with validation
- **Print-Optimized Resume**: Professional PDF-ready resume layout

### 🛠 Technical Implementation
- **Pure HTML/CSS/JS**: No frameworks or dependencies (except fonts and icons)
- **Modern CSS**: CSS Grid, Flexbox, Custom Properties, Animations
- **Progressive Enhancement**: Works without JavaScript enabled
- **Cross-Browser Compatible**: Supports all modern browsers
- **Performance Optimized**: Lazy loading images, efficient animations

## File Structure

```
standalone_portfolio/
├── index.html              # Main portfolio page
├── resume.html             # Professional resume page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── assets/                 # All media files
│   ├── *.png               # Portfolio images
│   ├── *.jpg               # Professional photos
│   ├── *.jpeg              # Course screenshots
│   ├── *.mp4               # Video content
│   ├── emlogo.svg          # Logo file
│   └── motif.svg           # Design motif
└── README.md               # This file
```

## Sections & Content

### Main Portfolio (index.html)
1. **Hero Section**: Professional introduction with profile image
2. **About**: Personal background and skills visualization
3. **Areas of Focus**: Four key areas of expertise
4. **Portfolio Gallery**: 12 featured projects with categories
5. **Project Highlight**: Featured crypto design case study with video
6. **Courses & Workshops**: 6 educational projects with mixed media
7. **Contact**: Contact information and functional form

### Resume (resume.html)
- **Professional Summary**: Strategic design leader overview
- **Experience**: Detailed work history with achievements
- **Education**: Academic background
- **Skills**: Comprehensive skill categorization
- **Awards & Recognition**: Professional accolades
- **Social Impact**: Community engagement work

## Key Technologies Used

### CSS Features
- **Custom Properties (CSS Variables)**: Theme management
- **CSS Grid**: Complex responsive layouts
- **Flexbox**: Component alignment and spacing
- **Transforms & Transitions**: Smooth animations
- **Media Queries**: Responsive breakpoints
- **Print Styles**: Professional resume printing

### JavaScript Functionality
- **ES6+ Classes**: Modular code organization
- **Intersection Observer**: Scroll-triggered animations
- **Local Storage**: Theme preference persistence
- **Event Delegation**: Efficient event handling
- **DOM Manipulation**: Dynamic content rendering

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## Setup Instructions

1. **Download**: Extract all files to a folder
2. **Open**: Open `index.html` in any modern web browser
3. **Navigate**: Use the menu to explore different sections
4. **Print Resume**: Visit `resume.html` and use browser print function
5. **Theme Toggle**: Click the moon/sun icon to switch themes

## Content Management

### Adding Portfolio Items
Edit the `portfolioData` array in `js/main.js`:

```javascript
{
  id: 13,
  title: "New Project",
  category: "Design Category",
  image: "assets/new-project.jpg"
}
```

### Adding Courses
Edit the `coursesData` array in `js/main.js`:

```javascript
{
  id: 7,
  title: "New Course",
  category: "Course Type",
  description: "Course description...",
  // ... other properties
}
```

### Updating Contact Information
Edit the contact sections in both HTML files and the contact form functionality in `js/main.js`.

## Performance Optimization

- **Image Optimization**: All images optimized for web
- **Lazy Loading**: Images load as they enter viewport
- **Minification Ready**: CSS and JS can be minified for production
- **CDN Resources**: Fonts and icons loaded from CDN
- **Efficient Animations**: Hardware-accelerated transforms

## Deployment Options

### Static Hosting
- **GitHub Pages**: Push to repository, enable Pages
- **Netlify**: Drag and drop folder to Netlify
- **Vercel**: Connect repository or upload files
- **AWS S3**: Upload files to S3 bucket with static hosting

### Traditional Hosting
- **cPanel**: Upload files to public_html folder
- **FTP**: Transfer files to web server
- **Shared Hosting**: Any provider supporting static files

## Customization Guide

### Changing Colors
Update CSS custom properties in `:root` selector:

```css
:root {
  --accent-primary: #your-color;
  --bg-primary: #your-background;
  /* ... other colors */
}
```

### Adding Sections
1. Add HTML structure following existing patterns
2. Add corresponding CSS classes
3. Update JavaScript if dynamic content needed

### Modifying Layout
- Edit CSS Grid properties for different layouts
- Adjust responsive breakpoints in media queries
- Modify spacing using consistent rem units

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader compatible
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Indicators**: Visible focus states
- **Alt Text**: Descriptive image alternatives

## Social Media Integration

Direct links to:
- LinkedIn: Professional networking
- Instagram: Creative showcase
- WhatsApp: Direct messaging
- Discord: Community engagement
- SoundCloud: Audio projects
- Behance: Design portfolio

## Contact Information

- **Email**: eolivera@sva.edu
- **Phone**: 332-361-4198
- **Website**: emauric.io
- **Location**: New York City, NY

## License

This portfolio is a personal project. All content and design elements are the intellectual property of Edwin Mauricio Olivera.

## Future Enhancements

Potential improvements for future versions:
- **CMS Integration**: Content management system
- **Blog Section**: Article publishing capability
- **Advanced Animations**: More complex motion design
- **Multi-language Support**: Spanish translation
- **Analytics Integration**: Visitor tracking
- **SEO Optimization**: Enhanced meta tags and structured data
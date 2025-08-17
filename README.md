# Truong Hai Portfolio - React Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases frontend development skills and provides a professional online presence.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite + Tailwind CSS
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization
- **Dark/Light Theme**: Theme toggle with system preference detection
- **Performance Optimized**: Fast loading with optimized assets and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Ready**: Meta tags, structured data, and semantic HTML
- **Project Showcase**: Detailed project pages with filtering and search
- **Contact Form**: Interactive contact form with validation
- **Smooth Animations**: Subtle animations and transitions using Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Routing**: React Router v6
- **State Management**: Zustand (lightweight)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **UI Components**: Custom component library
- **Build Tool**: Vite
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged

## 📁 Project Structure

```
src/
├── assets/           # Images, SVGs, and other static assets
├── components/       # Reusable UI components
│   ├── ui/          # Base UI components (Button, Card, etc.)
│   ├── Header.tsx   # Navigation header
│   ├── Footer.tsx   # Site footer
│   └── Section.tsx  # Page section wrapper
├── features/         # Feature-specific components
│   ├── home/        # Home page components
│   └── project/     # Project-related components
├── layouts/          # Layout components
├── pages/           # Page components
├── lib/             # Utilities, hooks, and helpers
├── data/            # Static data (projects, skills, socials)
├── App.tsx          # Main app component
└── main.tsx         # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd truong-hai-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Replacing Assets

1. **Project Images**: Replace images in `/src/assets/projects/` with your actual project screenshots
2. **Profile Images**: Update avatar and profile images in `/src/assets/`
3. **Favicon**: Replace `/public/favicon.ico` with your own
4. **Resume**: Add your resume PDF to `/public/resume.pdf`

### Updating Content

1. **Personal Information**: Edit `/src/data/socials.ts` with your social media links
2. **Projects**: Update `/src/data/projects.ts` with your actual projects
3. **Skills**: Modify `/src/data/skills.ts` to reflect your expertise
4. **About Me**: Update the content in `/src/pages/About.tsx`

### Styling

1. **Colors**: Modify CSS custom properties in `/src/index.css`
2. **Typography**: Update font imports and classes in `tailwind.config.ts`
3. **Layout**: Adjust spacing and grid layouts in component files

## 📱 Responsive Breakpoints

- **Mobile**: 360px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px - 1440px+
- **Large Desktop**: 1440px+

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms

The project builds to a standard `dist` folder that can be deployed to any static hosting service.

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.cjs` - ESLint rules
- `.prettierrc` - Prettier formatting rules

## 📊 Performance

- **Lighthouse Score**: Target 90+ Performance, 95+ Accessibility
- **Bundle Size**: Optimized with Vite and tree shaking
- **Images**: Responsive images with proper sizing
- **Lazy Loading**: Images and components load on demand

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader friendly

## 🧪 Testing

The project includes:
- TypeScript type checking
- ESLint code quality checks
- Prettier code formatting
- Husky pre-commit hooks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Framer Motion](https://www.framer.com/motion/) for animations
- [React Router](https://reactrouter.com/) for client-side routing

## 📞 Support

If you have any questions or need help customizing this portfolio:

- Create an issue on GitHub
- Email: hello@example.com
- LinkedIn: [Your LinkedIn Profile]

---

**Note**: This is a template portfolio website. Please replace all placeholder content, images, and personal information with your own before deploying. 
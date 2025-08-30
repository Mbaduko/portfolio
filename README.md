# Mbaduko - Software Developer Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases professional experience, skills, projects, and technologies with a beautiful, interactive design.

## 🚀 Features

- **Modern Design**: Clean, professional interface with custom color scheme
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Dynamic Hero Section**: Interactive elements with smooth navigation to sections
- **Expandable Sections**: Experience and Projects with collapsible details
- **Technology Showcase**: Visual technology icons and skill categorization
- **Professional Timeline**: Chronological work experience display
- **Certificates Section**: Professional achievements, hackathons, and recognitions
- **Contact Integration**: Multiple contact methods and social links
- **Back to Top**: Smooth scroll-to-top functionality
- **Typewriter Animation**: Dynamic title cycling through skills in sidebar
- **Content Management**: Backend API for dynamic content updates (planned)
- **Admin Dashboard**: Web-based interface for content management (planned)

## 🛠️ Tech Stack

### Frontend
```json
{
  "framework": "Next.js 14",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "font": "Space Grotesk (Google Fonts)",
  "features": [
    "App Router",
    "Server Components",
    "Client Components",
    "Type Safety",
    "Utility-First CSS",
    "Responsive Design",
    "Smooth Scrolling",
    "Interactive Elements"
  ]
}
```

### Development Tools
```yaml
development_tools:
  linting: ESLint
  css_processing: PostCSS
  bundler: Turbopack
  package_manager: npm
  version_control: Git
  typescript: "^5"
```

### Backend (Planned)
```yaml
backend_stack:
  runtime: Node.js/Express
  database: MongoDB/PostgreSQL
  authentication: JWT
  file_upload: Multer
  documentation: Swagger
  validation: Joi/Yup
  caching: Redis
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and CSS variables
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   └── components/
│       ├── Layout.tsx           # Main layout wrapper
│       ├── Header.tsx           # Navigation header
│       ├── Sidebar.tsx          # Profile sidebar with typewriter animation
│       ├── Footer.tsx           # Footer component
│       ├── BackToTop.tsx        # Back to top button
│       ├── sections/
│       │   ├── HeroBioSection.tsx      # Interactive hero with quick facts
│       │   ├── SkillsSection.tsx       # Skills with technology logos
│       │   ├── ExperienceSection.tsx   # Timeline with expandable details
│       │   ├── CertificatesSection.tsx # Professional achievements
│       │   ├── ProjectsSection.tsx     # Projects with thumbnails
│       │   ├── TechnologiesSection.tsx # Technology proficiency
│       │   └── ContactSection.tsx      # Contact form and info
│       └── ui/
│           ├── SectionHeader.tsx       # Reusable section headers
│           └── SectionWrapper.tsx      # Section wrapper component
├── public/
│   ├── profile.jpg              # Profile picture
│   └── favicon.ico              # Favicon
├── tailwind.config.ts           # Tailwind configuration
├── package.json                 # Dependencies
└── README.md                    # Project documentation
```

## 🚀 Getting Started

### Prerequisites

```json
{
  "node_version": "18+",
  "package_managers": ["npm", "yarn", "pnpm"],
  "git": "latest",
  "docker": "optional (for deployment)",
  "kubernetes": "optional (for deployment)"
}
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mbaduko/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Color Scheme
The portfolio uses a custom dark theme defined in `src/app/globals.css`:

```css
:root {
  /* Primary Colors */
  --background: #1E1E1E;      /* Dark background */
  --foreground: #FFFFFF;      /* White text */
  --secondary-bg: #2B3036;    /* Secondary background */
  --accent-text: #9CABBA;     /* Accent text color */
  --primary-button: #0A80ED;  /* Primary button color */
}
```

### Font Configuration
The project uses Space Grotesk font from Google Fonts, configured in `src/app/layout.tsx`.

### Component Customization
Each section component can be customized by modifying the data arrays and styling classes.

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Docker (for deployment)
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features Implementation

### Interactive Hero Section
- **Quick Facts**: Clickable statistics that navigate to relevant sections
- **Call-to-Action Buttons**: Smooth scrolling to Projects and Contact sections
- **Expertise Cards**: Interactive cards that navigate to Skills section

### Dynamic Sidebar
- **Typewriter Animation**: Title cycles through different skills
- **Interactive Contact Links**: Phone, WhatsApp, Email, GitHub, LinkedIn
- **Profile Picture**: Professional image with fallback initials

### Smooth Navigation
- **Header Navigation**: Active section highlighting based on scroll position
- **Back to Top**: Appears on scroll with smooth animation
- **Section Navigation**: Direct links to all major sections

### Professional Sections
- **Experience Timeline**: Expandable work history with company logos
- **Projects Showcase**: Project thumbnails, descriptions, and links
- **Skills Categorization**: Technology logos with proficiency levels
- **Certificates Display**: Professional achievements with verification links

## 🚀 Deployment

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Kubernetes Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio
spec:
  replicas: 3
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
      - name: portfolio
        image: mbaduko/portfolio:latest
        ports:
        - containerPort: 3000
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow
```yaml
name: Deploy Portfolio
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm ci
    - name: Build application
      run: npm run build
    - name: Deploy to AWS EC2
      run: |
        # Deployment steps
```

## 📊 Performance Optimization

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Bundle Optimization**: Turbopack for faster builds
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Font Optimization**: Google Fonts with display=swap

## 🔒 Security Features

- **Content Security Policy**: Configured headers
- **HTTPS Only**: Secure connections in production
- **Input Validation**: Form validation and sanitization
- **XSS Protection**: React's built-in XSS protection

## 📈 Analytics & Monitoring

### Planned Features
- **Google Analytics**: User behavior tracking
- **Error Monitoring**: Sentry integration
- **Performance Monitoring**: Core Web Vitals tracking
- **SEO Optimization**: Meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: nsengiyumvaclement247@gmail.com
- **Phone**: +250 791 130 583 / +250 726 542 585
- **WhatsApp**: +250 791 130 583
- **GitHub**: [github.com/mbaduko](https://github.com/mbaduko)
- **LinkedIn**: [linkedin.com/in/mbaduko](https://linkedin.com/in/mbaduko)

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Google Fonts**: For the Space Grotesk font
- **Devicon**: For technology logos
- **Unsplash**: For project thumbnails

---

**Built with ❤️ by Mbaduko**

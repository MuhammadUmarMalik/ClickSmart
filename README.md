# ClickSmart - Professional Service Marketplace

A modern, responsive landing page built with React.js, TypeScript, and Vite. This project showcases a clean, professional design perfect for a service marketplace connecting customers with verified professionals.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Component Architecture**: Well-organized, reusable components
- **Type Safety**: Full TypeScript support throughout the project
- **Fast Development**: Vite for lightning-fast hot module replacement
- **Icon Integration**: Lucide React icons for consistent iconography
- **Routing Ready**: React Router setup for future pages
- **Professional UI/UX**: Enhanced animations, hover effects, and modern design
- **Service Categories**: Comprehensive listing of 7 major service categories
- **Interactive Forms**: Contact forms with validation and submission handling

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Shared components (Header, Footer)
│   ├── landing/         # Landing page specific components
│   └── ui/              # Reusable UI components
├── layouts/             # Layout components
├── pages/               # Page components
├── types/               # TypeScript type definitions
├── constants/           # App constants and configuration
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
└── styles/              # Global styles and Tailwind config
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7.0+
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Utilities**: clsx for conditional classnames

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd clicksmart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Components

### Landing Page Components

- **Hero**: Main hero section with animated backgrounds and CTAs
- **Features**: Feature showcase with service-focused benefits
- **Services**: Interactive service categories with expandable sections
- **About**: Company information with statistics and mission
- **Testimonials**: Customer reviews and social proof
- **Contact**: Contact form with validation and contact information
- **Header**: Responsive navigation with mobile menu and smooth scrolling
- **Footer**: Comprehensive footer with links, contact info, and social media

### UI Components

- **Button**: Reusable button with multiple variants and hover effects
- **Section**: Consistent section wrapper for spacing and animations

## 🏢 Service Categories

ClickSmart offers services across 7 major categories:

1. **🏠 Home Services** (14 services) - HVAC, Plumbing, Roofing, etc.
2. **🦷 Health & Wellness** (10 services) - Dental, Vision, Mental Health, etc.
3. **📞 Insurance Services** (7 services) - Auto, Health, Life Insurance, etc.
4. **💰 Finance & Legal** (9 services) - Tax Relief, Legal Help, Loans, etc.
5. **🚗 Automotive Services** (6 services) - Auto Glass, Warranty, etc.
6. **🏠 Real Estate & Moving** (5 services) - Mortgage, Moving, etc.
7. **📱 Tech & Telecom** (4 services) - Internet, Mobile Plans, etc.

## 🔧 Configuration

### Tailwind CSS v4

The project uses the latest Tailwind CSS v4. Configuration:
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration with @tailwindcss/postcss
- `src/index.css` - Global styles with @import "tailwindcss"

### TypeScript

Type definitions are organized in `src/types/index.ts` and include:
- Component prop interfaces
- Service and category data structures
- Form and validation types

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ✨ Enhanced Features

- **Smooth Animations**: Fade-in, slide-in, and scale animations
- **Interactive Elements**: Hover effects on cards, buttons, and forms
- **Form Validation**: Real-time validation with error messaging
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Professional Design**: Modern gradients, shadows, and typography
- **Social Proof**: Customer testimonials and statistics
- **Mobile Optimization**: Touch-friendly interface and responsive design

## 🎯 Future Enhancements

- [ ] Add backend API integration for form submissions
- [ ] Implement user authentication and profiles
- [ ] Add service provider onboarding flow
- [ ] Integrate payment processing
- [ ] Add SEO optimization with React Helmet
- [ ] Implement Progressive Web App features
- [ ] Add multi-language support
- [ ] Integrate with CRM systems

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@clicksmart.com or create an issue in the repository.

---

Built with ❤️ by the ClickSmart team

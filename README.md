# Operant Labs Website Recreation

A faithful recreation of the teenage.engineering website built with modern web technologies.

## Overview

This project recreates the iconic teenage.engineering website, capturing its minimalist design aesthetic, unique navigation structure, and product showcase. The recreation includes:

- **Clean, minimalist design** matching the original's aesthetic
- **Responsive layout** that works on all device sizes
- **Interactive video player** for the hero section
- **Product grid** with categories and filtering
- **Newsletter subscription** functionality
- **Multi-page navigation** structure

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Features

### Pages Implemented
- **Homepage** - Hero video, product preview, newsletter signup
- **Products** - Complete product grid with categories
- **Audio & Synthesizers** - Category-specific product listing
- **Store** - E-commerce style product showcase
- **Newsletter** - Subscription form with success states

### Components
- **Header** - Multi-column navigation matching original design
- **Footer** - Country selector and links
- **VideoPlayer** - Custom Vimeo video integration
- **ProductGrid** - Responsive product showcase

### Design Elements
- **Typography** - System fonts matching original aesthetic
- **Color Scheme** - Light background (#f3f3f3) with dark text (#0f0e12)
- **Layout** - Grid-based responsive design
- **Interactions** - Subtle hover effects and transitions

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── products/          # Products pages
│   ├── store/             # Store pages
│   └── newsletter/        # Newsletter page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Site header
│   ├── Footer.tsx        # Site footer
│   ├── VideoPlayer.tsx   # Video component
│   └── ProductGrid.tsx   # Product grid
└── lib/                  # Utilities
    └── utils.ts          # Helper functions
```

## Key Implementation Details

### Navigation Structure
The header recreates teenage.engineering's unique multi-column navigation with:
- Brand name split across two lines
- Categorized navigation sections
- Shopping cart integration
- Mobile-responsive hamburger menu

### Video Integration
Custom video player component using Vimeo embeds with:
- Background video autoplay
- Custom play/pause controls
- Responsive sizing
- Purple gradient overlay matching original

### Product System
Flexible product data structure supporting:
- Multiple categories
- New/discontinued status badges
- Grid-based responsive layouts
- Hover effects and transitions

### Styling Approach
- CSS custom properties for consistent theming
- Utility classes for teenage.engineering specific styles
- Responsive design using Tailwind breakpoints
- Subtle animations and micro-interactions

## Customization

### Colors
Update the color scheme in `globals.css`:
```css
:root {
  --background: #f3f3f3;
  --foreground: #0f0e12;
  /* ... */
}
```

### Products
Modify product data in component files or create a data layer for dynamic content management.

### Styling
Extend the design system by adding custom utility classes in the `@layer utilities` section of `globals.css`.

## Performance Considerations

- **Image Optimization** - Using Next.js Image component
- **Code Splitting** - Automatic with Next.js App Router
- **Static Generation** - Pages can be statically generated
- **Component Lazy Loading** - Dynamic imports where appropriate

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational and demonstration purposes. The original design inspiration came from teenage.engineering.

## Acknowledgments

- **Operant Labs** - For their inspiring design and innovative products
- **Next.js team** - For the excellent React framework
- **shadcn** - For the beautiful UI component library
- **Tailwind CSS** - For the utility-first CSS framework
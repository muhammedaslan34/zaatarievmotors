# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a marketing website for "Futuristic EV Motors" - an electric vehicle company. The design is based on a Figma prototype available at https://www.figma.com/design/WLGPEJpiZZ9vPNDUKBV0oq/Futuristic-EV-Motors-Website.

## Development Commands

```bash
npm i              # Install dependencies
npm run dev        # Start Next.js development server (http://localhost:3000)
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 15.1.6 with App Router
- **React**: React 18.3.1 with TypeScript
- **Routing**: Next.js file-based routing (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: ShadCN UI (built on Radix UI primitives)
- **Animations**: Framer Motion (imported as `motion/react`)
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)

## Architecture

### Routing Structure

The app uses Next.js App Router with file-based routing:

- `app/page.tsx` → `/` - Home page
- `app/models/page.tsx` → `/models` - EV models showcase
- `app/offers/page.tsx` → `/offers` - Current offers and promotions
- `app/compare/page.tsx` → `/compare` - Vehicle comparison tool
- `app/book-test-drive/page.tsx` → `/book-test-drive` - Test drive booking form
- `app/gallery/page.tsx` → `/gallery` - Image gallery
- `app/about/page.tsx` → `/about` - About the company
- `app/contact/page.tsx` → `/contact` - Contact form
- `app/faq/page.tsx` → `/faq` - Frequently asked questions
- `app/legal/page.tsx` → `/legal` - Legal information

The [app/layout.tsx](app/layout.tsx) root layout wraps all pages with:
- `<Navbar />` - Global navigation
- `<Footer />` - Global footer
- `<StickyActions />` - Floating action buttons
- `<Toaster />` - Toast notification system

### Directory Structure

- `app/` - Next.js App Router directory with route pages and layout
- `src/pages/` - Original page components (imported by app routes)
- `src/components/` - Shared components (Navbar, Footer, Hero, FeaturedModels, etc.)
- `src/components/ui/` - ShadCN UI primitive components (button, card, dialog, form, etc.)
- `src/components/figma/` - Figma-specific utilities
- `src/assets/` - Static assets (images, logos)

### Key Components

**ImageWithFallback** ([components/figma/ImageWithFallback.tsx](src/components/figma/ImageWithFallback.tsx))
- Handles image loading errors gracefully
- Shows a fallback SVG placeholder if the image fails to load
- Used for all external images (primarily Unsplash)

**cn utility** ([components/ui/utils.ts](src/components/ui/utils.ts))
- Combines `clsx` and `tailwind-merge` for conditional className merging
- Standard pattern: `cn("base-classes", conditionalClasses, className)`

## Design System

### Color Scheme (Dark Theme)
- Background: `#0A0A0A` (very dark)
- Text primary: `#E6F6FF` (light cyan-white)
- Text secondary: `#BFC6CC` (muted gray-blue)
- Accent primary: `#0EA5FF` (bright cyan)
- Accent secondary: `#00E5FF` (bright cyan-blue)
- Interactive: `#007bff` (blue for CTAs)

### Animation Patterns

Pages use Framer Motion for scroll-triggered animations:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {content}
</motion.div>
```

Common patterns:
- `initial={{ opacity: 0, scale: 0.8 }}` for fade + scale
- `initial={{ opacity: 0, x: -30 }}` for slide from left
- `viewport={{ once: true }}` to trigger animation only once
- Staggered delays: `delay: index * 0.1`

## Common Development Patterns

### Adding a New Page

1. Create route directory in `app/your-route/`
2. Create `app/your-route/page.tsx` that imports and renders the page component
3. Optionally create the actual page component in `src/pages/YourPage.tsx`
4. Add navigation link in [Navbar.tsx](src/components/Navbar.tsx) if needed
5. Follow existing animation patterns for consistency

Example:
```tsx
// app/new-page/page.tsx
import NewPage from '@/pages/NewPage'

export default function NewPageRoute() {
  return <NewPage />
}
```

### Using ShadCN UI Components

All UI primitives are in `src/components/ui/`. Import and use directly:

```tsx
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader } from './components/ui/card'
```

These components accept standard props and use the `cn()` utility for className merging.

### Adding Images

Use `ImageWithFallback` for external images to handle loading errors:

```tsx
import { ImageWithFallback } from '../components/figma/ImageWithFallback'

<ImageWithFallback
  src="https://images.unsplash.com/..."
  alt="Description"
  className="w-full h-auto"
/>
```

## Important Notes

- The project uses Next.js 15 with App Router (not Pages Router)
- Client components (using hooks or event handlers) must have `'use client'` directive at the top
- Use `Link` from `next/link` instead of react-router-dom
- Use `usePathname()` from `next/navigation` instead of `useLocation()`
- The project uses Tailwind CSS v4 (note the version in [app/globals.css](app/globals.css))
- All components follow a dark futuristic theme - maintain consistency with existing color palette
- Motion animations should use `viewport{{ once: true }}` to avoid re-triggering on scroll
- The site is designed for an EV motors showroom in Dubai (references in content)
- Images from Figma assets are stored in `src/assets/` and imported with `.src` property for the src attribute

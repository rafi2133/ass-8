# PX-Tile

## Project Purpose
PX-Tile is a modern tile showcase and e-commerce platform where users can browse premium tiles, search for their desired tiles, create accounts, and manage their profiles. The platform allows users to explore various tile categories including terracotta, marble, mosaic, porcelain, and more with detailed information about each product.

## Live URL
[https://ass-8-nine.vercel.app/](https://ass-8-nine.vercel.app/)

## Key Features

### User Authentication
- Secure sign-up and sign-in with email and password
- Profile photo upload via URL
- Logout functionality
- Session management

### Tile Browsing
- Browse a collection of premium tiles
- View tile details including price, dimensions, material, and category
- Check stock availability (In Stock / Out of Stock)
- Responsive grid layout for all devices

### Search Functionality
- Search tiles by title
- Dedicated search results page
- Real-time search feedback

### User Profile
- View and update personal information
- Change display name
- Update profile photo URL
- User-friendly profile management interface

### Interactive UI
- Featured tiles carousel with Swiper
- Responsive design for mobile, tablet, and desktop
- Toast notifications for user actions
- Loading states for better user experience

### Premium Design
- Modern, clean UI with Tailwind CSS
- DaisyUI components for consistent styling
- Smooth animations and transitions
- Color scheme with accent colors for CTAs

## NPM Packages Used

### Core Framework
- **next** (16.3.1) - React framework with App Router
- **react** (19.2.8) - UI library
- **react-dom** (19.2.8) - React DOM rendering

### Authentication & Database
- **better-auth** (1.7.1) - Authentication library
- **@better-auth/mongo-adapter** (1.7.1) - MongoDB adapter for Better Auth
- **mongodb** (7.5.0) - MongoDB driver

### UI & Styling
- **@heroui/react** (3.2.4) - UI component library
- **@heroui/styles** (3.2.4) - HeroUI styles
- **daisyui** (5.7.17) - Tailwind CSS component library
- **tailwindcss** (4) - Utility-first CSS framework
- **@tailwindcss/postcss** (4) - PostCSS plugin for Tailwind

### Forms & Icons
- **react-hook-form** (7.85.0) - Form handling
- **react-icons** (5.7.0) - Icon library
- **react-toastify** (11.1.0) - Toast notifications

### Carousel & Effects
- **swiper** (14.1.0) - Modern carousel/slider
- **react-fast-marquee** (1.6.5) - Marquee scrolling text

### Development Tools
- **eslint** (9) - Code linting
- **eslint-config-next** (16.3.1) - Next.js ESLint configuration
- **json-server** (1.0.0-beta.15) - Mock API server

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
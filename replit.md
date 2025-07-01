# Edwin Mauricio Olivera Portfolio - Design Education & Experience Platform

## Overview

This is a comprehensive portfolio and professional platform for Edwin Mauricio Olivera, a digital design professor and experience designer. The application showcases his design education work, professional experience, and social innovation projects. Built as a full-stack web application with a focus on elegant design presentation and interactive user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state, React Context for theme management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Development**: Hot module replacement with Vite integration
- **API Design**: RESTful API structure with `/api` prefix routing

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for production deployment)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for rapid development

## Key Components

### Pages & Navigation
- **Portfolio Landing**: Main showcase with hero section, about, and project highlights
- **Selected Works**: Curated collection of featured design projects
- **Projects**: Complete project gallery with filtering and detailed views
- **Resume/CV**: Professional resume with print optimization
- **Individual Project Details**: Detailed project case studies

### Portfolio Features
- **Project Showcase**: Interactive project gallery with image optimization
- **Responsive Design**: Mobile-first responsive design with dark/light theme support
- **Print Optimization**: Specialized print styles for resume/CV printing
- **Interactive Elements**: Smooth animations and transitions using CSS custom properties

### UI/UX Components
- **Theme System**: Dark/light mode with CSS custom properties and local storage persistence
- **Component Library**: Complete shadcn/ui component system with Radix UI primitives
- **Typography**: Custom font integration (Fraunces, Roboto Flex, Sono)
- **Accessibility**: ARIA compliance and keyboard navigation support

## Data Flow

### Client-Side Data Flow
1. **React Router** (Wouter) handles page navigation
2. **TanStack Query** manages server state and caching
3. **Theme Provider** manages global theme state via Context API
4. **Component Props** flow down from page components to UI components

### Server-Side Data Flow
1. **Express Routes** handle API endpoints under `/api` prefix
2. **Storage Interface** abstracts data operations (currently in-memory, ready for database)
3. **Drizzle ORM** provides type-safe database operations when connected
4. **Response Middleware** handles consistent API response formatting

### Asset Management
- **Static Assets**: Project images and profile photos served from assets directory
- **Font Loading**: Google Fonts with preconnect optimization
- **SVG Graphics**: Custom logo and motif graphics included

## External Dependencies

### Core Runtime Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **UI Framework**: Radix UI primitives, shadcn/ui components, Tailwind CSS
- **State Management**: TanStack Query, date-fns for date handling
- **Database**: Drizzle ORM, Neon Database serverless connector
- **Development**: TypeScript, Vite, ESBuild for production builds

### Development Tools
- **Build Tools**: Vite with React plugin, PostCSS, Autoprefixer
- **Type Safety**: TypeScript with strict configuration
- **Development Server**: Express with Vite middleware integration
- **Hot Reload**: Vite HMR with runtime error overlay

## Deployment Strategy

### Build Configuration
- **Frontend Build**: Vite builds React application to `dist/public`
- **Backend Build**: ESBuild bundles server code to `dist/index.js`
- **Static Assets**: Served from build output directory
- **Environment**: Production mode with `NODE_ENV=production`

### Replit Configuration
- **Runtime**: Node.js 20 with PostgreSQL 16 modules
- **Development**: Auto-start with `npm run dev` on port 5000
- **Production**: Auto-deploy with build step and production server
- **Database**: PostgreSQL provisioned automatically in production

### Environment Variables
- **DATABASE_URL**: PostgreSQL connection string (required for production)
- **NODE_ENV**: Environment flag for development/production modes

## Changelog
- June 27, 2025. Initial setup
- June 28, 2025. Enhanced hero section with mobile-optimized version while preserving tablet/desktop layout
- June 28, 2025. Fixed mobile navigation scroll positioning - inner pages now start at page title on mobile devices
- July 1, 2025. Added in-context WYSIWYG editing capability to About Me section with localStorage persistence

## User Preferences

Preferred communication style: Simple, everyday language.
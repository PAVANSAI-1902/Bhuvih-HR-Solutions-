# Bhuvih HR Solutions - Next.js Website

This project has been converted from Create React App to Next.js 14 with App Router.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   └── BhuvihHRWebsite.js  # Main website component
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.js                # Root layout
│   └── page.js                  # Home page
├── public/                      # Static assets
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
└── package.json                 # Dependencies and scripts
```

## 🔄 Changes from React to Next.js

### What Changed:
1. **Routing**: Migrated from React Router to Next.js App Router
2. **Component Structure**: Main component moved to `app/components/`
3. **Client Components**: Added `"use client"` directive for components using React hooks
4. **Styling**: Maintained Tailwind CSS configuration
5. **Build System**: Replaced react-scripts with Next.js build system

### Key Files:
- `app/layout.js` - Root layout with metadata
- `app/page.js` - Home page component
- `app/components/BhuvihHRWebsite.js` - Main website component (client component)
- `app/globals.css` - Global styles

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

- ✅ Next.js 14 App Router
- ✅ React 18
- ✅ Tailwind CSS
- ✅ Responsive Design
- ✅ SEO Optimized
- ✅ Fast Refresh
- ✅ Optimized Production Build

## 📦 Technologies

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Language**: JavaScript

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

```bash
npm run build
npm start
```

Or deploy directly to Vercel:
1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

## 📝 Notes

- The old `src/` directory can be removed after verifying the Next.js version works correctly
- The old `public/index.html` is no longer needed (Next.js handles HTML generation)
- All React components with hooks need the `"use client"` directive in Next.js App Router

## 📧 Contact

For more information about Bhuvih HR Solutions:
- Email: bhuvihhr@outlook.com
- Phone: +91 9866875709
- Address: Hyderabad, Telangana - 500045

---

© 2025 Bhuvih HR Solutions Pvt Ltd. All rights reserved.
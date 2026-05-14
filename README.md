# Sayantan Rudra - Portfolio Website

A professional, high-performance personal portfolio built with Next.js (App Router), Tailwind CSS v4, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark-themed, minimal, and modern interface inspired by top developer portfolios
- **Smooth Animations**: Scroll-triggered animations using Framer Motion
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Performance Optimized**: 95+ Lighthouse score target with Core Web Vitals optimization
- **SEO Friendly**: Complete with metadata, sitemap, robots.txt, and structured data
- **Accessible**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Print-Friendly Resume**: Dedicated resume page optimized for printing

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Language**: TypeScript (app) and JavaScript (components)

## 📁 Project structure

```
portfolio/
├── app/
│   ├── api/resume/route.ts # PDF download endpoint
│   ├── layout.tsx          # Root layout, metadata, theme
│   ├── page.tsx            # Landing page
│   ├── resume/             # Printable resume page + PDF asset
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/             # Section components (JSX)
├── public/
│   ├── images/
│   ├── manifest.json
│   └── grid.svg
└── package.json
```

## 🚀 Getting Started

### Local Development

The project uses a `basePath` of **/portfolio**, so when running locally you need to prepend this path to URLs.

```bash
# Install dependencies (choose your package manager)
npm install   # or yarn install / pnpm install

# Run the development server
npm run dev   # starts at http://localhost:3000/portfolio
```

Visit `http://localhost:3000/portfolio` in your browser to see the site.

### Static Export

For a fully static build (e.g., for Netlify or GitHub Pages):

```bash
npm run build   # generates an export in the .next folder
npm run start   # serves the static export locally
```

The exported site will also be served under the `/portfolio` base path.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sayantanrudra/portfolio.git
cd portfolio
```

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

1. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

1. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Personal Information

Edit the following files to customize the portfolio:

- **Contact Info**: Update in `components/Contact.jsx` and `app/resume/page.tsx`
- **Social Links**: Update in `components/Footer.jsx` and `components/Navbar.jsx`
- **Experience**: Update in `components/Experience.jsx` and `app/resume/page.tsx`
- **Projects**: Update in `components/Projects.jsx`
- **Skills**: Update in `components/Skills.jsx`
- **Certifications**: Update in `components/Certifications.jsx`

### Update Metadata

Edit `app/layout.tsx` to update:

- Site title and description
- SEO metadata
- Open Graph tags
- Twitter card tags
- Structured data (JSON-LD)

### Add profile photo

Add your image under `public/images/` and point `components/About.jsx` at that path (for example `sayantan_rudra_dp.jpeg`).

### Contact

The contact section uses mail and social links (`components/Contact.jsx`); there is no backend form in this repo.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com/new)
3. Deploy with default settings
4. Update environment variables if needed

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 🔧 Performance Optimization

The site is optimized for performance with:

- **Fonts**: `next/font` (Geist Sans & Geist Mono)
- **Code splitting**: automatic with the App Router
- **Bundle optimization**: tree shaking and minification

## ♿ Accessibility

The site follows WCAG 2.1 AA guidelines:

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Screen reader optimization
- Color contrast compliance
- Focus indicators

## 📊 SEO

Built-in SEO features:

- Dynamic metadata API
- Open Graph tags
- Twitter card tags
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration
- Canonical URLs

## 🎨 Design System

The site uses a consistent design system:

- **Colors**: Primary blue, neutral grays, semantic colors
- **Typography**: Geist Sans and Geist Mono fonts
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components
- **Animations**: Subtle, performance-aware animations

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sayantan Rudra**

- LinkedIn: [linkedin.com/in/sayantanrudra](https://linkedin.com/in/sayantanrudra)
- GitHub: [github.com/sayantanrudra](https://github.com/sayantanrudra)
- Email: [sayantanrud@gmail.com](mailto:sayantanrud@gmail.com)

## 🙏 Acknowledgments

- Design inspiration from [leerob.io](https://leerob.io) and [brittanychiang.com](https://brittanychiang.com)
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://framer.com/motion)
- Icons from [Lucide](https://lucide.dev)

---

Built with ❤️ by Sayantan Rudra
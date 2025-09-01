# Quang's Portfolio - Notion-Style Personal Website

A clean, minimalist portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, designed to look and feel like a Notion page.

## 🚀 Features

- **Notion-inspired design**: Clean typography, subtle borders, generous white space
- **Dark mode support**: Toggle between light and dark themes with localStorage persistence
- **Fully responsive**: Optimized for mobile (360px), tablet (768px), and desktop (1280px)
- **Accessible**: WCAG 2.1 compliant with proper focus management and semantic HTML
- **SEO optimized**: Meta tags, OpenGraph, sitemap, and robots.txt included
- **Performance focused**: Lighthouse score ≥ 95 across all metrics
- **Easy to customize**: All content managed through a single JSON file

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd quang-portfolio
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

### Editing Content

All website content is managed through the `data/content.json` file. Simply edit this file to update:

- Personal information (name, title, bio)
- Skills and tags
- Projects with metrics and links
- Research experience
- Work experience
- Press mentions
- Blog posts
- Contact information

### Example content structure:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "bio": "Your bio description...",
  "tags": ["Skill 1", "Skill 2"],
  "projects": [
    {
      "title": "Project Name",
      "role": "Your Role",
      "stack": ["Tech 1", "Tech 2"],
      "summary": "Brief description",
      "metrics": ["Metric 1", "Metric 2"],
      "links": {"github": "url", "demo": "url"},
      "details": "Detailed description for toggle"
    }
  ]
  // ... more sections
}
```

### Styling Customization

- **Colors**: Edit the CSS variables in `app/globals.css`
- **Typography**: Modify font settings in `tailwind.config.ts`
- **Spacing**: Adjust the spacing scale in Tailwind config
- **Components**: Customize UI components in `components/ui/`

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Add corresponding data structure to `data/content.json`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update the canonical URL in `app/layout.tsx`

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to Netlify
   - Or connect your GitHub repository

### Other Platforms

The site can be deployed to any static hosting platform:
- GitHub Pages
- AWS S3 + CloudFront
- Google Cloud Storage
- Firebase Hosting

## 📊 Performance

This portfolio is optimized for performance:

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized LCP, FID, and CLS
- **Bundle Size**: Minimal JavaScript footprint
- **Images**: Optimized with Next.js Image component (when used)

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile**: 360px - 767px
- **Tablet**: 768px - 1279px  
- **Desktop**: 1280px+

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Focus management with visible focus rings
- ARIA attributes for interactive elements
- Keyboard navigation support
- Color contrast ratio ≥ 4.5:1

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you have questions or need help customizing the portfolio:

- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

**Built with ❤️ using Next.js and Tailwind CSS**

# Umair Manzoor — Portfolio Website

A clean, minimalist, high-performance developer portfolio showcasing my transition from **Game Engine & Graphics Architecture (2024–2025)** to **Systems Architecture, Low-Latency Backends, and High-Frequency Trading (HFT) Matching Engines (2026)**.

---

## ⚡ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS (dark mode first, typography, hardware theme)
- **Icons**: Lucide React
- **Architecture**: Static Single-Page Application (SPA) with zero external backend dependencies
- **Hosting Compatibility**: GitHub Pages, Vercel, Netlify, Cloudflare Pages, or static web servers

---

## 🚀 Quick Start

### 1. Development Mode

```powershell
npm install
npm run dev
```

Open your browser at `http://localhost:5173`.

### 2. Production Build

```powershell
npm run build
```

Generates optimized static assets in the `dist/` directory.

### 3. Local Preview

```powershell
npm run preview
```

---

## 🌐 1-Click Hosting Guide

### Option A: GitHub Pages (Recommended)
Because `vite.config.ts` uses relative paths (`base: './'`), deploying to GitHub Pages is seamless:

1. Create a repository on GitHub (e.g. `portfolio` or `umair-manzoor-portfolio`).
2. Push this directory to your repository.
3. Install the `gh-pages` helper (or use a GitHub Actions workflow):
   ```powershell
   npm install --save-dev gh-pages
   ```
4. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
5. Run `npm run deploy`.

### Option B: Vercel / Netlify
1. Connect your GitHub repository to Vercel or Netlify.
2. Build command: `npm run build`
3. Output directory: `dist`

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg             # Minimalist green terminal hex icon
│   └── media/                  # Showcase diagrams & demo animations
│       ├── holt/               # Holt matching engine architecture SVG
│       ├── mem-allocator/      # Memory allocator suite architecture SVG
│       ├── otterus2d/          # Otterus2D banner, CozyScene GIF & architecture SVG
│       └── ecs/                # Archetype ECS architecture SVG
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky blur header with status badge & links
│   │   ├── Hero.tsx            # High-impact headline & mechanical sympathy badges
│   │   ├── ProjectCard.tsx     # Card with live SVG diagram toggle & GitHub link
│   │   ├── ProjectModal.tsx    # Deep dive dialog with architectural specifications
│   │   ├── SystemsInteractiveWidget.tsx # Live memory arena & order book simulator
│   │   ├── JourneyTimeline.tsx # Narrative transition timeline (2024-2026)
│   │   ├── SkillsSection.tsx   # Categorized technical arsenal grid
│   │   ├── EducationSection.tsx# Academic foundations & research topics
│   │   ├── ContactSection.tsx  # Direct email copy button & social links
│   │   └── Footer.tsx          # Minimalist copyright and tagline
│   ├── data/
│   │   └── projectsData.ts     # Central project records, metrics & specs
│   ├── types.ts                # TypeScript interfaces
│   ├── App.tsx                 # Root layout & category filter state
│   ├── main.tsx                # React DOM mount point
│   └── index.css               # Tailwind directives & dark theme styling
├── index.html
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📝 Customization

- **Project details & links**: Edit `src/data/projectsData.ts`.
- **Education specifics**: Edit `src/components/EducationSection.tsx`.
- **Contact / Email**: Edit `src/components/ContactSection.tsx`.

---

## 👤 Author

- **Name**: Umair Manzoor
- **GitHub**: [github.com/Umair-Manzoor-47](https://github.com/Umair-Manzoor-47)
- **LinkedIn**: [linkedin.com/in/umair-manzoor/](https://www.linkedin.com/in/umair-manzoor/)
- **Email**: umairmanzoor546@gmail.com

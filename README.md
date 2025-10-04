# Organization Timeline Website

This is a **Next.js 13+ (App Router)** project that showcases an organization’s story through sections like _Who We Are_, _Leadership_, _Our Volunteer Team_, and _Milestones_.  
The app includes:

- A hero image header
- Tab-based navigation to switch between different sections
- An animated timeline (2019–2023) where milestones are displayed along a central vertical line that fills with color as the user scrolls
- Reusable components (`Timeline`, `Aside`, etc.) written in **TypeScript**
- Image optimization via `next/image`
- Motion-based animations with [`motion`](https://motion.dev/)

---

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/) (React framework)
- [TypeScript](https://www.typescriptlang.org/) (static typing)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- [Motion](https://motion.dev/) (`import { motion } from "motion/react"`) for animations
- `next/image` for optimized images

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/xilder/slaine-project.git
cd slaine-project
```

### 2. Install dependencies

`npm install`

or with Yarn:

`yarn install`

### 3. Run the development server

`npm run dev`

Then open http://localhost:3000

in your browser.

### 4. Build for production

```bash
npm run build
npm run start
```

# 📸 Features

    Hero Section – Responsive image header at the top of the page.

    Tabs Navigation – Switch between sections (Who We Are, Leadership, Our Volunteer Team, Milestones).

    Animated Timeline – Events appear with smooth animations; the central line fills progressively as you scroll.

    Reusable Components – Timeline and Aside components are modular and easy to extend.

    Optimized Images – Images are served with the next/image component for best performance.

# ✅ Prerequisites

Before running locally, make sure you have installed:

    Node.js (>= 18.x recommended)

    npm (>= 9.x) or yarn (>= 1.22)

# 📄 License

This project is licensed under the MIT License

# 👩‍💻 Author

Built by [Abel Fagbemi](https://github.com/xilder) ✨

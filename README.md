# Beautiful Photo Gallery

A stunning single-page website featuring a responsive photo slider built with modern web technologies.

## ✨ Features

- 📸 **Interactive Photo Slider** - Auto-playing slideshow with manual navigation
- 📱 **Responsive Design** - Optimized for all screen sizes from mobile to desktop
- ⚡ **Fast Loading** - Static site generation with optimized images
- 🎯 **Touch Friendly** - Swipe gestures and touch navigation for mobile devices
- 🎨 **Modern Styling** - Clean, professional design with Tailwind CSS
- 🔧 **No Backend Required** - Pure frontend solution

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator with zero JS by default
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Swiper.js](https://swiperjs.com)** - Professional photo slider with touch support

## 🚀 Project Structure

```text
/
├── public/
│   └── images/           # Static images (if using local images)
├── src/
│   ├── components/
│   │   └── PhotoSlider.astro  # Main slider component
│   ├── layouts/
│   │   └── Layout.astro       # Base layout component
│   ├── pages/
│   │   └── index.astro        # Main page
│   └── styles/
│       └── global.css         # Global Tailwind styles
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command              | Action                                           |
| :------------------- | :----------------------------------------------- |
| `yarn install`       | Installs dependencies                            |
| `yarn dev`           | Starts local dev server at `localhost:4321`     |
| `yarn build`         | Build your production site to `./dist/`         |
| `yarn preview`       | Preview your build locally, before deploying    |
| `yarn astro ...`     | Run CLI commands like `astro add`, `astro check`|

## 🎨 Customization

### Adding Your Own Images

1. **Using URLs**: Update the `sampleImages` array in `src/pages/index.astro` with your image URLs
2. **Using Local Images**: Place images in `public/images/` and reference them with `/images/filename.jpg`

### Slider Configuration

Edit the Swiper configuration in `src/components/PhotoSlider.astro` to:
- Change auto-play delay
- Modify transition effects
- Add/remove navigation elements
- Customize responsive breakpoints

### Styling

- **Colors & Layout**: Edit Tailwind classes in the components
- **Typography**: Modify text styles in `src/pages/index.astro`
- **Slider Appearance**: Update CSS in `src/components/PhotoSlider.astro`

## 🚀 Deployment

Build the static site:

```bash
yarn build
```

The `dist/` folder contains your static website ready to deploy to:
- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- Any static hosting provider

## 💡 IntelliJ IDEA Setup

1. Choose **"Open"** and select this project folder
2. Select **Node.js** project type
3. Set **Package manager** to **Yarn**
4. Install recommended plugins: **Astro**, **Tailwind CSS**, **TypeScript**

## 📖 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Swiper.js Documentation](https://swiperjs.com)

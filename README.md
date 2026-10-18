# Carmela Pippa — Portfolio

Personal portfolio of Carmela Pippa, a frontend software engineer with a background in graphic, visual and product design. The website brings together frontend projects, design work and career experience, showing how development and design inform my work.

[Visit the portfolio](https://carmelapippa.netlify.app)

## Explore the website

- **Introduction:** a short introduction to my work in frontend development and product design.
- **Frontend / Design:** selected frontend projects with live demos and source code, plus a link to my design portfolio on Figma.
- **Languages and tools:** the development and design tools I work with.
- **Career:** my education and professional experience.

## Built with

React 18, Vite and CSS, with React Router for navigation, React Icons, React Type Animation and React Fast Marquee.

## Run locally

You will need Node.js and npm installed.

```bash
git clone https://github.com/carmelapi/my-portfolio.git
cd my-portfolio
npm ci
npm run dev
```

Open the local address printed by Vite in your browser.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create the production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |

## Project structure

- `src/Components/Body/`: introduction, tools and career sections.
- `src/Components/Project/`: project cards and project data in `projectdata.js`.
- `src/Components/Header&Footer/`: header, navigation and footer.
- `src/styles/` and `src/index.css`: component styles and global theme.
- `src/img/`: project images and other visual assets.

To update the featured frontend projects, edit `src/Components/Project/projectdata.js`. Each entry includes a title, tags, image, live demo and GitHub link.

## Author

[Carmela Pippa](https://github.com/carmelapi) — Frontend Software Engineer

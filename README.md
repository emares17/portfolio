# Terminal Portfolio

A customizable developer portfolio with an industrial dark terminal aesthetic. Built with Astro 5 and Tailwind CSS v4.

## Tech Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS v4
- **Fonts:** JetBrains Mono, Space Grotesk, IBM Plex Mono

## Getting Started

```bash
pnpm install
pnpm dev
```

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `pnpm install` | Install dependencies                        |
| `pnpm dev`     | Start local dev server at `localhost:4321`   |
| `pnpm build`   | Build production site to `./dist/`           |
| `pnpm preview` | Preview build locally before deploying       |

## Customization

All content is configured in two places:

### 1. Site Config — `src/config/index.ts`

This is the main file you need to edit. It contains two objects:

**`SITE_CONFIG`** — global site settings:

| Field          | What it controls                                      |
| :------------- | :---------------------------------------------------- |
| `title`        | Browser tab title and SEO title                       |
| `description`  | Meta description for SEO                              |
| `navLinks`     | Navigation menu items (text + anchor href)             |
| `socialLinks`  | Social links shown in the hero and footer              |
| `email`        | Used for the copy-to-clipboard contact buttons         |
| `brandName`    | The `> name` shown in the header and footer            |
| `socialImage`  | OG image filename (place in `public/`)                 |
| `canonicalURL` | Your deployed site URL                                 |

**`SITE_CONTENT`** — page content:

| Section      | Fields                                                      |
| :----------- | :---------------------------------------------------------- |
| `hero`       | `name`, `specialty`, `summary`, `email`, `resume`           |
| `experience` | Array of jobs with `company`, `position`, dates, `summary`  |
| `projects`   | Array with `name`, `summary`, `image`, `linkPreview`, `linkSource` |
| `about`      | `description` text                                          |

### 2. Tech Stack — `src/components/About.astro`

The skill categories and items in the About section are configured directly in the component. Edit the arrays to match your own skills.

### Resume

1. Place your resume PDF in the `public/` folder (e.g. `public/My_Resume.pdf`)
2. Set the `resume` field in `SITE_CONTENT.hero` to match: `"/My_Resume.pdf"`
3. Remove the field or set it to `undefined` to hide the download button

### Project Images

- Place project screenshots in `public/`
- Single image: set `image` to a string like `"/project.png"`
- Slideshow: set `image` to an array like `["/shot1.png", "/shot2.png", "/shot3.png"]`
- Omit `linkPreview` and `linkSource` to show a "coming soon" label

### Colors & Theme

Design tokens are defined in `src/styles/global.css` using CSS custom properties. The main accent colors:

- Green (`--color-green`): primary accent, CTA buttons, active states
- Amber (`--color-amber`): secondary accent, highlights
- Cyan (`--color-cyan`): tertiary accent

## Project Structure

```
src/
├── components/     # Astro components (Header, Hero, Experience, Projects, About, Footer)
├── config/         # Site configuration and content
├── layouts/        # Main layout with SEO meta tags
├── pages/          # Page routes
├── styles/         # Global CSS and theme tokens
└── types/          # TypeScript interfaces
public/             # Static assets (images, resume PDF, favicon)
```

# 11ty-Ed

A minimal computing theme for textual editors based on minimal computing principles, built with 11ty.

## Features

- Clean, minimal design focused on readability
- Built with accessibility in mind
- Responsive layout
- Support for scholarly texts with footnotes and citations
- Easy to customize and extend

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/11ty-Ed.git
   cd 11ty-Ed
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:8080`

## Project Structure

```
11ty-Ed/
├── _data/          # Global site data
├── _includes/      # Reusable components and partials
│   └── partials/   # Smaller page components
├── _layouts/       # Base page layouts
├── _lib/           # Utility functions and helpers
├── assets/         # Static assets (images, fonts, etc.)
├── css/           # Stylesheets
├── texts/         # Markdown content files
└── pages/         # Site pages
```

## Adding Content

1. Create a new markdown file in the `texts` directory
2. Add the required front matter:
   ```yaml
   ---
   layout: text
   title: Your Text Title
   author: Author Name
   editor: Editor Name
   ---
   ```
3. Write your content using Markdown

## Customization

- Edit `css/style.css` to customize the theme's appearance
- Modify layouts in `_layouts` to change page structure
- Update partials in `_includes/partials` for component changes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Based on the original [Ed. theme](https://github.com/minicomp/ed)
- Built with [11ty](https://www.11ty.dev/)
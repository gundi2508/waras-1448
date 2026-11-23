# Waras Mubarak

A personal memory-journal website built with React, Vite, Tailwind CSS, and shadcn/ui.

## Development

```bash
npm install
npm run dev
```

## Personalize

Edit `src/content/site.ts` to replace:

- The birthday date and personal hero line
- The letter paragraphs
- The sender name in the letter sign-off
- Photo captions or alternative text, if you want to make them more personal

The recipient name is set to Sakina in `src/content/site.ts` and `index.html`.
Update both if you personalize the page for someone else.

## Photos

Production images are imported from `src/assets/memories/` and
`src/assets/wedding/`. Keep UI image imports on `.webp` files. The lightbox
displays photos with `object-fit: contain` to preserve their full framing.

## Checks

```bash
npm run lint
npm run build
```

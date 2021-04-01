# Issue with `vue-router`'s WebHistory mode and vite.

When specifying absolute paths in `index.html`, everything works fine. But when you specify relative ones, something breaks. Try to run the project, go to route `/`, click links, refresh the page on nested routes. Do the same on path `/src2/`.

## Usage

```sh
npm i -g pnpm
pnpm install
pnpm dev
```
# Test render order

This is an experiment to see if we can pass data from a page to the layout via `React.cache` in `next@14`.  It doesn't look like we can - it looks like they may render in parallel, not sequence like <https://github.com/vercel/next.js/discussions/53026> indicates.

With a simple shellManager implementation, the page starts rendering, then the layout starts rendering, then the page finishes rendering, then the layout finishes rendering.  This means we can't use this to pass data from the page to the layout.

```txt
rendering IdPage
rendering RootLayout
rendered RootLayout
rendered IdPage
```

With a more complex shellManager implementation (ie. putting a promise to get the data in the shellManager before the first await), this _does_ work.

```txt
rendering IdPage
shellManager setup complete
rendering RootLayout
rendered IdPage
rendered RootLayout
```

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

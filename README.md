## How nextjs works

`yarn dev`: The execution is transfered to `_app.js`, which contains `MyApp` component. MyApp component automatically receives `Component` and `pageProps`, which are then returned as part of the jsx.

When we navigate to localhost:3000 in the browser, the Component prop will refer to the component defined in the `index.js`, which is the `Home` component.

---

## Dynamic routes

Even though we have dynamic routes where the id can be anything. If we have a component with the same name and in the same context, nestjs first looks for the named file componet, If it does not find any, it will look for the dynamic component.

---

## Catch All Routes

`docs/[...params].js` will only match the routes that come after `localhost:3000/docs/asd/fgh`
`docs/[[...params]].js` will match both the `localhost:3000/docs` and routes that come after `localhost:3000/docs/asd/fgh`

---

## Pre-render

By default, Nextjs pre-renders every page.

`pre-render` -> Process of generating HTML with the necessary data for a page in our application.
Pre-rendering can result in better performance and SEO

`Pre-rendering in Nextjs` -> By default, Nextjs pre-renders every page in the app

`Static genetation` -> Method of pre-rendering where HTML pages are generated at build time. This is the recommended method to pre-render pages whenever possible. because a page can be built once, cashed by a CDN and served to the client almost instantly.

---

## Generating HTML after fetching some external data.

`getStaticProps` ->

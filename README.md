## How nextjs works

`yarn dev`: The execution is transfered to `_app.js`, which contains `MyApp` component. MyApp component automatically receives `Component` and `pageProps`, which are then returned as part of the jsx.

When we navigate to localhost:3000 in the browser, the Component prop will refer to the component defined in the `index.js`, which is the `Home` component.

---

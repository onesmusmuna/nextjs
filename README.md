## How nextjs works

`yarn dev`: The execution is transfered to `_app.js`, which contains `MyApp` component. MyApp component automatically receives `Component` and `pageProps`, which are then returned as part of the jsx.

When we navigate to localhost:3000 in the browser, the Component prop will refer to the component defined in the `index.js`, which is the `Home` component.

---

## Dynamic routes

Even though we have dynamic routes where the id can be anything. If we have a component with the same name and in the same context, nestjs first looks for the named file componet, If it does not find any, it will look for the dynamic component.

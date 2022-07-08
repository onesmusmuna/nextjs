## How nextjs works

`yarn dev`: The execution is transfered to `_app.js`, which contains `MyApp` component. MyApp component automatically receives `Component` and `pageProps`, which are then returned as part of the jsx.

When we navigate to localhost:3000 in the browser, the Component prop will refer to the component defined in the `index.js`, which is the `Home` component.

---

## Dynamic routes

Even though we have dynamic routes where the id can be anything. If we have a component with the same name and in the same context, nestjs first looks for the named file componet, If it does not find any, it will look for the dynamic component.

## Catch All Routes

`docs/[...params].js` will only match the routes that come after `localhost:3000/docs/asd/fgh`
`docs/[[...params]].js` will match both the `localhost:3000/docs` and routes that come after `localhost:3000/docs/asd/fgh`

<!-- `docs/[...params].js` what is special about this is that, it will match any url that contains the docs segment in the path. -->

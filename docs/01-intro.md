# Introduction

### What this is

This is meant to be a basic intro to React hands on learning sesssion. Most of the tooling here
has been heavily used for several years and nothing is meant to be bleeding edge.

### What this is not

This is _not_ meant to cover advanced react topics, production scaling questions, or cover
any specific use cases.

## React

1. Component based

   - Highly composable and reusable
   - Single responsibility
   - ie [Button](/src/components/general/button.tsx)

2. Unidirectional data flow

   - Data passed into components as props which are read only
   - Events are executed which can change state

3. Virtual DOM

   - Representation of DOM held in memory, when state changes React will compare vDOM with actual DOM and only re-render pieces needed
     Never interacting w/ the DOM directly

4. JSX
   - Templating extention to JS.

## Ecosystem

This project was bootstrapped with [Create React App](https://create-react-app.dev/), and I think their blurb says it best:

```
You don't need to learn and configure many build tools. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically.
```

### Build Tools

Under the hood CRA is managing and using many tools that would otherwise need to be configured and managed separately, including

- Webpack
- Babel
- ESLint
- Jest

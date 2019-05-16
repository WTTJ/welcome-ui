

### Writing components

Each component will consist of:

- `ComponentName`: Folder with name of component (capitalized)
  - `index.js`: The React component
  - `styles.js`: Any related `styled-components`
  - `README.md` or `docs.js`: Documentation depending on Storybook or Docz
  - `tests.js`: Jest tests for this component

### Publishing

We use semver for versioning so run one of the following when you want to publish:

- `npm version patch` if there is a small (non-breaking) change (e.g. adding props to a component)
- `npm version minor` if there is a larger (non-breaking) change (e.g. adding a new component)
- `npm version major` if there is a breaking change (e.g. changing a component name or path)

Then run:

`npm publish`

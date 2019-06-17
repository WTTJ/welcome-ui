### Writing components

Each component will consist of:

- `ComponentName`: Folder with name of component (capitalized)
  - `index.js`: The React component
  - `styles.js`: Any related `styled-components`
  - ``docs.mdx`: Documentation on Docz
  - `index.test.js`: Jest tests for this component

### Publishing

Automate versioning and CHANGELOG generation, with semver and conventional commit messages. We use `standard-version` && `conventional-github-releaser`

`yarn run release`

Then run:

`npm publish`

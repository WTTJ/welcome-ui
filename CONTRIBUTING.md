# How to contribute

## Writing components

Each component will consist of:

- `ComponentName`: Folder with name of component (PascalCase)
  - `index.js`: The React component
  - `index.test.js`: Jest tests for this component
  - `styles.js`: Any related `styled-components`
  - `doc.mdx`: Documentation on `Docz`
  - `utils.js` : util for this component

## Publishing

Automate versioning and CHANGELOG generation, with semver and conventional commit messages. We use `standard-version` && `conventional-github-releaser`

`npm run release:build`

Then run:

`npm run release:publish`

# How to contribute to Welcome UI

## Development

### Workflow

- Create your branch from master
- Run `yarn` to setup the development environment.
- Make the changes you want and test them out in the demo website before sending a pull request.
- Add all necessary information and examples in your pull request.

### Commit message convention

We follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) convention ✨

The commit contains the following structural elements, to communicate intent to the consumers of your library:

- fix: patches a bug in your codebase
- feat: introduces a new feature to the codebase
- BREAKING CHANGE: introduces a breaking API change
- refactor: introduce code refactor
- docs: changes into documentation
- test: adding or updating tests
- chore: tooling changes, chore changes

We have a pre-commit hook to verify if your commit is correct 🚔

### Writing components

Each component will consist of:

- `ComponentName`: Folder with name of component (PascalCase)
  - `index.js`: The React component
  - `index.test.js`: Jest tests for this component
  - `styles.js`: Any related `styled-components`
  - `doc.mdx`: Documentation on `Docz`
  - `utils.js` : util for this component

## Reporting issues

You can report issues on our [github project](https://github.com/WTTJ/welcome-ui/issues) 🐛

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        topLevelImportPaths: [
          '@xstyled/styled-components',
          '@xstyled/styled-components/no-tags',
          '@xstyled/styled-components/native',
          '@xstyled/styled-components/primitives',
        ],
      },
    ],
  ],
}

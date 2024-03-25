module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        topLevelImportPaths: [
          '@wttj/xstyled-styled-components',
          '@wttj/xstyled-styled-components/no-tags',
          '@wttj/xstyled-styled-components/native',
          '@wttj/xstyled-styled-components/primitives',
        ],
      },
    ],
  ],
}

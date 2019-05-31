import { css } from 'styled-components'

import { welcomeTheme } from './src/theme/welcome'
import { createTheme } from './src/theme/core'

const theme = createTheme(welcomeTheme)

export default {
  title: 'Welcome UI',
  description: 'Design system of @wttj with react, styled-components and styled-system',
  base: '/',
  dest: '/docs',
  wrapper: 'wrapper',
  repository: 'https://github.com/WTTJ/welcome-ui',
  htmlContext: {
    favicon: 'https://cdn.welcometothejungle.co/wttj-front/assets/images/favicon.ico'
  },
  modifyBundlerConfig: bundlerConfig => {
    const rules = [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
    bundlerConfig.module.rules.push(...rules)
    return bundlerConfig
  },
  menu: ['Getting Started', 'Themes', 'Components', 'Helpers'],
  themeConfig: {
    colors: {
      primary: theme.colors.primary[500]
    },
    radius: theme.radii.md,
    styles: {
      body: css`
        font-family: ${theme.fontFamilies.texts};

        nav > div > div > a {
          font-weight: ${theme.fontWeights.bold} !important;
          margin-top: 7px;
        }

        #root nav dl a {
          font-weight: ${theme.fontWeights.regular} !important;
          padding-top: 7px;
        }
      `,
      h1: css`
        font-family: ${theme.fontFamilies.headings};
        font-size: ${theme.fontSizes.h1};
        font-weight: ${theme.fontWeights.bold};
        margin: 3rem 0 2rem;
      `,
      h2: css`
        font-family: ${theme.fontFamilies.headings};
        font-size: ${theme.fontSizes.h2};
        font-weight: ${theme.fontWeights.bold};
        color: ${theme.colors.secondary[500]};
        border-bottom: 'none';
        margin: 3rem 0 1rem;
      `,
      h3: css`
        font-family: ${theme.fontFamilies.headings};
        font-size: ${theme.fontSizes.h3};
        font-weight: ${theme.fontWeights.bold};
        margin: 2.5rem 0 1rem;
      `
    },
    logo: {
      src:
        'https://cdn.welcometothejungle.co/common/assets/images/logos/wttj-long-original-dark.svg',
      width: 200
    }
  },
  port: 3020
}

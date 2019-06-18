import { createGlobalStyle, css } from '@xstyled/styled-components'

import { reset } from './reset'
import { fontFace } from './font'

const baseResponsiveStyles = css`
  @media (max-width: 1200px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 1300px) and (max-height: 700px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    html {
      font-size: 16px;
    }
  }
`

export const getBaseStyles = theme => createGlobalStyle`
  ${reset}

  ${fontFace(theme)}

  html {
    font-size: ${theme.fontSizes.html};
  }

  body, button, input, select, textarea {
    font-family: ${[theme.fonts.texts, 'sans-serif'].join(', ')};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${[theme.fonts.headings, theme.fonts.texts, 'serif'].join(', ')};
  }

  h1, h2, h3{
    line-height: 1.3;
  }

  h4, h5, h6, p, li{
    line-height: 1.4;
  }

  ::selection {
    background-color: ${theme.colors.primary[500]};
    color: ${theme.colors.light[200]};
  }

  ${baseResponsiveStyles}
`

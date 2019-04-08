import { createGlobalStyle, css } from 'styled-components'

import { HEADING_FONT_FAMILY, DEFAULT_FONT_FAMILY } from './constants'
import reset from './reset'
import { fontFace } from './font'
import { color, fontSize } from './theme'

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

const BaseStyles = createGlobalStyle`
  ${reset}

  ${fontFace()}

  html {
    font-size: ${fontSize('html')};
  }

  body {
    font-family: ${[DEFAULT_FONT_FAMILY, 'sans-serif'].join(', ')};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${[HEADING_FONT_FAMILY, DEFAULT_FONT_FAMILY, 'sans-serif'].join(', ')};
  }

  h1, h2, h3{
    line-height: 1.3;
  }

  h4, h5, h6, p, li{
    line-height: 1.4;
  }

  ::selection {
    background-color: ${color('seafoamblue')};
    color: ${color('white')};
  }

  ${baseResponsiveStyles}
`

export default BaseStyles

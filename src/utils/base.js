import { createGlobalStyle, css } from 'styled-components'

import reset from './reset'
import { fontFace } from './font'
import { color, fontSize, fontFamily } from './helpers'

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
    font-size: ${fontSize('html')({ theme })};
  }

  body {
    font-family: ${[fontFamily('texts')({ theme }), 'sans-serif'].join(', ')};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${[
      fontFamily('headings')({ theme }),
      fontFamily('texts')({ theme }),
      'serif'
    ].join(', ')};
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

export default getBaseStyles

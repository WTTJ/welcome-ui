import { injectGlobal, css } from 'styled-components'

import reset from './reset.styled'
import { fontFace } from './font.styled'

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

const baseStyles = () => injectGlobal`
  ${reset}

  ${fontFace('Regular', 300)}
  ${fontFace('Medium', 400)}
  ${fontFace('Bold', 600)}
  ${fontFace('Heading', 700)}

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body{
    font-family: 'HKCompakt';
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3{
    line-height: 1.3;
  }

  h4, h5, h6, p, li{
    line-height: 1.4;
  }

  ::selection {
    background-color: #00C29A;
    color: #fff;
  }

  ${baseResponsiveStyles}
`

export default baseStyles

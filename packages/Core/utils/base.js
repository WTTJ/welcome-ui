import { createGlobalStyle, css } from '@xstyled/styled-components'
import { getFont, th } from '@xstyled/system'
import { normalize } from 'polished'

import { fonts } from './font'
import { resetStyles } from './reset'

function getFontFamilies(...fonts) {
  return fonts.filter(Boolean).join(', ')
}

const baseBoxSizing = css`
  * {
    &,
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
`

function baseFonts(props) {
  const texts = getFont('texts')(props)
  const sansSerif = 'sans-serif'
  return css`
    @media (max-width: 1200px) {
      html {
        font-size: 87.5%;
      }
    }

    @media (max-width: 1300px) and (max-height: 700px) {
      html {
        font-size: 87.5%;
      }
    }

    @media (max-width: 600px) {
      html {
        font-size: 100%;
      }
    }

    body,
    button,
    input,
    select,
    textarea {
      font-family: ${getFontFamilies(texts, sansSerif)};
      -webkit-font-smoothing: antialiased;
      letter-spacing: ${th('letterSpacings.html')};
      line-height: ${th('lineHeights.html')};
    }
  `
}

export const GlobalStyle = createGlobalStyle(
  ({ useReset }) => css`
    ${normalize()};
    ${useReset ? resetStyles : baseBoxSizing};
    ${fonts()};
    ${baseFonts};

    ::selection {
      ${th('selection')};
    }

    /* for firefox */
    &[type='search'] {
      -webkit-appearance: none;
    }

    /* to remove x on macos */
    input[type='search']::-webkit-search-decoration,
    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-results-button,
    input[type='search']::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }
  `
)

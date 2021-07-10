import { createGlobalStyle, css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { fonts } from './font'
import { normalizeStyle, resetStyles } from './reset'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as WorkSans from './work-sans.css'

const baseBoxSizing = css`
  * {
    &,
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
`

function baseFonts() {
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
      /* stylelint-disable-next-line */
      font-family: texts;
      -webkit-font-smoothing: antialiased;
      line-height: html;
      letter-spacing: html;
    }
  `
}

export const GlobalStyle = createGlobalStyle<{ useReset?: boolean }>(
  ({ useReset }) => css`
    ${normalizeStyle};
    ${WorkSans};
    ${fonts()};
    ${baseFonts()};
    ${useReset ? resetStyles : baseBoxSizing};

    ::selection {
      ${th('selection')};
    }

    /* for firefox */
    &[type='search'] {
      appearance: none;
    }

    /* to remove x on macos */
    input[type='search']::-webkit-search-decoration,
    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-results-button,
    input[type='search']::-webkit-search-results-decoration {
      appearance: none;
    }
  `
)

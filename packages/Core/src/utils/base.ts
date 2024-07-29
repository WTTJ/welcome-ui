import { createGlobalStyle, css, th } from '@xstyled/styled-components'

import { fonts } from './font'
import { normalizeStyle, resetStyles } from './reset'

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
    ${fonts()};
    ${baseFonts()};
    ${useReset ? resetStyles : baseBoxSizing};

    html {
      color: neutral-50;
    }

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

    /* Fix to toast notification when useReset prop is add to WUI provider */
    .Toaster__message-wrapper {
      min-height: 'auto';
    }
  `
)

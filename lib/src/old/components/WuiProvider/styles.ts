import { createGlobalStyle, css, th } from '@xstyled/styled-components'

import { fonts } from './font'

/* stylelint-disable */
export const resetStyles = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    min-width: 0;
    min-height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    overflow: hidden;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input::-webkit-search-cancel-button {
    display: none;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    padding-top: 1px;
    margin-top: -1px;
  }
`

/* stylelint-enable */

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
    ${fonts()};
    ${baseFonts()};
    ${useReset ? resetStyles : baseBoxSizing};

    html {
      color: neutral-60;
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

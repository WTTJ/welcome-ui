import { createGlobalStyle, css, th } from '@xstyled/styled-components'

import { fonts } from './font'

/* stylelint-disable */
export const resetStyles = css`
  @layer base {
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
    :focus {
      outline: none !important; /* important for firefox */
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
  }
`

export const normalizeStyle = css`
  @layer base {
    html {
      line-height: 1.15;
      -webkit-text-size-adjust: 100%;
    }

    body {
      margin: 0;
    }

    main {
      display: block;
    }

    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }

    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }

    pre {
      font-family: monospace;
      font-size: 1em;
    }

    a {
      background-color: transparent;
    }

    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      text-decoration: underline dotted;
    }

    b,
    strong {
      font-weight: bolder;
    }

    code,
    kbd,
    samp {
      font-family: monospace;
      font-size: 1em;
    }

    small {
      font-size: 80%;
    }

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    img {
      border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }

    button,
    input {
      overflow: visible;
    }

    button,
    select {
      text-transform: none;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
      appearance: auto;
      -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }

    button:-moz-focusring,
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring {
      outline: 1px dotted ButtonText;
    }

    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }

    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }

    progress {
      vertical-align: baseline;
    }

    textarea {
      overflow: auto;
    }

    [type='checkbox'],
    [type='radio'] {
      box-sizing: border-box;
      padding: 0;
    }

    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
      height: auto;
    }

    [type='search'] {
      appearance: textfield;
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }

    [type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }

    details {
      display: block;
    }

    summary {
      display: list-item;
    }

    template {
      display: none;
    }

    [hidden] {
      display: none;
    }
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
    @layer base {
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

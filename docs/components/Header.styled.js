import styled, { css } from '@xstyled/styled-components'
import { th, up } from '@xstyled/system'

export const Header = styled.header`
  ${th('docs.header')};
  font-size: body2;
  height: 60;
  left: 0;
  position: fixed;
  padding: 0 md;
  top: 0;
  width: 1;
  z-index: 1;

  ${up(
    'md',
    css`
      height: 100vh;
      max-width: 270;
      padding: xxl xl;
    `
  )};

  /* ALGOLIA DOCSEARCH */
  .algolia-autocomplete {
    width: 100%;
  }

  .algolia-autocomplete .ds-dropdown-menu {
    border-radius: 0;
    box-shadow: none;

    [class^='ds-dataset-'] {
      border: 1px solid ${th('colors.light.800')};
      border-radius: 0;
      box-shadow: sm;
      background: ${th('colors.nude.100')};
    }
  }

  .algolia-autocomplete .algolia-docsearch-suggestion {
    text-decoration: none;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column {
    color: light.100;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--category-header {
    color: dark.900;
    border-bottom: 1px solid ${th('colors.light.800')};
    padding: md;
  }

  .algolia-docsearch-suggestion--category-header-lvl0 {
    ${th('texts.h6')};
    text-transform: uppercase;
    color: dark.900;
  }

  .algolia-docsearch-suggestion--highlight {
    color: dark.900;
    background: ${th('colors.primary.200')};
  }

  .algolia-autocomplete
    .ds-dropdown-menu
    .ds-suggestion.ds-cursor
    .algolia-docsearch-suggestion.suggestion-layout-simple,
  .algolia-autocomplete
    .ds-dropdown-menu
    .ds-suggestion.ds-cursor
    .algolia-docsearch-suggestion:not(.suggestion-layout-simple)
    .algolia-docsearch-suggestion--content {
    background-color: primary.100;
  }

  .algolia-autocomplete
    .algolia-docsearch-suggestion--category-header
    .algolia-docsearch-suggestion--category-header-lvl0
    .algolia-docsearch-suggestion--highlight,
  .algolia-autocomplete
    .algolia-docsearch-suggestion--category-header
    .algolia-docsearch-suggestion--category-header-lvl1
    .algolia-docsearch-suggestion--highlight,
  .algolia-autocomplete
    .algolia-docsearch-suggestion--text
    .algolia-docsearch-suggestion--highlight {
    box-shadow: none;
    border-bottom: ${th('borderWidths.md')} solid ${th('colors.primary.500')};
  }

  .algolia-autocomplete .ds-dropdown-menu:before {
    background: ${th('colors.nude.100')};
    border-top: 1px solid ${th('colors.light.800')};
    border-right: 1px solid ${th('colors.light.800')};
  }

  .algolia-autocomplete .algolia-docsearch-suggestion {
    background: ${th('colors.light.900')};
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--title {
    color: dark.900;
    margin-bottom: 0;
  }

  .algolia-docsearch-suggestion--text {
    margin-top: 3;
  }

  .algolia-docsearch-suggestion--wrapper {
    margin: 0;
    border-bottom: 1px solid ${th('colors.light.800')};
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--wrapper {
    padding: 0;
  }

  .algolia-autocomplete .ds-dropdown-menu .ds-suggestions {
    border: 1px solid ${th('colors.light.800')};
    border-bottom: 0;
  }

  .algolia-docsearch-suggestion--subcategory-column,
  .algolia-docsearch-suggestion--content {
    padding: lg md;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion {
    padding: 0;
  }

  .algolia-docsearch-suggestion--category-header {
    margin-top: 0;
  }
`

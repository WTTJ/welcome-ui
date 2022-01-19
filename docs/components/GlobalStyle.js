import { defaultFieldStyles } from '@welcome-ui/utils'
import { createGlobalStyle, th } from '@xstyled/styled-components'

export const GlobalStyle = createGlobalStyle`
  /* ALGOLIA DOCSEARCH */
  :root {
    --docsearch-modal-shadow: none;
    --docsearch-hit-shadow: none;
    --docsearch-key-shadow: none;
    --docsearch-footer-shadow: none;
  }

  .DocSearch {
    &-Button {
      margin: 0;
      width: 100%;
      height: 30;
      border-radius: 0;
      padding: 0 xxs;
      ${defaultFieldStyles({})};
      cursor: text;
      font-family: 'Work Sans';

      &:hover, &:active, &:focus {
        box-shadow: none;
      }

      &-Placeholder {
        ${th('defaultFields.placeholder')};
        display: block;
      }

      &-Keys {
        margin-top: 2;
        display: flex;
      }

      &-Key {
        border-radius: none;
        ${th('tags.default')};
        ${th('tags.variants.default')};
      }
    }
  }

  .DocSearch {
    &-Commands {
      display: none !important;
    }
    &-Search-Icon {
      display: none;
    }
  }
`

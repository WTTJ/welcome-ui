import { defaultFieldStyles } from '@welcome-ui/utils'
import { createGlobalStyle, th } from '@wttj/xstyled-styled-components'

export const GlobalStyle = createGlobalStyle`
  /* ALGOLIA DOCSEARCH */
  :root {
    --docsearch-modal-shadow: none;
    --docsearch-hit-shadow: none;
    --docsearch-key-shadow: none;
    --docsearch-footer-shadow: none;
    --docsearch-highlight-color: ${th('colors.dark-900')};
    --docsearch-primary-color: ${th('colors.dark-900')};
    --docsearch-logo-color: ${th('colors.dark-100')};
  }

  .DocSearch {
    transition: none !important;

    &-Button {
      margin: 0;
      width: 100%;
      height: 30;
      border-radius: 0;
      padding: 0 sm;
      ${defaultFieldStyles({})};
      cursor: text;
      font-family: 'work-sans';

      &:hover, &:active, &:focus {
        box-shadow: none;
      }

      &-Placeholder {
        ${th('defaultFields.placeholder')};
        display: block;
      }

      &-Keys {
        margin-top: xxs;
        display: flex;
      }

      &-Key {
        border-radius: none;
        ${th('tags.default')};
        ${th('tags.variants.default')};
        background: ${th('tags.variants.default.backgroundColor')};
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

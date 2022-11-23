import { defaultFieldStyles } from '@welcome-ui/utils'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* ALGOLIA DOCSEARCH */
  :root {
    --docsearch-modal-shadow: none;
    --docsearch-hit-shadow: none;
    --docsearch-key-shadow: none;
    --docsearch-footer-shadow: none;
    --docsearch-highlight-color: ${({ theme }) => theme.colors['dark-900']};
    --docsearch-primary-color: ${({ theme }) => theme.colors['dark-900']};
    --docsearch-logo-color: ${({ theme }) => theme.colors['dark-100']};
  }

  .DocSearch {
    &-Button {
      margin: 0;
      width: 100%;
      height: 30px;
      border-radius: 0;
      padding: 0 ${({ theme }) => theme.space.sm};
      ${defaultFieldStyles({})};
      cursor: text;
      font-family: 'Work Sans';

      &:hover, &:active, &:focus {
        box-shadow: none;
      }

      &-Placeholder {
        ${({ theme }) => theme.defaultFields.placeholder};
        display: block;
      }

      &-Keys {
        margin-top: ${({ theme }) => theme.space.xxs};
        display: flex;
      }

      &-Key {
        border-radius: none;
        ${({ theme }) => theme.tags.default};
        ${({ theme }) => theme.tags.variants.default};
        background: ${({ theme }) => theme.tags.variants.default.backgroundColor};
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

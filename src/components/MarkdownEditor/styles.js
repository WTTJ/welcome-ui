import styled, { css } from 'styled-components'
import SimpleMDE from 'react-simplemde-editor'

import { get, getCss } from '../../theme/helpers'
import { fieldTypeStyles } from '../../common/styles/form'

export const StyledMarkdownEditor = styled.div(
  props => css`
    position: relative;
    pointer-events: ${props.disabled && 'none'};
    ${fieldTypeStyles};
    ${props.focused && getCss('fields.focused')};
    ${props.disabled && getCss('fields.disabled')};
    padding: 0;

    .editor-toolbar {
      border: 0 none;
      padding: ${get('spaces.xs')} ${get('spaces.xs')};
      opacity: 1;
      background-color: ${get('colors.light.100')};
      border-bottom: ${get('borderWidths.sm')} solid ${get('colors.nude.200')};
      position: sticky;
      top: 0;
      z-index: 2;
      box-shadow: ${get('boxShadows.sm')};

      &::before,
      &::after {
        content: none;
      }

      button {
        ${getCss('fields.mde.icons')};
        height: 2rem;
        width: 2rem;
        line-height: 2rem;
        text-align: center;

        &::before {
          line-height: inherit;
        }
      }

      i.separator {
        color: transparent;
        border-left: 0 none;
        border-right: 1px solid ${get('colors.nude.200')};
      }
    }

    .editor-statusbar {
      display: none;
    }

    .CodeMirror {
      border: none;
      background: inherit;
    }

    .cm-strong {
      font-weight: ${get('fontWeights.bold')};
    }
  `
)

export const StyledSimpleMDE = styled(SimpleMDE)``

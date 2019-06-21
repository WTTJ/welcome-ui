import styled, { css } from 'styled-components'
import { th } from '@xstyled/system'
import SimpleMDE from 'react-simplemde-editor'

import { fieldTypeStyles } from '../../common/styles/form'

export const Wrapper = styled.div(
  props => css`
    ${fieldTypeStyles};
    position: relative;
    pointer-events: ${props.disabled && 'none'};
    ${props.focused && th('fields.focused')};
    ${props.disabled && th('fields.disabled')};
    padding: 0;

    .editor-toolbar {
      border: 0 none;
      padding: ${th('space.xs')} ${th('space.xs')};
      opacity: 1;
      background-color: ${th('colors.light.100')};
      border-bottom: ${th('borderWidths.sm')} solid ${th('colors.nude.200')};
      position: sticky;
      top: 0;
      z-index: 2;
      box-shadow: ${th('shadows.sm')};

      &::before,
      &::after {
        content: none;
      }

      button {
        ${th('fields.mde.icons')};
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
        border-right: 1px solid nude.200;
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
      font-weight: bold;
    }
  `
)

export const Editor = styled(SimpleMDE)``

import styled, { css } from '@xstyled/styled-components'
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

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: md md;
  opacity: 1;
  background-color: light.100;
  border-bottom: ${th('borderWidths.sm')} solid ${th('colors.nude.200')};
  border-radius: ${th('radii.sm')} ${th('radii.sm')} 0 0;
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: ${th('shadows.sm')};
`

export const ToolbarIcon = styled.a(
  props => css`
    margin-right: md;
    cursor: pointer;
    color: ${props.active ? th('colors.primary.500') : 'inherit'};

    &:hover {
      color: ${th('colors.primary.500')};
    }
  `
)

export const Divider = styled.div`
  display: inline-block;
  width: 1px;
  height: 1rem;
  margin-right: md;
  background-color: nude.200;
`

export const EmojiPicker = styled.div`
  position: absolute;
  z-index: 2;
  top: ${th('space.md')};
  right: ${th('space.md')};
`

export const Editor = styled(SimpleMDE)``

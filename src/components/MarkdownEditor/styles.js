import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import SimpleMDE from 'react-simplemde-editor'

import { fieldStyles } from '../../common/styles/form'
import { componentSystem, filterComponent, system } from '../../utils/'

export const Wrapper = styled(filterComponent('div'))(
  ({ connected, disabled, focused }) => css`
    ${fieldStyles};
    position: relative;
    pointer-events: ${disabled && 'none'};
    ${focused && th('fields.focused')};
    ${disabled && th('fields.disabled')};
    height: auto;
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
    ${connected ? componentSystem : system};
  `
)

export const Toolbar = styled.div(
  ({ borderRadius }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: md md;
    opacity: 1;
    background-color: light.100;
    border-bottom: ${th('borderWidths.sm')} solid ${th('colors.nude.200')};
    border-radius: sm;
    position: sticky;
    top: 0;
    overflow: auto;
    z-index: 2;
    box-shadow: ${th('shadows.sm')};
    border-radius: ${borderRadius};
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  `
)

export const ToolbarIcon = styled.a(
  props => css`
    padding: 0 xxs;
    margin-right: xxs;
    cursor: pointer;
    color: ${props.active ? th('colors.primary.500') : 'inherit'};
    transition: medium;

    &:hover {
      color: ${th('colors.primary.500')};
    }
  `
)

export const Divider = styled.div`
  display: inline-block;
  width: 1px;
  height: 1rem;
  margin-right: xxs;
  background-color: nude.200;
`

export const EmojiPicker = styled.div`
  position: absolute;
  z-index: 2;
  top: ${th('space.md')};
  right: ${th('space.md')};
`

export const Editor = styled(SimpleMDE)``

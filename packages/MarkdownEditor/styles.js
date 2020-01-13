import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import SimpleMDE from 'react-simplemde-editor'
import { componentSystem, filterFieldComponent, system } from '@welcome-ui/system'
import { fieldStyles } from '@welcome-ui/utils'

export const Wrapper = styled(filterFieldComponent('div'))(
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
      z-index: 0;
    }

    .cm-strong {
      font-weight: bold;
    }
    ${connected ? componentSystem : system};
  `
)

export const Toolbar = styled.div(
  ({ borderRadius = 'sm' }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: md md;
    opacity: 1;
    background-color: light.900;
    border-bottom: ${th('borderWidths.sm')} solid ${th('colors.nude.200')};
    position: sticky;
    top: 0;
    overflow: auto;
    z-index: 1;
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

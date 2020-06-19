import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import SimpleMDE from 'react-simplemde-editor'
import { componentSystem, filterFieldComponent, system } from '@welcome-ui/system'
import { defaultFieldStyles } from '@welcome-ui/utils'

export const Wrapper = styled(filterFieldComponent('div'))(
  ({ connected, disabled, focused }) => css`
    ${defaultFieldStyles};
    position: relative;
    pointer-events: ${disabled && 'none'};
    ${focused && th('defaultFields.focused.default')};
    ${disabled && th('defaultFields.disabled')};
    height: auto;
    padding: 0;
    border-radius: sm;

    .editor-statusbar {
      display: none;
    }

    .CodeMirror {
      border: none;
      background: inherit;
      z-index: 0;
      color: inherit;
    }

    .cm-strong {
      font-weight: bold;
    }
    ${connected ? componentSystem : system};
  `
)

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: md md;
  opacity: 1;
  background-color: nude.200;
  border-bottom: ${th('borderWidths.sm')} solid ${th('colors.nude.200')};
  position: sticky;
  top: 0;
  overflow: auto;
  z-index: 1;
`

export const ToolbarIcon = styled.a(
  props => css`
    display: flex;
    align-items: center;
    padding: 0 xxs;
    margin-right: xxs;
    cursor: pointer;
    color: ${props.active ? th('colors.dark.900') : th('colors.nude.900')};
    transition: medium;

    &:hover {
      color: ${th('colors.dark.500')};
    }
  `
)

export const Divider = styled.div`
  display: inline-block;
  width: 1px;
  height: 1rem;
  margin-right: xxs;
  background-color: nude.700;
`

export const EmojiPicker = styled.div`
  position: absolute;
  z-index: 2;
  top: ${th('space.md')};
  right: ${th('space.md')};
`

export const Editor = styled(SimpleMDE)``

import styled, { css, th } from '@wttj/xstyled-styled-components'
import { defaultFieldStyles } from '@welcome-ui/utils'

import { emojiMartStyles } from './emojiMartStyles'
import { easyMdeStyles } from './easyMdeStyles'

import { MarkdownEditorOptions } from './index'

interface ToolbarIconOptions {
  active?: boolean
}

export const Wrapper = styled.divBox(
  ({ disabled, focused, size, variant }: { focused: boolean } & MarkdownEditorOptions) => css`
    ${easyMdeStyles};
    ${defaultFieldStyles({ size, variant })};
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
  `
)

export const Toolbar = styled.divBox`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: sm xs;
  opacity: 1;
  background-color: light-100;
  border-bottom: ${th('borderWidths.sm')} solid ${th('colors.nude-200')};
  position: sticky;
  top: 0;
  overflow: auto;
  z-index: 1;
`

export const ToolbarIcon = styled.aBox(
  ({ active }: ToolbarIconOptions) => css`
    display: flex;
    align-items: center;
    padding: 0 xs;
    cursor: pointer;
    color: ${active ? th('colors.nude-900') : th('colors.dark-900')};
    transition: medium;

    > svg {
      width: 16;
    }

    &:hover {
      color: ${th('colors.dark-500')};
    }
  `
)

export const Divider = styled.divBox`
  display: inline-block;
  width: 1px;
  height: 12;
  margin: 0 xs;
  background-color: nude-600;
`

export const EmojiPicker = styled.divBox`
  ${emojiMartStyles};
  position: absolute;
  z-index: 2;
  top: ${th('space.md')};
  right: ${th('space.md')};
`

export const Actions = styled.divBox`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: md;
  background-color: light-900;
`

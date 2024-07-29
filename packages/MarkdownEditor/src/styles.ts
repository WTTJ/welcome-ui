import styled, { css, system, th } from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'
import { defaultFieldStyles } from '@welcome-ui/utils'

import { emojiMartStyles } from './emojiMartStyles'
import { easyMdeStyles } from './easyMdeStyles'

import { MarkdownEditorOptions } from './index'

interface ToolbarIconOptions {
  active?: boolean
}

export const Wrapper = styled('div').withConfig({ shouldForwardProp })<
  { focused: boolean } & MarkdownEditorOptions
>(
  ({ disabled, focused, size, variant }) => css`
    ${easyMdeStyles};
    ${defaultFieldStyles({ size, variant })};
    position: relative;
    pointer-events: ${disabled && 'none'};
    ${focused && th('defaultFields.focused.default')};
    ${disabled && th('defaultFields.disabled')};
    height: auto;
    padding: 0;

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
    ${system};
  `
)

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: sm xs;
  opacity: 1;
  background-color: neutral-80;
  border-bottom: ${th('borderWidths.sm')} solid ${th('colors.nude-30')};
  position: sticky;
  top: 0;
  overflow: auto;
  z-index: 1;
`

export const ToolbarIcon = styled.a.withConfig({ shouldForwardProp })<ToolbarIconOptions>(
  ({ active }) => css`
    display: flex;
    align-items: center;
    padding: 0 xs;
    cursor: pointer;
    color: ${active ? th('colors.nude-80') : th('colors.neutral-black')};
    transition: medium;

    > svg {
      width: 16;
    }

    &:hover {
      color: ${th('colors.neutral-50')};
    }
  `
)

export const Divider = styled.div`
  display: inline-block;
  width: 1px;
  height: 12;
  margin: 0 xs;
  background-color: nude-60;
`

export const EmojiPicker = styled.div`
  ${emojiMartStyles};
  position: absolute;
  z-index: 2;
  top: ${th('space.md')};
  right: ${th('space.md')};
`

export const Actions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: md;
  background-color: neutral-white;
`

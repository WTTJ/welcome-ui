import styled, { css } from 'styled-components'
import { Box } from '@welcome-ui/box'
import { defaultFieldStyles } from '@welcome-ui/utils'

import { emojiMartStyles } from './emojiMartStyles'
import { easyMdeStyles } from './easyMdeStyles'

import { MarkdownEditorOptions } from './index'

interface ToolbarIconOptions {
  active?: boolean
}

export const Wrapper = styled(Box)<{ focused: boolean } & MarkdownEditorOptions>(
  ({ disabled, focused, size, theme, variant }) => css`
    ${easyMdeStyles};
    ${defaultFieldStyles({ size, variant })};
    position: relative;
    pointer-events: ${disabled && 'none'};
    ${focused && theme.defaultFields.focused.default};
    ${disabled && theme.defaultFields.disabled};
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

export const Toolbar = styled(Box)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: ${theme.space.sm} ${theme.space.xs};
    opacity: 1;
    background-color: ${theme.colors['light-100']};
    border-bottom: ${theme.borderWidths.sm} solid ${theme.colors['nude-200']};
    position: sticky;
    top: 0;
    overflow: auto;
    z-index: 1;
  `
)

export const ToolbarIcon = styled.a<ToolbarIconOptions>(
  ({ active, theme }) => css`
    display: flex;
    align-items: center;
    padding: 0 ${theme.space.xs};
    cursor: pointer;
    color: ${active ? theme.colors['nude-900'] : theme.colors['dark-900']};
    transition: ${theme.transitions.medium};

    > svg {
      width: 16;
    }

    &:hover {
      color: ${theme.colors['dark-500']};
    }
  `
)

export const Divider = styled.div(
  ({ theme }) => css`
    display: inline-block;
    width: 1px;
    height: 12;
    margin: 0 ${theme.space.xs};
    background-color: ${theme.colors['nude-600']};
  `
)

export const EmojiPicker = styled.div(
  ({ theme }) => css`
    ${emojiMartStyles};
    position: absolute;
    z-index: 2;
    top: ${theme.space.md};
    right: ${theme.space.md};
  `
)

export const Actions = styled.div(
  ({ theme }) => css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: ${theme.space.md};
    background-color: ${theme.colors['light-900']};
  `
)

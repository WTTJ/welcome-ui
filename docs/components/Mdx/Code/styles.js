import styled, { css } from 'styled-components'
import { LiveEditor as ReactLiveEditor, LiveError as ReactLiveError } from 'react-live'
import { Box } from '@welcome-ui/box'

export const LiveEditor = styled(Box)(
  ({ theme }) => css`
    position: relative;
    background-color: black;
    border: 1px solid ${theme.colors['dark-200']};
    border-radius: ${theme.space.md};
    overflow: hidden;
    padding: ${theme.space.md};
  `
)

export const LiveEditorContent = styled(ReactLiveEditor)(
  ({ isCopyable }) => css`
    ${isCopyable &&
    css`
      width: calc(100% - 3.5rem) !important;
    `}
    overflow-x: auto;

    textarea,
    pre {
      background-color: black !important;

      &:focus {
        outline: none;
      }
    }
  `
)

export const LiveError = styled(ReactLiveError)(
  ({ theme }) => css`
    background-color: ${theme.colors['danger-100']};
    border-color: ${theme.colors['danger-500']};
    border-width: ${theme.borderWidths.sm};
    border-style: solid;
    color: ${theme.colors['danger-500']};
    padding: ${theme.space.md};
    white-space: pre-wrap;
    border-radius: ${theme.space.md};
    font-size: ${theme.fontSizes.sm};
    line-height: ${theme.lineHeights.h4};
    margin: ${theme.space.sm} 0 ${theme.space.lg};
  `
)

export const ShowEditor = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors['nude-200']};
    padding: ${theme.space.sm} ${theme.space.lg};
    border-top: 1px solid ${theme.colors.border};
  `
)

export const CodeContent = styled.div`
  > * {
    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.space.md};
    }
  }
`

export const CodeContentRow = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: -${theme.space.md};
    margin-right: -${theme.space.md};
    flex-wrap: wrap;

    > * {
      margin-bottom: ${theme.space.md};
      margin-right: ${theme.space.md};
    }
  `
)

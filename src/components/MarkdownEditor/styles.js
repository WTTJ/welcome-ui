import styled, { css } from 'styled-components'
import SimpleMDE from 'react-simplemde-editor'

import { get } from '../../theme/helpers'
import { fieldTypeStyles } from '../../common/styles/form'

export const StyledMarkdownEditor = styled.div(
  props => css`
    position: relative;
    pointer-events: ${props.disabled && 'none'};

    .simple-md-editor-wrapper {
      ${fieldTypeStyles};
      padding: 0;
    }

    .editor-toolbar {
      border: 0 none;
      padding: ${get('gutter.xxs')} ${get('gutter.xs')};
      opacity: 1;
      background-color: ${get('colors.light.500', 100)};
      position: sticky;
      top: 0;
      z-index: 2;
      box-shadow: ${get('boxShadow.sm')};

      &:hover {
        opacity: 1;
      }

      &::before,
      &::after {
        content: none;
      }

      a.fa {
        height: ${get('gutter.mdx2')};
        width: ${get('gutter.mdx2')};
        line-height: ${get('gutter.mdx2')};
        text-align: center;
        margin: ${get('gutter.xxs')};
        border: 0 none;
        border-radius: ${get('radius.sm')};
        cursor: pointer;
        color: ${get('colors.nude.500')} !important;

        &.active,
        &:hover {
          color: ${get('colors.nude.500')} !important;
          background-color: ${get('colors.nude.500', 150)};
          border: 0 none;
        }

        &::before {
          line-height: inherit;
        }
      }

      i.separator {
        color: transparent;
        border-left: 0 none;
        border-right: 1px solid ${get('colors.nude.200', 150)};
      }
    }

    .editor-statusbar {
      display: none;
    }

    .CodeMirror {
      ${get('fields.default')};
      ${props.disabled && get('fields.disabled')};
      position: relative;
      height: calc(100% - 42px);
      line-height: 1.5;
      border: none;
      border-radius: 0;
      box-shadow: none;
      background-color: transparent;
      transition: border-color 0.2s;

      .CodeMirror-code .cm-comment {
        background: ${get('rgba.nude.300', 0.15)};
        display: inline-block;
        font-family: monospace;
      }

      .CodeMirror-selected {
        background: ${get('colors.primary.500')};
      }

      .CodeMirror-selectedtext,
      span::selection {
        background: none;
        color: inherit;
      }

      &.CodeMirror-focused {
        border-color: ${get('rgba.light.200', 0.5)};
      }

      .CodeMirror-scroll {
        overflow-x: hidden !important;
        margin-right: -7px;
        margin-bottom: 0;
        padding-bottom: 0;
      }

      .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word) {
        background-color: transparent;
      }
    }
  `
)

export const StyledSimpleMDE = styled(SimpleMDE)``

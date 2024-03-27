import styled, { css, th } from '@wttj/xstyled-styled-components'
import { LiveEditor as ReactLiveEditor, LiveError as ReactLiveError } from 'react-live'
import { Box } from '@welcome-ui/box'

export const LiveEditor = styled.divBox`
  position: relative;
  background-color: black;
  border: 1px solid ${th('colors.dark-200')};
  border-radius: md;
  overflow: hidden;
  padding: md;
`

export const LiveEditorContent = styled(ReactLiveEditor)(
  ({ isCopyable }) => css`
    ${isCopyable &&
    css`
      width: calc(100% - 3.5rem) !important;
    `}
    overflow-x: auto;

    .inserted-sign {
      color: sub-5 !important;
    }

    .deleted-sign {
      color: danger-300 !important;
    }

    textarea,
    pre {
      background-color: black !important;

      &:focus {
        outline: none;
      }
    }
  `
)

export const LiveError = styled(ReactLiveError)`
  background-color: danger-100;
  border-color: danger-500;
  border-width: sm;
  border-style: solid;
  color: danger-500;
  padding: md;
  white-space: pre-wrap;
  border-radius: md;
  font-size: sm;
  line-height: h4;
  margin: sm 0 lg;
`

export const ShowEditor = styled.divBox`
  background-color: nude-200;
  padding: sm lg;
  border-top: 1px solid ${th.color('border')};
`

export const CodeContent = styled.divBox`
  > * {
    &:not(:last-child) {
      margin-bottom: lg;
    }
  }
`

export const CodeContentRow = styled.divBox`
  display: flex;
  align-items: center;
  margin-bottom: -xs;
  margin-right: -xs;
  flex-wrap: wrap;

  > * {
    margin-bottom: xs;
    margin-right: xs;
  }
`

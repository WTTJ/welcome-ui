import styled, { css, th } from '@xstyled/styled-components'
import { LiveEditor as ReactLiveEditor, LiveError as ReactLiveError } from 'react-live'
import { Box } from '@welcome-ui/box'

export const LiveEditor = styled(Box)`
  position: relative;
  background-color: black;
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
      color: secondary-green !important;
    }

    .deleted-sign {
      color: danger-30 !important;
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
  background-color: danger-10;
  border-color: danger-50;
  border-width: sm;
  border-style: solid;
  color: danger-50;
  padding: md;
  white-space: pre-wrap;
  font-size: sm;
  line-height: h4;
  margin: sm 0 lg;
`

export const ShowEditor = styled.div`
  background-color: nude-30;
  padding: sm lg;
  border-top: 1px solid ${th.color('border')};
`

export const CodeContent = styled.div`
  > * {
    &:not(:last-child) {
      margin-bottom: lg;
    }
  }
`

export const CodeContentRow = styled.div`
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

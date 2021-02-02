import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { LiveEditor as ReactLiveEditor, LiveError as ReactLiveError } from 'react-live'
import { Card } from '@welcome-ui/card'

export const LiveEditor = styled.box`
  position: relative;
  background-color: ${th('docs.code.background')};
  border-radius: md;
  margin-bottom: md;
  overflow: hidden;
`

export const LiveEditorContent = styled(ReactLiveEditor)`
  width: calc(100% - 4rem) !important;

  textarea {
    background-color: ${th('docs.code.background')} !important;

    &:focus {
      outline: none;
    }
  }
`

export const LiveError = styled(ReactLiveError)`
  background-color: danger.100;
  border-color: danger.500;
  border-width: sm;
  border-style: solid;
  color: danger.500;
  padding: md;
  white-space: pre-wrap;
  border-radius: md;
  font-size: body3;
  line-height: h4;
  margin: xxs 0 lg;
`

export const LivePreview = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: visible;
  margin-bottom: md;
`

export const ShowEditor = styled.div`
  padding-top: sm;
  margin-top: xl;
  border-top: 1px solid ${th.color('light.800')};
`

export const CodeContent = styled.div`
  > * {
    &:not(:last-child) {
      margin-bottom: md;
    }
  }
`

export const CodeContentRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -md;
  margin-right: -md;
  flex-wrap: wrap;

  > * {
    margin-bottom: md;
    margin-right: md;
  }
`

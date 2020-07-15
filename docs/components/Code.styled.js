import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { LiveEditor as ReactLiveEditor, LiveError as ReactLiveError } from 'react-live'
import { Card } from '@welcome-ui/card'

export const LiveEditor = styled(ReactLiveEditor)`
  margin: xl 0;
  border-radius: md;

  textarea {
    background-color: ${th('docs.code.background')} !important;
  }
`

export const LiveError = styled(ReactLiveError)`
  background-color: danger.100;
  color: danger.500;
  padding: md;
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

  > * {
    margin-bottom: md;
    margin-right: md;
  }
`

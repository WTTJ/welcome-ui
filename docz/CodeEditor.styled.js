import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { LiveEditor as ReactLiveEditor, LiveError as ReactLiveError } from 'react-live'

export const LiveEditor = styled(ReactLiveEditor)`
  margin-top: md;
  line-height: h4;
  background-color: transparent !important;

  textarea {
    border-radius: md;
    transition: medium;
    border: 1px solid ${th.color('light.700')} !important;
    background-color: light.100 !important;

    &:focus {
      outline: none;
      border: 1px solid ${th.color('primary.500')} !important;
    }
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

export const LivePreview = styled.div`
  display: flex;
  flex-direction: column;
  padding: xl xl md;
  background-color: light.100;
  border: 1px solid ${th.color('light.700')};
  border-radius: md;
`

export const LivePreviewContent = styled.div(
  ({ wrapper }) => css`
    ${wrapper === true &&
      css`
        & > div {
          margin-bottom: -sm;

          & > * {
            margin-right: sm;
            margin-bottom: sm;
          }
        }
      `}
    ${wrapper !== false && `margin-bottom: xl;`}
  `
)

export const ShowEditor = styled.div`
  padding-top: sm;
  border-top: 1px solid ${th.color('light.700')};
`

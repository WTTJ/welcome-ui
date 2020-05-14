import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { LiveEditor as ReactLiveEditor, LiveError as ReactLiveError } from 'react-live'

import { Card } from '../packages/Card'
import { Inner } from '../packages/DropdownMenu/styles'

export const LiveEditor = styled(ReactLiveEditor)`
  margin-top: md;
  line-height: h4;
  background-color: transparent !important;

  textarea {
    border-radius: md;
    transition: medium;
    border: 1px solid ${th.color('light.200')} !important;
    background-color: light.900 !important;

    &:focus {
      outline: none !important; /* important for firefox */
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

export const LivePreview = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: visible;
`

export const LivePreviewContent = styled.div(
  ({ wrapper }) => css`
    ${wrapper === true &&
      css`
        & > div {
          margin-bottom: -sm;

          & > *:not(${Inner}) {
            margin-right: sm;
            margin-bottom: sm;
          }
        }
      `}
    ${wrapper !== false &&
      css`
        padding-bottom: xl;
      `}
  `
)

export const ShowEditor = styled.div`
  padding-top: sm;
  border-top: 1px solid ${th.color('nude.200')};
`

import styled from '@xstyled/styled-components'
import { cardStyles } from '@welcome-ui/utils'

export const Pre = styled.pre`
  ${cardStyles};
  padding: lg;
  font-size: body3;
  line-height: h4;

  > div {
    width: 100%;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }
`

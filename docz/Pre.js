import styled from '@xstyled/styled-components'

export const Pre = styled.pre`
  background-color: light.100 !important;
  padding: lg;
  border-radius: md;
  font-size: body3;
  line-height: h4;
  border-width: sm;
  border-style: solid;
  border-color: light.700;

  > div {
    width: 100%;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }
`

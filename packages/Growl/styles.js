import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { system } from '@welcome-ui/system'
import { getVariantColor } from '@welcome-ui/utils'

export const Growl = styled.div`
  position: relative;
  width: 70%;
  max-width: 25rem;
  padding: lg;
  ${th('growls.default')};
  ${system};
`

export const Title = styled.div(
  ({ variant }) => css`
    display: flex;
    align-items: center;
    color: ${getVariantColor(variant)};
    padding-bottom: md;
    ${th('growls.title')};

    & > *:first-child {
      flex-shrink: 0;
      margin-right: sm;
    }
  `
)

export const Close = styled.div`
  float: right;
  margin-left: sm;
`

export const CloseContent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.87rem;
  height: 1.87rem;
  ${th('growls.close')};
  border: none;
  padding: 0;
  transition: background ${th.transition('medium')};
  cursor: pointer;
`

export const Action = styled.div`
  padding-top: md;
`

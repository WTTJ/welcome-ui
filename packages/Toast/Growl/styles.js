import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { system } from '@welcome-ui/system'
import { getVariantColor } from '@welcome-ui/utils'

export const Growl = styled.div`
  position: relative;
  max-width: 25rem;
  padding: lg;
  ${th('toasts.growls.default')};
  ${system};
`

export const Title = styled.div(
  ({ variant }) => css`
    display: flex;
    align-items: center;
    color: ${getVariantColor(variant)};
    padding-bottom: md;
    ${th('toasts.growls.title')};

    & > *:first-child {
      flex-shrink: 0;
      margin-right: sm;
    }
  `
)

export const Action = styled.div`
  padding-top: md;
`

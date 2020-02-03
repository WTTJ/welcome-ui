import styled, { css, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'

export const Toast = styled(Box)(
  ({ isBottom }) => css`
    ${th('toasts.default')}
    ${isBottom ? th('toasts.bottom') : th('toasts.top')}
  `
)

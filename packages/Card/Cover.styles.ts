import styled, { css } from 'styled-components'
import { Shape } from '@welcome-ui/shape'

export const Cover = styled(Shape)(
  ({ theme }) => css`
    ${theme.cards.cover};
  `
)

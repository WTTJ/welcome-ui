import styled, { css } from 'styled-components'
import { Text } from '@welcome-ui/text'
import { system } from '@welcome-ui/system'

export const Link = styled.a(
  ({ theme }) => css`
    opacity: 0;
    color: ${theme.colors['primary-600']};
    text-decoration: none;
    transition: ${theme.transitions.medium};
  `
)
export const Title = styled(Text)`
  ${system};

  &:hover {
    ${Link} {
      opacity: 1;
    }
  }
`

import styled from 'styled-components'
import { Shape } from '@welcome-ui/shape'
import { Text as TextWUI } from '@welcome-ui/text'

export const Avatar = styled(Shape)`
  flex-shrink: 0;
`

export const Text = styled(TextWUI)`
  ${({ theme }) => theme.avatars.text};
`

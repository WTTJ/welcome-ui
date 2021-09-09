import styled from '@xstyled/styled-components'
import { Shape } from '@welcome-ui/shape'
import { Text as TextWUI } from '@welcome-ui/text'
import { th } from '@xstyled/system'

export const Avatar = styled(Shape)`
  flex-shrink: 0;
`

export const Text = styled(TextWUI)`
  ${th('avatars.text')};
`

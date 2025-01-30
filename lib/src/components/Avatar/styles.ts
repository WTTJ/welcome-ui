import styled, { th } from '@xstyled/styled-components'

import { Shape } from '@/Shape'
import { Text as TextWUI } from '@/Text'

export const Avatar = styled(Shape)`
  flex-shrink: 0;
`

export const Text = styled(TextWUI)`
  ${th('avatars.text')};
`

import styled, { th } from '@xstyled/styled-components'

import { Shape } from '@old/Shape'
import { Text as TextWUI } from '@old/Text'

export const Avatar = styled(Shape)`
  flex-shrink: 0;
`

export const Text = styled(TextWUI)`
  ${th('avatars.text')};
`

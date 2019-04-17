import styled from 'styled-components'

// atoms
import Label from '../../atoms/Label/styles'

import themeHelpers from '../../theme/helpers'

const { gutter } = themeHelpers

export const Field = styled.div`
  ${Label} {
    margin-bottom: ${gutter('xxs')};
  }
`

export default Field

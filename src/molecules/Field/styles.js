import styled from 'styled-components'

// molecules
import Label from '../../molecules/Label/styles'

import themeHelpers from '../../theme/helpers'

const { gutter } = themeHelpers

export const Field = styled.div`
  ${Label} {
    margin-bottom: ${gutter('xxs')};
  }
`

export default Field

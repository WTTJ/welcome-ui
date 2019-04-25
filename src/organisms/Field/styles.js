import styled from 'styled-components'

// molecules
import Label from '../../molecules/Label/styles'

// atoms
import Toggle from '../../atoms/Toggle/styles'

import themeHelpers from '../../theme/helpers'

const { gutter } = themeHelpers

export const Field = styled.div`
  ${Label} {
    margin-right: ${props => (props.direction === 'row' ? gutter('xxs') : null)};
    margin-bottom: ${props => (props.direction === 'column' ? gutter('xxs') : null)};
  }
  ${Toggle} {
    margin-right: ${gutter('xxs')};
  }
`

export default Field

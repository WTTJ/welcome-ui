import styled from 'styled-components'

// molecules
import Label from '../../molecules/Label/styles'

// atoms
import Toggle from '../../atoms/Toggle/styles'

import { get } from '../../theme/helpers'

export const Field = styled.div`
  ${Label} {
    margin-right: ${props => (props.direction === 'row' ? get('gutter', 'xxs') : null)};
    margin-bottom: ${props => (props.direction === 'column' ? get('gutter', 'xxs') : null)};
  }
  ${Toggle} {
    margin-right: ${get('gutter', 'xxs')};
  }
`

export default Field

import styled, { css } from 'styled-components'

import Label from '../Label/styles'
import Toggle from '../Toggle/styles'
import InputCheckbox from '../InputCheckbox/styles'
import { radioTabStyles } from '../RadioTab/styles'

import { get } from '../../theme/helpers'

export const Field = styled.div(
  props => css`
    ${Label} {
      margin-right: ${props.direction === 'row' ? get('gutter', 'xxs') : null};
      margin-bottom: ${props.direction === 'column' ? get('gutter', 'xxs') : null};
    }
    ${Toggle}, ${InputCheckbox} {
      margin-right: ${get('gutter', 'xxs')};
    }
    ${props.fieldType === 'radioTab' && radioTabStyles(props)}
  `
)

export default Field
